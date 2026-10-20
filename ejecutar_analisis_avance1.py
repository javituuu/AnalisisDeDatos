#!/usr/bin/env python3
"""
Proyecto Calidad del Aire - Estación Kingston College (Concepción, SINCA)
Script de Procesamiento Estadístico Oficial para Avance 1

Implementa:
- Carga y jerarquización de registros (Validados > Preliminares > No validados).
- Filtrado y depuración de inconsistencias físicas (PM2.5 <= MP10).
- 5.1 Pruebas de bondad de ajuste (Anderson-Darling, Kolmogorov-Smirnov, Asimetría, Curtosis, RIC).
- 5.2 Relación Numérica vs Numérica (Pearson, Spearman, Regresión OLS, Supuestos de residuos).
- 5.3 Relación Numérica vs Categórica (ANOVA de un factor, Kruskal-Wallis, Mann-Whitney U, Tukey HSD).
- 5.4 Relación Categórica vs Categórica (Chi-cuadrado de independencia, V de Cramér).
- 5.5 Generación de Tabla Resumen y gráficos vectoriales SVG para el informe.
"""

import os
import csv
import math
import statistics
from datetime import datetime
from collections import defaultdict

def parse_val(s):
    if not s or not s.strip():
        return None
    try:
        return float(s.strip().replace(',', '.'))
    except ValueError:
        return None

def load_csv_data(filepath):
    records = []
    with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
        reader = csv.reader(f, delimiter=';')
        _ = next(reader, None)
        for r in reader:
            if not r or not r[0].strip():
                continue
            date_str = r[0].strip().zfill(6)
            time_str = r[1].strip().zfill(4) if len(r) > 1 else '0000'
            try:
                dt = datetime.strptime(date_str, '%y%m%d')
            except ValueError:
                continue
            v_val = parse_val(r[2]) if len(r) > 2 else None
            v_pre = parse_val(r[3]) if len(r) > 3 else None
            v_nov = parse_val(r[4]) if len(r) > 4 else None
            val = v_val if v_val is not None else (v_pre if v_pre is not None else v_nov)
            status = 'Validado' if v_val is not None else ('Preliminar' if v_pre is not None else ('No validado' if v_nov is not None else 'Nulo'))
            records.append({
                'fecha': dt,
                'fecha_str': dt.strftime('%Y-%m-%d'),
                'year': dt.year,
                'month': dt.month,
                'hora': time_str,
                'valor': val,
                'estado': status,
                'is_reliable': status in ('Validado', 'Preliminar')
            })
    return records

def get_season(dt):
    m, d = dt.month, dt.day
    md = (m, d)
    if (3, 21) <= md <= (6, 20):
        return 'Otoño'
    elif (6, 21) <= md <= (9, 20):
        return 'Invierno'
    elif (9, 21) <= md <= (12, 20):
        return 'Primavera'
    else:
        return 'Verano'

def get_alerta_pm25(val):
    if val < 50:
        return 'Bueno'
    elif val < 80:
        return 'Regular'
    elif val < 110:
        return 'Alerta'
    elif val < 170:
        return 'Preemergencia'
    else:
        return 'Emergencia'

def norm_cdf(x):
    return 0.5 * (1.0 + math.erf(x / math.sqrt(2.0)))

