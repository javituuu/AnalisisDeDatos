# Presentación LaTeX Beamer — Avance 2 (`avance_2_adelantado.ipynb`)

* **Título:** Modelado Estadístico Inferencial y Predictivo de Material Particulado ($MP_{10}$ y $PM_{2.5}$) en la Estación Kingston College (2009–2026)
* **Integrantes:** Javier Benavides Ortega & Cristóbal Montoya Toledo
* **Docente:** Prof. Danilo Gómez Correa (Universidad del Desarrollo)
* **Duración objetivo:** 15 a 20 minutos (21 diapositivas en formato panorámico 16:9, diseño académico limpio).

---

## 1. Características Principales de la Presentación

1. **Estructura Optimizada (21 Diapositivas):**
   - Se retiró la diapositiva de "Hoja de Ruta" para entrar directamente en materia.
   - Se eliminaron las etiquetas de expositores en subtítulos (`Expositor 1 / Expositor 2`), permitiendo una presentación fluida y adaptable.
   - Se removieron todas las menciones a nombres de archivos PDF/apuntes del profesor (`EDA_5_Etapas.pdf`, `Hipotesis.pdf`, `Bondad_de_Ajuste.pdf`, `ANOVA_ML.pdf`, `RLM.pdf`, números de diapositivas), dejando un formato formal y autocontenido.

2. **Formulación Dual de Hipótesis ($H_0$ y $H_1$) en Cada Prueba:**
   - **Bloque Ámbar (`alertblock`):** Enunciado en **Texto Natural**, explicando física y ambientalmente el *status quo* ($H_0$) y el efecto investigado ($H_1$).
   - **Bloque Verde (`exampleblock`):** Formulación en **Notación Matemática**, con parámetros poblacionales, estadísticos de prueba, distribuciones teóricas bajo $H_0$, regiones de rechazo a nivel $\alpha = 0.05$ y valores-$p$.
   - **Diapositiva 20:** Cuadro Maestro Oficial con las 13 pruebas del estudio consolidadas lado a lado.

3. **Prevención de Desbordes y Formato Visual:**
   - Diseñado con clase `[aspectratio=169, 9pt]`, márgenes balanceados y escala visual controlada para figuras y tablas.
   - Toda la información y recuadros son visibles sin cortes ni superposiciones.

---

## 2. Mapa de las 21 Diapositivas

| N° | Diapositiva | Contenido Principal | Pruebas / Hipótesis |
|---|---|---|---|
| **1** | Portada | Título institucional UDD, autores y nota metodológica | — |
| **2** | Contexto Físico y Vacío | $PM_{2.5} \subseteq MP_{10}$, literatura y corpus de 893.398 filas | — |
| **3** | Pregunta e Hipótesis Central | Pregunta de investigación y formulación dual central | Hipótesis Central (Dual) |
| **4** | Etapas 1 y 2 del EDA | Estadísticos descriptivos, Regla de Sturges ($k=13$) y Dummies ($k-1$) | — |
| **5** | Etapa 3 del EDA (Nulos) | MCAR vs. MAR y justificación de no imputar con media | — |
| **6** | Etapa 4 del EDA (Atípicos) | Test de Grubbs ($G = 9.87$), MAD y retención física | **Test 1:** Grubbs |
| **7** | Etapa 5.1 (Normalidad) | Pruebas KS ($D=0.164$) y Anderson-Darling ($A^{2*}=151.16$), Lognormal | **Tests 2 y 3:** KS y AD |
| **8** | Etapa 5.2A (Correlación) | Pearson ($r=0.829, t=84.98$) y Spearman ($r_s=0.777$) | **Tests 4 y 5:** Pearson y Spearman |
| **9** | Etapa 5.2B (Gases) | Matriz multivariada: co-emisión con $CO$, $NO_2$ y relación inversa con $O_3$ | — |
| **10** | Etapa 5.3A (Dos Grupos) | Comparación Laboral vs. Fin de Semana ($t$-Welch y Mann-Whitney) | **Test 9:** $t$-Welch / Mann-Whitney |
| **11** | Etapa 5.3B (Estacionalidad) | ANOVA 1 Factor ($F=353.97, \eta^2=24.3\%$) y Kruskal-Wallis ($H=942.29$) | **Tests 10 y 12:** ANOVA y KW |
| **12** | Etapa 5.3C (Post-Hoc) | Tukey HSD ($q=3.633$): Invierno/Otoño duplican a Verano/Primavera | **Test 11:** Tukey HSD |
| **13** | Etapa 5.4 (Categórica) | Tabla de contingencia y Test $\chi^2$ ($p=0.719, V=0.02$) | **Test 13:** Chi-cuadrado Independencia |
| **14** | Sección 6 (Modelos EMCO) | Especificación de 4 modelos y Test ANOVA Global ($F_c$) | **Test 6:** Significancia Global Regresión |
| **15** | Sección 6 (Comparación) | Tabla multimétrica ($R^2, R_a^2, S_e, RMSE, MAE, AIC, BIC$) y Cambio $F$ | **Test 8:** Cambio $F$ Anidado |
| **16** | Sección 6 (Visualización) | Variación de pendiente estacional y Observados vs. Predichos ($Y$ vs $\hat{Y}$) | — |
| **17** | Sección 6 (Inferencia $\beta_j$) | Coeficientes individuales, IC 95\%, significancia $t$ y multicolinealidad (VIF) | **Test 7:** Test $t$ Individual Parcial |
| **18** | Sección 6 (Supuestos) | Auditoría de los supuestos: Breusch-Pagan, Durbin-Watson, Cook | Supuestos Gauss-Markov / DW / BP |
| **19** | Sección 6 (Residuos) | Diagnóstico gráfico 4 paneles: simetría residual y estabilización Log-Log | — |
| **20** | Cuadro Maestro de Hipótesis | Matriz consolidadora oficial de las 13 pruebas (texto, notación, valor-$p$) | Síntesis 13 Contrastes |
| **21** | Conclusiones y Discusión | Respuestas a la pregunta, limitaciones e implicancias prácticas PPDA | — |

