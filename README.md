# Análisis de Datos e Inferencia Estadística — Estación Kingston College (SINCA 2009–2026)

Repositorio oficial del proyecto de estudio estadístico inferencial y econométrico sobre material particulado ($\text{PM}_{2.5}$ y $\text{MP}_{10}$) en la Estación Kingston College (Gran Concepción, Región del Biobío).

## Estructura del Repositorio

```text
.
├── index.html                  # Observatorio web interactivo (abrir directo en navegador)
├── assets/                     # Recursos estáticos del observatorio web
│   ├── app.js                  # Lógica estadística, simulador EMCO y gráficas interactivas
│   ├── styles.css              # Hoja de estilos
│   ├── kingston_data.js        # Series consolidadas para ejecución local sin servidor
│   ├── cuenca_concepcion_sinoptica.jpg
│   └── figuras/                # 11 láminas oficiales usadas por la web y LaTeX
├── Datos/                      # 16 datasets oficiales SINCA (horarios y diarios, CSV)
├── notebooks/                  # Notebooks de análisis reproducible (.ipynb)
│   ├── avance_1.ipynb
│   ├── avance_2_adelantado.ipynb
│   └── certamen_2_mejores_variables.ipynb
├── scripts/                    # Scripts auxiliares de análisis
│   └── ejecutar_analisis_avance1.py
├── latex/                      # Fuentes LaTeX de entregas académicas
│   ├── paper_certamen2/        # Artículo científico (main.tex, referencias.bib)
│   └── presentacion_avance2/   # Presentación Beamer (presentacion_avance2.tex)
└── docs/                       # Informes, documentación de diseño y referencias PDF
    ├── informe_estadistico_certamen_2.md
    ├── diseno/                 # DESIGN.md y PRODUCT.md del observatorio web
    └── referencias/            # Documentación normativa y bibliografía PDF
```

## Uso Rápido

- **Observatorio Web:** Abrir [`index.html`](index.html) directamente en el navegador o servir la raíz con un servidor estático.
- **Notebooks:** Ejecutar cualquiera de los cuadernos en [`notebooks/`](notebooks/) (detectan automáticamente `Datos/` desde la raíz o desde `notebooks/`).
- **LaTeX:** Compilar `latex/paper_certamen2/main.tex` o `latex/presentacion_avance2/presentacion_avance2.tex` con `pdflatex` (toman las figuras directamente desde `assets/figuras/`).
