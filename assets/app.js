/* ==========================================================================
   LÓGICA INTERACTIVA Y MOTOR ESTADÍSTICO — ESTACIÓN KINGSTON COLLEGE (SINCA)
   Datos oficiales procesados: 2009–2026 (N = 893,398 brutos | n = 3,312 días)
   ========================================================================== */

(function () {
  'use strict';

  const DATA = window.KINGSTON_DATA || { yearly: [], monthly: [], scatter: [] };

  /* ------------------------------------------------------------------------
     1. DATOS DE REGÍMENES ATMOSFÉRICOS (CONMUTADOR MAESTRO)
     ------------------------------------------------------------------------ */
  const REGIMES = {
    global: {
      id: 'global',
      name: 'Serie Histórica Global (2009–2026)',
      subtitle: '17.2 años continuos · Muestra depurada y pareada bajo protocolo SMA (2024)',
      badgeText: 'n = 3,312 días válidos',
      badgeClass: 'badge-synoptic',
      hmixMeters: 380,
      inversionLabel: 'Capa de Mezcla Media Anual (H_mix ~ 380 m)',
      plumeOpacity: 0.62,
      inversionY: 108,
      basinCaption: 'Balance anual entre ventilación costera estival (Oct–Mar) y atrapamiento sinóptico invernal por quema residencial de biomasa (Abr–Sep).',
      metrics: [
        { param: 'PM<sub>2.5</sub> Diario (Muestra Cert. 2)', n: '3,312', meanSd: '14.19 &plusmn; 10.83 µg/m³', medIqr: 'Med: 11.00 (RIC: 12.00)', testStat: 'KS D = 0.1644 | AD A²* = 151.16', decision: 'Log-Normal (&gamma;<sub>1</sub> = +2.05)' },
        { param: 'PM<sub>2.5</sub> Serie Histórica (Tabla 4)', n: '3,312', meanSd: '20.13 &plusmn; 17.71 µg/m³', medIqr: 'Med: 15.00 (RIC: 16.40)', testStat: 'Shapiro-Wilk W = 0.812 (p &lt; 0.0001)', decision: 'Cola derecha (&gamma;<sub>2</sub> = 6.82)' },
        { param: 'MP<sub>10</sub> Pareado Físicamente', n: '3,280', meanSd: '28.91 &plusmn; 15.83 µg/m³', medIqr: 'Med: 26.00 (RIC: 18.00)', testStat: 'Restricción PM<sub>2.5</sub> / MP<sub>10</sub> &le; 1.0', decision: '32 anomalías podadas' },
        { param: 'Fracción Gravimétrica (PM<sub>2.5</sub>/MP<sub>10</sub>)', n: '3,280', meanSd: '0.712 &plusmn; 0.146 (71.2%)', medIqr: 'Med: 0.724 (RIC: 0.208)', testStat: 'Pendiente MCO &beta;<sub>1</sub> = 0.6989 (t = 84.98)', decision: 'Valida biomasa (0.65–0.80)' },
        { param: 'Modelo RLM Completo (M3 / BIC)', n: '3,185', meanSd: 'R² = 82.90% (R²_adj = 82.86%)', medIqr: 'RMSE = 4.465 µg/m³', testStat: 'F(8, 3176) = 1,924.56 (p &lt; 10<sup>-16</sup>)', decision: 'Óptimo Stepwise (7 vars)' }
      ]
    },
    frio: {
      id: 'frio',
      name: 'Régimen Frío / Gestión de Episodios Críticos (Abril–Septiembre)',
      subtitle: 'Inversión térmica de subsidencia (< 150 m) + Combustión residencial intensiva de leña',
      badgeText: '100% Alertas GEC en este período',
      badgeClass: 'badge-alerta',
      hmixMeters: 125,
      inversionLabel: 'Inversión Térmica de Subsidencia Severa (H_mix < 130 m)',
      plumeOpacity: 0.95,
      inversionY: 148,
      basinCaption: 'Configuración anticiclónica fría posfrontal (Saide et al., 2016): el techo de inversión comprime la capa límite y atrapa el aerosol pirogénico residencial durante 3 a 5 días sin importar el calendario laboral.',
      metrics: [
        { param: 'PM<sub>2.5</sub> Período Frío (Abr–Sep)', n: '1,664', meanSd: '28.76 &plusmn; 21.35 µg/m³', medIqr: 'Med: 23.40 (RIC: 24.10)', testStat: 't_Welch = -31.94 (p &lt; 2.2&times;10<sup>-16</sup>)', decision: 'd Cohen = 1.11 (Muy grande)' },
        { param: 'PM<sub>2.5</sub> Estación Invierno (Jun–Ago)', n: '828 / 892', meanSd: '33.44 &plusmn; 22.84 µg/m³', medIqr: 'Med: 27.80 (RIC: 25.80)', testStat: 'Salto Dummy Invierno: +8.83 µg/m³', decision: 'Triplica verano (t = 37.33)' },
        { param: 'Acoplamiento MCO Régimen Frío', n: '1,648', meanSd: '&beta;<sub>1</sub> = 0.7318 &plusmn; 0.0124 [HC3]', medIqr: 'IC 95%: [0.7075, 0.7561]', testStat: 'R² = 82.12% | F = 7,561.2', decision: '73.2% masa MP<sub>10</sub> es humo fino' },
        { param: 'Invarianza Dominical en Invierno', n: '828', meanSd: 'Lab: 33.18 vs FDS: 34.09', medIqr: 'Med: 27.60 vs 28.20 µg/m³', testStat: 't_Welch = -0.548 (p = 0.5842)', decision: 'No rechaza H<sub>0</sub> (d = -0.040)' },
        { param: 'Episodios Críticos PPDA (D.S. 6/2019)', n: '1,664', meanSd: '215 superaciones (> 50 µg/m³)', medIqr: '47 Alertas · 14 Preem · 2 Emerg', testStat: '&chi;²(4) = 238.64 (V Cramér = 0.268)', decision: 'Confinamiento invernal 98.6%' }
      ]
    },
    calido: {
      id: 'calido',
      name: 'Régimen Cálido / Ventilación Sinóptica Costera (Octubre–Marzo)',
      subtitle: 'Expansión convectiva de capa de mezcla (> 800 m), advección marina y cese de calefacción',
      badgeText: '99.82% Días Normativos Buenos',
      badgeClass: 'badge-bueno',
      hmixMeters: 860,
      inversionLabel: 'Capa Límite Convectiva Expandida (H_mix > 850 m · Brisa Marina)',
      plumeOpacity: 0.14,
      inversionY: 52,
      basinCaption: 'En primavera y verano la radiación solar rompe la estabilidad superficial, la brisa costera del Pacífico ventila la cuenca del Biobío y el apagado de estufas desploma el PM2.5 a niveles basales.',
      metrics: [
        { param: 'PM<sub>2.5</sub> Período Cálido (Oct–Mar)', n: '1,648', meanSd: '11.42 &plusmn; 5.84 µg/m³', medIqr: 'Med: 10.30 (RIC: 6.45)', testStat: 'Mann-Whitney U = 418,920.5', decision: 'r_rb = 0.694 vs Período Frío' },
        { param: 'Estación Verano (Base Referencia)', n: '760 / 818', meanSd: '9.14 &plusmn; 7.81 µg/m³', medIqr: 'Med: 8.00 (RIC: 6.00)', testStat: 'Grupo Homogéneo Tukey A', decision: 'Igual a Primavera (p > 0.05)' },
        { param: 'Estación Primavera (Sep–Nov)', n: '832', meanSd: '8.21 &plusmn; 3.72 µg/m³', medIqr: 'Med: 8.00 (RIC: 4.00)', testStat: '|Media_Ver - Media_Pri| = 0.93', decision: 'Tukey T = 2.79 &lt; q_crit (3.63)' },
        { param: 'Ozono Troposférico Estival (O<sub>3</sub>)', n: '3,185', meanSd: '24.18 &plusmn; 11.45 µg/m³', medIqr: 'Med: 23.10 (RIC: 15.60)', testStat: 'Correlación con PM<sub>2.5</sub>: r = -0.504', decision: 'Máximo fotoquímico estival' },
        { param: 'Cumplimiento D.S. N° 12/2011', n: '1,648', meanSd: '1,645 días Buenos (99.82%)', medIqr: '0 Alertas · 0 Preemergencias', testStat: 'Residuo Pearson Bueno: e_ij = +15.42', decision: 'Sin episodios críticos GEC' }
      ]
    },
    cohorte2023: {
      id: 'cohorte2023',
      name: 'Cohorte Transversal Reciente (Año Calendario 2023)',
      subtitle: 'Validación contemporánea libre de deriva tecnológica de largo plazo (98.9% cobertura anual)',
      badgeText: 'n = 361 días validados (2023)',
      badgeClass: 'badge-synoptic',
      hmixMeters: 360,
      inversionLabel: 'Corte Transversal Anual 2023 (Pendiente MCO b1 = 0.7039)',
      plumeOpacity: 0.68,
      inversionY: 112,
      basinCaption: 'El corte transversal de 2023 demuestra que la firma gravimétrica de la quema de leña (β₁ = 0.7039, R² = 80.53%) y la invarianza de fin de semana (p = 0.6120) siguen intactas en la actualidad.',
      metrics: [
        { param: 'PM<sub>2.5</sub> Cohorte 2023', n: '361', meanSd: '19.42 &plusmn; 16.88 µg/m³', medIqr: 'Med: 14.60 (RIC: 15.80)', testStat: 'Lilliefors D = 0.141 | W = 0.829', decision: 'Asimetría positiva &gamma;<sub>1</sub> = 1.98' },
        { param: 'MP<sub>10</sub> Cohorte 2023', n: '361', meanSd: '26.85 &plusmn; 21.52 µg/m³', medIqr: 'Med: 21.30 (RIC: 19.90)', testStat: 'Lilliefors D = 0.128 | W = 0.851', decision: 'Rango 6.10 – 154.00 µg/m³' },
        { param: 'Regresión MCO 2023 (HC3)', n: '361', meanSd: '&beta;<sub>1</sub> = 0.7039 &plusmn; 0.0241 [HC3]', medIqr: 'IC 95%: [0.6565, 0.7513]', testStat: 't_HC3 = 29.21 (p &lt; 2.2&times;10<sup>-16</sup>)', decision: 'R² = 80.53% | &beta;<sub>0</sub> nulo (p=0.42)' },
        { param: 'Contraste Laboral vs Fin de Semana', n: '361', meanSd: 'Lab: 19.65 vs FDS: 18.84', medIqr: 'Med: 14.70 vs 14.35 µg/m³', testStat: 't_Welch = 0.508 (p = 0.6120)', decision: 'Invarianza vigente (d = 0.048)' },
        { param: 'Precisión Predictiva Reciente', n: '361', meanSd: 'Error Se = 7.458 µg/m³', medIqr: 'r Pearson = 0.8974', testStat: 'F(1, 359) = 1,484.8 (p &lt; 0.0001)', decision: 'Estabilidad estructural' }
      ]
    }
  };

  /* ------------------------------------------------------------------------
     2. CUADRO MAESTRO DE LAS 13 PRUEBAS DE HIPÓTESIS OFICIALES
     ------------------------------------------------------------------------ */
  const HYPOTHESIS_TESTS = [
    { num: 1, cat: 'normalidad', name: 'Test de Grubbs (Detección de Atípicos)', h0h1: 'H<sub>0</sub>: No existen valores atípicos en la serie diaria vs. H<sub>1</sub>: Existe al menos un atípico extremo real.', math: 'H₀: Sin outliers vs. H₁: Existe X_i extremo', stat: 'G = 9.87 (PM₂.₅) y G = 9.10 (MP₁₀) > G_crit = 4.30', decision: 'Rechaza H0 (p < 0.001)', badge: 'badge-alerta', note: 'Justifica winsorización en Ls = 63.0 µg/m³ y enfoque dual.' },
    { num: 2, cat: 'normalidad', name: 'Kolmogórov-Smirnov / Lilliefors (Normalidad)', h0h1: 'H<sub>0</sub>: La concentración diaria sigue una distribución Normal central vs. H<sub>1</sub>: Desviación empírica significativa.', math: 'H₀: F(x) = Φ(x) vs. H₁: F(x) ≠ Φ(x)', stat: 'D = 0.1644 > D_0.05 = 0.0236 (Lilliefors D = 0.148)', decision: 'Rechaza H0 (p < 0.001)', badge: 'badge-alerta', note: 'Asimetría de Fisher g1 = +2.05 / +2.14 (cola derecha).' },
    { num: 3, cat: 'normalidad', name: 'Anderson-Darling y Shapiro-Wilk (Colas)', h0h1: 'H<sub>0</sub>: Normalidad en las colas de la distribución vs. H<sub>1</sub>: Presencia de colas pesadas leptocúrticas.', math: 'H₀: X ~ N(µ, σ²) vs. H₁: No Normal', stat: 'A²* = 151.16 >> 0.787 | W = 0.812 (p < 0.0001)', decision: 'Rechaza H0 (En ln: A²* cae 94.4% a 8.47)', badge: 'badge-alerta', note: 'La transformación ln(PM2.5) logra simetría perfecta (g1 = 0.00).' },
    { num: 4, cat: 'regresion', name: 'Correlación Lineal de Pearson (r)', h0h1: 'H<sub>0</sub>: Ausencia de correlación lineal entre MP<sub>10</sub> y PM<sub>2.5</sub> vs. H<sub>1</sub>: Correlación lineal positiva fuerte.', math: 'H₀: ρ = 0 vs. H₁: ρ > 0', stat: 'r = 0.8293 (t_c = 84.98) | Serie depurada: r = 0.886', decision: 'Rechaza H0 (p < 10^-16)', badge: 'badge-bueno', note: 'Asociación bivariada positiva muy fuerte en 3,280 días.' },
    { num: 5, cat: 'regresion', name: 'Correlación de Rangos de Spearman (rho_s)', h0h1: 'H<sub>0</sub>: Independencia monótona entre MP<sub>10</sub> y PM<sub>2.5</sub> vs. H<sub>1</sub>: Asociación monótona creciente en rangos.', math: 'H₀: ρ_s = 0 vs. H₁: ρ_s > 0', stat: 'r_s = 0.7771 (z_s = 44.49) | Serie depurada: rho_s = 0.864', decision: 'Rechaza H0 (p < 10^-16)', badge: 'badge-bueno', note: 'Robusta ante episodios extremos de preemergencia.' },
    { num: 6, cat: 'regresion', name: 'ANOVA Global de la Regresión Múltiple (F_c)', h0h1: 'H<sub>0</sub>: Ningún regresor explica linealmente al PM<sub>2.5</sub> vs. H<sub>1</sub>: El modelo conjunto posee poder predictivo.', math: 'H₀: β₁ = … = β_p = 0 vs. H₁: Algún β_j ≠ 0', stat: 'M3: F(8, 3176) = 1,924.56 | M_BIC(7): F = 2,194.99', decision: 'Rechaza H0 (p < 10^-16)', badge: 'badge-bueno', note: 'El modelo explica el 82.90% de la varianza total (R²).' },
    { num: 7, cat: 'regresion', name: 'Pruebas t Individuales de Coeficientes (beta_j)', h0h1: 'H<sub>0</sub>: El predictor X_j no aporta marginalmente dado el resto vs. H<sub>1</sub>: Efecto parcial significativo.', math: 'H₀: β_j = 0 vs. H₁: β_j ≠ 0', stat: 'MP10 (t=79.6), CO (t=14.3), D_Inv (t=37.3) | NO2 (p=0.0125)', decision: 'Rechaza H0 en 7 vars; NO2 podado por BIC', badge: 'badge-bueno', note: 'Bajo α=0.01 y criterio BIC (penalización 8.07), se poda NO2.' },
    { num: 8, cat: 'regresion', name: 'Prueba de Cambio F Anidado (M1 < M2 < M3)', h0h1: 'H<sub>0</sub>: Añadir bloques de gases y dummies no reduce SSE vs. H<sub>1</sub>: Mejora estructural genuina del ajuste.', math: 'H₀: β_bloque = 0 vs. H₁: ΔSSE > 0', stat: 'Paso 1 (Gases): F = 138.92 | Paso 2 (Dummies): F = 498.44', decision: 'Rechaza H0 (p < 10^-16)', badge: 'badge-bueno', note: 'Las dummies estacionales elevan R² de 72.16% a 82.90%.' },
    { num: 9, cat: 'estacional', name: 't de Welch y U de Mann-Whitney (Tipo de Día H2)', h0h1: 'H<sub>0</sub>: Igual concentración de PM<sub>2.5</sub> en día laboral y fin de semana vs. H<sub>1</sub>: Diferencia por tráfico.', math: 'H₀: µ_Lab = µ_FDS y θ_Lab = θ_FDS', stat: 'PM2.5: t = 0.88 (p = 0.3820), d = 0.036 | NO2: t = 16.42 (p < 0.0001)', decision: 'No Rechaza H0 en PM2.5 (Invarianza)', badge: 'badge-synoptic', note: 'Control negativo: NO2 cae -36.3% en FDS, pero PM2.5 no varía.' },
    { num: 10, cat: 'estacional', name: 'ANOVA de 1 Factor y Welch (Estación del Año H1)', h0h1: 'H<sub>0</sub>: Igualdad de medias de PM<sub>2.5</sub> en las 4 estaciones vs. H<sub>1</sub>: Al menos una estación difiere.', math: 'H₀: µ_Ver = µ_Oto = µ_Inv = µ_Pri', stat: 'F(3, 3308) = 353.97 (η² = 24.30%) | F_Welch = 486.32 (η² = 28.4%)', decision: 'Rechaza H0 (p < 10^-16)', badge: 'badge-alerta', note: 'El forzamiento térmico estacional gobierna un cuarto de la varianza.' },
    { num: 11, cat: 'estacional', name: 'Comparaciones Múltiples Post-Hoc de Tukey HSD', h0h1: 'H<sub>0</sub>: El par de estaciones (i, i\') tiene igual media vs. H<sub>1</sub>: Las medias del par difieren.', math: 'H₀: µ_i - µ_i\' = 0 vs. H₁: µ_i ≠ µ_i\'', stat: 'q_crit(0.95) = 3.633 | Oto/Inv vs Ver/Pri: T en [29.89, 35.05]', decision: 'Rechaza entre bloques; Acepta intra-bloque', badge: 'badge-alerta', note: 'Separa Grupo A {Verano, Primavera} de Grupo B {Otoño, Invierno}.' },
    { num: 12, cat: 'estacional', name: 'Prueba H de Kruskal-Wallis y Post-Hoc de Dunn', h0h1: 'H<sub>0</sub>: Distribuciones estacionales centradas en igual mediana vs. H<sub>1</sub>: Dominancia estocástica invernal.', math: 'H₀: θ_Ver = θ_Oto = θ_Inv = θ_Pri', stat: 'H(3) = 942.29 (p < 10^-16) | Serie total: H = 1,342.18 (ε² = 0.405)', decision: 'Rechaza H0 (p < 10^-16)', badge: 'badge-alerta', note: 'Confirma sin supuestos paramétricos que Invierno/Otoño duplican a Verano.' },
    { num: 13, cat: 'contingencia', name: 'Chi-Cuadrado de Independencia (Alertas PPDA H4)', h0h1: 'H<sub>0</sub>: El nivel de alerta D.S. 6/2019 es independiente del factor vs. H<sub>1</sub>: Asociación categórica.', math: 'H₀: P(A_i ∩ B_j) = P(A_i)P(B_j)', stat: 'Por Día: χ² = 1.3449 (p = 0.7185, V = 0.020) | Por Régimen: χ² = 238.64', decision: 'No Rechaza H0 por Día; Rechaza por Régimen', badge: 'badge-synoptic', note: 'La probabilidad de Alerta/Preemergencia es idéntica un domingo y un miércoles.' }
  ];

  /* ------------------------------------------------------------------------
     3. CATÁLOGO DE FIGURAS CIENTÍFICAS ORIGINALES (paper_certamen2/figuras)
     ------------------------------------------------------------------------ */
  const SCIENTIFIC_FIGURES = [
    {
      id: 'fig1',
      title: 'Fig. 1 · Completitud Temporal y Mecanismo MAR (2009–2026)',
      sub: 'Auditoría de cobertura anual en los 16 datasets SINCA',
      path: 'paper_certamen2/figuras/fig1_completitud_temporal.png',
      desc: 'Evolución anual del porcentaje de datos validados por contaminante en Kingston College. Evidencia el mecanismo MAR (Missing At Random) por la incorporación escalonada de sensores post-2009 y mantenciones programadas (MCAR).'
    },
    {
      id: 'fig2',
      title: 'Fig. 2 · Diagnóstico de Atípicos (Grubbs) y Winsorización',
      sub: 'Regla 1.5·RIC (Ls = 63 µg/m³), Z-score y estabilización de varianza',
      path: 'paper_certamen2/figuras/fig2_outliers_winsorizacion.png',
      desc: 'Comparación de la distribución antes y después de la winsorización en el umbral superior Ls = 63.00 µg/m³ (154 atípicos detectados, Test de Grubbs G = 9.10 > 4.38). La mediana permanece intacta en 26.00 µg/m³.'
    },
    {
      id: 'fig3',
      title: 'Fig. 3 · Bondad de Ajuste: Escala Original vs. Logarítmica',
      sub: 'Histograma de densidad y Q-Q Plot Normal de PM2.5 y ln(PM2.5)',
      path: 'paper_certamen2/figuras/fig3_histograma_qq_normalidad.png',
      desc: 'Demostración visual de cómo la fuerte asimetría positiva en escala original (g1 = +2.05, AD A²* = 151.16) se corrige mediante la transformación logarítmica ln(PM2.5), logrando simetría gaussiana central (g1 = 0.00, A²* = 8.47).'
    },
    {
      id: 'fig4',
      title: 'Fig. 4 · Acoplamiento Gravimétrico Bivariado MP10 vs. PM2.5',
      sub: 'Recta EMCO (b1 = 0.6989, R² = 68.52%) e intervalos al 95%',
      path: 'paper_certamen2/figuras/fig4_dispersion_mp10_pm25.png',
      desc: 'Diagrama de dispersión sobre los n = 3,280 días físicamente consistentes (PM2.5 <= MP10). Confirma empíricamente que cerca del 70% de la masa respirable corresponde a fracción fina de combustión (Cereceda-Balic et al., 2020).'
    },
    {
      id: 'fig5',
      title: 'Fig. 5 · Matrices de Correlación Multivariada (Pearson y Spearman)',
      sub: 'Asociación entre PM2.5, MP10, CO, NO2 y O3 (n = 3,185)',
      path: 'paper_certamen2/figuras/fig5_heatmap_correlaciones.png',
      desc: 'Destaca el fuerte acoplamiento pirogénico entre PM2.5 y CO (r = 0.834 / rho_s = 0.812) frente a la correlación negativa con el ozono troposférico O3 (r = -0.504), típico de titulación invernal y fotoquímica estival.'
    },
    {
      id: 'fig6',
      title: 'Fig. 6 · Contraste por Tipo de Día: Invarianza en PM2.5',
      sub: 'Día Laboral (Lun–Vie) vs. Fin de Semana (Sáb–Dom)',
      path: 'paper_certamen2/figuras/fig6_boxplot_dos_grupos_dia.png',
      desc: 'Prueba visual de H2: mientras el PM2.5 permanece estadísticamente idéntico entre semana y fin de semana (t = 0.88, p = 0.3820), el MP10 experimenta una leve reducción por menor resuspensión mecánica de polvo vial.'
    },
    {
      id: 'fig7',
      title: 'Fig. 7 · ANOVA Estacional e Intervalos Post-Hoc de Tukey HSD',
      sub: 'Partición bimodal entre {Verano, Primavera} y {Otoño, Invierno}',
      path: 'paper_certamen2/figuras/fig7_boxplot_tukey_estaciones.png',
      desc: 'Comparación de las 4 estaciones astronómicas (F = 353.97, eta² = 24.30%; Kruskal-Wallis H = 942.29) e intervalos simultáneos de Tukey al 95% (q_crit = 3.633).'
    },
    {
      id: 'fig8',
      title: 'Fig. 8 · Análisis de Contingencia PPDA (D.S. N° 6/2019)',
      sub: 'Independencia por Tipo de Día (Chi² = 1.34, p = 0.719) vs. Estacionalidad',
      path: 'paper_certamen2/figuras/fig8_barras_apiladas_contingencia.png',
      desc: 'Gráfico de barras apiladas al 100% que demuestra que la proporción de días laborales y de fin de semana en niveles Bueno y Regular replica exactamente la proporción de calendario (71.4% / 28.6%, V de Cramér = 0.0202).'
    },
    {
      id: 'fig9',
      title: 'Fig. 9 · Comparación Estructural de Modelos EMCO (M1 vs. M3)',
      sub: 'Cambio de pendiente estacional y ajuste Observados vs. Predichos',
      path: 'paper_certamen2/figuras/fig9_modelos_regresion_comparacion.png',
      desc: 'Muestra la superioridad predictiva del Modelo 3 (R² = 82.90%, RMSE = 4.47 µg/m³) frente al Modelo 1 simple (R² = 68.52%), reduciendo la dispersión residual alrededor de la recta identidad.'
    },
    {
      id: 'fig10',
      title: 'Fig. 10 · Auditoría de los 6 Supuestos de Gauss-Markov en Residuos',
      sub: 'Residuos vs. Ajustados, Histograma, Q-Q Normal y Distancia de Cook',
      path: 'paper_certamen2/figuras/fig10_diagnostico_residuos_emco.png',
      desc: 'Verifica esperanza nula (suma e_i = 0), ausencia de puntos influyentes críticos (máx D_i de Cook = 0.387 < 1.0) y estructura de varianza antes y después de la estabilización Log-Log.'
    },
    {
      id: 'fig11',
      title: 'Fig. 11 · Selección Stepwise: Backward Elimination & Forward Selection',
      sub: 'Trayectoria de optimización de AIC, BIC, R² ajustado y error Se',
      path: 'paper_certamen2/figuras/seleccion_variables_backward_forward.png',
      desc: 'Ilustra la convergencia matemática de ambos algoritmos hacia el modelo parsimonioso de 7 regresores que minimiza el Criterio Bayesiano de Schwarz (BIC = 9,601.54) al descartar el NO2.'
    }
  ];

  /* ------------------------------------------------------------------------
     4. RENDERIZADO DEL CONMUTADOR DE RÉGIMEN Y CORTE DE LA CUENCA
     ------------------------------------------------------------------------ */
  function setRegime(regimeKey) {
    const reg = REGIMES[regimeKey] || REGIMES.global;
    document.body.setAttribute('data-regime', reg.id);

    document.querySelectorAll('.regime-btn').forEach(btn => {
      const isAct = btn.getAttribute('data-regime') === reg.id;
      btn.classList.toggle('active', isAct);
      btn.setAttribute('aria-pressed', isAct ? 'true' : 'false');
    });

    const nameEl = document.getElementById('regime-active-name');
    const subEl = document.getElementById('regime-active-sub');
    const badgeEl = document.getElementById('regime-active-badge');
    const capEl = document.getElementById('basin-dynamic-caption');

    if (nameEl) nameEl.textContent = reg.name;
    if (subEl) subEl.textContent = reg.subtitle;
    if (badgeEl) {
      badgeEl.textContent = reg.badgeText;
      badgeEl.className = 'badge-pill ' + reg.badgeClass;
    }
    if (capEl) capEl.textContent = reg.basinCaption;

    // Tabla de 4 columnas compactas sin desborde horizontal
    const tbody = document.getElementById('regime-metrics-tbody');
    if (tbody) {
      tbody.innerHTML = reg.metrics.map(m => `
        <tr>
          <td><strong>${m.param}</strong></td>
          <td class="num">${m.n}</td>
          <td class="num">
            <div><strong>${m.meanSd}</strong></div>
            <div style="font-size: 0.75rem; color: var(--ink-muted);">${m.medIqr}</div>
          </td>
          <td>
            <span class="badge-pill ${reg.badgeClass}">${m.decision}</span>
            <div class="num" style="font-size: 0.74rem; color: var(--ink-secondary); margin-top: 0.22rem;">${m.testStat}</div>
          </td>
        </tr>
      `).join('');
    }

    const invLine = document.getElementById('svg-inversion-group');
    const invText = document.getElementById('svg-inversion-label');
    const smokeLayer = document.getElementById('svg-smoke-trap');
    const hmixVal = document.getElementById('svg-hmix-readout');

    if (invLine) invLine.setAttribute('transform', `translate(0, ${reg.inversionY})`);
    if (invText) invText.textContent = reg.inversionLabel;
    if (smokeLayer) {
      smokeLayer.setAttribute('opacity', String(reg.plumeOpacity));
      smokeLayer.setAttribute('height', String(Math.max(30, 195 - reg.inversionY)));
      smokeLayer.setAttribute('y', String(reg.inversionY));
    }
    if (hmixVal) hmixVal.textContent = `H_mix ~ ${reg.hmixMeters} m`;
  }

  /* ------------------------------------------------------------------------
     5. GRÁFICO INTERACTIVO H1: CLIMATOLOGÍA MENSUAL / SERIE ANUAL / TUKEY HSD
     ------------------------------------------------------------------------ */
  let currentH1Mode = 'monthly';

  function renderH1Chart(mode) {
    currentH1Mode = mode || currentH1Mode;
    const container = document.getElementById('h1-chart-container');
    const caption = document.getElementById('h1-chart-caption');
    if (!container) return;

    document.querySelectorAll('[data-h1-view]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-h1-view') === currentH1Mode);
    });

    if (currentH1Mode === 'monthly') {
      const mData = DATA.monthly && DATA.monthly.length ? DATA.monthly : [];
      const W = 680, H = 310, padL = 48, padR = 24, padT = 30, padB = 40;
      const plotW = W - padL - padR;
      const plotH = H - padT - padB;
      const maxY = 58;

      const xFor = i => padL + (i / 11) * plotW;
      const yFor = val => padT + plotH - (Math.min(maxY, Math.max(0, val)) / maxY) * plotH;

      const q3Pts = mData.map((d, i) => `${xFor(i).toFixed(1)},${yFor(d.pm25_q3).toFixed(1)}`);
      const q1Pts = mData.slice().reverse().map((d, idx) => {
        const i = mData.length - 1 - idx;
        return `${xFor(i).toFixed(1)},${yFor(d.pm25_q1).toFixed(1)}`;
      });
      const areaPts = [...q3Pts, ...q1Pts].join(' ');

      const meanPath = mData.map((d, i) => `${i === 0 ? 'M' : 'L'}${xFor(i).toFixed(1)},${yFor(d.pm25_mean).toFixed(1)}`).join(' ');
      const medPath = mData.map((d, i) => `${i === 0 ? 'M' : 'L'}${xFor(i).toFixed(1)},${yFor(d.pm25_med).toFixed(1)}`).join(' ');
      const mp10Path = mData.map((d, i) => `${i === 0 ? 'M' : 'L'}${xFor(i).toFixed(1)},${yFor(d.mp10_mean).toFixed(1)}`).join(' ');

      const xApr = xFor(3) - 18;
      const xSep = xFor(8) + 18;

      container.innerHTML = `
        <svg class="chart-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Perfil climatológico mensual de PM2.5 y MP10 en Kingston College">
          <!-- Banda Período Frío GEC (Abr-Sep) -->
          <rect x="${xApr}" y="${padT}" width="${xSep - xApr}" height="${plotH}" fill="#FCE8DB" opacity="0.58" />
          <text x="${(xApr + xSep) / 2}" y="${padT - 8}" text-anchor="middle" fill="#9E430B" font-size="10.5" font-weight="700">PERÍODO FRÍO GEC (Abr–Sep · Quema Residencial de Biomasa)</text>

          <!-- Líneas de grilla y umbrales normativos -->
          ${[0, 10, 20, 30, 40, 50].map(v => `
            <line x1="${padL}" y1="${yFor(v)}" x2="${W - padR}" y2="${yFor(v)}" stroke="${v === 50 ? '#B81D13' : (v === 20 ? '#1B4D7E' : '#E2E6DC')}" stroke-dasharray="${v === 50 || v === 20 ? '4,3' : 'none'}" stroke-width="${v === 50 || v === 20 ? '1.3' : '1'}" />
            <text x="${padL - 8}" y="${yFor(v) + 4}" text-anchor="end" fill="#526273" font-family="JetBrains Mono, monospace" font-size="10">${v}</text>
          `).join('')}

          <text x="${W - padR - 4}" y="${yFor(50) - 5}" text-anchor="end" fill="#B81D13" font-size="9.8" font-weight="700">Norma Diaria D.S. 12/2011 (50 µg/m³)</text>
          <text x="${W - padR - 4}" y="${yFor(20) - 5}" text-anchor="end" fill="#1B4D7E" font-size="9.8" font-weight="700">Norma Anual (20 µg/m³)</text>

          <!-- Banda intercuartílica Q1-Q3 de PM2.5 -->
          <polygon points="${areaPts}" fill="#C85A17" opacity="0.22" />

          <!-- Curva MP10 Media -->
          <path d="${mp10Path}" fill="none" stroke="#1B4D7E" stroke-width="2" stroke-dasharray="5,3" />
          <!-- Curva PM2.5 Mediana -->
          <path d="${medPath}" fill="none" stroke="#526273" stroke-width="1.8" />
          <!-- Curva PM2.5 Media -->
          <path d="${meanPath}" fill="none" stroke="#C85A17" stroke-width="2.8" />

          <!-- Puntos interactivos por mes -->
          ${mData.map((d, i) => `
            <g class="month-pt" transform="translate(${xFor(i)}, 0)">
              <circle cx="0" cy="${yFor(d.mp10_mean)}" r="3.5" fill="#1B4D7E" />
              <circle cx="0" cy="${yFor(d.pm25_mean)}" r="4.5" fill="#C85A17" stroke="#FFFFFF" stroke-width="1.5">
                <title>${d.name}: PM2.5 Media = ${d.pm25_mean} µg/m³ | Mediana = ${d.pm25_med} (Q1=${d.pm25_q1}, Q3=${d.pm25_q3}) | MP10 = ${d.mp10_mean} µg/m³ | CO = ${d.co_mean} mg/m³</title>
              </circle>
              <text x="0" y="${yFor(d.pm25_mean) - 8}" text-anchor="middle" fill="#141B22" font-family="JetBrains Mono, monospace" font-size="9.2" font-weight="600">${d.pm25_mean}</text>
              <text x="0" y="${H - 13}" text-anchor="middle" fill="#334150" font-size="10.8" font-weight="600">${d.name}</text>
            </g>
          `).join('')}
        </svg>
      `;
      if (caption) {
        caption.innerHTML = `
          <span><strong>Línea continua ámbar:</strong> Media PM<sub>2.5</sub> (µg/m³) · <strong>Banda sombreada:</strong> Rango Intercuartílico (Q<sub>1</sub>–Q<sub>3</sub>) · <strong>Segmentada azul:</strong> Media MP<sub>10</sub></span>
          <span>Fuente: Datos diarios validados SINCA (n = 3,280)</span>
        `;
      }
    } else if (currentH1Mode === 'yearly') {
      const yData = DATA.yearly && DATA.yearly.length ? DATA.yearly : [];
      const W = 680, H = 310, padL = 48, padR = 24, padT = 26, padB = 40;
      const plotW = W - padL - padR;
      const plotH = H - padT - padB;
      const maxY = 75;

      const xFor = i => padL + (i / Math.max(1, yData.length - 1)) * plotW;
      const yFor = val => padT + plotH - (Math.min(maxY, Math.max(0, val)) / maxY) * plotH;

      const p98Path = yData.map((d, i) => `${i === 0 ? 'M' : 'L'}${xFor(i).toFixed(1)},${yFor(d.pm25_p98).toFixed(1)}`).join(' ');
      const meanPath = yData.map((d, i) => `${i === 0 ? 'M' : 'L'}${xFor(i).toFixed(1)},${yFor(d.pm25_mean).toFixed(1)}`).join(' ');
      const medPath = yData.map((d, i) => `${i === 0 ? 'M' : 'L'}${xFor(i).toFixed(1)},${yFor(d.pm25_med).toFixed(1)}`).join(' ');

      container.innerHTML = `
        <svg class="chart-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Evolución interanual 2009 a 2026 de PM2.5 en Kingston College">
          ${[0, 15, 30, 50, 70].map(v => `
            <line x1="${padL}" y1="${yFor(v)}" x2="${W - padR}" y2="${yFor(v)}" stroke="${v === 50 ? '#B81D13' : '#E2E6DC'}" stroke-dasharray="${v === 50 ? '4,3' : 'none'}" />
            <text x="${padL - 8}" y="${yFor(v) + 4}" text-anchor="end" fill="#526273" font-family="JetBrains Mono, monospace" font-size="10">${v}</text>
          `).join('')}
          <text x="${W - padR - 4}" y="${yFor(50) - 5}" text-anchor="end" fill="#B81D13" font-size="10" font-weight="600">Umbral Diario D.S. 12/2011 (Percentil 98 = 50 µg/m³)</text>

          <path d="${p98Path}" fill="none" stroke="#B81D13" stroke-width="2" stroke-dasharray="4,2" />
          <path d="${meanPath}" fill="none" stroke="#1B4D7E" stroke-width="2.6" />
          <path d="${medPath}" fill="none" stroke="#1F7A4C" stroke-width="1.8" />

          ${yData.map((d, i) => `
            <g transform="translate(${xFor(i)}, 0)">
              <circle cx="0" cy="${yFor(d.pm25_p98)}" r="3.5" fill="#B81D13">
                <title>Año ${d.year}: P98 = ${d.pm25_p98} µg/m³ | Media = ${d.pm25_mean} | Mediana = ${d.pm25_med} (n=${d.n} días)</title>
              </circle>
              <circle cx="0" cy="${yFor(d.pm25_mean)}" r="4" fill="#1B4D7E" stroke="#fff" stroke-width="1.2" />
              <text x="0" y="${H - 13}" text-anchor="middle" fill="#334150" font-family="JetBrains Mono, monospace" font-size="9.5">'${String(d.year).slice(2)}</text>
            </g>
          `).join('')}
        </svg>
      `;
      if (caption) {
        caption.innerHTML = `
          <span><strong>Rojo segmentado:</strong> Percentil 98 anual (P<sub>98</sub>) · <strong>Azul continuo:</strong> Media anual PM<sub>2.5</sub> · <strong>Verde:</strong> Mediana anual</span>
          <span>Serie continua 2009–2026 (Años rotulados '09 a '26)</span>
        `;
      }
    } else if (currentH1Mode === 'tukey') {
      const pairs = [
        { label: 'Invierno vs. Primavera', diff: 11.26, li: 10.09, ls: 12.42, t: 35.05, sig: true },
        { label: 'Otoño vs. Primavera', diff: 10.94, li: 9.75, ls: 12.12, t: 33.43, sig: true },
        { label: 'Invierno vs. Verano', diff: 10.33, li: 9.13, ls: 11.52, t: 31.39, sig: true },
        { label: 'Otoño vs. Verano', diff: 10.00, li: 8.79, ls: 11.22, t: 29.89, sig: true },
        { label: 'Verano vs. Primavera', diff: 0.93, li: -0.28, ls: 2.15, t: 2.79, sig: false },
        { label: 'Invierno vs. Otoño', diff: 0.32, li: -0.85, ls: 1.49, t: 1.00, sig: false }
      ];
      const W = 680, H = 310, padL = 165, padR = 115, padT = 28, padB = 38;
      const plotW = W - padL - padR;
      const plotH = H - padT - padB;
      const minX = -3, maxX = 14;
      const xFor = val => padL + ((val - minX) / (maxX - minX)) * plotW;

      container.innerHTML = `
        <svg class="chart-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Intervalos simultáneos de confianza al 95% de Tukey HSD">
          ${[-2, 0, 2, 4, 6, 8, 10, 12].map(v => `
            <line x1="${xFor(v)}" y1="${padT}" x2="${xFor(v)}" y2="${H - padB}" stroke="${v === 0 ? '#141B22' : '#E2E6DC'}" stroke-width="${v === 0 ? '1.8' : '1'}" stroke-dasharray="${v === 0 ? '4,3' : 'none'}" />
            <text x="${xFor(v)}" y="${H - 12}" text-anchor="middle" fill="#526273" font-family="JetBrains Mono, monospace" font-size="10">${v > 0 ? '+' + v : v}</text>
          `).join('')}
          <text x="${xFor(0) + 6}" y="${padT + 12}" fill="#141B22" font-size="10" font-weight="700">H0: Dif. Medias = 0</text>

          ${pairs.map((p, i) => {
            const y = padT + 26 + i * (plotH / pairs.length);
            const col = p.sig ? '#C85A17' : '#1F7A4C';
            return `
              <g>
                <text x="${padL - 12}" y="${y + 4}" text-anchor="end" fill="#141B22" font-size="11.2" font-weight="600">${p.label}</text>
                <line x1="${xFor(p.li)}" y1="${y}" x2="${xFor(p.ls)}" y2="${y}" stroke="${col}" stroke-width="3.2" stroke-linecap="round" />
                <line x1="${xFor(p.li)}" y1="${y - 5}" x2="${xFor(p.li)}" y2="${y + 5}" stroke="${col}" stroke-width="2" />
                <line x1="${xFor(p.ls)}" y1="${y - 5}" x2="${xFor(p.ls)}" y2="${y + 5}" stroke="${col}" stroke-width="2" />
                <circle cx="${xFor(p.diff)}" cy="${y}" r="4.5" fill="${col}" stroke="#fff" stroke-width="1.5" />
                <text x="${W - padR + 8}" y="${y + 4}" fill="${col}" font-family="JetBrains Mono, monospace" font-size="10" font-weight="600">T=${p.t.toFixed(2)} ${p.sig ? '(Rechaza)' : '(Igual)'}</text>
              </g>
            `;
          }).join('')}
        </svg>
      `;
      if (caption) {
        caption.innerHTML = `
          <span><strong>Valor crítico studentizado:</strong> q<sub>0.95</sub>(4, 3308) = 3.633 · <strong>MCE:</strong> 88.80</span>
          <span>Los pares Verano–Primavera y Otoño–Invierno cruzan el 0 (No rechazan H<sub>0</sub>)</span>
        `;
      }
    }
  }

  /* ------------------------------------------------------------------------
     6. DISPERSIÓN INTERACTIVA H3 + SIMULADOR PREDICTIVO EMCO Y TERMÓMETRO PPDA
     ------------------------------------------------------------------------ */
  let scatterFilter = 'ALL';
  let simPoint = { mp10: 45, pm25: 29.57 };
  let activeSimModel = 'mbic';

  function polarPoint(cx, cy, r, valDeg) {
    const rad = (valDeg * Math.PI) / 180;
    return {
      x: cx - r * Math.cos(rad),
      y: cy - r * Math.sin(rad)
    };
  }

  function annularSectorPath(cx, cy, rIn, rOut, vStart, vEnd) {
    const p1 = polarPoint(cx, cy, rOut, vStart);
    const p2 = polarPoint(cx, cy, rOut, vEnd);
    const p3 = polarPoint(cx, cy, rIn, vEnd);
    const p4 = polarPoint(cx, cy, rIn, vStart);
    const largeArc = (vEnd - vStart) > 180 ? 1 : 0;
    return [
      `M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)}`,
      `A ${rOut} ${rOut} 0 ${largeArc} 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`,
      `L ${p3.x.toFixed(2)} ${p3.y.toFixed(2)}`,
      `A ${rIn} ${rIn} 0 ${largeArc} 0 ${p4.x.toFixed(2)} ${p4.y.toFixed(2)}`,
      'Z'
    ].join(' ');
  }

  function renderPPDAGauge(value, modelMeta) {
    const svgEl = document.getElementById('ppda-gauge-svg');
    const modelChip = document.getElementById('sim-active-model-label');
    if (modelChip && modelMeta) {
      modelChip.textContent = `${modelMeta.short} · ${modelMeta.metric}`;
    }
    if (!svgEl) return;

    const cx = 230, cy = 186;
    const rOut = 144, rIn = 97;
    const rBarOut = 132, rBarIn = 109;
    const clampedVal = Math.max(0, Math.min(180, value));
    const delta = value - 50;
    const isOver = delta >= 0;

    let deltaColor = '#1F7A4C';
    if (value >= 110) deltaColor = '#B81D13';
    else if (value >= 50) deltaColor = '#9E430B';

    const zones = [
      { from: 0, to: 50, color: '#8CE0B0', label: 'Bueno (0–49 µg/m³)' },
      { from: 50, to: 80, color: '#F4D03F', label: 'Regular (50–79 µg/m³)' },
      { from: 80, to: 110, color: '#F0944D', label: 'Alerta Ambiental (80–109 µg/m³)' },
      { from: 110, to: 170, color: '#EA8680', label: 'Preemergencia (110–169 µg/m³)' },
      { from: 170, to: 180, color: '#A91D2E', label: 'Emergencia (>= 170 µg/m³)' }
    ];

    const majorTicks = [
      { val: 0, text: '0', anchor: 'end', dx: -4, dy: 4 },
      { val: 50, text: '50', anchor: 'end', dx: -3, dy: -2 },
      { val: 100, text: '100', anchor: 'start', dx: 3, dy: -3 },
      { val: 150, text: '150', anchor: 'start', dx: 4, dy: 2 },
      { val: 180, text: '180+', anchor: 'start', dx: 4, dy: 4 }
    ];

    const minorTicks = [80, 110, 170];
    const t50In = polarPoint(cx, cy, rIn - 2, 50);
    const t50Out = polarPoint(cx, cy, rOut + 2, 50);
    const barEndIn = polarPoint(cx, cy, rBarIn, clampedVal);
    const barEndOut = polarPoint(cx, cy, rBarOut, clampedVal);

    const deltaSign = isOver ? '+' : '−';
    const deltaAbs = Math.abs(delta).toFixed(1);
    const deltaLabel = `${deltaSign}${deltaAbs} µg/m³`;
    const triX = 6 - (deltaLabel.length * 4.2) - 9;

    // Triángulo vectorial indicador (abajo si cumple <50, arriba si supera >=50)
    const triPoints = isOver
      ? '-5,3 0,-5 5,3'
      : '-5,-4 5,-4 0,4';

    svgEl.innerHTML = `
      <!-- Bandas normativas D.S. 6/2019 -->
      ${zones.map(z => `
        <path d="${annularSectorPath(cx, cy, rIn, rOut, z.from, z.to)}" fill="${z.color}" stroke="#2A3440" stroke-width="0.75">
          <title>${z.label}</title>
        </path>
      `).join('')}

      <!-- Contorno exterior e interior nítido -->
      <path d="${annularSectorPath(cx, cy, rIn, rOut, 0, 180)}" fill="none" stroke="#141B22" stroke-width="1" opacity="0.65" />

      <!-- Barra activa de medición (Pizarra Costera #121A24) -->
      ${clampedVal > 0.2 ? `
        <path d="${annularSectorPath(cx, cy, rBarIn, rBarOut, 0, clampedVal)}" fill="#121A24" />
        <line x1="${barEndIn.x.toFixed(2)}" y1="${barEndIn.y.toFixed(2)}" x2="${barEndOut.x.toFixed(2)}" y2="${barEndOut.y.toFixed(2)}" stroke="#FFFFFF" stroke-width="1.8" />
      ` : ''}

      <!-- Línea roja de umbral crítico Meta Norma Diaria (50 µg/m³) -->
      <line x1="${t50In.x.toFixed(2)}" y1="${t50In.y.toFixed(2)}" x2="${t50Out.x.toFixed(2)}" y2="${t50Out.y.toFixed(2)}" stroke="#B81D13" stroke-width="3.5" />

      <!-- Marcas sutiles en límites Alerta (80), Preemergencia (110) y Emergencia (170) -->
      ${minorTicks.map(v => {
        const pA = polarPoint(cx, cy, rOut, v);
        const pB = polarPoint(cx, cy, rOut + 5, v);
        return `<line x1="${pA.x.toFixed(2)}" y1="${pA.y.toFixed(2)}" x2="${pB.x.toFixed(2)}" y2="${pB.y.toFixed(2)}" stroke="#526273" stroke-width="1.2" />`;
      }).join('')}

      <!-- Ticks y etiquetas principales (0, 50, 100, 150, 180+) -->
      ${majorTicks.map(t => {
        const pA = polarPoint(cx, cy, rOut, t.val);
        const pB = polarPoint(cx, cy, rOut + 7, t.val);
        const pLbl = polarPoint(cx, cy, rOut + 12, t.val);
        return `
          <line x1="${pA.x.toFixed(2)}" y1="${pA.y.toFixed(2)}" x2="${pB.x.toFixed(2)}" y2="${pB.y.toFixed(2)}" stroke="#141B22" stroke-width="1.4" />
          <text x="${(pLbl.x + t.dx).toFixed(1)}" y="${(pLbl.y + t.dy).toFixed(1)}" text-anchor="${t.anchor}" fill="#334150" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600">${t.text}</text>
        `;
      }).join('')}

      <!-- Lectura central numérica tabular -->
      <text x="${cx}" y="${cy - 30}" text-anchor="middle" fill="#141B22" font-family="JetBrains Mono, monospace" font-size="27" font-weight="700">${value.toFixed(1)} <tspan font-size="16" font-weight="600" fill="#334150">µg/m³</tspan></text>

      <!-- Diferencia respecto a Meta Norma Diaria (50 µg/m³) -->
      <g transform="translate(${cx}, ${cy - 6})">
        <polygon points="${triPoints}" transform="translate(${triX.toFixed(1)}, -4)" fill="${deltaColor}" />
        <text x="6" y="0" text-anchor="middle" fill="${deltaColor}" font-family="JetBrains Mono, monospace" font-size="13.5" font-weight="700">${deltaLabel}</text>
      </g>

      <text x="${cx}" y="${cy + 16}" text-anchor="middle" fill="#526273" font-size="10.5" font-weight="500">
        ${isOver ? 'Sobre Meta Norma Diaria (50 µg/m³)' : 'Bajo Meta Norma Diaria (50 µg/m³)'}
      </text>
    `;
  }

  function renderScatterPlot() {
    const svgEl = document.getElementById('h3-scatter-svg');
    if (!svgEl) return;

    const pts = (DATA.scatter || []).filter(p => scatterFilter === 'ALL' || p[2] === scatterFilter);
    const W = 620, H = 350, padL = 48, padR = 24, padT = 22, padB = 42;
    const plotW = W - padL - padR;
    const plotH = H - padT - padB;
    const maxM10 = 175, maxP25 = 140;

    const xFor = v => padL + (Math.min(maxM10, Math.max(0, v)) / maxM10) * plotW;
    const yFor = v => padT + plotH - (Math.min(maxP25, Math.max(0, v)) / maxP25) * plotH;

    const seasonColors = {
      'I': '#C85A17',
      'O': '#D97706',
      'P': '#2563EB',
      'V': '#1F7A4C'
    };

    const physLine = `M${xFor(0)},${yFor(0)} L${xFor(140)},${yFor(140)}`;
    const m1Line = `M${xFor(6)},${yFor(-3.7698 + 0.6989 * 6)} L${xFor(170)},${yFor(-3.7698 + 0.6989 * 170)}`;
    const frioLine = `M${xFor(4)},${yFor(-0.842 + 0.7318 * 4)} L${xFor(170)},${yFor(-0.842 + 0.7318 * 170)}`;

    svgEl.innerHTML = `
      ${[0, 25, 50, 80, 110, 140].map(v => `
        <line x1="${padL}" y1="${yFor(v)}" x2="${W - padR}" y2="${yFor(v)}" stroke="${v === 50 || v === 80 ? '#FCE8DB' : '#E6EAE0'}" />
        <text x="${padL - 8}" y="${yFor(v) + 4}" text-anchor="end" fill="#526273" font-family="JetBrains Mono, monospace" font-size="10">${v}</text>
      `).join('')}
      ${[0, 30, 60, 90, 120, 150, 175].map(v => `
        <line x1="${xFor(v)}" y1="${padT}" x2="${xFor(v)}" y2="${H - padB}" stroke="#E6EAE0" />
        <text x="${xFor(v)}" y="${H - 14}" text-anchor="middle" fill="#526273" font-family="JetBrains Mono, monospace" font-size="10">${v}</text>
      `).join('')}

      <polygon points="${xFor(0)},${yFor(0)} ${xFor(0)},${yFor(140)} ${xFor(140)},${yFor(140)}" fill="#FADBD8" opacity="0.28" />
      <text x="${xFor(12)}" y="${yFor(122)}" fill="#B81D13" font-size="9.5" font-weight="700">Zona Inconsistente (PM2.5 > MP10 · 32 días podados)</text>

      <path d="${physLine}" fill="none" stroke="#B81D13" stroke-width="1.4" stroke-dasharray="4,4" />
      <path d="${frioLine}" fill="none" stroke="#C85A17" stroke-width="2" stroke-dasharray="6,3" />
      <path d="${m1Line}" fill="none" stroke="#121A24" stroke-width="2.5" />

      <g opacity="0.78">
        ${pts.map(p => `
          <circle cx="${xFor(p[0]).toFixed(1)}" cy="${yFor(p[1]).toFixed(1)}" r="2.8" fill="${seasonColors[p[2]] || '#1B4D7E'}">
            <title>Fecha: ${p[4]} | MP10: ${p[0]} µg/m³ | PM2.5: ${p[1]} µg/m³ | CO: ${p[5]} mg/m³</title>
          </circle>
        `).join('')}
      </g>

      <g transform="translate(${xFor(simPoint.mp10)}, ${yFor(simPoint.pm25)})">
        <circle cx="0" cy="0" r="9" fill="none" stroke="#121A24" stroke-width="2" />
        <circle cx="0" cy="0" r="5" fill="#F59E0B" stroke="#121A24" stroke-width="1.5" />
        <rect x="${simPoint.mp10 > 120 ? -118 : 11}" y="-11" width="107" height="18" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#121A24" stroke-width="0.8" />
        <text x="${simPoint.mp10 > 120 ? -64.5 : 64.5}" y="1.5" text-anchor="middle" fill="#121A24" font-family="JetBrains Mono, monospace" font-size="9.5" font-weight="700">Sim (${simPoint.mp10}, ${simPoint.pm25.toFixed(1)})</text>
      </g>

      <text x="${(padL + W - padR) / 2}" y="${H - 2}" text-anchor="middle" fill="#334150" font-size="10.5" font-weight="600">Concentración Diaria MP10 (µg/m³N)</text>
    `;
  }

  function classifyGEC(pm25) {
    if (pm25 < 50) return { label: 'Bueno (0–49 µg/m³)', cls: 'badge-bueno' };
    if (pm25 < 80) return { label: 'Regular (50–79 µg/m³)', cls: 'badge-regular' };
    if (pm25 < 110) return { label: 'Alerta Ambiental (80–109 µg/m³)', cls: 'badge-alerta' };
    if (pm25 < 170) return { label: 'Preemergencia (110–169 µg/m³)', cls: 'badge-preemergencia' };
    return { label: 'Emergencia Ambiental (>= 170 µg/m³)', cls: 'badge-emergencia' };
  }

  function updateSimulator() {
    const mp10 = parseFloat(document.getElementById('sim-mp10')?.value || '45');
    const co = parseFloat(document.getElementById('sim-co')?.value || '0.65');
    const no2 = parseFloat(document.getElementById('sim-no2')?.value || '16.5');
    const o3 = parseFloat(document.getElementById('sim-o3')?.value || '18.0');
    const season = document.getElementById('sim-season')?.value || 'Invierno';
    const dayType = document.getElementById('sim-daytype')?.value || 'Laboral';

    const setOut = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    setOut('out-mp10', `${mp10.toFixed(0)} µg/m³`);
    setOut('out-co', `${co.toFixed(2)} mg/m³`);
    setOut('out-no2', `${no2.toFixed(1)} µg/m³`);
    setOut('out-o3', `${o3.toFixed(1)} µg/m³`);

    const dOto = season === 'Otoño' ? 1 : 0;
    const dInv = season === 'Invierno' ? 1 : 0;
    const dPri = season === 'Primavera' ? 1 : 0;
    const esFds = dayType === 'FDS' ? 1 : 0;

    const yM1 = Math.max(0.5, -3.7698 + 0.6989 * mp10);
    const yM2 = Math.max(0.5, -5.5178 + 0.6257 * mp10 + 7.0099 * co + 0.0306 * no2 + 0.0122 * o3);
    const yM3 = Math.max(0.5, -7.9286 + 0.6202 * mp10 + 4.7479 * co - 0.0760 * no2 - 0.0939 * o3 + 7.3959 * dOto + 8.8270 * dInv + 2.1609 * dPri + 1.7785 * esFds);
    const yMBIC = Math.max(0.5, -8.0426 + 0.6126 * mp10 + 4.3327 * co - 0.0855 * o3 + 7.3559 * dOto + 8.7724 * dInv + 2.1613 * dPri + 1.8398 * esFds);
    const lnY4 = -0.6957 + 0.9631 * Math.log(Math.max(1, mp10)) + 0.1689 * Math.log(Math.max(0.02, co)) + 0.4450 * dOto + 0.5321 * dInv;
    const yM4 = Math.exp(lnY4 + (0.3054 * 0.3054) / 2);

    const models = [
      { id: 'm1', short: 'M1 RLS Simple', metric: 'R² = 68.52% · Se = 6.060', name: 'M1 · RLS Simple (Solo MP<sub>10</sub>)', p: 1, r2: '68.52%', bic: '11,490.9', pred: yM1 },
      { id: 'm2', short: 'M2 RLM + Gases', metric: 'R² = 72.16% · Se = 5.701', name: 'M2 · RLM + Gases (MP<sub>10</sub>, CO, NO<sub>2</sub>, O<sub>3</sub>)', p: 4, r2: '72.16%', bic: '11,122.8', pred: yM2 },
      { id: 'm3', short: 'M3 RLM Completo', metric: 'R² = 82.90% · Se = 4.471', name: 'M3 · RLM Completo (8 Regresores)', p: 8, r2: '82.90%', bic: '9,603.35', pred: yM3 },
      { id: 'mbic', short: 'Modelo M* BIC (7 vars)', metric: 'R²_adj = 82.83% · Se = 4.469', name: 'M* · Óptimo Stepwise BIC (7 Vars · Sin NO<sub>2</sub>)', p: 7, r2: '82.87%', bic: '9,601.54', pred: yMBIC },
      { id: 'm4', short: 'M4 Log-Log Estacional', metric: 'RMSE = 3.860 µg/m³', name: 'M4 · Log-Log Estacional (Re-transformado)', p: 4, r2: '81.53%', bic: '-7,520.2*', pred: yM4 }
    ];

    const selectedModel = models.find(m => m.id === activeSimModel) || models[3];
    const gec = classifyGEC(selectedModel.pred);

    const gecBadge = document.getElementById('sim-gec-badge');
    if (gecBadge) {
      gecBadge.textContent = gec.label;
      gecBadge.className = 'badge-pill ' + gec.cls;
    }

    renderPPDAGauge(selectedModel.pred, selectedModel);

    const simTbody = document.getElementById('sim-models-tbody');
    if (simTbody) {
      simTbody.innerHTML = models.map(r => {
        const g = classifyGEC(r.pred);
        const isActive = r.id === selectedModel.id;
        return `
          <tr class="sim-model-row ${isActive ? 'sim-model-active' : ''}" data-sim-model="${r.id}" tabindex="0" role="button" aria-pressed="${isActive ? 'true' : 'false'}">
            <td>${r.name}</td>
            <td class="num">${r.p}</td>
            <td class="num">${r.r2}</td>
            <td class="num">${r.bic}</td>
            <td class="num"><strong>${r.pred.toFixed(2)} µg/m³</strong></td>
            <td><span class="badge-pill ${g.cls}">${g.label.split(' ')[0]}</span></td>
          </tr>
        `;
      }).join('');
    }

    simPoint = { mp10: mp10, pm25: selectedModel.pred };
    renderScatterPlot();
  }

  /* ------------------------------------------------------------------------
     7. TRAYECTORIA STEPWISE (FORWARD & BACKWARD CONVERGENCIA BIC)
     ------------------------------------------------------------------------ */
  const FORWARD_STEPS = [
    { step: 0, action: 'Modelo Nulo (Solo Intercepto β₀)', varName: '—', pVal: '—', p: 0, r2: 0.00, r2adj: 0.00, aic: 15157.65, bic: 15163.72, note: 'Punto de partida sin regresores explicativos.' },
    { step: 1, action: 'Ingresa MP<sub>10</sub> (F_in = 6,927.0)', varName: 'MP10', pVal: '< 10⁻¹⁶', p: 1, r2: 68.52, r2adj: 68.51, aic: 11478.75, bic: 11490.88, note: 'El acoplamiento gravimétrico explica el 68.52% de la varianza.' },
    { step: 2, action: 'Ingresa CO (Trazador leña)', varName: 'CO', pVal: '< 10⁻¹⁶', p: 2, r2: 72.16, r2adj: 72.14, aic: 11089.32, bic: 11107.52, note: 'Separa el humo de biomasa del polvo mineral.' },
    { step: 3, action: 'Ingresa D_Otoño', varName: 'D_Otoño', pVal: '< 10⁻¹⁶', p: 3, r2: 73.92, r2adj: 73.90, aic: 10882.67, bic: 10906.94, note: 'Captura el inicio del encendido de calefactores.' },
    { step: 4, action: 'Ingresa D_Invierno (Salto basal)', varName: 'D_Invierno', pVal: '< 10⁻¹⁶', p: 4, r2: 81.79, r2adj: 81.77, aic: 9741.31, bic: 9771.64, note: 'Reduce el BIC en >1,130 puntos por atrapamiento invernal.' },
    { step: 5, action: 'Ingresa D_Primavera', varName: 'D_Primavera', pVal: '< 10⁻¹⁶', p: 5, r2: 82.18, r2adj: 82.15, aic: 9674.31, bic: 9710.71, note: 'Ajusta la transición estacional respecto a Verano.' },
    { step: 6, action: 'Ingresa Es_FDS (Fin de Semana)', varName: 'Es_FDS', pVal: '< 10⁻¹⁶', p: 6, r2: 82.73, r2adj: 82.70, aic: 9576.32, bic: 9618.78, note: 'Ajusta el diferencial positivo intradomiciliario.' },
    { step: 7, action: 'Ingresa O<sub>3</sub> (ÓPTIMO GLOBAL BIC)', varName: 'O3', pVal: '5.05 × 10⁻⁷', p: 7, r2: 82.87, r2adj: 82.83, aic: 9553.01, bic: 9601.54, note: 'Mínimo global BIC (9,601.54). Converge con Backward.' },
    { step: 8, action: 'Evalúa NO<sub>2</sub> (Podado por BIC)', varName: 'NO2', pVal: '0.0125 (> 0.01)', p: 8, r2: 82.90, r2adj: 82.86, aic: 9548.75, bic: 9603.35, note: 'ΔR² = +0.03% no compensa penalización ln(n) = 8.07.' }
  ];

  function renderStepwiseTrajectory() {
    const svgEl = document.getElementById('stepwise-svg');
    const tbody = document.getElementById('stepwise-tbody');
    if (!svgEl || !tbody) return;

    const steps = FORWARD_STEPS.slice(1);
    const W = 600, H = 250, padL = 54, padR = 36, padT = 24, padB = 38;
    const plotW = W - padL - padR;
    const plotH = H - padT - padB;

    const minBIC = 9500, maxBIC = 11600;
    const xFor = i => padL + (i / (steps.length - 1)) * plotW;
    const yForBIC = v => padT + plotH - ((v - minBIC) / (maxBIC - minBIC)) * plotH;
    const yForR2 = v => padT + plotH - ((v - 65) / (85 - 65)) * plotH;

    const bicPath = steps.map((s, i) => `${i === 0 ? 'M' : 'L'}${xFor(i).toFixed(1)},${yForBIC(s.bic).toFixed(1)}`).join(' ');
    const r2Path = steps.map((s, i) => `${i === 0 ? 'M' : 'L'}${xFor(i).toFixed(1)},${yForR2(s.r2adj).toFixed(1)}`).join(' ');

    svgEl.innerHTML = `
      ${[9600, 10100, 10600, 11100, 11500].map(v => `
        <line x1="${padL}" y1="${yForBIC(v)}" x2="${W - padR}" y2="${yForBIC(v)}" stroke="#E6EAE0" />
        <text x="${padL - 6}" y="${yForBIC(v) + 4}" text-anchor="end" fill="#1B4D7E" font-family="JetBrains Mono, monospace" font-size="9.5">${v}</text>
      `).join('')}

      <path d="${bicPath}" fill="none" stroke="#1B4D7E" stroke-width="2.5" />
      <path d="${r2Path}" fill="none" stroke="#C85A17" stroke-width="2.2" stroke-dasharray="5,3" />

      ${steps.map((s, i) => {
        const isOpt = s.step === 7;
        return `
          <g transform="translate(${xFor(i)}, 0)">
            <circle cx="0" cy="${yForBIC(s.bic)}" r="${isOpt ? 6.5 : 4}" fill="${isOpt ? '#1F7A4C' : '#1B4D7E'}" stroke="#fff" stroke-width="1.5">
              <title>Paso ${s.step} (+${s.varName}): BIC = ${s.bic} | R²_adj = ${s.r2adj}%</title>
            </circle>
            <circle cx="0" cy="${yForR2(s.r2adj)}" r="3.5" fill="#C85A17" />
            ${isOpt ? `<text x="-10" y="${yForBIC(s.bic) - 11}" text-anchor="middle" fill="#1F7A4C" font-size="9.5" font-weight="700">Óptimo BIC (9,601.5)</text>` : ''}
            <text x="0" y="${H - 12}" text-anchor="middle" fill="#334150" font-family="JetBrains Mono, monospace" font-size="9.2">P${s.step}:${s.varName.replace('D_', '')}</text>
          </g>
        `;
      }).join('')}
    `;

    tbody.innerHTML = FORWARD_STEPS.map(s => `
      <tr style="${s.step === 7 ? 'background-color: #E3F3EA; font-weight: 600;' : (s.step === 8 ? 'background-color: #FCE8DB;' : '')}">
        <td class="num">P${s.step}</td>
        <td>
          <strong>${s.action}</strong>
          <div style="font-size: 0.74rem; color: var(--ink-muted);">${s.note}</div>
        </td>
        <td class="num">${s.p}</td>
        <td class="num">${s.r2adj.toFixed(2)}%</td>
        <td class="num"><strong>${s.bic.toFixed(2)}</strong></td>
      </tr>
    `).join('');
  }

  /* ------------------------------------------------------------------------
     8. TABLA DE CONTINGENCIA H4 Y BUSCADOR DE LAS 13 PRUEBAS DE HIPÓTESIS
     ------------------------------------------------------------------------ */
  function renderMasterTestsTable() {
    const searchVal = (document.getElementById('test-search-input')?.value || '').toLowerCase().trim();
    const activeCat = document.querySelector('[data-test-cat].active')?.getAttribute('data-test-cat') || 'all';
    const tbody = document.getElementById('master-tests-tbody');
    if (!tbody) return;

    const filtered = HYPOTHESIS_TESTS.filter(t => {
      const matchCat = activeCat === 'all' || t.cat === activeCat;
      const matchText = !searchVal ||
        t.name.toLowerCase().includes(searchVal) ||
        t.h0h1.toLowerCase().includes(searchVal) ||
        t.stat.toLowerCase().includes(searchVal) ||
        t.note.toLowerCase().includes(searchVal);
      return matchCat && matchText;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; padding: 1.5rem; color: var(--ink-muted);">
            No se encontraron pruebas de hipótesis que coincidan con el filtro aplicado. Usa el botón "Todas (13)" para restablecer la matriz.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = filtered.map(t => `
      <tr>
        <td class="num"><strong>#${t.num}</strong></td>
        <td><strong>${t.name}</strong></td>
        <td>${t.h0h1}</td>
        <td class="num"><code>${t.math}</code></td>
        <td class="num">${t.stat}</td>
        <td>
          <span class="badge-pill ${t.badge}">${t.decision}</span>
          <div style="font-size: 0.75rem; color: var(--ink-muted); margin-top: 0.2rem;">${t.note}</div>
        </td>
      </tr>
    `).join('');
  }

  /* ------------------------------------------------------------------------
     9. GALERÍA CIENTÍFICA DE ALTA RESOLUCIÓN
     ------------------------------------------------------------------------ */
  function initFigureGallery() {
    const listEl = document.getElementById('figure-selector-list');
    const imgEl = document.getElementById('figure-stage-img');
    const titleEl = document.getElementById('figure-stage-title');
    const descEl = document.getElementById('figure-stage-desc');
    const pathEl = document.getElementById('figure-stage-path');
    if (!listEl || !imgEl) return;

    function selectFigure(fig) {
      listEl.querySelectorAll('.figure-item-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-fig-id') === fig.id);
      });
      imgEl.src = fig.path;
      imgEl.alt = fig.title;
      if (titleEl) titleEl.textContent = fig.title;
      if (descEl) descEl.textContent = fig.desc;
      if (pathEl) pathEl.textContent = fig.path;
    }

    listEl.innerHTML = SCIENTIFIC_FIGURES.map((f, idx) => `
      <button type="button" class="figure-item-btn ${idx === 0 ? 'active' : ''}" data-fig-id="${f.id}">
        <span class="figure-item-title">${f.title}</span>
        <span class="figure-item-sub">${f.sub}</span>
      </button>
    `).join('');

    listEl.addEventListener('click', e => {
      const btn = e.target.closest('.figure-item-btn');
      if (!btn) return;
      const fig = SCIENTIFIC_FIGURES.find(f => f.id === btn.getAttribute('data-fig-id'));
      if (fig) selectFigure(fig);
    });

    selectFigure(SCIENTIFIC_FIGURES[0]);
  }

  /* ------------------------------------------------------------------------
     10. INICIALIZACIÓN DE EVENTOS Y OBSERVADOR DE SECCIONES
     ------------------------------------------------------------------------ */
  function init() {
    document.querySelectorAll('.regime-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        setRegime(btn.getAttribute('data-regime'));
      });
    });
    setRegime('global');

    document.querySelectorAll('[data-h1-view]').forEach(btn => {
      btn.addEventListener('click', () => {
        renderH1Chart(btn.getAttribute('data-h1-view'));
      });
    });
    renderH1Chart('monthly');

    document.querySelectorAll('[data-scatter-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        scatterFilter = btn.getAttribute('data-scatter-filter');
        document.querySelectorAll('[data-scatter-filter]').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-scatter-filter') === scatterFilter);
        });
        renderScatterPlot();
      });
    });

    const clearPresetActive = () => {
      document.querySelectorAll('[data-sim-preset]').forEach(b => b.classList.remove('active'));
    };

    ['sim-mp10', 'sim-co', 'sim-no2', 'sim-o3', 'sim-season', 'sim-daytype'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => { clearPresetActive(); updateSimulator(); });
        el.addEventListener('change', () => { clearPresetActive(); updateSimulator(); });
      }
    });

    document.querySelectorAll('[data-sim-preset]').forEach(btn => {
      btn.addEventListener('click', () => {
        const p = btn.getAttribute('data-sim-preset');
        const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
        clearPresetActive();
        btn.classList.add('active');
        if (p === 'invierno-critico') {
          setVal('sim-mp10', 118); setVal('sim-co', 2.15); setVal('sim-no2', 32.0); setVal('sim-o3', 6.0);
          setVal('sim-season', 'Invierno'); setVal('sim-daytype', 'Laboral');
        } else if (p === 'preemergencia') {
          setVal('sim-mp10', 158); setVal('sim-co', 2.95); setVal('sim-no2', 42.0); setVal('sim-o3', 4.0);
          setVal('sim-season', 'Invierno'); setVal('sim-daytype', 'FDS');
        } else if (p === 'domingo-frio') {
          setVal('sim-mp10', 92); setVal('sim-co', 1.75); setVal('sim-no2', 11.5); setVal('sim-o3', 8.0);
          setVal('sim-season', 'Invierno'); setVal('sim-daytype', 'FDS');
        } else if (p === 'verano-ventilado') {
          setVal('sim-mp10', 18); setVal('sim-co', 0.18); setVal('sim-no2', 12.0); setVal('sim-o3', 36.0);
          setVal('sim-season', 'Verano'); setVal('sim-daytype', 'Laboral');
        } else if (p === 'centroide') {
          setVal('sim-mp10', 29); setVal('sim-co', 0.58); setVal('sim-no2', 16.5); setVal('sim-o3', 24.2);
          setVal('sim-season', 'Otoño'); setVal('sim-daytype', 'Laboral');
        }
        updateSimulator();
      });
    });

    const simTbody = document.getElementById('sim-models-tbody');
    if (simTbody) {
      simTbody.addEventListener('click', e => {
        const row = e.target.closest('[data-sim-model]');
        if (!row) return;
        activeSimModel = row.getAttribute('data-sim-model');
        updateSimulator();
      });
      simTbody.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          const row = e.target.closest('[data-sim-model]');
          if (!row) return;
          e.preventDefault();
          activeSimModel = row.getAttribute('data-sim-model');
          updateSimulator();
        }
      });
    }
    updateSimulator();

    renderStepwiseTrajectory();

    const searchInput = document.getElementById('test-search-input');
    if (searchInput) searchInput.addEventListener('input', renderMasterTestsTable);
    document.querySelectorAll('[data-test-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-test-cat]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderMasterTestsTable();
      });
    });
    renderMasterTestsTable();

    initFigureGallery();

    const sections = document.querySelectorAll('.analysis-section');
    const navLinks = document.querySelectorAll('.rail-nav-link');
    if ('IntersectionObserver' in window && sections.length) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              link.classList.toggle('active', link.getAttribute('href') === '#' + id);
            });
          }
        });
      }, { rootMargin: '-20% 0px -65% 0px' });
      sections.forEach(s => obs.observe(s));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
