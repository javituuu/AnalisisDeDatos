---
name: Observatorio Estadístico Kingston College (SINCA)
description: Atlas sinóptico y monografía econométrica interactiva para el análisis de material particulado (PM2.5 y MP10) en la cuenca del Gran Concepción (2009–2026).
colors:
  synoptic-blue: "#1B4D7E"
  synoptic-deep: "#123659"
  synoptic-soft: "#DCE8F3"
  biomass-amber: "#C85A17"
  biomass-deep: "#9E430B"
  biomass-soft: "#F9E6D8"
  coastal-rail: "#121A24"
  coastal-rail-elevated: "#1A2533"
  mineral-canvas: "#F3F4EF"
  surface-white: "#FFFFFF"
  surface-subtle: "#EAECE4"
  ink-primary: "#141B22"
  ink-secondary: "#334150"
  ink-muted: "#526273"
  border-hairline: "#D5D9CE"
  gec-bueno: "#1F7A4C"
  gec-regular: "#9A6B00"
  gec-alerta: "#C85A17"
  gec-preemergencia: "#B81D13"
  gec-emergencia: "#5C0E28"
typography:
  display:
    fontFamily: "Newsreader, C059, Nimbus Roman, Georgia, serif"
    fontSize: "1.65rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Newsreader, C059, Nimbus Roman, Georgia, serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Source Sans 3, iA Writer Quattro S, Noto Sans, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Source Sans 3, iA Writer Quattro S, Noto Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "JetBrains Mono, JetBrainsMono Nerd Font, iA Writer Mono S, monospace"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  xs: "3px"
  sm: "6px"
  md: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  regime-button:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.xs}"
    padding: "6px 12px"
  regime-button-active-frio:
    backgroundColor: "{colors.biomass-amber}"
    textColor: "#FFFFFF"
    rounded: "{rounded.xs}"
    padding: "6px 12px"
  regime-button-active-calido:
    backgroundColor: "{colors.synoptic-blue}"
    textColor: "#FFFFFF"
    rounded: "{rounded.xs}"
    padding: "6px 12px"
  panel-surface:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.md}"
    padding: "20px"
---

# Design System: Observatorio Estadístico Kingston College (SINCA)

## Overview

**Creative North Star: "Atlas Atmosférico & Monografía Sinóptica (Bruma del Biobío)"**

Este sistema visual traduce la física atmosférica y la econometría ambiental de la cuenca del Gran Concepción ($36^\circ 47'\text{S}$, $73^\circ 02'\text{O}$) en una interfaz operativa de precisión científica. En lugar de recurrir a plantillas oscuras genéricas de neón o tarjetas de KPIs desconectadas, la superficie combina el rigor editorial de una monografía de física de aerosoles sobre papel técnico mineral (`#F3F4EF`) con un riel de comando en pizarra bruma costera (`#121A24`).

La paleta cromática y el lenguaje gráfico responden directamente al fenómeno físico analizado: el contraste termodinámico entre el período frío (abril–septiembre), dominado por inversiones térmicas de subsidencia ($H_{\text{mix}} < 150\text{ m}$) y plumas residenciales de combustión de biomasa en tonos ámbar-hollín (`#C85A17`), frente al período cálido (octubre–marzo) de ventilación sinóptica costera en azul anticiclónico (`#1B4D7E`).

**Key Characteristics:**
- Conmutación cromática y física en vivo gobernada por el régimen atmosférico seleccionado (`data-regime="global|frio|calido|cohorte2023"`).
- Presentación estadística dual obligatoria: cada estimador paramétrico ($t_{\text{Welch}}, F, \bar{x} \pm s$, MCO $\text{HC3}$) convive en la misma estructura tabular con su par no paramétrico ($U, H$, mediana y RIC) y su tamaño del efecto ($d, \eta^2, V$).
- Tipografía numérica estrictamente tabular (`font-variant-numeric: tabular-nums`) y subíndices/superíndices semánticos nativos (`<sub>`, `<sup>`).
- Ilustración científica y diagramas vectoriales SVG acoplados a los datos reales de los 16 repositorios del SINCA (2009–2026).