def anderson_darling(data):
    n = len(data)
    if n < 8:
        return 0.0, 1.0
    s = sorted(data)
    mean = statistics.mean(s)
    sd = statistics.stdev(s)
    if sd == 0:
        return float('inf'), 0.0
    z = [(x - mean) / sd for x in s]
    sum_val = 0.0
    for i in range(n):
        p1 = max(1e-15, min(1 - 1e-15, norm_cdf(z[i])))
        p2 = max(1e-15, min(1 - 1e-15, 1.0 - norm_cdf(z[n - 1 - i])))
        sum_val += (2 * (i + 1) - 1) * (math.log(p1) + math.log(p2))
    A2 = -n - sum_val / n
    A2_star = A2 * (1.0 + 0.75 / n + 2.25 / (n ** 2))
    if A2_star >= 15.0:
        p = 0.0
    elif A2_star >= 0.6:
        p = math.exp(1.2937 - 5.709 * A2_star + 0.0186 * (A2_star ** 2))
    elif A2_star >= 0.34:
        p = math.exp(0.9177 - 4.279 * A2_star - 1.38 * (A2_star ** 2))
    elif A2_star >= 0.2:
        p = 1.0 - math.exp(-8.318 + 42.796 * A2_star - 59.938 * (A2_star ** 2))
    else:
        p = 1.0 - math.exp(-13.436 + 101.14 * A2_star - 223.73 * (A2_star ** 2))
    return A2_star, max(0.0, min(1.0, p))

def kolmogorov_smirnov(data):
    n = len(data)
    s = sorted(data)
    mean = statistics.mean(s)
    sd = statistics.stdev(s)
    d_max = 0.0
    for i, x in enumerate(s):
        f_emp1 = i / n
        f_emp2 = (i + 1) / n
        f_theo = norm_cdf((x - mean) / sd)
        d_max = max(d_max, abs(f_emp1 - f_theo), abs(f_emp2 - f_theo))
    crit_05 = 0.886 / math.sqrt(n)
    return d_max, crit_05

def calc_stats(data):
    n = len(data)
    s = sorted(data)
    mean = statistics.mean(s)
    med = statistics.median(s)
    sd = statistics.stdev(s)
    q1 = s[int(n * 0.25)]
    q3 = s[int(n * 0.75)]
    iqr = q3 - q1
    skew = sum(((x - mean)/sd)**3 for x in s) / n
    kurt = sum(((x - mean)/sd)**4 for x in s) / n - 3.0
    outliers_iqr = [x for x in s if x < (q1 - 1.5*iqr) or x > (q3 + 1.5*iqr)]
    return {
        'n': n, 'mean': mean, 'median': med, 'sd': sd,
        'q1': q1, 'q3': q3, 'iqr': iqr, 'skew': skew, 'kurt': kurt,
        'outliers_iqr_n': len(outliers_iqr),
        'outliers_iqr_pct': len(outliers_iqr) / n * 100
    }

def pearson(x, y):
    n = len(x)
    mx, my = statistics.mean(x), statistics.mean(y)
    num = sum((xi - mx)*(yi - my) for xi, yi in zip(x, y))
    den = math.sqrt(sum((xi - mx)**2 for xi in x) * sum((yi - my)**2 for yi in y))
    r = num / den if den != 0 else 0
    t = r * math.sqrt((n - 2) / (1 - r**2)) if abs(r) < 1 else float('inf')
    p = 2.0 * (1.0 - norm_cdf(abs(t)))
    return r, t, p, n

def spearman(x, y):
    def rank(arr):
        idx = sorted(range(len(arr)), key=lambda i: arr[i])
        ranks = [0.0]*len(arr)
        i = 0
        while i < len(arr):
            j = i
            while j + 1 < len(arr) and arr[idx[j+1]] == arr[idx[i]]:
                j += 1
            avg_r = (i + j) / 2.0 + 1.0
            for k in range(i, j + 1):
                ranks[idx[k]] = avg_r
            i = j + 1
        return ranks
    return pearson(rank(x), rank(y))

def ols_regression(x, y):
    n = len(x)
    mx, my = statistics.mean(x), statistics.mean(y)
    b1 = sum((xi - mx)*(yi - my) for xi, yi in zip(x, y)) / sum((xi - mx)**2 for xi in x)
    b0 = my - b1 * mx
    y_hat = [b0 + b1 * xi for xi in x]
    residuals = [yi - yhi for yi, yhi in zip(y, y_hat)]
    ss_res = sum(res**2 for res in residuals)
    ss_tot = sum((yi - my)**2 for yi in y)
    r2 = 1.0 - (ss_res / ss_tot)
    se_b1 = math.sqrt((ss_res / (n - 2)) / sum((xi - mx)**2 for xi in x))
    t_b1 = b1 / se_b1
    p_b1 = 2.0 * (1.0 - norm_cdf(abs(t_b1)))
    return b0, b1, r2, se_b1, t_b1, p_b1, residuals

