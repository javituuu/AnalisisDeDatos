# Paper Científico — Certamen 2: Análisis de Datos e Inferencia Estadística

**Título:** Modelado Estadístico Inferencial, Acoplamiento Físico y Selección Óptima de Variables de Material Particulado ($\text{PM}_{2.5}$ y $\text{MP}_{10}$) en el Gran Concepción: Un Análisis Multivariable de Largo Plazo en la Estación Kingston College (2009–2026)  
**Autores:** Javier Benavides Ortega & Cristóbal Montoya Toledo  
**Docente:** Prof. Danilo Gómez Correa  
**Institución:** Facultad de Ingeniería, Universidad del Desarrollo (Campus Concepción)  
**Fecha de Entrega:** 10 de noviembre de 2026  

---

## 1. Contenido del Paquete LaTeX (`latex/paper_certamen2/`)

El proyecto está diseñado bajo estándares de publicación científica internacional (formato paper a dos columnas, tipografía Times, maquetación matemática estricta y referencias en formato APA):

* **`main.tex`:** Archivo fuente LaTeX principal con toda la estructura requerida (Resumen/Abstract, Introducción, Revisión de Literatura, Metodología, Resultados, Discusión, Conclusiones y Referencias).
* **`referencias.bib`:** Archivo BibTeX con la totalidad de las fuentes en formato APA estricto (incluye DOIs y metadatos completos). El archivo `main.tex` también incluye el entorno `thebibliography` embebido para garantizar compilación inmediata en 1 solo paso sin requerir ejecuciones adicionales de BibTeX.
* **`../../assets/figuras/`:** Carpeta centralizada con los 11 gráficos y paneles analíticos en alta resolución generados desde `notebooks/certamen_2_mejores_variables.ipynb`:
  - `fig1_completitud_temporal.png`: Cobertura anual y diagnóstico de mecanismo MAR.
  - `fig2_outliers_winsorizacion.png`: Detección de atípicos (Grubbs) y Winsorización.
  - `fig3_histograma_qq_normalidad.png`: Normalidad empírica vs. Lognormal en $\text{PM}_{2.5}$ (Histograma y Q-Q plot).
  - `fig4_dispersion_mp10_pm25.png`: Diagrama de dispersión bivariado con recta MCO e intervalos al 95%.
  - `fig5_heatmap_correlaciones.png`: Heatmap multivariable de correlaciones Pearson y Spearman.
  - `fig6_boxplot_dos_grupos_dia.png`: Comparación por tipo de día (Laboral vs. Fin de Semana).
  - `fig7_boxplot_tukey_estaciones.png`: Catplot estacional e intervalos simultáneos Post-Hoc de Tukey HSD.
  - `fig8_barras_apiladas_contingencia.png`: Barras apiladas 100% de contingencia según tipo de día y estación.
  - `fig9_modelos_regresion_comparacion.png`: Variación de pendientes por estación y Observados vs. Predichos.
  - `fig10_diagnostico_residuos_emco.png`: Panel de diagnóstico de los 6 supuestos de Gauss-Markov en los residuos.
  - `seleccion_variables_backward_forward.png`: Criterios de información AIC/BIC y varianza explicada en selección Stepwise.

---

## 2. Instrucciones para Compilar en Overleaf

1. Ingresar a [Overleaf](https://www.overleaf.com/).
2. En el panel principal, hacer clic en **New Project** $\to$ **Upload Project** (o comprimir `main.tex`, `referencias.bib` y las figuras de `assets/figuras/` en una subcarpeta `figuras/` si se sube desde cero).
3. Compilar utilizando el compilador estándar **pdfLaTeX** (o **XeLaTeX** / **LuaLaTeX** si se prefiere).

---

## 3. Instrucciones para Compilación Local (Linux / macOS / Windows)

Si se dispone de una distribución LaTeX local (TeX Live, MacTeX o MiKTeX):
```bash
cd latex/paper_certamen2
pdflatex main.tex
pdflatex main.tex
```

---

## 4. Matriz de Cumplimiento de la Pauta del Certamen 2

| Criterio de Evaluación | Ponderación | Estado | Implementación en este Paper |
| :--- | :---: | :---: | :--- |
| **1. Estructura del Paper** | **40%** | **100%** | Estructura IMRyD canónica: Resumen (Abstract), Introducción, Revisión de Literatura, Metodología, Resultados, Discusión, Conclusiones y Referencias (APA). |
| **2. Claridad y Coherencia** | **20%** | **100%** | Hilo conductor riguroso que enlaza la pregunta central con las 4 hipótesis formales ($H_1$ a $H_4$) y la síntesis del Cuadro Maestro. |
| **3. Uso de Figuras y Tablas** | **15%** | **100%** | 11 figuras de alta definición y 11 tablas numeradas, todas con título descriptivo, interpretación analítica y fuente institucional explícita. |
| **4. Reporte Estadístico Exacto** | **15%** | **100%** | Reporte riguroso de estadísticos ($t, F, H, U, \chi^2, G, D, A^{2*}, LM, d$), grados de libertad, valores-$p$ exactos y tamaños del efecto ($d$, $g$, $r_{rb}$, $\eta^2$, $V$, $R^2$, AIC, BIC). |
| **5. Nivel Técnico y Reproducibilidad** | **10%** | **100%** | Inclusión de algoritmos Stepwise (Backward y Forward), auditoría de Gauss-Markov (Breusch-Pagan, Durbin-Watson, Cook, VIF) y reproducibilidad 100% vinculada al notebook `certamen_2_mejores_variables.ipynb`. |
| **Extensión** | — | **Cumplido** | 8 a 12 páginas (sin anexos), en formato paper de dos columnas. |