## Colors

La paleta articula una superficie de lectura mineral de alto contraste con acentos semánticos extraídos de la química atmosférica y de la escala regulatoria chilena (D.S. N° 12/2011 y PPDA D.S. N° 6/2019).

### Primary
- **Azul Sinóptico del Biobío** (`#1B4D7E`): Acento estructural primario para el régimen global y cálido, curvas de $\text{MP}_{10}$, criterios de información (BIC) y enlaces interactivos.
- **Ámbar Pirogénico de Biomasa** (`#C85A17`): Acento primario del régimen frío invernal, curvas de $\text{PM}_{2.5}$, trazadores de combustión de leña y resaltado de diferencias post-hoc de Tukey HSD.

### Secondary
- **Pizarra Bruma Costera** (`#121A24`): Superficie de anclaje del riel de navegación lateral, cortes esquemáticos de la capa límite planetaria y bloques de ecuaciones econométricas.
- **Pizarra Elevada** (`#1A2533`): Contenedor activo para ítems de navegación seleccionados y leyenda normativa GEC dentro del riel.

### Tertiary
- **Verde Normativo Bueno** (`#1F7A4C` sobre `#E3F3EA`): Episodios dentro de la norma primaria diaria ($0\text{--}49\ \mu\text{g/m}^3$) y convergencia óptima del modelo Stepwise BIC.
- **Ocre Regular** (`#9A6B00` sobre `#FDF3D7`): Estado de calidad del aire Regular ($50\text{--}79\ \mu\text{g/m}^3$).
- **Carmesí Preemergencia** (`#B81D13` sobre `#FADBD8`): Umbral crítico de Preemergencia ($110\text{--}169\ \mu\text{g/m}^3$) y frontera de violación física ($\text{PM}_{2.5} > \text{MP}_{10}$).
- **Borgoña Emergencia** (`#5C0E28` sobre `#F2D7E0`): Nivel máximo de Emergencia Ambiental ($\ge 170\ \mu\text{g/m}^3$).

### Neutral
- **Papel Mineral Técnico** (`#F3F4EF`): Lienzo base de la aplicación, diseñado para sesiones prolongadas de lectura y proyección sin fatiga visual.
- **Blanco de Cuarzo** (`#FFFFFF`): Superficie de paneles analíticos, tablas y escenarios gráficos.
- **Piedra Sutil** (`#EAECE4`): Fondo de barras de pestañas, pistas de controles y cabeceras secundarias.
- **Tinta Carbón Elemental** (`#141B22`): Texto primario y encabezados (contraste $> 14:1$ sobre fondo claro).
- **Pizarra Media** (`#334150`) y **Pizarra Atenuada** (`#526273`): Texto secundario y notas metodológicas.
- **Filete Técnico** (`#D5D9CE`): Borde estructural de `1px solid` que separa paneles y celdas.

### Named Rules
**The Thermodynamic Color Rule.** El color nunca se aplica como decoración arbitraria: el ámbar (`#C85A17`) representa siempre emisión pirogénica/invierno, el azul (`#1B4D7E`) ventilación sinóptica/cálido, y los cinco tonos GEC están reservados exclusivamente a los puntos de corte legales del D.S. N° 6/2019.

## Typography

**Display & Section Font:** `Newsreader` (con fallback instalado `'C059'`, `'Nimbus Roman'`, `Georgia`, `serif`)
**Body & UI Font:** `Source Sans 3` (con fallback instalado `'iA Writer Quattro S'`, `'Noto Sans'`, `sans-serif`)
**Data & Equations Font:** `JetBrains Mono` (con fallback instalado `'JetBrainsMono Nerd Font'`, `'iA Writer Mono S'`, `monospace`)

**Character:** Un emparejamiento de revista científica de alto impacto y manual de instrumentación geofísica: serifas editoriales serenas para los enunciados de sección y títulos del estudio, combinadas con una sans humanista limpia para la prosa analítica y una monoespaciada técnica con cifras tabulares para estadísticos $t, F, H, \chi^2$, intervalos de confianza y ecuaciones de regresión.