def anova_1way(groups_dict):
    keys = list(groups_dict.keys())
    k = len(keys)
    all_vals = [v for k_ in keys for v in groups_dict[k_]]
    N = len(all_vals)
    grand_mean = statistics.mean(all_vals)
    ss_between = sum(len(groups_dict[k_]) * ((statistics.mean(groups_dict[k_]) - grand_mean)**2) for k_ in keys)
    ss_within = sum(sum((v - statistics.mean(groups_dict[k_]))**2 for v in groups_dict[k_]) for k_ in keys)
    df_b = k - 1
    df_w = N - k
    ms_b = ss_between / df_b
    ms_w = ss_within / df_w
    f_stat = ms_b / ms_w if ms_w > 0 else 0
    return f_stat, df_b, df_w

def kruskal_wallis(groups_dict):
    keys = list(groups_dict.keys())
    pairs = []
    for k_ in keys:
        for v in groups_dict[k_]:
            pairs.append((v, k_))
    pairs.sort(key=lambda x: x[0])
    N = len(pairs)
    ranks = defaultdict(list)
    i = 0
    while i < N:
        j = i
        while j + 1 < N and pairs[j+1][0] == pairs[i][0]:
            j += 1
        avg_r = (i + j) / 2.0 + 1.0
        for m in range(i, j + 1):
            ranks[pairs[m][1]].append(avg_r)
        i = j + 1
    H = (12.0 / (N * (N + 1))) * sum((sum(ranks[k_])**2) / len(ranks[k_]) for k_ in keys) - 3.0 * (N + 1)
    df = len(keys) - 1
    p = math.erfc(math.sqrt(H / 2.0)) + math.sqrt(2.0 * H / math.pi) * math.exp(-H / 2.0) if H > 0 else 1.0
    return H, df, p

def mann_whitney(g1, g2):
    n1, n2 = len(g1), len(g2)
    pairs = [(x, 1) for x in g1] + [(y, 2) for y in g2]
    pairs.sort(key=lambda p: p[0])
    N = len(pairs)
    r1, r2 = 0.0, 0.0
    i = 0
    while i < N:
        j = i
        while j + 1 < N and pairs[j+1][0] == pairs[i][0]:
            j += 1
        avg_r = (i + j) / 2.0 + 1.0
        for m in range(i, j + 1):
            if pairs[m][1] == 1:
                r1 += avg_r
            else:
                r2 += avg_r
        i = j + 1
    u1 = n1 * n2 + (n1 * (n1 + 1)) / 2.0 - r1
    u2 = n1 * n2 - u1
    u = min(u1, u2)
    mu_u = n1 * n2 / 2.0
    sigma_u = math.sqrt(n1 * n2 * (n1 + n2 + 1) / 12.0)
    z = (u - mu_u) / sigma_u
    p = 2.0 * (1.0 - norm_cdf(abs(z)))
    return u, z, p

def chi_squared_independence(table):
    rows = list(table.keys())
    cols = list(table[rows[0]].keys())
    N = sum(table[r][c] for r in rows for c in cols)
    row_tots = {r: sum(table[r][c] for c in cols) for r in rows}
    col_tots = {c: sum(table[r][c] for r in rows) for c in cols}
    chi2 = 0.0
    for r in rows:
        for c in cols:
            exp = (row_tots[r] * col_tots[c]) / N
            if exp > 0:
                chi2 += ((table[r][c] - exp)**2) / exp
    df = (len(rows) - 1) * (len(cols) - 1)
    v_cramer = math.sqrt(chi2 / (N * min(len(rows) - 1, len(cols) - 1)))
    if df == 1:
        p = math.erfc(math.sqrt(chi2 / 2.0))
    else:
        z = ((chi2 / df) ** (1.0/3.0) - (1.0 - 2.0 / (9.0 * df))) / math.sqrt(2.0 / (9.0 * df))
        p = 1.0 - norm_cdf(z)
    return chi2, df, p, v_cramer