---

## 3. Guion de Exposición Sugerido (15–20 Minutos)

* **Bloque 1: Motivación, Fundamento Físico y EDA Univariado/Bivariado (Diapositivas 1 a 9 | ~7–8 min):**
  - Saludo, presentación del tema y mención al rigor metodológico dual en las hipótesis.
  - Fundamento físico ($PM_{2.5} \subset MP_{10}$ y estancamiento atmosférico invernal) y magnitud del corpus (17,2 años, 893.398 filas).
  - Pregunta de investigación y contraste de la Hipótesis Central ($H_0$ vs $H_1$).
  - Resumen univariado (media $14.19$ vs mediana $11.0$, Sturges $k=13$, codificación dummy $k-1$).
  - Tratamiento de datos faltantes (MCAR vs MAR, no imputar con media).
  - Atípicos y Test de Grubbs ($G = 9.87$, retención de episodios reales).
  - Normalidad y transformación logarítmica (KS, AD, simetría con $\ln PM_{2.5}$).
  - Correlación con $MP_{10}$ ($r = 0.829$) y gases trazadores ($CO$ positivo, $O_3$ inverso).

* **Bloque 2: Contrastes de Grupos, Modelado EMCO e Inferencia (Diapositivas 10 a 17 | ~6–7 min):**
  - Invarianza al tipo de día ($t$-Welch $p = 0.382$, Mann-Whitney $p = 0.335$): el particulado fino no disminuye el fin de semana.
  - Estacionalidad marcada: ANOVA ($F = 353.97, \eta^2 = 24.3\%$), Kruskal-Wallis ($H = 942.29$) y Tukey HSD (Invierno/Otoño duplican a Verano/Primavera).
  - Independencia de alertas ambientales respecto al tipo de día ($\chi^2 = 1.345, p = 0.719$).
  - Modelado EMCO: del Modelo 1 ($R^2 = 68.5\%$) al Modelo 3 ($R^2 = 82.9\%$, $RMSE = 4.47\,\mu\text{g/m}^3$) y Modelo 4 Log-Log ($RMSE = 3.86\,\mu\text{g/m}^3$).
  - Prueba de Cambio $F$ anidado ($F = 138.92$ y $F = 498.44$, altamente significativos).
  - Inferencia individual: significancia de $MP_{10}$, $CO$ ($t_c = 14.32$) y saltos estacionales; ausencia de multicolinealidad ($\text{VIF} \le 2.14$).

* **Bloque 3: Auditoría de Supuestos, Síntesis y Conclusiones (Diapositivas 18 a 21 | ~3–4 min):**
  - Diagnóstico de supuestos: linealidad cumplida, reducción de heterocedasticidad en Log-Log ($-86\%$), autocorrelación serial ($DW = 0.735$), simetría residual ($k_s = -0.36$) y distancia de Cook máxima $< 0.12$.
  - Cuadro Maestro de las 13 hipótesis: evidencia convergente sobre la co-emisión de leña y la estacionalidad invernal.
  - Implicancias prácticas: capacidad de reconstruir monitores finos con $R^2 > 82\%$ y orientación para políticas públicas (priorizar recambio de calefactores residenciales sobre restricciones vehiculares).

---

## 4. Instrucciones para Compilar en Overleaf

1. Ingresar a [Overleaf](https://www.overleaf.com/).
2. Crear un nuevo proyecto haciendo clic en **New Project** $\to$ **Upload Project**.
3. Seleccionar el archivo ZIP generado: **`presentacion_avance2_beamer.zip`**.
4. Overleaf detectará `presentacion_avance2.tex` y compilará directamente con el motor estándar `pdfLaTeX`.
5. Si deseas compilar en tu entorno local con LaTeX instalado:
   ```bash
   pdflatex presentacion_avance2.tex
   pdflatex presentacion_avance2.tex
   ```