### Hierarchy
- **Display / Section Heading** (`600`, `1.65rem`, `line-height: 1.2`, `letter-spacing: -0.02em`): Encabezados de las seis estaciones de trabajo e hipótesis centrales ($H_1\text{--}H_4$).
- **Headline** (`600`, `1.35rem`, `line-height: 1.2`, `letter-spacing: -0.015em`): Título principal en la barra de comando y titular de la lámina sinóptica de la cuenca.
- **Title** (`700`, `1.02rem`, `line-height: 1.3`): Títulos de paneles de trabajo, tablas y simuladores.
- **Body** (`400`, `1rem`, `line-height: 1.55`, medida máxima `65–72ch` en introducciones de sección): Explicaciones físico-estadísticas y discusión de resultados.
- **Label / Numeric** (`500–600`, `0.78rem–0.82rem`, `font-variant-numeric: tabular-nums`): Celdas numéricas, píldoras de metadatos y salidas del simulador EMCO.

### Named Rules
**The Native Subscript Rule.** Queda prohibido el uso de caracteres Unicode de subíndice o superíndice (`₀₁₂₃₄₅₆₇₈₉⁻`) en el DOM, ya que producen glifos faltantes (`□`) en motores Linux sin fuentes matemáticas dedicadas; toda notación química o estadística ($\text{PM}_{2.5}, \text{MP}_{10}, \text{NO}_2, H_0, R^2, 10^{-16}$) debe componerse con etiquetas HTML `<sub>` y `<sup>`.
**The Self-Supporting Heading Rule.** Ningún encabezado (`h1`–`h4`) lleva etiquetas pequeñas en mayúsculas (*kickers* o *eyebrows*) encima; el título se sostiene por su propio peso y los metadatos estadísticos se ubican a su derecha en la barra de sección o debajo como subtítulo descriptivo.

## Layout

La arquitectura espacial emplea un **Shell Operativo de Dos Regiones** (`.app-shell`):
1. **Riel Sinóptico Fijo (`272px` en escritorio):** Permanece anclado a la izquierda (`position: sticky; top: 0; height: 100vh`) alojando la identificación geográfica de la estación Kingston College, la navegación de 7 anclas con seguimiento automático por `IntersectionObserver`, la escala normativa GEC y los créditos académicos.
2. **Lienzo Analítico Principal (`max-width: 1440px`, padding `1.75rem 2rem`):** Organizado en bloques temáticos separados por `3rem`, utilizando grillas asimétricas de dos columnas (`.hero-observatory-grid: 1.12fr 1fr`, `.split-workbench: 1.15fr 1fr`, `.simulator-grid: 1fr 1.15fr`) y el embudo horizontal de 4 etapas (`.funnel-pipeline: repeat(4, 1fr)`).
3. **Adaptación Responsiva (`@media (max-width: 1180px)` y `860px`):** Bajo `1180px` las mesas de trabajo divididas colapsan a una columna de ancho completo y el embudo pasa a `2x2`; bajo `860px` el riel lateral se transforma en una cabecera compacta con navegación horizontal envolvente y conmutador de régimen en grilla `2x2`.

## Elevation & Depth

El sistema utiliza una **estrategia híbrida de capas tonales y elevación ambiental suave**. La jerarquía principal proviene del contraste entre el lienzo mineral (`#F3F4EF`), las superficies blancas de trabajo (`#FFFFFF`) y los bloques oscuros de pizarra costera (`#121A24`), delimitados por filetes técnicos de `1px solid #D5D9CE`.

### Shadow Vocabulary
- **Ambient Panel Shadow** (`box-shadow: 0 6px 20px -4px rgba(18, 26, 36, 0.07), 0 2px 6px -1px rgba(18, 26, 36, 0.04)`): Aplicada a los contenedores `.panel-surface` y `.funnel-pipeline` para separarlos sutilmente del papel mineral.
- **Active Control Shadow** (`box-shadow: 0 1px 3px rgba(18, 26, 36, 0.08)`): Aplicada a la pestaña activa dentro de `.regime-switcher` y `.tab-strip`.