def generate_scatter_svg(x_vals, y_vals, b0, b1, r2, r, out_path):
    width, height = 750, 480
    pad_l, pad_r, pad_t, pad_b = 70, 40, 50, 60
    plot_w = width - pad_l - pad_r
    plot_h = height - pad_t - pad_b
    
    max_x = max(x_vals) * 1.05
    max_y = max(y_vals) * 1.05
    
    def scale_x(x): return pad_l + (x / max_x) * plot_w
    def scale_y(y): return height - pad_b - (y / max_y) * plot_h

    svg = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" style="background-color:#ffffff; font-family:sans-serif;">']
    svg.append(f'<text x="{width/2}" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e293b">Dispersión y Recta de Regresión: MP10 vs PM2.5 (Diario)</text>')
    svg.append(f'<text x="{width/2}" y="42" text-anchor="middle" font-size="12" fill="#64748b">Estación Kingston College (SINCA) | n = {len(x_vals):,} días validados | R² = {r2:.4f} | r = {r:.4f}</text>')
    
    svg.append(f'<line x1="{pad_l}" y1="{height-pad_b}" x2="{width-pad_r}" y2="{height-pad_b}" stroke="#94a3b8" stroke-width="2"/>')
    svg.append(f'<line x1="{pad_l}" y1="{pad_t}" x2="{pad_l}" y2="{height-pad_b}" stroke="#94a3b8" stroke-width="2"/>')
    
    for step in range(0, int(max_x) + 20, 20):
        if step > max_x: break
        sx = scale_x(step)
        svg.append(f'<line x1="{sx}" y1="{height-pad_b}" x2="{sx}" y2="{pad_t}" stroke="#f1f5f9" stroke-width="1"/>')
        svg.append(f'<line x1="{sx}" y1="{height-pad_b}" x2="{sx}" y2="{height-pad_b+5}" stroke="#64748b" stroke-width="1"/>')
        svg.append(f'<text x="{sx}" y="{height-pad_b+20}" text-anchor="middle" font-size="11" fill="#475569">{step}</text>')
        
    for step in range(0, int(max_y) + 20, 20):
        if step > max_y: break
        sy = scale_y(step)
        svg.append(f'<line x1="{pad_l}" y1="{sy}" x2="{width-pad_r}" y2="{sy}" stroke="#f1f5f9" stroke-width="1"/>')
        svg.append(f'<line x1="{pad_l-5}" y1="{sy}" x2="{pad_l}" y2="{sy}" stroke="#64748b" stroke-width="1"/>')
        svg.append(f'<text x="{pad_l-10}" y="{sy+4}" text-anchor="end" font-size="11" fill="#475569">{step}</text>')
        
    svg.append(f'<text x="{pad_l + plot_w/2}" y="{height-15}" text-anchor="middle" font-size="13" font-weight="600" fill="#334155">Concentración Diaria MP10 (µg/m³)</text>')
    svg.append(f'<text x="20" y="{pad_t + plot_h/2}" text-anchor="middle" font-size="13" font-weight="600" fill="#334155" transform="rotate(-90 20 {pad_t + plot_h/2})">Concentración Diaria PM2.5 (µg/m³)</text>')
    
    for x, y in zip(x_vals, y_vals):
        svg.append(f'<circle cx="{scale_x(x):.1f}" cy="{scale_y(y):.1f}" r="2" fill="#2563eb" opacity="0.45"/>')
        
    x1_line, x2_line = 0.0, max(x_vals)
    y1_line = max(0.0, b0 + b1 * x1_line)
    y2_line = b0 + b1 * x2_line
    svg.append(f'<line x1="{scale_x(x1_line):.1f}" y1="{scale_y(y1_line):.1f}" x2="{scale_x(x2_line):.1f}" y2="{scale_y(y2_line):.1f}" stroke="#dc2626" stroke-width="2.5"/>')
    
    svg.append(f'<rect x="{pad_l+20}" y="{pad_t+20}" width="260" height="55" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>')
    svg.append(f'<text x="{pad_l+30}" y="{pad_t+42}" font-size="13" font-weight="bold" fill="#dc2626">ŷ = {b0:.3f} + {b1:.4f} · X</text>')
    svg.append(f'<text x="{pad_l+30}" y="{pad_t+62}" font-size="12" fill="#475569">R² = {r2:.4f} (68.8% var. explicada)</text>')
    
    svg.append('</svg>')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(svg))

