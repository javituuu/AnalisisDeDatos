# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Aplicación web HTML/CSS/JS estática (autocontenida, rápida de abrir sin servidor complejo).

## Users

1. **Comisión Evaluadora y Cuerpo Docente (Prof. Danilo Gómez Correa, Facultad de Ingeniería, Universidad del Desarrollo — Campus Concepción):** Evalúan el rigor metodológico, la validez de los contrastes de hipótesis paramétricos y no paramétricos, la especificación econométrica de Regresión Lineal Múltiple (EMCO con errores robustos HC3), la auditoría de los 6 supuestos de Gauss-Markov y la selección óptima de variables Stepwise (Backward y Forward) del Certamen 2.
2. **Expositores / Investigadores (Javier Benavides Ortega y Cristóbal Montoya Toledo):** Utilizan la aplicación como soporte interactivo de defensa ejecutiva y demostración científica en vivo.
3. **Analistas Ambientales y Tomadores de Decisión (SINCA / MMA / PPDA Gran Concepción):** Consultan la evidencia empírica de largo plazo (2009–2026) sobre acoplamiento gravimétrico $\text{PM}_{2.5}\text{--}\text{MP}_{10}$, estacionalidad térmica, desacople del tráfico vehicular y episodios críticos normativos (D.S. N° 6/2019).

## Product Purpose

Transformar el estudio estadístico inferencial y econométrico de $17.2\text{ años}$ ($893,398$ registros brutos del SINCA, $n = 3,312$ días validados de $\text{PM}_{2.5}$, $n = 3,280$ días pareados físicamente consistentes y $n = 3,185$ días multivariables) de la Estación Kingston College en una interfaz interactiva de presentación ejecutiva y defensa académica. El éxito se mide por la claridad inmediata de los hallazgos estadísticos, la precisión matemática sin errores de los 13 contrastes de hipótesis y 4 modelos EMCO, y una dirección visual cuyas paletas e ilustraciones reflejen fielmente la física atmosférica de la cuenca del Gran Concepción (combustión invernal de biomasa, inversiones térmicas de subsidencia y alertas del PPDA).

## Positioning

A diferencia de los reportes descriptivos estáticos del SINCA o de un dashboard genérico de métricas aisladas, esta plataforma articula un flujo completo de inferencia estadística dual (Welch / rangos), modelado econométrico multivariable (M1–M4 con corrección White-MacKinnon HC3), selección algorítmica Stepwise guiada por BIC y simulación interactiva de episodios críticos sobre casi dos décadas de datos validados física e instrumentalmente ($\text{PM}_{2.5}/\text{MP}_{10} \le 1.0$).

## Operating Context

Utilizado durante la defensa académica e inspección técnica del Certamen 2 de *Análisis de Datos e Inferencia Estadística* (UDD Concepción, noviembre de 2026) en navegador de escritorio y proyección de sala, así como revisión autónoma local abriendo el archivo HTML directamente sin requerir servidores backend ni dependencias complejas.

## Capabilities and Constraints

- **Interactividad estadística real:** Exploración del embudo de higiene de datos (4 etapas SMA 2024), simulador/calculadora de predicción EMCO en vivo (comparando M1 RLS, M2 Gases, M3 Completo, M4 Log-Log y Modelo Parsimonioso Stepwise de 7 variables), explorador de las 4 hipótesis centrales ($H_1$ Estacionalidad ANOVA/Kruskal-Wallis/Tukey HSD, $H_2$ Invarianza semanal $\text{PM}_{2.5}$ vs. caída del $-36.3\%$ en $\text{NO}_2$, $H_3$ Acoplamiento gravimétrico $\hat{\beta}_1 \approx 0.70$, $H_4$ Contingencia PPDA $\chi^2$), diagnóstico de los 6 supuestos de Gauss-Markov y cuadro maestro interactivo de las 13 pruebas de hipótesis.
- **Fidelidad de datos:** Todos los estadísticos, valores-$p$, grados de libertad, tamaños del efecto ($d$ de Cohen, $r_{rb}$, $\eta^2$, $\epsilon^2$, $V$ de Cramér) y coeficientes de regresión deben coincidir exactamente con la investigación oficial de Kingston College (2009–2026).
- **Autocontenido y libre de errores:** HTML/CSS/JS estático, carga instantánea, gráficos vectoriales/interactivos nítidos más integración curada de las figuras científicas del estudio e ilustraciones atmosféricas a medida.

## Evidence on Hand

- **Datasets oficiales SINCA (`Datos/`):** 16 archivos CSV horarios y diarios consolidados (`MP2_5`, `MP10`, `CO`, `NO2`, `NO`, `NOX`, `O3`, `SO2`; $893,398$ registros brutos entre agosto de 2009 y octubre de 2026).
- **Código y procesamiento estadístico:** `scripts/ejecutar_analisis_avance1.py`, `notebooks/certamen_2_mejores_variables.ipynb`, `notebooks/avance_2_adelantado.ipynb`.
- **Informes y artículos científicos:** `docs/informe_estadistico_certamen_2.md` y `latex/paper_certamen2/main.tex`.
- **Figuras científicas generadas (`assets/figuras/`):** 11 figuras PNG de alta resolución (`fig1_completitud_temporal.png` a `fig10_diagnostico_residuos_emco.png`, `seleccion_variables_backward_forward.png`).

## Product Principles

1. **La física atmosférica gobierna el color y la forma:** La paleta cromática no es decorativa; codifica el contraste térmico entre el régimen frío dominado por aerosoles pirogénicos de biomasa (ámbar humo, terracota hollín, carmesí preemergencia) y el régimen cálido de ventilación costera del Biobío (azul sinóptico, verde normativo D.S. N° 12/2011).
2. **Doble rigor inferencial visible:** Ninguna media se presenta sin su contraparte robusta (mediana/RIC), ningún valor-$p$ sin su tamaño del efecto ($d, \eta^2, V$), y ningún estimador MCO sin su diagnóstico de Gauss-Markov y error estándar robusto $\text{HC3}$.
3. **Narrativa ejecutiva verificable al instante:** Cada afirmación de política pública (como la inocuidad de la restricción vehicular laboral frente al $\text{PM}_{2.5}$) está conectada directamente a su prueba estadística, su gráfico interactivo y su respaldo bibliográfico (Cereceda-Balic et al., 2020; Saide et al., 2016; Gramsch et al., 2021).
4. **Arquitectura operativa limpia para defensa en vivo:** Navegación directa por secciones e hipótesis, controles táctiles claros, tipografía tabular de alta legibilidad para cifras y ecuaciones, y cero fricción técnica al abrir el archivo local.