### Named Rules
**The Hairline Structural Rule.** Todo contenedor, tabla o insignia utiliza bordes uniformes de `1px solid`; nunca se emplean franjas laterales gruesas (`border-left` > 1px) ni sombras duras desplazadas sin desenfoque.

## Shapes

El lenguaje formal es técnico, ortogonal y contenido:
- **Contenedores principales y paneles (`.panel-surface`, `.funnel-pipeline`):** Esquinas suavizadas de `8px` (`--radius-md`) que encuadran tablas y láminas sin recortar contenido.
- **Controles de navegación y selectores (`.rail-nav-link`, `.regime-switcher`, `.figure-item-btn`):** Radio intermedio de `6px` (`--radius-sm`).
- **Insignias normativas, píldoras de metadatos y bloques de código (`.badge-pill`, `.section-meta-pill`, `.control-output`):** Geometría de etiqueta de laboratorio con radio mínimo de `3px` (`--radius-xs`).

## Components

### Conmutador Maestro de Régimen (`.regime-switcher` / `.regime-btn`)
- **Shape:** Grupo segmentado con radio `6px` y botones internos de `4px` (`padding: 0.42rem 0.75rem`).
- **States:** Estado base transparente con texto `#334150`; estado activo global en blanco `#FFFFFF`; estado activo **Régimen Frío** en ámbar `#C85A17` con texto blanco; estado activo **Régimen Cálido** en azul `#1B4D7E` con texto blanco.

### Píldoras de Decisión y Estado GEC (`.badge-pill`)
- **Style:** Etiquetas en fuente monoespaciada (`0.75rem`, `font-weight: 600`), borde de `1px solid currentColor` y fondo tintado al 12% del tono semántico correspondiente (`badge-bueno`, `badge-regular`, `badge-alerta`, `badge-preemergencia`, `badge-emergencia`, `badge-synoptic`).

### Paneles de Trabajo Analítico (`.panel-surface`)
- **Corner Style:** `8px` (`--radius-md`), borde `1px solid #D5D9CE`, fondo `#FFFFFF`.
- **Header (`.panel-header`):** Fondo `#FAFBF8`, borde inferior `1px solid #D5D9CE`, padding `1rem 1.25rem`, alineando título/subtítulo a la izquierda y controles de vista o insignias a la derecha.

### Simulador Econométrico EMCO (`.simulator-grid`)
- **Signature Component:** Combina cuatro controles deslizantes calibrados (`MP10`, `CO`, `NO2`, `O3`), dos selectores de variables ficticias (`Estación` y `Tipo de Día`), cuatro botones de escenarios preconfigurados (`.preset-chip`) y una tabla reactiva que evalúa en tiempo real las 5 ecuaciones de regresión del estudio y desplaza el marcador sobre la nube de dispersión de $n = 3,280$ días.

## Do's and Don'ts

### Do:
- **Do** mantener siempre visibles tanto el estadístico paramétrico (media, DE, $t_{\text{Welch}}$, $F$) como el no paramétrico (mediana, RIC, $U$, $H$) junto con la magnitud del tamaño del efecto.
- **Do** emplear etiquetas HTML `<sub>` y `<sup>` para toda fórmula química y notación estadística.
- **Do** sincronizar el color de acento activo (`--accent-active`) y la altura de la capa de mezcla ($H_{\text{mix}}$) con el régimen térmico seleccionado.
- **Do** usar íconos SVG en línea con trazo consistente (`stroke-width="1.75"`).

### Don't:
- **Don't** colocar *kickers* o *eyebrows* encima de los títulos de sección o paneles.
- **Don't** usar caracteres Unicode de subíndice/superíndice (`₂`, `₁`, `₀`, `⁻¹⁶`) que puedan fallar en motores de renderizado sin fuentes matemáticas.
- **Don't** aplicar bordes laterales gruesos (`border-left: 4px solid`) ni grillas de tarjetas idénticas con ícono + título + texto.
- **Don't** alterar los valores empíricos auditados de la estación Kingston College ($N = 893,398$ brutos; $n = 3,312$ días válidos; $n = 3,280$ pareados; $n = 3,185$ multivariables; $\text{BIC}_{\min} = 9,601.54$).