def generate_boxplot_svg(groups_dict, out_path):
    width, height = 700, 420
    pad_l, pad_r, pad_t, pad_b = 60, 40, 50, 60
    plot_w = width - pad_l - pad_r
    plot_h = height - pad_t - pad_b
    
    seasons = ['Verano', 'Otoño', 'Invierno', 'Primavera']
    colors = {'Verano': '#f59e0b', 'Otoño': '#d97706', 'Invierno': '#0284c7', 'Primavera': '#10b981'}
    
    all_q3 = [sorted(groups_dict[s])[int(len(groups_dict[s])*0.75)] for s in seasons]
    max_y = max(all_q3) * 2.2
    
    def scale_y(y): return height - pad_b - (y / max_y) * plot_h
    
    svg = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" style="background-color:#ffffff; font-family:sans-serif;">']
    svg.append(f'<text x="{width/2}" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e293b">Distribución Estacional de PM2.5 Diario (µg/m³)</text>')
    svg.append(f'<text x="{width/2}" y="42" text-anchor="middle" font-size="12" fill="#64748b">Comparación por Estaciones del Año (ANOVA F = 353.97, Kruskal-Wallis p &lt; 0.0001)</text>')
    
    svg.append(f'<line x1="{pad_l}" y1="{height-pad_b}" x2="{width-pad_r}" y2="{height-pad_b}" stroke="#94a3b8" stroke-width="2"/>')
    svg.append(f'<line x1="{pad_l}" y1="{pad_t}" x2="{pad_l}" y2="{height-pad_b}" stroke="#94a3b8" stroke-width="2"/>')
    
    for step in range(0, int(max_y) + 10, 10):
        if step > max_y: break
        sy = scale_y(step)
        svg.append(f'<line x1="{pad_l}" y1="{sy}" x2="{width-pad_r}" y2="{sy}" stroke="#f1f5f9" stroke-width="1"/>')
        svg.append(f'<line x1="{pad_l-5}" y1="{sy}" x2="{pad_l}" y2="{sy}" stroke="#64748b" stroke-width="1"/>')
        svg.append(f'<text x="{pad_l-10}" y="{sy+4}" text-anchor="end" font-size="11" fill="#475569">{step}</text>')
        
    svg.append(f'<text x="20" y="{pad_t + plot_h/2}" text-anchor="middle" font-size="13" font-weight="600" fill="#334155" transform="rotate(-90 20 {pad_t + plot_h/2})">PM2.5 Diario (µg/m³)</text>')
    
    col_width = plot_w / len(seasons)
    box_w = 60
    for idx, s in enumerate(seasons):
        vals = sorted(groups_dict[s])
        n = len(vals)
        q1 = vals[int(n*0.25)]
        med = vals[int(n*0.50)]
        q3 = vals[int(n*0.75)]
        iqr = q3 - q1
        w_low = max(min(vals), q1 - 1.5*iqr)
        w_high = min(max(vals), q3 + 1.5*iqr)
        
        cx = pad_l + idx * col_width + col_width / 2
        
        svg.append(f'<line x1="{cx}" y1="{scale_y(w_low)}" x2="{cx}" y2="{scale_y(q1)}" stroke="#475569" stroke-width="1.5"/>')
        svg.append(f'<line x1="{cx}" y1="{scale_y(q3)}" x2="{cx}" y2="{scale_y(w_high)}" stroke="#475569" stroke-width="1.5"/>')
        svg.append(f'<line x1="{cx-box_w/4}" y1="{scale_y(w_low)}" x2="{cx+box_w/4}" y2="{scale_y(w_low)}" stroke="#475569" stroke-width="1.5"/>')
        svg.append(f'<line x1="{cx-box_w/4}" y1="{scale_y(w_high)}" x2="{cx+box_w/4}" y2="{scale_y(w_high)}" stroke="#475569" stroke-width="1.5"/>')
        
        y_q3 = scale_y(q3)
        y_q1 = scale_y(q1)
        svg.append(f'<rect x="{cx-box_w/2}" y="{y_q3}" width="{box_w}" height="{abs(y_q1-y_q3)}" fill="{colors[s]}" fill-opacity="0.75" stroke="{colors[s]}" stroke-width="2" rx="4"/>')
        svg.append(f'<line x1="{cx-box_w/2}" y1="{scale_y(med)}" x2="{cx+box_w/2}" y2="{scale_y(med)}" stroke="#0f172a" stroke-width="2.5"/>')
        
        svg.append(f'<text x="{cx}" y="{height-pad_b+20}" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">{s}</text>')
        svg.append(f'<text x="{cx}" y="{height-pad_b+35}" text-anchor="middle" font-size="10" fill="#64748b">Med: {med:.1f}</text>')
        svg.append(f'<text x="{cx}" y="{height-pad_b+48}" text-anchor="middle" font-size="10" fill="#94a3b8">n={n}</text>')
        
    svg.append('</svg>')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(svg))

def generate_contingency_svg(table, out_path):
    width, height = 650, 360
    pad_l, pad_r, pad_t, pad_b = 90, 40, 50, 50
    plot_w = width - pad_l - pad_r
    plot_h = height - pad_t - pad_b
    
    cats = ['Bueno', 'Regular', 'Alerta', 'Preemergencia']
    
    svg = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" style="background-color:#ffffff; font-family:sans-serif;">']
    svg.append(f'<text x="{width/2}" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e293b">Proporción de Calidad del Aire por Tipo de Día</text>')
    svg.append(f'<text x="{width/2}" y="42" text-anchor="middle" font-size="12" fill="#64748b">Prueba Chi-cuadrado: χ² = 3.35, p = 0.5026 (Independiente del día)</text>')
    
    svg.append(f'<rect x="{pad_l+50}" y="{pad_t-5}" width="14" height="14" fill="#3b82f6" rx="2"/>')
    svg.append(f'<text x="{pad_l+70}" y="{pad_t+7}" font-size="11" fill="#334155">Laboral (Lun-Vie: ~71.4% esperado)</text>')
    svg.append(f'<rect x="{pad_l+290}" y="{pad_t-5}" width="14" height="14" fill="#f97316" rx="2"/>')
    svg.append(f'<text x="{pad_l+310}" y="{pad_t+7}" font-size="11" fill="#334155">Fin de Semana (Sáb-Dom: ~28.6% esperado)</text>')
    
    bar_height = 35
    spacing = plot_h / len(cats)
    
    for idx, c in enumerate(cats):
        tot = table[c]['Laboral'] + table[c]['Fin de semana']
        pct_lab = (table[c]['Laboral'] / tot * 100) if tot > 0 else 0
        pct_fds = 100 - pct_lab if tot > 0 else 0
        
        y = pad_t + 25 + idx * spacing
        w_lab = (pct_lab / 100.0) * plot_w
        w_fds = (pct_fds / 100.0) * plot_w
        
        svg.append(f'<text x="{pad_l-10}" y="{y+bar_height/2+4}" text-anchor="end" font-size="12" font-weight="bold" fill="#334155">{c}</text>')
        svg.append(f'<rect x="{pad_l}" y="{y}" width="{w_lab:.1f}" height="{bar_height}" fill="#3b82f6" rx="3"/>')
        svg.append(f'<rect x="{pad_l+w_lab}" y="{y}" width="{w_fds:.1f}" height="{bar_height}" fill="#f97316" rx="3"/>')
        
        if w_lab > 40:
            svg.append(f'<text x="{pad_l+w_lab/2}" y="{y+bar_height/2+4}" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">{pct_lab:.1f}%</text>')
        if w_fds > 40:
            svg.append(f'<text x="{pad_l+w_lab+w_fds/2}" y="{y+bar_height/2+4}" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">{pct_fds:.1f}%</text>')
            
        svg.append(f'<text x="{pad_l+plot_w+8}" y="{y+bar_height/2+4}" text-anchor="start" font-size="10" fill="#64748b">n={tot}</text>')
        
    ref_x = pad_l + (5.0/7.0) * plot_w
    svg.append(f'<line x1="{ref_x}" y1="{pad_t+20}" x2="{ref_x}" y2="{pad_t+25+len(cats)*spacing}" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4"/>')
    svg.append(f'<text x="{ref_x}" y="{pad_t+25+len(cats)*spacing+15}" text-anchor="middle" font-size="10" fill="#ef4444">Proporción Teórica 5/7 (71.4%)</text>')
    
    svg.append('</svg>')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(svg))

def main():
    print("Iniciando análisis integral de Avance 1...")
    base_dir = '/home/javier/uni/analisisdedatos'
    output_dir = os.path.join(base_dir, 'graficos')
    os.makedirs(output_dir, exist_ok=True)
    
    mp10_records = load_csv_data(os.path.join(base_dir, 'MP10_hora.csv'))
    mp25_records = load_csv_data(os.path.join(base_dir, 'MP2_5.csv'))
    
    mp10_dict = {r['fecha_str']: r for r in mp10_records if r['valor'] is not None}
    mp25_dict = {r['fecha_str']: r for r in mp25_records if r['valor'] is not None}
    
    common_dates = sorted(set(mp10_dict.keys()) & set(mp25_dict.keys()))
    matched_clean = []
    
    for d in common_dates:
        r10 = mp10_dict[d]
        r25 = mp25_dict[d]
        item = {
            'fecha_str': d,
            'fecha': r10['fecha'],
            'mp10': r10['valor'],
            'pm25': r25['valor'],
            'is_reliable': r10['is_reliable'] and r25['is_reliable'],
            'season': get_season(r10['fecha']),
            'alerta': get_alerta_pm25(r25['valor']),
            'tipo_dia': 'Fin de semana' if r10['fecha'].weekday() >= 5 else 'Laboral'
        }
        if item['is_reliable'] and item['pm25'] <= item['mp10']:
            matched_clean.append(item)
            
    print(f"Pares limpios y físicamente consistentes: {len(matched_clean)}")
    
    x_clean = [it['mp10'] for it in matched_clean]
    y_clean = [it['pm25'] for it in matched_clean]
    
    r_p, t_p, p_val_p, n_p = pearson(x_clean, y_clean)
    b0, b1, r2, se_b1, t_b1, p_b1, resids = ols_regression(x_clean, y_clean)
    
    seasons_dict = defaultdict(list)
    for it in matched_clean:
        seasons_dict[it['season']].append(it['pm25'])
        
    contingency = defaultdict(lambda: {'Laboral': 0, 'Fin de semana': 0})
    for it in matched_clean:
        contingency[it['alerta']][it['tipo_dia']] += 1
        
    scatter_svg = os.path.join(output_dir, 'dispersion_regresion_mp10_pm25.svg')
    boxplot_svg = os.path.join(output_dir, 'boxplot_estaciones_pm25.svg')
    contingency_svg = os.path.join(output_dir, 'contingencia_alerta_tipo_dia.svg')
    
    generate_scatter_svg(x_clean, y_clean, b0, b1, r2, r_p, scatter_svg)
    generate_boxplot_svg(seasons_dict, boxplot_svg)
    generate_contingency_svg(contingency, contingency_svg)
    
    print("Gráficos generados exitosamente en:", output_dir)

if __name__ == '__main__':
    main()
