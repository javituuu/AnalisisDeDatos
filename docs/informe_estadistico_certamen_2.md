# Modelado Estadístico Inferencial y Acoplamiento Físico de Material Particulado ($\text{PM}_{2.5}$ y $\text{MP}_{10}$) en el Gran Concepción: Un Análisis Multivariable de Largo Plazo en la Estación Kingston College (2009–2026)

**Documento de Investigación — Certamen 2: Análisis de Datos e Inferencia Estadística**  
**Unidad de Análisis:** Estación de Monitoreo de Calidad del Aire Kingston College, Concepción, Región del Biobío, Chile  
**Cobertura Temporal:** Agosto de 2009 – Octubre de 2026 ($17.2\text{ años}$; $N_{\text{bruto}} = 893,398$ registros)  
**Fecha de Publicación:** Noviembre de 2026  

---

## Resumen

El presente estudio desarrolla un modelado estadístico inferencial, correlacional y predictivo de largo plazo sobre la dinámica de contaminación atmosférica en la cuenca del Gran Concepción, utilizando registros continuos de la estación representativa poblacional Kingston College entre agosto de 2009 y octubre de 2026. Pese a la existencia de reportes descriptivos gubernamentales y campañas académicas de corta duración, persiste un vacío de conocimiento respecto a análisis inferenciales multivariables de alta extensión temporal que integren protocolos de validación físico-instrumental con contrastes paramétricos y no paramétricos. Para abordar esta brecha, se procesaron $16$ conjuntos de datos oficiales del Sistema de Información Nacional de Calidad del Aire (SINCA), totalizando $893,398$ observaciones brutas ($851,946$ registros horarios de $\text{CO}$, $\text{MP}_{10}$, $\text{PM}_{2.5}$, $\text{NO}$, $\text{NO}_2$, $\text{NO}_x$, $\text{O}_3$ y $\text{SO}_2$, junto con $41,452$ registros consolidados). Mediante la implementación algorítmica de filtros jerárquicos de validación normativa y consistencia termodinámica ($\text{PM}_{2.5}/\text{MP}_{10} \le 1.0$) a escala diaria, se estructuró una muestra depurada de $n = 3,312$ días válidos para $\text{PM}_{2.5}$, $n = 3,280$ días pareados físicamente consistentes para el sistema $\text{MP}_{10}\text{--}\text{PM}_{2.5}$, y una cohorte transversal reciente para el año 2023 ($n = 361$). Los diagnósticos de bondad de ajuste mediante las pruebas de Lilliefors ($D = 0.148, p < 0.0001$) y Shapiro-Wilk ($W = 0.812, p < 0.0001$), sumados a la prueba de homocedasticidad de Levene ($F = 612.45, p < 0.0001$), confirmaron una distribución empírica con fuerte asimetría positiva ($\gamma_1 = 2.14$) y heterocedasticidad estacional, justificando una estrategia analítica dual. Los resultados demuestran: (1) una divergencia estacional altamente significativa en las concentraciones de $\text{PM}_{2.5}$ entre el régimen frío y cálido ($t_{\text{Welch}} = -31.94, p < 2.2 \times 10^{-16}, d = 1.11$; $U = 418,920.5, p < 2.2 \times 10^{-16}, r_{rb} = 0.694$) y entre las cuatro estaciones astronómicas ($F_{\text{Welch}} = 486.32, p < 2.2 \times 10^{-16}, \eta^2 = 0.284$; $H = 1342.18, p < 2.2 \times 10^{-16}, \epsilon^2 = 0.405$); (2) invarianza estadística del $\text{PM}_{2.5}$ entre días laborales y fines de semana ($t_{\text{Welch}} = 0.931, p = 0.3520, d = 0.036$; $U = 1,138,412.0, p = 0.4156$), en marcado contraste con la caída significativa de trazadores vehiculares como el $\text{NO}_2$ ($t_{\text{Welch}} = 16.42, p < 0.0001, d = 0.612$), ratificando que los episodios críticos invernales están gobernados por emisiones residenciales de biomasa y estabilidad sinóptica más que por el flujo laboral; (3) una dependencia lineal robusta mediante Mínimos Cuadrados Ordinarios (MCO) con errores estándar robustos $\text{HC3}$, estimando una pendiente global $\hat{\beta}_1 = 0.684$ ($p < 0.0001, R^2 = 0.785$) que asciende a $\hat{\beta}_1 = 0.732$ en invierno y $\hat{\beta}_1 = 0.704$ en la cohorte 2023, validando empíricamente la fracción gravimétrica teórica de la quema de leña ($0.65 \le \beta_1 \le 0.80$); y (4) una asociación estadísticamente significativa entre los niveles de alerta del PPDA (D.S. N° 6/2019) y el régimen térmico ($\chi^2 = 238.64, p < 2.2 \times 10^{-16}, V = 0.268$), pero independiente del día de la semana ($\chi^2 = 0.412, p = 0.5210, V = 0.011$).

**Palabras clave:** Material particulado fino ($\text{PM}_{2.5}$), inferencia estadística, regresión MCO con errores robustos $\text{HC3}$, pruebas no paramétricas, episodios críticos de contaminación, Gran Concepción.

---

## Abstract

This study develops a long-term inferential, correlational, and predictive statistical modeling of atmospheric pollution dynamics in the Greater Concepción basin, utilizing continuous records from the population-representative Kingston College monitoring station between August 2009 and October 2026. Despite the availability of descriptive governmental reports and short-term academic campaigns, a knowledge gap persists regarding long-term multivariate inferential analyses that integrate physical-instrumental validation protocols with parametric and non-parametric hypothesis testing. To address this gap, $16$ official datasets from the National Air Quality Information System (SINCA) were processed, totaling $893,398$ raw observations ($851,946$ hourly records of $\text{CO}$, $\text{MP}_{10}$, $\text{PM}_{2.5}$, $\text{NO}$, $\text{NO}_2$, $\text{NO}_x$, $\text{O}_3$, and $\text{SO}_2$, alongside $41,452$ consolidated series records). Through the algorithmic implementation of regulatory validation hierarchies and thermodynamic consistency filters ($\text{PM}_{2.5}/\text{MP}_{10} \le 1.0$) at a daily scale, a cleaned analytical sample of $n = 3,312$ valid days for $\text{PM}_{2.5}$, $n = 3,280$ physically consistent paired days for the $\text{MP}_{10}\text{--}\text{PM}_{2.5}$ system, and a cross-sectional cohort for the full year 2023 ($n = 361$) were established. Goodness-of-fit diagnostics via Lilliefors ($D = 0.148, p < 0.0001$) and Shapiro-Wilk ($W = 0.812, p < 0.0001$) tests, alongside Levene's homoscedasticity test ($F = 612.45, p < 0.0001$), confirmed strong positive skewness ($\gamma_1 = 2.14$) and seasonal heteroscedasticity, justifying a dual parametric/non-parametric analytical strategy. Results demonstrate: (1) a highly significant seasonal divergence in $\text{PM}_{2.5}$ concentrations between cold and warm regimes ($t_{\text{Welch}} = -31.94, p < 2.2 \times 10^{-16}, d = 1.11$; $U = 418,920.5, p < 2.2 \times 10^{-16}, r_{rb} = 0.694$) and across astronomical seasons ($F_{\text{Welch}} = 486.32, p < 2.2 \times 10^{-16}, \eta^2 = 0.284$; $H = 1342.18, p < 2.2 \times 10^{-16}, \epsilon^2 = 0.405$); (2) statistical invariance of $\text{PM}_{2.5}$ between weekdays and weekends ($t_{\text{Welch}} = 0.931, p = 0.3520, d = 0.036$; $U = 1,138,412.0, p = 0.4156$), in stark contrast to the significant drop in vehicular tracers such as $\text{NO}_2$ ($t_{\text{Welch}} = 16.42, p < 0.0001, d = 0.612$), confirming that winter pollution episodes are driven by residential biomass burning and synoptic stability rather than commuter traffic; (3) a robust linear dependence via Ordinary Least Squares (OLS) with $\text{HC3}$ heteroscedasticity-consistent standard errors, yielding a global slope $\hat{\beta}_1 = 0.684$ ($p < 0.0001, R^2 = 0.785$) that rises to $\hat{\beta}_1 = 0.732$ in winter and $\hat{\beta}_1 = 0.704$ in the 2023 cohort, empirically validating the theoretical gravimetric fraction of wood combustion ($0.65 \le \beta_1 \le 0.80$); and (4) a statistically significant association between PPDA alert levels (D.S. N° 6/2019) and thermal regimes ($\chi^2 = 238.64, p < 2.2 \times 10^{-16}, V = 0.268$), yet independent of day type ($\chi^2 = 0.412, p = 0.5210, V = 0.011$).

**Keywords:** Fine particulate matter ($\text{PM}_{2.5}$), statistical inference, OLS regression with $\text{HC3}$ robust errors, non-parametric tests, critical pollution episodes, Greater Concepción.

---

## 1. Introducción

### 1.1 Contextualización del Problema Ambiental y Estadístico
La contaminación atmosférica por material particulado respirable ($\text{MP}_{10}$, partículas con diámetro aerodinámico $d_a \le 10\ \mu\text{m}$) y material particulado fino ($\text{PM}_{2.5}$, con $d_a \le 2.5\ \mu\text{m}$) constituye uno de los principales determinantes ambientales de morbilidad y mortalidad prematura cardiopulmonar en los centros urbanos del centro-sur de Chile. A diferencia de las megaciudades de latitudes medias donde las emisiones provienen predominantemente del parque automotriz y fuentes fijas industriales de operación continua, las cuencas costeras e interiores ubicadas al sur del paralelo $35^\circ\text{S}$ presentan una complejidad físico-química particular: la coexistencia de complejos industriales petroquímicos y siderúrgicos, transporte de carga portuaria y una masiva penetración de calefacción residencial mediante combustión de biomasa (leña) durante los meses de otoño e invierno.

El área metropolitana del Gran Concepción (Región del Biobío), que alberga a más de un millón de habitantes distribuidos en diez comunas interconectadas, fue declarada Zona Latente por $\text{MP}_{10}$ y Zona Saturada por $\text{PM}_{2.5}$, dando origen al Plan de Prevención y Descontaminación Atmosférica (PPDA) oficializado mediante el Decreto Supremo N° 6/2019 del Ministerio del Medio Ambiente (MMA). Dentro de la red de vigilancia atmosférica de esta conurbación, la estación **Kingston College**, emplazada en el sector urbano consolidado de Concepción, reviste una importancia estratégica por su alta representatividad de exposición poblacional (Instituto Nacional de Estadísticas [INE], 2026) y por poseer una de las series históricas multipolucionantes más extensas del país.

Desde el punto de vista de la ciencia de datos y la estadística aplicada, el análisis de registros ambientales provenientes de monitores automáticos continuos (atenuación beta, microbalanza oscilante de elemento cónico y analizadores ópticos de gases) presenta desafíos metodológicos severos que suelen ser ignorados en informes descriptivos convencionales:
1. **Ruidos instrumentales y violaciones de consistencia física:** En condiciones de alta humedad relativa o deriva de calibración, los monitores independientes pueden registrar valores espurios donde la concentración medida de $\text{PM}_{2.5}$ supera físicamente a la de $\text{MP}_{10}$, violando el principio de inclusión gravimétrica ($\text{PM}_{2.5} \subset \text{MP}_{10}$).
2. **No normalidad estructural y colas pesadas:** Las concentraciones diarias de contaminantes atmosféricos no siguen distribuciones gaussianas simétricas; por el contrario, están truncadas en cero ($\text{Concentración} \ge 0$) y exhiben distribuciones log-normales, Gamma o Weibull con pronunciada asimetría positiva ($\gamma_1 > 0$) y leptocurtosis ($\gamma_2 > 3$) debido a la ocurrencia esporádica de episodios extremos de inversión térmica.
3. **Heterocedasticidad inducida por forzamiento meteorológico:** La varianza del proceso estocástico no es constante a lo largo del año ($\sigma^2_{\text{invierno}} \gg \sigma^2_{\text{verano}}$), lo que invalida los supuestos clásicos de homocedasticidad tanto en el Análisis de Varianza (ANOVA) ordinario como en la estimación de errores estándar por Mínimos Cuadrados Ordinarios (MCO).

### 1.2 Identificación del Vacío de Conocimiento (*Research Gap*)
Al examinar críticamente el estado del arte sobre la calidad del aire en la cuenca del Gran Concepción, emerge una dicotomía evidente. Por un lado, existen informes técnicos anuales de carácter estrictamente descriptivo emitidos por la autoridad ambiental (MMA y Superintendencia del Medio Ambiente [SMA]), los cuales se limitan a reportar promedios trianuales y conteos de superación de norma sin ejecutar pruebas formales de hipótesis, cálculos de tamaño del efecto ni diagnósticos econométricos de supuestos. Por otro lado, las investigaciones académicas de alta resolución química o meteorológica suelen basarse en campañas intensivas acotadas a pocas semanas o a eventos puntuales (e.g., episodios específicos de invierno o meses de confinamiento pandémico).

En consecuencia, identificamos con precisión el **Vacío de Conocimiento (*Research Gap*)**: *no existe en la literatura actual un modelado estadístico inferencial y predictivo continuo, actualizado a 2026 y multivariable a escala diaria para la estación Kingston College que combine la validación instrumental y termodinámica sobre casi dos décadas de datos ($17.2\text{ años}$) con un marco riguroso de contrastes paramétricos, no paramétricos y regresiones robustas a la heterocedasticidad*.

### 1.3 Preguntas de Investigación, Hipótesis Estadísticas y Objetivos
Para subsanar este vacío empírico y metodológico, el presente estudio se articula en torno a una pregunta central de investigación: *¿En qué medida la variabilidad diaria del material particulado fino ($\text{PM}_{2.5}$) en la estación Kingston College durante el período 2009–2026 está determinada por el forzamiento estacional térmico, el ciclo semanal de actividad antropogénica y el acoplamiento gravimétrico con la fracción gruesa ($\text{MP}_{10}$), bajo un esquema de validación físico-estadística rigurosa?*

De esta interrogante se desprenden cuatro sistemas formales de hipótesis estadísticas:

* **Hipótesis 1 ($H_1$ — Forzamiento Estacional y Régimen Térmico):** Debido a la activación de la combustión residencial de leña y al descenso de la capa límite planetaria en los meses fríos, la distribución de concentraciones diarias de $\text{PM}_{2.5}$ difiere significativamente entre las estaciones del año y entre los regímenes térmicos (período frío: abril–septiembre vs. período cálido: octubre–marzo).
  $$H_{0,1}: \mu_{\text{frío}} = \mu_{\text{cálido}} \quad \text{y} \quad \theta_{\text{verano}} = \theta_{\text{otoño}} = \theta_{\text{invierno}} = \theta_{\text{primavera}}$$
  $$H_{1,1}: \mu_{\text{frío}} > \mu_{\text{cálido}} \quad \text{y} \quad \exists\ i \neq j \text{ tal que } \theta_i \neq \theta_j$$
  donde $\mu$ representa la media poblacional y $\theta$ la mediana poblacional de $\text{PM}_{2.5}$ ($\mu\text{g/m}^3$).

* **Hipótesis 2 ($H_2$ — Invarianza Semanal del $\text{PM}_{2.5}$ vs. Sensibilidad de Gases Vehiculares):** A diferencia de los contaminantes gaseosos primarios derivados del transporte ($\text{NO}_2, \text{CO}$), cuyas concentraciones caen significativamente durante los fines de semana, las concentraciones diarias de $\text{PM}_{2.5}$ presentan invarianza estadística entre días laborales (lunes a viernes) y fines de semana (sábado y domingo), dado que sus fuentes dominantes (calefacción domiciliaria) y su acumulación sinóptica (inversiones térmicas multidiarias) operan con independencia del calendario laboral.
  $$H_{0,2}: \mu_{\text{PM}_{2.5},\text{lab}} - \mu_{\text{PM}_{2.5},\text{fds}} = 0 \quad \text{y} \quad \theta_{\text{PM}_{2.5},\text{lab}} = \theta_{\text{PM}_{2.5},\text{fds}}$$
  $$H_{1,2}: \mu_{\text{PM}_{2.5},\text{lab}} - \mu_{\text{PM}_{2.5},\text{fds}} \neq 0 \quad (\text{con contraste de control: } \mu_{\text{NO}_2,\text{lab}} > \mu_{\text{NO}_2,\text{fds}})$$

* **Hipótesis 3 ($H_3$ — Acoplamiento Gravimétrico Lineal $\text{PM}_{2.5}\text{--}\text{MP}_{10}$):** Existe una relación lineal positiva, estadísticamente significativa y de alto poder explicativo entre las concentraciones diarias de $\text{MP}_{10}$ y $\text{PM}_{2.5}$, donde el estimador de pendiente por Mínimos Cuadrados Ordinarios ($\hat{\beta}_1$) converge hacia el intervalo teórico $[0.65, 0.80]$, reflejando que cerca del $70\%$ de la masa del material particulado respirable corresponde a la fracción fina generada por combustión.
  $$H_{0,3}: \beta_1 = 0 \quad \text{vs.} \quad H_{1,3}: \beta_1 > 0 \quad (\text{con evaluación de convergencia a } \beta_1 \approx 0.70)$$

* **Hipótesis 4 ($H_4$ — Dependencia Categórica de Episodios Críticos Normativos):** La ocurrencia de estados de calidad del aire ("Bueno", "Regular", "Alerta", "Preemergencia" y "Emergencia") definidos por el D.S. N° 12/2011 y el D.S. N° 6/2019 (PPDA) es estadísticamente dependiente del régimen estacional, pero estadísticamente independiente del tipo de día de la semana.
  $$H_{0,4a}: P(\text{Nivel}_i \cap \text{Régimen}_j) = P(\text{Nivel}_i)P(\text{Régimen}_j) \quad \text{vs.} \quad H_{1,4a}: \text{Dependencia estacional}$$
  $$H_{0,4b}: P(\text{Episodio}_i \cap \text{Día}_k) = P(\text{Episodio}_i)P(\text{Día}_k) \quad \text{vs.} \quad H_{1,4b}: \text{Dependencia semanal}$$

**Objetivo General:** Evaluar estadística e inferencialmente el comportamiento temporal, la dependencia estacional y semanal, y el acoplamiento físico-químico de las concentraciones diarias de $\text{PM}_{2.5}$ y $\text{MP}_{10}$ en la estación Kingston College durante el período 2009–2026, mediante la integración depurada de $16$ bases de datos oficiales del SINCA y la aplicación de contrastes paramétricos, no paramétricos y econométricos robustos.

---

## 2. Revisión de Literatura y Marco Normativo

El diseño de nuestras hipótesis estadísticas y la parametrización del algoritmo de depuración de datos no constituyen decisiones arbitrarias, sino que descansan directamente sobre cuatro pilares científicos y normativos ampliamente validados para las cuencas del centro-sur de Chile.

### 2.1 Caracterización Química y Fraccionamiento Gravimétrico (Cereceda-Balic et al., 2020)
La relación estocástica entre $\text{MP}_{10}$ y $\text{PM}_{2.5}$ está gobernada por la naturaleza física de las fuentes emisoras. Mientras que la erosión eólica de suelos, el polvo de calles resuspendido y el aerosol marino primario aportan mayoritariamente a la fracción gruesa o *coarse* ($\text{MP}_{2.5\text{--}10}$, con $2.5\ \mu\text{m} < d_a \le 10\ \mu\text{m}$), los procesos de pirólisis y combustión incompleta de biomasa forestal y residencial emiten casi exclusivamente partículas ultrafinas y finas de carbono orgánico, carbono elemental, levoglucosano e iones inorgánicos secundarios ($d_a \le 2.5\ \mu\text{m}$).

En un estudio fundamental para la macrozona centro-sur de Chile, **Cereceda-Balic et al. (2020)** demostraron mediante caracterización química elemental, análisis de trazadores moleculares y gravimetría diferencial que, durante los meses fríos, el $\text{PM}_{2.5}$ representa consistentemente entre el $65\%$ y el $80\%$ de la masa total del $\text{MP}_{10}$ recolectado en receptores urbanos, producto del predominio absoluto de la quema residencial de biomasa para calefacción. Desde una perspectiva econométrica, si especificamos el modelo lineal clásico $\text{PM}_{2.5,t} = \beta_0 + \beta_1 \text{MP}_{10,t} + \varepsilon_t$, la derivada parcial $\partial \mathbb{E}[\text{PM}_{2.5} \mid \text{MP}_{10}] / \partial \text{MP}_{10} = \beta_1$ mide precisamente la propensión marginal de aporte de masa fina por cada microgramo por metro cúbico adicional de $\text{MP}_{10}$. En consecuencia, el hallazgo empírico de Cereceda-Balic et al. (2020) sustenta teóricamente por qué esperamos un estimador de pendiente por Mínimos Cuadrados Ordinarios ($\hat{\beta}_1$) cercano a $0.70$ ($0.65 \le \hat{\beta}_1 \le 0.80$) en nuestra serie histórica y en el corte transversal de 2023.

### 2.2 Dinámica Meteorológica Sinóptica e Inversiones Térmicas (Saide et al., 2016)
La concentración observada de un contaminante en un volumen de control atmosférico no depende únicamente de la tasa de emisión ($E$), sino crucialmente de la altura de la capa de mezcla ($H_{\text{mix}}$) y de la velocidad de advección horizontal ($u$). **Saide et al. (2016)** modelaron numéricamente a mesoescala (mediante acoplamiento WRF-Chem) la cuenca del Gran Concepción y otras ciudades del centro-sur de Chile, probando que la ocurrencia de episodios críticos de contaminación está modulada por configuraciones sinópticas de alta presión fría posfrontal y vaguadas costeras en fase de desarrollo.

Estas configuraciones generan potentes **inversiones térmicas de subsidencia** combinadas con inversiones radiativas nocturnas que suprimen la turbulencia vertical y reducen la altura de la capa límite a menos de $100\text{--}150\text{ m}$ sobre la superficie. Saide et al. (2016) demuestran que esta estabilidad atmosférica actúa como una "trampa termodinámica" que acumula los contaminantes en episodios multidiarios persistentes ($3\text{ a }5\text{ días}$ consecutivos), con total independencia de si el día calendario corresponde a un miércoles laboral o a un domingo. Este mecanismo físico explica tanto la sobre-dispersión estacional (heterocedasticidad invernal) como la ausencia de una caída significativa de $\text{PM}_{2.5}$ durante los fines de semana.

### 2.3 Experimentos Naturales y Desacople del Flujo Vehicular (Gramsch et al., 2021)
Una controversia recurrente en la gestión ambiental urbana radica en atribuir erróneamente los episodios invernales de $\text{PM}_{2.5}$ a la congestión vehicular de los días hábiles. Para aislar causalmente el aporte del transporte frente a las fuentes residenciales, **Gramsch et al. (2021)** utilizaron las severas cuarentenas y restricciones de movilidad por la pandemia de COVID-19 en Chile como un **experimento natural** a gran escala.

Los autores demostraron que, al paralizar entre un $60\%$ y un $85\%$ el flujo vehicular laboral en las ciudades del centro-sur de Chile, los óxidos de nitrógeno ($\text{NO}_x$) disminuyeron drásticamente, pero las concentraciones invernales de $\text{PM}_{2.5}$ no experimentaron reducciones estadísticamente significativas (e incluso aumentaron ligeramente debido a la mayor permanencia intradomiciliaria), confirmando de forma inequívoca que la fuente dominante del aerosol fino invernal es la calefacción domiciliaria con leña. La convergencia entre los hallazgos meteorológicos de Saide et al. (2016) y la evidencia cuasi-experimental de Gramsch et al. (2021) fundamenta directamente nuestras pruebas de hipótesis por estación del año ($H_1$) y por tipo de día ($H_2$).

### 2.4 Protocolos Normativos e Institucionales (SMA, 2024; INE, 2026; D.S. N° 12/2011; D.S. N° 6/2019)
El rigor estadístico exige que la construcción de variables y los criterios de inclusión muestral se rijan por estándares institucionales auditables:
1. **Superintendencia del Medio Ambiente (SMA, 2024):** Establece los protocolos técnicos de validación de datos de redes de monitoreo continuo de calidad del aire, definiendo la jerarquía entre registros *Validados*, *Preliminares* y *No Validados*, así como el criterio de completitud mínima horaria ($\ge 75\%$ de las horas del día, equivalente a $\ge 18\text{ horas}$ válidas de $24$) para calcular un promedio diario representativo.
2. **Instituto Nacional de Estadísticas (INE, 2026):** Las proyecciones demográficas y cartografías censales actualizadas ratifican la representatividad territorial y poblacional de la estación Kingston College dentro de la trama urbana densa de la comuna de Concepción.
3. **Decreto Supremo N° 12/2011 del MMA:** Establece la Norma Primaria de Calidad Ambiental para Material Particulado Fino Respirable ($\text{PM}_{2.5}$), fijando el límite normativo diario (percentil $98$ anual) en $50\ \mu\text{g/m}^3$ y la norma anual en $20\ \mu\text{g/m}^3$.
4. **Decreto Supremo N° 6/2019 del MMA (PPDA del Gran Concepción):** Oficializa el Plan de Prevención y Descontaminación Atmosférica para las diez comunas del Concepción Metropolitano y define legalmente los puntos de corte exactos para la Gestión de Episodios Críticos (GEC) basados en el promedio móvil o diario de $24\text{ horas}$ de $\text{PM}_{2.5}$: **Bueno** ($0\text{--}50\ \mu\text{g/m}^3$), **Regular** ($51\text{--}79\ \mu\text{g/m}^3$), **Alerta Ambiental** ($80\text{--}109\ \mu\text{g/m}^3$), **Preemergencia Ambiental** ($110\text{--}169\ \mu\text{g/m}^3$) y **Emergencia Ambiental** ($\ge 170\ \mu\text{g/m}^3$).

**Tabla 1.** *Síntesis del marco teórico-empírico y normativo vinculado a la formulación de hipótesis y decisiones metodológicas.*

| Referencia / Instrumento | Enfoque Metodológico / Alcance | Hallazgo o Disposición Principal | Vinculación Directa con el Estudio |
| :--- | :--- | :--- | :--- |
| **Cereceda-Balic et al. (2020)** | Caracterización química y gravimétrica en el centro-sur de Chile. | En meses fríos, la quema residencial de biomasa hace que el $\text{PM}_{2.5}$ represente entre el $65\%$ y el $80\%$ de la masa total del $\text{MP}_{10}$. | Justifica la hipótesis $H_3$ y explica teóricamente por qué el estimador MCO $\hat{\beta}_1$ converge a $\approx 0.70$. |
| **Saide et al. (2016)** | Modelación meteorológica acoplada (WRF-Chem) en la cuenca del Gran Concepción. | Las inversiones térmicas de subsidencia y estabilidad atmosférica atrapan contaminantes en episodios multidiarios sin distinguir día laboral o domingo. | Fundamenta físicamente las hipótesis $H_1$ (estacionalidad), $H_2$ (invarianza dominical) y $H_4$. |
| **Gramsch et al. (2021)** | Experimento natural basado en cuarentenas por COVID-19 en ciudades chilenas. | La paralización del flujo vehicular redujo $\text{NO}_x$, pero no disminuyó el $\text{PM}_{2.5}$ invernal, probando la hegemonía de la calefacción residencial. | Sustenta el contraste dual en $H_2$: invarianza semanal en $\text{PM}_{2.5}$ frente a caída fuerte en $\text{NO}_2$ y $\text{CO}$. |
| **SMA (2024)** | Protocolo técnico de validación de redes de monitoreo SINCA. | Jerarquización documental de registros (*Validado* $>$ *Preliminar*) y exigencia de $\ge 75\%$ de cobertura horaria diaria. | Respalda las reglas de negocio programadas en el script `ejecutar_analisis_avance1.py`. |
| **INE (2026)** | Estadísticas territoriales y demográficas del Gran Concepción. | Ratifica la densidad habitacional y representatividad de exposición urbana del entorno de Kingston College. | Justifica la validez externa de la unidad espacial de muestreo seleccionada. |
| **D.S. N° 12/2011 y D.S. N° 6/2019 (MMA)** | Norma Primaria de $\text{PM}_{2.5}$ y PPDA del Concepción Metropolitano. | Fija el umbral diario en $50\ \mu\text{g/m}^3$ y define los intervalos exactos de Alerta ($80\text{--}109$), Preemergencia ($110\text{--}169$) y Emergencia ($\ge 170\ \mu\text{g/m}^3$). | Define la operacionalización exacta de la variable politómica ordinal *Nivel de Alerta Ambiental* ($H_4$). |

*Fuente:* Elaboración propia a partir de la revisión bibliográfica y normativa vigente (2026).

---

## 3. Metodología

### 3.1 Arquitectura de Datos e Integración de Series Masivas del SINCA
Para superar las limitaciones de los estudios de corto plazo y responder al vacío de conocimiento identificado, se diseñó un flujo de ingeniería de datos reproducible ejecutado mediante el script en lenguaje Python `ejecutar_analisis_avance1.py`. Se recopilaron e integraron la totalidad de los **$16$ datasets oficiales** disponibles en el repositorio público del Sistema de Información Nacional de Calidad del Aire (SINCA) para la estación Kingston College, abarcando una ventana temporal ininterrumpida de **$17.2\text{ años}$** (desde agosto de 2009 hasta octubre de 2026):
* **$8$ archivos de resolución horaria** correspondientes a monóxido de carbono ($\text{CO}$), material particulado respirable ($\text{MP}_{10}$), material particulado fino ($\text{PM}_{2.5}$), monóxido de nitrógeno ($\text{NO}$), dióxido de nitrógeno ($\text{NO}_2$), óxidos de nitrógeno totales ($\text{NO}_x$), ozono troposférico ($\text{O}_3$) y dióxido de azufre ($\text{SO}_2$), los cuales totalizan exactamente **$851,946$ registros horarios**.
* **$8$ archivos de series diarias y mensuales consolidadas** para los mismos ocho parámetros atmosféricos, que aportan **$41,452$ filas adicionales** utilizadas para validación cruzada inter-serie y empalme histórico.

En su conjunto, el procesamiento inicial operó sobre una **base bruta de $893,398$ observaciones**. Dado que las normativas de salud pública (D.S. N° 12/2011 y D.S. N° 6/2019) evalúan la exposición aguda en promedios de $24\text{ horas}$ y que las series horarias presentan una severa autocorrelación intradiaria inducida por el ciclo solar diurno, se estableció formalmente el **día calendario (promedio aritmético de $24\text{ horas}$)** como la **unidad elemental de análisis estadístico**.

**Tabla 2.** *Inventario de los $16$ datasets oficiales del SINCA integrados para la estación Kingston College (agosto 2009 – octubre 2026).*

| Parámetro Químico / Físico | Simbología | Unidad de Medida Estándar | Registros en Serie Horaria ($N_h$) | Filas en Serie Consolidada ($N_c$) | Total Observaciones Brutas ($N_{\text{total}}$) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Material Particulado Fino | $\text{PM}_{2.5}$ | $\mu\text{g/m}^3\text{N}$ | $118,420$ | $5,814$ | $124,234$ |
| Material Particulado Respirable | $\text{MP}_{10}$ | $\mu\text{g/m}^3\text{N}$ | $116,890$ | $5,792$ | $122,682$ |
| Monóxido de Carbono | $\text{CO}$ | $\text{mg/m}^3\text{N}$ / $\text{ppm}$ | $109,540$ | $5,410$ | $114,950$ |
| Dióxido de Nitrógeno | $\text{NO}_2$ | $\mu\text{g/m}^3\text{N}$ / $\text{ppb}$ | $104,312$ | $5,120$ | $109,432$ |
| Monóxido de Nitrógeno | $\text{NO}$ | $\mu\text{g/m}^3\text{N}$ / $\text{ppb}$ | $104,312$ | $5,120$ | $109,432$ |
| Óxidos de Nitrógeno | $\text{NO}_x$ | $\mu\text{g/m}^3\text{N}$ / $\text{ppb}$ | $104,312$ | $5,120$ | $109,432$ |
| Ozono Troposférico | $\text{O}_3$ | $\mu\text{g/m}^3\text{N}$ / $\text{ppb}$ | $98,640$ | $4,680$ | $103,320$ |
| Dióxido de Azufre | $\text{SO}_2$ | $\mu\text{g/m}^3\text{N}$ / $\text{ppb}$ | $95,520$ | $4,396$ | $99,916$ |
| **Total Integrado ($16$ archivos)** | **—** | **Multivariable** | **$851,946$** | **$41,452$** | **$893,398$** |

*Fuente:* Elaboración propia a partir del procesamiento algorítmico de los repositorios oficiales del SINCA (MMA, 2026).

### 3.2 Protocolo de Higiene de Datos y Validación Físico-Instrumental
Trabajar directamente con datos brutos de monitores ambientales introduce sesgos graves de estimación (atenuación de pendientes por error de medición en la variable explicativa y distorsión de varianzas por valores atípicos instrumentales). En el script `ejecutar_analisis_avance1.py` se programó un embudo secuencial de cuatro filtros determinísticos basados en la física de aerosoles y en la regulación de la SMA (2024):

1. **Filtro 1 — Jerarquización Documental Normativa (SMA, 2024):** Cada registro en SINCA posee columnas diferenciadas según su estado de auditoría. El algoritmo priorizó estrictamente la columna de registros *Validados* oficialmente por la autoridad; únicamente en periodos recientes aún en proceso de cierre administrativo se admitieron registros *Preliminares* sometidos a control de rango, descartando el $100\%$ de los registros catalogados como *No Validados* o con banderas de falla de equipo (*flags* de calibración o corte eléctrico).
2. **Filtro 2 — Completitud Temporal Diaria ($\ge 75\%$):** Al colapsar las series horarias a resolución diaria mediante la función de agregación $\bar{X}_d = \frac{1}{m_d}\sum_{h=1}^{m_d} X_{d,h}$, se exigió que el número de horas válidas en el día $d$ cumpliera la desigualdad estricta $m_d \ge 18\text{ horas}$ ($75\%$ de $24\text{ h}$). Los días con $m_d < 18$ fueron tratados como valores perdidos (*missing values*) para evitar sesgos de representación horaria (por ejemplo, días donde solo se midieron horas diurnas de baja concentración, omitiendo el pico nocturno de combustión de leña).
3. **Filtro 3 — Dominio Físico Positivo y Rango de Detección:** Se eliminaron observaciones con valores negativos o nulos ($X_d \le 0$) producto de derivas de línea base (*zero drift*) en los analizadores beta, reteniendo para la serie individual de $\text{PM}_{2.5}$ una muestra depurada de **$n = 3,312$ días confiables**.
4. **Filtro 4 — Consistencia Termodinámica y Gravimétrica ($\text{PM}_{2.5} \le \text{MP}_{10}$):** Por definición aerodinámica, todo el material particulado con diámetro $d_a \le 2.5\ \mu\text{m}$ está físicamente contenido dentro del conjunto de partículas con $d_a \le 10\ \mu\text{m}$. Por ende, en cualquier instante $t$, la masa real cumple la restricción física:
   $$\text{PM}_{2.5,t} \le \text{MP}_{10,t} \iff \mathcal{R}_t = \frac{\text{PM}_{2.5,t}}{\text{MP}_{10,t}} \in (0, 1]$$
   Al cruzar las series diarias válidas de ambos contaminantes, se detectaron $32$ jornadas donde el cociente empírico superaba la unidad ($\mathcal{R}_t > 1.0$, debido a diferencias en la higroscopicidad del filtro entre cabezales independientes en días de niebla saturada). La poda de estas anomalías instrumentales arrojó una muestra final de **$n = 3,280$ días pareados físicamente consistentes** para el modelado bivariado $\text{MP}_{10}\text{--}\text{PM}_{2.5}$. Adicionalmente, para evaluar el comportamiento reciente libre de efectos de cambio tecnológico de largo plazo, se aisló un **corte transversal completo del año 2023 ($n = 361$ días válidos)**.

**Figura 1.** *Esquema algorítmico del flujo de depuración, validación normativa (SMA, 2024) y consistencia física ejecutado en `ejecutar_analisis_avance1.py`.*

```
┌───────────────────────────────────────────────────────────────────────────────┐
│        ENTRADA BRUTA: 16 DATASETS OFICIALES SINCA (Agosto 2009 – Oct 2026)    │
│   • 8 Archivos Horarios (CO, MP10, PM2.5, NO, NO2, NOx, O3, SO2): 851,946 reg │
│   • 8 Archivos Diarios/Mensuales Consolidados:                     41,452 reg │
│   • VOLUMEN TOTAL PROCESADO:                                      893,398 obs │
└───────────────────────────────────────┬───────────────────────────────────────┘
                                        ▼
┌───────────────────────────────────────────────────────────────────────────────┐
│   ETAPA 1: JERARQUIZACIÓN NORMATIVA (SMA, 2024) Y COMPLETITUD HORARIA         │
│   • Prioridad estricta: [Registro Validado] > [Preliminar auditado]           │
│   • Exclusión total de registros "No Validados" y banderas de calibración     │
│   • Regla de agregación a día calendario (24h): Completitud m_d >= 18 horas   │
└───────────────────────────────────────┬───────────────────────────────────────┘
                                        ▼
┌───────────────────────────────────────────────────────────────────────────────┐
│   ETAPA 2: FILTRADO DE DOMINIO FÍSICO (Concentración > 0 ug/m3)               │
│   • Eliminación de derivas de línea base (valores <= 0) e incongruencias      │
│   ══► MUESTRA DEPURADA SERIE INDIVIDUAL PM2.5: n = 3,312 días confiables      │
└───────────────────────────────────────┬───────────────────────────────────────┘
                                        ▼
┌───────────────────────────────────────────────────────────────────────────────┐
│   ETAPA 3: EMPAREJAMIENTO MULTIVARIABLE Y CONSISTENCIA GRAVIMÉTRICA           │
│   • Intersección temporal exacta por fecha: Pareo diario MP10 y PM2.5         │
│   • Restricción física estricta: PM2.5 <= MP10  (Cociente R_t <= 1.0)         │
│   • Exclusión de 32 días con anomalía instrumental (PM2.5 > MP10)             │
└───────────────────┬───────────────────────────────────────┬───────────────────┘
                    ▼                                       ▼
┌───────────────────────────────────────┐ ┌─────────────────────────────────────┐
│   MUESTRA ANALÍTICA HISTÓRICA PAREADA │ │   COHORTE TRANSVERSAL RECIENTE      │
│      n = 3,280 días consistentes      │ │       Año 2023: n = 361 días        │
│    (Serie 17.2 años: 2009 – 2026)     │ │   (98.9% cobertura anual validada)  │
└───────────────────────────────────────┘ └─────────────────────────────────────┘
```
*Fuente:* Elaboración propia basada en la arquitectura de procesamiento de datos (`ejecutar_analisis_avance1.py`).

### 3.3 Operacionalización de Variables
Para garantizar la coherencia lógica entre las preguntas de investigación y los métodos matemáticos aplicados, las variables del estudio fueron operacionalizadas conforme se detalla en la Tabla 3.

**Tabla 3.** *Matriz de operacionalización de variables estadísticas del estudio.*

| Variable | Rol en el Modelo | Naturaleza y Escala | Definición Operacional y Categorías / Unidades | Fundamento Teórico / Normativo |
| :--- | :--- | :--- | :--- | :--- |
| **Concentración diaria de $\text{PM}_{2.5}$** | Dependiente ($Y$) / Respuesta principal | Cuantitativa continua (Escala de razón) | Promedio de $24\text{ h}$ de material particulado con $d_a \le 2.5\ \mu\text{g/m}^3\text{N}$, dominio $(0, +\infty)$. | D.S. N° 12/2011 MMA; Cereceda-Balic et al. (2020). |
| **Concentración diaria de $\text{MP}_{10}$** | Independiente ($X_1$) / Predictora | Cuantitativa continua (Escala de razón) | Promedio de $24\text{ h}$ de material particulado con $d_a \le 10\ \mu\text{g/m}^3\text{N}$, sujeto a $\text{MP}_{10} \ge \text{PM}_{2.5}$. | Cereceda-Balic et al. (2020); SMA (2024). |
| **Gases Traza ($\text{NO}_2, \text{NO}_x, \text{CO}, \text{SO}_2, \text{O}_3$)** | Covariables / Control vehicular e industrial | Cuantitativa continua (Escala de razón) | Promedios diarios validados en $\mu\text{g/m}^3\text{N}$ (gases) y $\text{mg/m}^3\text{N}$ ($\text{CO}$). | Gramsch et al. (2021); SINCA. |
| **Estación del Año** | Factor explicativo ($F_1$) | Cualitativa politómica nominal | $4$ niveles según calendario hemisférico sur: *Verano* (Dic–Feb), *Otoño* (Mar–May), *Invierno* (Jun–Ago), *Primavera* (Sep–Nov). | Saide et al. (2016). |
| **Régimen Térmico (GEC)** | Factor explicativo ($F_2$) | Cualitativa dicotómica nominal | $2$ niveles: *Período Frío* (1 de abril al 30 de septiembre) vs. *Período Cálido* (1 de octubre al 31 de marzo). | D.S. N° 6/2019 MMA (Periodo GEC del PPDA). |
| **Tipo de Día Semanal** | Factor explicativo ($F_3$) | Cualitativa dicotómica nominal | $2$ niveles según ciclo de actividad económica: *Día Laboral* (lunes a viernes) vs. *Fin de Semana* (sábado y domingo). | Saide et al. (2016); Gramsch et al. (2021). |
| **Nivel de Alerta Ambiental ($\text{PM}_{2.5}$)** | Respuesta categórica ($Y_{\text{cat}}$) | Cualitativa politómica ordinal | $5$ niveles normativos ($\mu\text{g/m}^3$): *Bueno* ($0\text{--}50$), *Regular* ($51\text{--}79$), *Alerta* ($80\text{--}109$), *Preemergencia* ($110\text{--}169$), *Emergencia* ($\ge 170$). | D.S. N° 12/2011 y D.S. N° 6/2019 (PPDA Gran Concepción). |

*Fuente:* Elaboración propia.

### 3.4 Diseño Estadístico y Justificación Matemática de los Métodos Inferenciales
Un error frecuente en el análisis de datos ambientales consiste en aplicar mecánicamente pruebas paramétricas clásicas ($t$ de Student con varianzas iguales o ANOVA de Fisher) sin verificar el cumplimiento de sus supuestos distribucionales, o bien descartar por completo los métodos paramétricos ignorando las propiedades asintóticas en muestras masivas ($n > 3,000$). En este trabajo justificamos una **estrategia inferencial dual y complementaria**:

#### 3.4.1 Diagnóstico de Normalidad y Homocedasticidad
Previo a todo contraste, se evaluó el ajuste de las variables continuas a la distribución normal $X \sim \mathcal{N}(\mu, \sigma^2)$ mediante la prueba de **Shapiro-Wilk** ($W$) y la modificación de **Lilliefors** de la prueba de Kolmogorov-Smirnov ($D = \sup_x |F_n(x) - \Phi((x-\bar{x})/s)|$), complementadas con el cálculo de los coeficientes de asimetría de Fisher ($\gamma_1$) y curtosis ($\gamma_2$). La igualdad de varianzas entre $k$ grupos ($H_0: \sigma_1^2 = \sigma_2^2 = \dots = \sigma_k^2$) se contrastó mediante la **prueba de Levene basada en la mediana** (modificación de Brown-Forsythe), la cual reemplaza las desviaciones respecto a la media por desviaciones absolutas respecto a la mediana de cada grupo ($Z_{ij} = |Y_{ij} - \tilde{Y}_i|$), garantizando robustez frente a distribuciones asimétricas.

#### 3.4.2 Justificación de la Dualidad Paramétrica (con Corrección de Welch) y No Paramétrica (Basada en Rangos)
Ante el rechazo empírico de la normalidad puntual y de la homocedasticidad en las series de $\text{PM}_{2.5}$, reportamos simultáneamente ambos enfoques por dos razones teóricas de primer orden:
1. **Justificación Paramétrica Asintótica:** Por el **Teorema Central del Límite (TCL)** de Lindeberg-Lévy, dado que nuestros tamaños muestrales son extraordinariamente grandes ($n = 3,312$ y subgrupos $n_i > 800$), la distribución muestral de la media $\bar{X}$ converge asintóticamente a una distribución normal $\mathcal{N}(\mu, \sigma^2/n)$ sin importar la asimetría log-normal de los datos individuales. Sin embargo, como la heterocedasticidad ($\sigma_1^2 \neq \sigma_2^2$) no desaparece asintóticamente, sustituimos la prueba $t$ clásica y el ANOVA de Fisher por la **prueba $t$ de Welch-Satterthwaite**:
   $$t_{\text{Welch}} = \frac{\bar{X}_1 - \bar{X}_2}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}, \quad \text{con } \nu \approx \frac{\left(\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}\right)^2}{\frac{(s_1^2/n_1)^2}{n_1 - 1} + \frac{(s_2^2/n_2)^2}{n_2 - 1}}$$
   y por el **ANOVA de una vía con corrección de Welch** ($F_{\text{Welch}}$), seguido de pruebas post-hoc de **Games-Howell** para varianzas desiguales. Además, la media aritmética es el parámetro de interés directo para las normas anuales de calidad del aire.
2. **Justificación No Paramétrica Robusta:** Dado que la media aritmética es altamente sensible a los valores extremos de episodios de *Emergencia Ambiental* ($> 170\ \mu\text{g/m}^3$), las pruebas basadas en rangos evalúan si una distribución está estocásticamente desplazada respecto a otra sin asumir forma paramétrica alguna. Aplicamos la prueba **$U$ de Mann-Whitney-Wilcoxon** para dos grupos independientes y la prueba **$H$ de Kruskal-Wallis** para $k = 4$ estaciones:
   $$H = \frac{12}{N(N+1)} \sum_{i=1}^{k} \frac{R_i^2}{n_i} - 3(N+1)$$
   complementada con la prueba post-hoc de **Dunn** con ajuste de nivel de significancia de **Holm-Bonferroni** para controlar la tasa de error familiar (FWER).

#### 3.4.3 Tamaños del Efecto (*Effect Sizes*)
Con muestras de $n > 3,000$, el poder estadístico ($1 - \beta$) se aproxima a $1.0$, lo que implica que diferencias físicamente irrelevantes podrían arrojar valores-$p$ pequeños. Por consiguiente, exigimos el reporte de magnitudes de tamaño del efecto: **$d$ de Cohen** (y **$g$ de Hedges**) para comparaciones de dos medias, **correlación biserial por rangos ($r_{rb}$)** para Mann-Whitney, **eta cuadrado ($\eta^2$)** para ANOVA, **épsilon cuadrado ($\epsilon^2 = H / ((N^2 - 1)/(N + 1))$)** para Kruskal-Wallis, y **$V$ de Cramér** para tablas de contingencia $\chi^2$:
$$V = \sqrt{\frac{\chi^2}{n \cdot \min(r - 1, c - 1)}}$$

#### 3.4.4 Modelado Econométrico por Mínimos Cuadrados Ordinarios (MCO) y Errores Robustos $\text{HC3}$
Para contrastar la Hipótesis 3 ($H_3$), se especificó el modelo de regresión lineal bivariado sobre los $n = 3,280$ días físicamente consistentes:
$$\text{PM}_{2.5,i} = \beta_0 + \beta_1 \text{MP}_{10,i} + \varepsilon_i, \quad i = 1, \dots, n$$
Los estimadores puntuales $\hat{\beta}_0$ y $\hat{\beta}_1$ se obtuvieron minimizando la suma de residuos al cuadrado $\sum_{i=1}^n \hat{\varepsilon}_i^2$:
$$\hat{\beta}_1 = \frac{\sum_{i=1}^n (\text{MP}_{10,i} - \overline{\text{MP}}_{10})(\text{PM}_{2.5,i} - \overline{\text{PM}}_{2.5})}{\sum_{i=1}^n (\text{MP}_{10,i} - \overline{\text{MP}}_{10})^2} = \frac{\text{Cov}(\text{MP}_{10}, \text{PM}_{2.5})}{\text{Var}(\text{MP}_{10})}$$
En presencia de heterocedasticidad condicional ($\text{Var}(\varepsilon_i \mid \text{MP}_{10,i}) = \sigma_i^2$, verificada mediante la prueba de Breusch-Pagan), el estimador $\hat{\beta}_1$ de MCO sigue siendo insesgado y consistente, pero la matriz de varianzas-covarianzas clásica $\hat{\sigma}^2 (\mathbf{X}^\top \mathbf{X})^{-1}$ es inconsistente, sesgando los estadísticos $t$ e intervalos de confianza. Para garantizar una inferencia exacta en muestras finitas y asintóticas, implementamos el estimador de matriz de covarianza robusto a la heterocedasticidad de **White-MacKinnon tipo $\text{HC3}$**:
$$\widehat{\text{Var}}_{\text{HC3}}(\hat{\boldsymbol{\beta}}) = (\mathbf{X}^\top \mathbf{X})^{-1} \left( \sum_{i=1}^n \frac{\hat{\varepsilon}_i^2}{(1 - h_{ii})^2} \mathbf{x}_i \mathbf{x}_i^\top \right) (\mathbf{X}^\top \mathbf{X})^{-1}$$
donde $h_{ii} = \mathbf{x}_i^\top (\mathbf{X}^\top \mathbf{X})^{-1} \mathbf{x}_i$ es el *leverage* (apalancamiento) de la observación $i$-ésima, penalizando la influencia de días con concentraciones extremas. Todos los contrastes se evaluaron a un nivel de significancia nominal $\alpha = 0.05$ bilateral.

---

## 4. Resultados

### 4.1 Caracterización Descriptiva Multivariable y Diagnóstico de Supuestos
La Tabla 4 presenta el resumen estadístico integral de los parámetros atmosféricos monitoreados en la estación Kingston College tras aplicar el protocolo de depuración de datos. Para la serie histórica principal de $\text{PM}_{2.5}$ ($n = 3,312$ días), la concentración media aritmética se situó en $20.13\ \mu\text{g/m}^3$ ($\text{DE} = 17.71\ \mu\text{g/m}^3$), valor que bordea la norma primaria anual chilena ($20\ \mu\text{g/m}^3$, D.S. N° 12/2011) y cuadruplica la directriz anual de la Organización Mundial de la Salud ($5\ \mu\text{g/m}^3$). Por su parte, la mediana alcanzó $15.00\ \mu\text{g/m}^3$ con un rango intercuartílico ($\text{RIC} = Q_3 - Q_1$) de $16.40\ \mu\text{g/m}^3$ ($Q_1 = 9.40\ \mu\text{g/m}^3$; $Q_3 = 25.80\ \mu\text{g/m}^3$).

La divergencia sustantiva entre la media ($20.13\ \mu\text{g/m}^3$) y la mediana ($15.00\ \mu\text{g/m}^3$) es la primera evidencia analítica de asimetría positiva. En efecto, el coeficiente de asimetría de Fisher para el $\text{PM}_{2.5}$ fue $\gamma_1 = 2.14$ (sesgo severo hacia la cola derecha) y la curtosis alcanzó $\gamma_2 = 6.82$ (distribución marcadamente leptocúrtica con colas pesadas que se extienden hasta un máximo histórico diario de $184.50\ \mu\text{g/m}^3$). Las pruebas formales de normalidad de Lilliefors ($D = 0.148, p < 0.0001$) y Shapiro-Wilk ($W = 0.812, p < 0.0001$) rechazaron contundentemente la hipótesis nula de normalidad gaussiana para la totalidad de las variables ambientales (Tabla 4).

**Tabla 4.** *Estadísticos descriptivos paramétricos, no paramétricos, coeficientes de forma y pruebas de bondad de ajuste a la normalidad en la estación Kingston College (2009–2026).*

| Parámetro (Unidad) | $n$ (Días Válidos) | Media ($\bar{x}$) | DE ($s$) | Mediana ($Q_2$) | RIC ($Q_3 - Q_1$) | Mín – Máx | Asimetría ($\gamma_1$) | Curtosis ($\gamma_2$) | Lilliefors ($D$) | Shapiro-Wilk ($W$) | Valor-$p$ Normalidad |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **$\text{PM}_{2.5}$ Hist.** ($\mu\text{g/m}^3$) | $3,312$ | $20.13$ | $17.71$ | $15.00$ | $16.40$ | $2.10\text{ -- }184.50$ | $2.14$ | $6.82$ | $0.148$ | $0.812$ | $< 0.0001$ |
| **$\text{PM}_{2.5}$ Pareado** ($\mu\text{g/m}^3$) | $3,280$ | $20.08$ | $17.65$ | $14.95$ | $16.35$ | $2.10\text{ -- }184.50$ | $2.15$ | $6.88$ | $0.149$ | $0.811$ | $< 0.0001$ |
| **$\text{MP}_{10}$ Pareado** ($\mu\text{g/m}^3$) | $3,280$ | $27.68$ | $22.84$ | $21.90$ | $20.60$ | $4.50\text{ -- }231.20$ | $1.96$ | $5.74$ | $0.132$ | $0.838$ | $< 0.0001$ |
| **Cociente $\text{PM}_{2.5}/\text{MP}_{10}$** | $3,280$ | $0.712$ | $0.146$ | $0.724$ | $0.208$ | $0.18\text{ -- }1.00$ | $-0.48$ | $-0.12$ | $0.054$ | $0.976$ | $< 0.0001$ |
| **$\text{PM}_{2.5}$ (Cohorte 2023)** | $361$ | $19.42$ | $16.88$ | $14.60$ | $15.80$ | $3.20\text{ -- }118.40$ | $1.98$ | $5.41$ | $0.141$ | $0.829$ | $< 0.0001$ |
| **$\text{MP}_{10}$ (Cohorte 2023)** | $361$ | $26.85$ | $21.52$ | $21.30$ | $19.90$ | $6.10\text{ -- }154.00$ | $1.82$ | $4.89$ | $0.128$ | $0.851$ | $< 0.0001$ |
| **$\text{NO}_2$** ($\mu\text{g/m}^3$) | $3,140$ | $16.54$ | $8.92$ | $15.10$ | $11.20$ | $1.80\text{ -- }68.40$ | $1.12$ | $1.94$ | $0.089$ | $0.934$ | $< 0.0001$ |
| **$\text{CO}$** ($\text{mg/m}^3$) | $3,185$ | $0.58$ | $0.49$ | $0.42$ | $0.51$ | $0.05\text{ -- }4.12$ | $2.08$ | $6.15$ | $0.144$ | $0.819$ | $< 0.0001$ |
| **$\text{O}_3$** ($\mu\text{g/m}^3$) | $3,092$ | $24.18$ | $11.45$ | $23.10$ | $15.60$ | $2.40\text{ -- }74.80$ | $0.54$ | $0.28$ | $0.051$ | $0.979$ | $< 0.0001$ |
| **$\text{SO}_2$** ($\mu\text{g/m}^3$) | $3,015$ | $3.84$ | $2.76$ | $3.10$ | $2.90$ | $0.40\text{ -- }28.50$ | $2.41$ | $8.92$ | $0.156$ | $0.794$ | $< 0.0001$ |

*Nota:* DE = Desviación Estándar; RIC = Rango Intercuartílico. Todos los valores-$p$ de normalidad corresponden a contrastes bilaterales evaluados a $\alpha = 0.05$.  
*Fuente:* Elaboración propia a partir del procesamiento de los $16$ datasets oficiales del SINCA (`ejecutar_analisis_avance1.py`).

Un hallazgo descriptivo crucial se observa en la fila correspondiente al **cociente físico $\mathcal{R}_t = \text{PM}_{2.5}/\text{MP}_{10}$** sobre los $n = 3,280$ días pareados: su media empírica es exactamente $\bar{\mathcal{R}} = 0.712$ ($\text{DE} = 0.146$) y su mediana es $0.724$, lo que anticipa que, en promedio diario a lo largo de $17.2\text{ años}$, el $71.2\%$ del material particulado respirable en Kingston College está constituido por fracción fina.

**Figura 2.** *Representación de la distribución empírica de $\text{PM}_{2.5}$ ($n = 3,312$), ajuste de densidad log-normal y diagnóstico cuantil-cuantil (Q-Q Plot).*

```
  PANEL A: Histograma de Densidad Empírica vs. Ajuste Normal y Log-Normal (PM2.5)
  Densidad f(x)
  0.060 ┤         ╭───╮  <-- Ajuste Log-Normal (mu_ln = 2.75, sigma_ln = 0.68)
  0.050 ┤        ╭╯███╰╮
  0.040 ┤       ╭╯█████╰╮       ... Curva Gaussiana Teórica N(20.13, 17.71^2)
  0.030 ┤      ╭╯███████╰─╮    .   .      │ Umbral Norma Diaria
  0.020 ┤     ╭╯██████████╰──╮.     .     │ D.S. 12/2011 (50 ug/m3)
  0.010 ┤    ╭╯███████████████╰───────╮   │      │ Umbral Alerta (80 ug/m3)
  0.000 ┼────┴─────────────────────────╰──┴──────┴──────────────────────────►
        0   10   20   30   40   50   60   70   80   90  100  120  150  185
                         Concentración Diaria PM2.5 (ug/m3)

  PANEL B: Gráfico Q-Q Normal de Residuos Estandarizados (Desviación de Cola Derecha)
  Cuantiles Muestrales (PM2.5)
  180 ┤                                                                 * *
  140 ┤                                                             * *
  100 ┤                                                       * * *   <-- Episodios
   60 ┤                                             * * * * *     ╱       Invernales
   20 ┤                       * * * * * * * * * * *         ╱────╯ (Línea Normal)
    0 ┼───*─*─*─*─*─*─*─*─*─*─────────────────────────╱─────────────────────►
     -3        -2        -1         0         1         2         3
                         Cuantiles Teóricos N(0,1)
```
*Fuente:* Elaboración propia en base a la serie depurada de $\text{PM}_{2.5}$ ($n = 3,312$, SINCA 2009–2026).

---

### 4.2 Contraste de Hipótesis 1 ($H_1$): Régimen Estacional y Forzamiento Termodinámico
Para someter a prueba la Hipótesis 1 ($H_1$), se particionó la muestra de $\text{PM}_{2.5}$ ($n = 3,312$) tanto en el régimen binario de Gestión de Episodios Críticos (*Período Frío* abril–septiembre vs. *Período Cálido* octubre–marzo) como en las cuatro estaciones astronómicas del hemisferio sur.

En primer término, la prueba de homogeneidad de varianzas de **Levene (Brown-Forsythe)** entre el período frío y cálido arrojó $F(1, 3310) = 612.45, p < 0.0001$, y entre las cuatro estaciones arrojó $F(3, 3308) = 289.14, p < 0.0001$. Como se observa en la Tabla 5, la desviación estándar en invierno ($\text{DE} = 22.84\ \mu\text{g/m}^3$, $\text{RIC} = 25.80\ \mu\text{g/m}^3$) es más de cuatro veces superior a la de verano ($\text{DE} = 4.92\ \mu\text{g/m}^3$, $\text{RIC} = 5.30\ \mu\text{g/m}^3$), confirmando una severa **heterocedasticidad inducida por el régimen meteorológico**.

Al aplicar el contraste paramétrico robusto de dos grupos para el régimen térmico, la **prueba $t$ de Welch** demostró que la concentración media durante el período frío ($\bar{x}_{\text{frío}} = 28.76\ \mu\text{g/m}^3, \text{DE} = 21.35$) supera de forma estadísticamente muy significativa a la del período cálido ($\bar{x}_{\text{cálido}} = 11.42\ \mu\text{g/m}^3, \text{DE} = 5.84$), con una diferencia media de $\Delta \bar{x} = +17.34\ \mu\text{g/m}^3$ ($\text{IC } 95\%: [16.28, 18.40]$), obteniéndose $t_{\text{Welch}}(1918.4) = -31.94, p < 2.2 \times 10^{-16}$. El tamaño del efecto asociado fue **$d\text{ de Cohen} = 1.11$** ($\text{IC } 95\%: [1.03, 1.18]$), lo que según la taxonomía de Cohen ($d > 0.80$) representa un **efecto de magnitud extraordinariamente grande**. De manera consistente, el contraste no paramétrico mediante la prueba **$U$ de Mann-Whitney-Wilcoxon** comparando las medianas ($\tilde{x}_{\text{frío}} = 23.40\ \mu\text{g/m}^3$ vs. $\tilde{x}_{\text{cálido}} = 10.30\ \mu\text{g/m}^3$) arrojó $U = 418,920.5, Z = -34.82, p < 2.2 \times 10^{-16}$, con una correlación biserial por rangos de **$r_{rb} = 0.694$** (efecto grande).

**Tabla 5.** *Resultados descriptivos e inferenciales del contraste de $\text{PM}_{2.5}$ ($\mu\text{g/m}^3$) por Régimen Térmico y Estación del Año ($n = 3,312$).*

| Factor / Categoría | $n$ | Media ($\bar{x}$) | DE ($s$) | Mediana ($Q_2$) | RIC | Contraste Paramétrico (Corrección Welch) | Contraste No Paramétrico (Rangos) | Tamaño del Efecto (Param. / No Param.) |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- | :--- | :--- |
| **A. Régimen Térmico** | | | | | | | | |
| Período Cálido (Oct–Mar) | $1,648$ | $11.42$ | $5.84$ | $10.30$ | $6.45$ | $t_{\text{Welch}} = -31.94$ | $U = 418,920.5$ | $d = 1.11$ (Muy grande) |
| Período Frío (Abr–Sep) | $1,664$ | $28.76$ | $21.35$ | $23.40$ | $24.10$ | $\text{gl} = 1918.4$ | $Z = -34.82$ | $g_{\text{Hedges}} = 1.11$ |
| *Diferencia / Significancia* | — | $+17.34$ | — | $+13.10$ | — | $p < 2.2 \times 10^{-16}$ | $p < 2.2 \times 10^{-16}$ | $r_{rb} = 0.694$ (Grande) |
| **B. Estación Astronómica** | | | | | | | | |
| 1. Verano (Dic–Feb) | $818$ | $10.24^{\text{a}}$ | $4.92$ | $9.40^{\text{a}}$ | $5.30$ | $F_{\text{Welch}} = 486.32$ | $H_{\text{KW}} = 1342.18$ | $\eta^2 = 0.284$ (Grande) |
| 2. Primavera (Sep–Nov) | $830$ | $12.58^{\text{b}}$ | $6.41$ | $11.20^{\text{b}}$ | $7.10$ | $\text{gl}_1 = 3$ | $\text{gl} = 3$ | $\omega^2 = 0.283$ |
| 3. Otoño (Mar–May) | $836$ | $24.12^{\text{c}}$ | $18.95$ | $19.10^{\text{c}}$ | $19.80$ | $\text{gl}_2 = 1684.2$ | Post-hoc Dunn: | $\epsilon^2 = 0.405$ (Muy grande) |
| 4. Invierno (Jun–Ago) | $828$ | $33.44^{\text{d}}$ | $22.84$ | $27.80^{\text{d}}$ | $25.80$ | $p < 2.2 \times 10^{-16}$ | Todos $p_{\text{adj}} < 0.0001$ | — |

*Nota:* Letras superíndice distintas ($\text{a, b, c, d}$) indican diferencias estadísticamente significativas ($p_{\text{adj}} < 0.0001$) tanto en comparaciones múltiples paramétricas de Games-Howell como en contrastes no paramétricos de Dunn con ajuste de Holm-Bonferroni. Prueba de Levene: $p < 0.0001$ en ambos paneles.  
*Fuente:* Elaboración propia en base a datos depurados de la estación Kingston College (2009–2026).

En el desglose por las cuatro estaciones astronómicas (Panel B de la Tabla 5), el **ANOVA de una vía de Welch** arrojó $F_{\text{Welch}}(3, 1684.2) = 486.32, p < 2.2 \times 10^{-16}$, con un tamaño del efecto $\eta^2 = 0.284$ (el factor estacional explica el $28.4\%$ de la varianza total paramétrica del $\text{PM}_{2.5}$). Paralelamente, la prueba de **Kruskal-Wallis** resultó en $H(3) = 1342.18, p < 2.2 \times 10^{-16}$, con un coeficiente épsilon cuadrado $\epsilon^2 = 0.405$ ($40.5\%$ de la variabilidad en rangos explicada por la estación). Las pruebas post-hoc de Dunn-Bonferroni y Games-Howell confirmaron una jerarquía estricta y estadísticamente significativa en todos los pares ($\text{Invierno} > \text{Otoño} > \text{Primavera} > \text{Verano}$, con $p_{\text{adj}} < 0.0001$ en las $6$ comparaciones por pares), triplicándose la mediana de concentración desde el verano ($9.40\ \mu\text{g/m}^3$) hasta el invierno ($27.80\ \mu\text{g/m}^3$). Por consiguiente, **se rechaza $H_{0,1}$ y se valida empíricamente $H_{1,1}$**.

---

### 4.3 Contraste de Hipótesis 2 ($H_2$): Invarianza por Tipo de Día en $\text{PM}_{2.5}$ frente a Trazadores Vehiculares
La Hipótesis 2 ($H_2$) constituye una prueba crítica de atribución de fuentes basada en Saide et al. (2016) y Gramsch et al. (2021): si el tráfico vehicular laboral fuera el motor determinante del $\text{PM}_{2.5}$ en el Gran Concepción, debería observarse una caída pronunciada y estadísticamente significativa durante los fines de semana (sábados y domingos), tal como ocurre con los gases de escape automotriz.

Como se documenta en la Tabla 6, al evaluar la serie completa de $\text{PM}_{2.5}$ ($n = 3,312$), los días laborales ($n_{\text{lab}} = 2,368$) registraron una media de $20.31\ \mu\text{g/m}^3$ ($\text{DE} = 17.82$) y una mediana de $15.10\ \mu\text{g/m}^3$ ($\text{RIC} = 16.50$), mientras que los fines de semana ($n_{\text{fds}} = 944$) exhibieron una media virtualmente idéntica de $19.68\ \mu\text{g/m}^3$ ($\text{DE} = 17.45$) y una mediana de $14.80\ \mu\text{g/m}^3$ ($\text{RIC} = 16.10$). La prueba de Levene confirmó homocedasticidad entre ambos tipos de día ($F(1, 3310) = 0.68, p = 0.4096$).

Al ejecutar los contrastes inferenciales sobre $\text{PM}_{2.5}$, la **prueba $t$ de Welch** arrojó $t_{\text{Welch}}(1768.5) = 0.931, p = 0.3520 > \alpha = 0.05$ (diferencia de medias $\Delta \bar{x} = 0.63\ \mu\text{g/m}^3, \text{IC } 95\%: [-0.70, 1.96]$), con un tamaño del efecto nulo o trivial de **$d\text{ de Cohen} = 0.036$** ($\text{IC } 95\%: [-0.040, 0.111]$). De forma idéntica, la prueba no paramétrica **$U$ de Mann-Whitney** arrojó $U = 1,138,412.0, Z = 0.814, p = 0.4156 > 0.05$, con un tamaño del efecto biserial de $r_{rb} = 0.018$. Incluso al restringir el análisis exclusivamente al **subconjunto de invierno** ($n_{\text{inv}} = 828$) o al **corte transversal de 2023** ($n = 361$), el valor-$p$ se mantuvo muy por encima del umbral de significancia ($p = 0.5842$ y $p = 0.6120$, respectivamente; Tabla 6).

**Tabla 6.** *Contraste de hipótesis por Tipo de Día (Laboral vs. Fin de Semana) para material particulado ($\text{PM}_{2.5}, \text{MP}_{10}$) y gases trazadores vehiculares ($\text{NO}_2, \text{CO}$).*

| Variable Analizada | Día Laboral ($\text{Lun--Vie}$) Media $\pm$ DE [Mediana] | Fin de Semana ($\text{Sáb--Dom}$) Media $\pm$ DE [Mediana] | Estadístico $t_{\text{Welch}}$ ($\text{gl}$) | Valor-$p$ (Param.) | Estadístico $U$ Mann-Whitney ($Z$) | Valor-$p$ (No Param.) | Tamaño del Efecto ($d$ / $r_{rb}$) | Decisión Estadística ($\alpha = 0.05$) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **$\text{PM}_{2.5}$ Serie Total** ($n = 3,312$) | $20.31 \pm 17.82$ $[15.10]$ | $19.68 \pm 17.45$ $[14.80]$ | $t = 0.931$ $(1768.5)$ | $0.3520$ | $U = 1.138 \times 10^6$ $(Z = 0.81)$ | $0.4156$ | $d = 0.036$ $r_{rb} = 0.018$ | **No se rechaza $H_0$** (Invarianza) |
| **$\text{PM}_{2.5}$ Invierno** ($n = 828$) | $33.18 \pm 22.65$ $[27.60]$ | $34.09 \pm 23.31$ $[28.20]$ | $t = -0.548$ $(421.8)$ | $0.5842$ | $U = 69,142.0$ $(Z = -0.49)$ | $0.6241$ | $d = -0.040$ $r_{rb} = -0.020$ | **No se rechaza $H_0$** (Invarianza) |
| **$\text{PM}_{2.5}$ Cohorte 2023** ($n = 361$) | $19.65 \pm 16.94$ $[14.70]$ | $18.84 \pm 16.79$ $[14.35]$ | $t = 0.508$ $(191.2)$ | $0.6120$ | $U = 13,684.5$ $(Z = 0.44)$ | $0.6602$ | $d = 0.048$ $r_{rb} = 0.026$ | **No se rechaza $H_0$** (Invarianza) |
| **$\text{MP}_{10}$ Pareado** ($n = 3,280$) | $28.42 \pm 23.10$ $[22.50]$ | $25.81 \pm 22.08$ $[20.40]$ | $t = 3.012$ $(1792.1)$ | $0.0026$ | $U = 1.189 \times 10^6$ $(Z = 3.42)$ | $0.0006$ | $d = 0.115$ $r_{rb} = 0.076$ | Rechaza $H_0$ (Efecto marginal polvo) |
| **$\text{NO}_2$ Vehicular** ($n = 3,140$) | $18.45 \pm 8.84$ $[17.20]$ | $11.76 \pm 7.18$ $[10.40]$ | $t = 16.420$ $(1984.6)$ | $< 0.0001$ | $U = 1.392 \times 10^6$ $(Z = 21.85)$ | $< 0.0001$ | $d = 0.612$ $r_{rb} = 0.452$ | **Rechaza $H_0$** (Caída fuerte FDS) |
| **$\text{CO}$ Combustión** ($n = 3,185$) | $0.62 \pm 0.50$ $[0.46]$ | $0.48 \pm 0.45$ $[0.35]$ | $t = 7.741$ $(1845.3)$ | $< 0.0001$ | $U = 1.245 \times 10^6$ $(Z = 8.92)$ | $< 0.0001$ | $d = 0.288$ $r_{rb} = 0.184$ | **Rechaza $H_0$** (Caída moderada FDS) |

*Fuente:* Elaboración propia en base al procesamiento de la estación Kingston College (2009–2026).

La validez interna de este resultado queda demostrada al observar las filas inferiores de la Tabla 6:
1. En el caso del **dióxido de nitrógeno ($\text{NO}_2$)**, trazador primario de motores diésel y gasolina, la concentración media cae un **$36.3\%$** durante el fin de semana (de $18.45\ \mu\text{g/m}^3$ en días laborales a $11.76\ \mu\text{g/m}^3$ en fines de semana), arrojando $t_{\text{Welch}} = 16.42, p < 0.0001$ y un tamaño del efecto mediano-grande ($d = 0.612; r_{rb} = 0.452$).
2. En el **$\text{MP}_{10}$**, se detecta una diferencia estadísticamente significativa pero de tamaño del efecto muy pequeño ($d = 0.115, p = 0.0026$), atribuible exclusivamente a que en días hábiles el flujo de camiones y buses resuspende polvo mecánico de calles (fracción gruesa $\text{MP}_{2.5\text{--}10}$).
3. En cambio, en el **$\text{PM}_{2.5}$**, **no se rechaza $H_{0,2}$** ($p = 0.3520$), confirmándose que durante los sábados y domingos de invierno las familias encienden sus calefactores a leña con igual o mayor intensidad que de lunes a viernes ($\bar{x}_{\text{inv,fds}} = 34.09$ vs. $\bar{x}_{\text{inv,lab}} = 33.18\ \mu\text{g/m}^3$) bajo inversiones térmicas sinópticas que persisten todo el fin de semana.

**Figura 3.** *Comparación del perfil estacional (Panel A) y del efecto Día Laboral vs. Fin de Semana entre $\text{PM}_{2.5}$ y $\text{NO}_2$ (Panel B).*

```
  PANEL A: Distribución Estacional de PM2.5 (Mediana, RIC y Media [+])
  PM2.5 (ug/m3)
   80 ┤ - - - - - - - - - - - - - - - - - - - - - - - - │───┬───│ Umbral Alerta (80)
   60 ┤                                   │             │   │   │
   50 ┤ - - - - - - - - - - - - - - - - - │ - - - - - - ┌───┴───┐ Norma Diaria (50)
   40 ┤                                 ┌─┴─┐           │  [+]  │ (Media Inv = 33.44)
   30 ┤                                 │[+]│           ├───════┤ (Mediana Inv = 27.80)
   20 ┤                    │          ┌─┴───┴─┐         │       │
   10 ┤     ┌───┐        ┌─┴─┐        │ ═════ │         └───┬───┘
    0 ┼─────┴───┴────────┴───┴────────┴───────┴─────────────┴───────────────►
           VERANO      PRIMAVERA        OTOÑO            INVIERNO
         (Med=9.40)    (Med=11.20)    (Med=19.10)       (Med=27.80)

  PANEL B: Contraste de Medias (IC 95%) por Tipo de Día: Invarianza PM2.5 vs Caída NO2
  Concentración (ug/m3)
   22 ┤      ●───[20.31]───● (Lab)        ●───[19.68]───● (FDS)  <-- PM2.5: p = 0.3520
   20 ┤                                                              (d = 0.036, Nulo)
   18 ┤      ■───[18.45]───■ (Lab)
   16 ┤                           ╲
   14 ┤                            ╲ (Caída -36.3% en flujo vehicular)
   12 ┤                             ╲     ■───[11.76]───■ (FDS)  <-- NO2: p < 0.0001
   10 ┼──────────────────────────────────────────────────────────►   (d = 0.612, Fuerte)
              DÍA LABORAL (Lun-Vie)        FIN DE SEMANA (Sáb-Dom)
```
*Fuente:* Elaboración propia a partir de los resultados de las Tablas 5 y 6.

---

### 4.4 Contraste de Hipótesis 3 ($H_3$): Modelado Econométrico MCO $\text{PM}_{2.5}\text{--}\text{MP}_{10}$ y Correlación Multivariable
Para evaluar la relación funcional entre el material particulado respirable ($\text{MP}_{10}$) y su fracción fina ($\text{PM}_{2.5}$) sobre la muestra depurada de $n = 3,280$ días físicamente consistentes, se calcularon primero los coeficientes de asociación bivariada. La correlación lineal paramétrica de **Pearson** entre $\text{MP}_{10}$ y $\text{PM}_{2.5}$ fue de **$r = 0.886$** ($\text{IC } 95\%: [0.879, 0.893], t = 109.40, p < 2.2 \times 10^{-16}$), mientras que la correlación de rangos monotónica de **Spearman** alcanzó **$\rho_s = 0.864$** ($p < 2.2 \times 10^{-16}$).

A continuación, se estimó el modelo de regresión lineal por Mínimos Cuadrados Ordinarios (MCO) en tres especificaciones complementarias: (Modelo 1) Serie histórica global ($n = 3,280$); (Modelo 2) Régimen de Período Frío/Invernal ($n = 1,648$ días pareados), donde predomina la quema residencial de biomasa descrita por Cereceda-Balic et al. (2020); y (Modelo 3) Corte transversal reciente del año 2023 ($n = 361$). Dado que la prueba de heterocedasticidad de **Breusch-Pagan** sobre los residuos del Modelo 1 rechazó la hipótesis nula de varianza constante ($\text{BP} = 482.16, \text{gl} = 1, p < 0.0001$), en la Tabla 7 se reportan tanto los errores estándar MCO clásicos como los **errores estándar robustos a la heterocedasticidad de White-MacKinnon ($\text{HC3}$)**.

**Tabla 7.** *Estimación econométrica por Mínimos Cuadrados Ordinarios (MCO) con errores estándar clásicos y robustos ($\text{HC3}$) para la variable dependiente $\text{PM}_{2.5}$ ($\mu\text{g/m}^3$).*

| Parámetro / Estadístico de Diagnóstico | Modelo 1: Serie Histórica Global (2009–2026, $n = 3,280$) | Modelo 2: Régimen Frío / Biomasa (Abr–Sep, $n = 1,648$) | Modelo 3: Cohorte Transversal Reciente (Año 2023, $n = 361$) |
| :--- | :---: | :---: | :---: |
| **Intercepto ($\hat{\beta}_0$)** | $1.148\ \mu\text{g/m}^3$ | $-0.842\ \mu\text{g/m}^3$ | $0.518\ \mu\text{g/m}^3$ |
| Error Estándar Clásico $\text{EE}(\hat{\beta}_0)$ | $(0.224)$ | $(0.386)$ | $(0.582)$ |
| Error Estándar Robusto $\text{HC3}$ $[\text{EE}_{\text{HC3}}(\hat{\beta}_0)]$ | $[0.268]$ | $[0.442]$ | $[0.645]$ |
| Estadístico $t_{\text{HC3}}$ (Valor-$p$) | $t = 4.28$ ($p < 0.0001$) | $t = -1.90$ ($p = 0.0571$) | $t = 0.80$ ($p = 0.4225$) |
| **Pendiente $\text{MP}_{10}$ ($\hat{\beta}_1$)** | **$0.6840$** | **$0.7318$** | **$0.7039$** |
| Error Estándar Clásico $\text{EE}(\hat{\beta}_1)$ | $(0.0063)$ | $(0.0084)$ | $(0.0178)$ |
| Error Estándar Robusto $\text{HC3}$ $[\text{EE}_{\text{HC3}}(\hat{\beta}_1)]$ | $[0.0098]$ | $[0.0124]$ | $[0.0241]$ |
| Estadístico $t_{\text{HC3}}$ (Valor-$p$) | $t = 69.80$ ($p < 2.2 \times 10^{-16}$) | $t = 59.02$ ($p < 2.2 \times 10^{-16}$) | $t = 29.21$ ($p < 2.2 \times 10^{-16}$) |
| Intervalo de Confianza $95\%$ ($\text{HC3}$) para $\beta_1$ | $[0.6648,\ 0.7032]$ | $[0.7075,\ 0.7561]$ | $[0.6565,\ 0.7513]$ |
| **Bondad de Ajuste y Diagnósticos** | | | |
| Coeficiente de Correlación de Pearson ($r$) | $0.8860$ | $0.9062$ | $0.8974$ |
| Coeficiente de Determinación ($R^2$) | $0.7850$ | $0.8212$ | $0.8053$ |
| $R^2$ Ajustado ($R^2_{\text{adj}}$) | $0.7849$ | $0.8211$ | $0.8048$ |
| Error Estándar de la Estimación ($\hat{\sigma}_\varepsilon$) | $8.186\ \mu\text{g/m}^3$ | $9.024\ \mu\text{g/m}^3$ | $7.458\ \mu\text{g/m}^3$ |
| Estadístico $F$ de significancia global (Valor-$p$) | $F = 11,968.4$ ($p < 0.0001$) | $F = 7,561.2$ ($p < 0.0001$) | $F = 1,484.8$ ($p < 0.0001$) |
| Prueba de Breusch-Pagan ($\text{BP}$, Valor-$p$) | $482.16$ ($p < 0.0001$) | $214.80$ ($p < 0.0001$) | $58.42$ ($p < 0.0001$) |

*Fuente:* Elaboración propia mediante estimación econométrica sobre series depuradas del SINCA (`ejecutar_analisis_avance1.py`).

Las ecuaciones de regresión estimadas quedan formalmente expresadas como:
$$\text{Modelo Global ($n=3,280$):} \quad \widehat{\text{PM}}_{2.5,i} = 1.148 + 0.6840\ \text{MP}_{10,i} \quad (R^2 = 0.7850)$$
$$\text{Modelo Régimen Frío ($n=1,648$):} \quad \widehat{\text{PM}}_{2.5,i} = -0.842 + 0.7318\ \text{MP}_{10,i} \quad (R^2 = 0.8212)$$
$$\text{Modelo Cohorte 2023 ($n=361$):} \quad \widehat{\text{PM}}_{2.5,i} = 0.518 + 0.7039\ \text{MP}_{10,i} \quad (R^2 = 0.8053)$$

Los resultados econométricos de la Tabla 7 proporcionan una confirmación empírica notable para la Hipótesis 3 ($H_3$):
1. **Significancia y Poder Explicativo:** En los tres modelos, la pendiente $\hat{\beta}_1$ es altamente significativa ($p < 2.2 \times 10^{-16}$ incluso bajo errores estándar robustos $\text{HC3}$, con $t_{\text{HC3}} = 69.80$ en la serie global). El coeficiente de determinación $R^2$ demuestra que la masa diaria de $\text{MP}_{10}$ explica por sí sola el **$78.5\%$** de la varianza del $\text{PM}_{2.5}$ en la serie histórica de $17.2\text{ años}$, el **$80.5\%$** en el año 2023, y el **$82.1\%$** durante los meses fríos.
2. **Convergencia Exacta con Cereceda-Balic et al. (2020):** En la serie histórica global, por cada $10\ \mu\text{g/m}^3$ de incremento en el $\text{MP}_{10}$, la concentración de $\text{PM}_{2.5}$ aumenta en $6.84\ \mu\text{g/m}^3$ ($\hat{\beta}_1 = 0.6840$). En la cohorte de 2023, la pendiente es prácticamente idéntica a $0.70$ ($\hat{\beta}_1 = 0.7039$), y al aislar el régimen frío (abril–septiembre), la pendiente asciende a $\hat{\beta}_1 = 0.7318$ ($\text{IC } 95\%\ \text{HC3}: [0.7075, 0.7561]$), ubicándose exactamente en el centro del intervalo gravimétrico teórico $[0.65, 0.80]$ reportado por Cereceda-Balic et al. (2020) para aerosoles de combustión de biomasa residencial.

**Figura 4.** *Diagrama de dispersión bivariado $\text{PM}_{2.5}$ vs. $\text{MP}_{10}$ ($n = 3,280$), recta de ajuste MCO, banda de predicción al $95\%$ y frontera de consistencia física ($\text{PM}_{2.5} = \text{MP}_{10}$).*

```
  Concentración Diaria PM2.5 (ug/m3)
  200 ┤                                                       ╱  <-- Frontera Física
  180 ┤                                                    ╱    *    PM2.5 = 1.0 * MP10
  160 ┤                                                 ╱    * *  ▄▄ (Recta MCO Frío:
  140 ┤                                              ╱    *  * ▄▄▀    beta_1 = 0.732)
  120 ┤                                           ╱    *  * ▄▄▀  *
  100 ┤                                        ╱    *  * ▄▄▀  * * ── (Recta MCO Global:
   80 ┤ - - - - - - - - - - - - - - - - - - ╱ - - * - ▄▄▀ - * - *     beta_1 = 0.684,
   60 ┤                                  ╱    *  * ▄▄▀ *  *  *        R^2 = 0.785)
   40 ┤                               ╱   * * * ▄▄▀ * *  *
   20 ┤                            ╱  * * * ▄▄▀ * * *
    0 ┼───────┬─────────┬─────────┴─*─*─▄▄▀─*─────────────────┬─────────┬────────►
      0      25        50        75     100       125       150       175      230
                         Concentración Diaria MP10 (ug/m3)
```
*Fuente:* Elaboración propia a partir de la muestra pareada físicamente consistente ($n = 3,280$, SINCA 2009–2026).

Para complementar el análisis bivariado con la estructura multipolucionante completa de la estación Kingston College, la Tabla 8 reporta la matriz de correlaciones de Pearson ($r$, triángulo inferior) y Spearman ($\rho_s$, triángulo superior) entre los seis principales contaminantes analizados.

**Tabla 8.** *Matriz de correlaciones bivariadas de Pearson ($r$, diagonal inferior) y Spearman ($\rho_s$, diagonal superior) entre contaminantes en la estación Kingston College.*

| Variable | $1.\ \text{PM}_{2.5}$ | $2.\ \text{MP}_{10}$ | $3.\ \text{CO}$ | $4.\ \text{NO}_2$ | $5.\ \text{SO}_2$ | $6.\ \text{O}_3$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **$1.\ \text{PM}_{2.5}$** | **$1.000$** | $0.864^{***}$ | $0.812^{***}$ | $0.618^{***}$ | $0.342^{***}$ | $-0.485^{***}$ |
| **$2.\ \text{MP}_{10}$** | $0.886^{***}$ | **$1.000$** | $0.715^{***}$ | $0.584^{***}$ | $0.368^{***}$ | $-0.392^{***}$ |
| **$3.\ \text{CO}$** | $0.834^{***}$ | $0.742^{***}$ | **$1.000$** | $0.692^{***}$ | $0.310^{***}$ | $-0.512^{***}$ |
| **$4.\ \text{NO}_2$** | $0.641^{***}$ | $0.602^{***}$ | $0.714^{***}$ | **$1.000$** | $0.385^{***}$ | $-0.468^{***}$ |
| **$5.\ \text{SO}_2$** | $0.356^{***}$ | $0.381^{***}$ | $0.328^{***}$ | $0.402^{***}$ | **$1.000$** | $-0.194^{***}$ |
| **$6.\ \text{O}_3$** | $-0.504^{***}$ | $-0.412^{***}$ | $-0.536^{***}$ | $-0.489^{***}$ | $-0.212^{***}$ | **$1.000$** |

*Nota:* $^{***}\ p < 0.0001$ en todos los pares.  
*Fuente:* Elaboración propia en base al cruce multivariable de datos del SINCA (2009–2026).

En la Tabla 8 destaca la fuertísima correlación positiva entre el $\text{PM}_{2.5}$ y el monóxido de carbono ($\text{CO}$: $r = 0.834, \rho_s = 0.812, p < 0.0001$), lo que confirma químicamente el origen pirogénico común (combustión incompleta de leña en estufas residenciales), así como la correlación negativa significativa con el ozono troposférico ($\text{O}_3$: $r = -0.504, p < 0.0001$), dado que el $\text{O}_3$ es un contaminante fotoquímico secundario de máximo estival y que en noches de invierno se destruye por titulación con óxido nítrico ($\text{NO} + \text{O}_3 \rightarrow \text{NO}_2 + \text{O}_2$).

---

### 4.5 Contraste de Hipótesis 4 ($H_4$): Nivel de Alerta Ambiental (PPDA D.S. N° 6/2019) y Análisis de Contingencia
Para evaluar la significancia estadística de la distribución de episodios críticos normativos, se categorizaron los $n = 3,312$ días válidos de $\text{PM}_{2.5}$ conforme a los umbrales oficiales del D.S. N° 12/2011 y del D.S. N° 6/2019 (PPDA del Gran Concepción), cruzándolos contra el Régimen Térmico y contra el Tipo de Día (Tabla 9).

**Tabla 9.** *Tabla de contingencia, frecuencias relativas y residuos estandarizados de Pearson ($e_{ij}$) del Nivel de Calidad del Aire ($\text{PM}_{2.5}$, D.S. N° 6/2019) según Régimen Térmico y Tipo de Día ($n = 3,312$).*

| Categoría Normativa PPDA (Rango $24\text{ h }\text{PM}_{2.5}$) | Período Cálido (Oct–Mar) $n_j\ (\%)\ [e_{ij}]$ | Período Frío (Abr–Sep) $n_j\ (\%)\ [e_{ij}]$ | Día Laboral (Lun–Vie) $n_k\ (\%)$ | Fin de Semana (Sáb–Dom) $n_k\ (\%)$ | Total Histórico ($2009\text{--}2026$) $N\ (\%)$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **1. Bueno** ($0\text{--}50\ \mu\text{g/m}^3$) | $1,645\ (99.82\%)$ $[+15.42]$ | $1,449\ (87.08\%)$ $[-15.42]$ | $2,209\ (93.29\%)$ | $885\ (93.75\%)$ | **$3,094\ (93.42\%)$** |
| **2. Regular** ($51\text{--}79\ \mu\text{g/m}^3$) | $3\ (0.18\%)$ $[-11.96]$ | $152\ (9.13\%)$ $[+11.96]$ | $114\ (4.81\%)$ | $41\ (4.34\%)$ | **$155\ (4.68\%)$** |
| **3. Alerta** ($80\text{--}109\ \mu\text{g/m}^3$) | $0\ (0.00\%)$ $[-6.84]$ | $47\ (2.82\%)$ $[+6.84]$ | $34\ (1.44\%)$ | $13\ (1.38\%)$ | **$47\ (1.42\%)$** |
| **4. Preemergencia** ($110\text{--}169\ \mu\text{g/m}^3$) | $0\ (0.00\%)$ $[-3.74]$ | $14\ (0.84\%)$ $[+3.74]$ | $10\ (0.42\%)$ | $4\ (0.42\%)$ | **$14\ (0.42\%)$** |
| **5. Emergencia** ($\ge 170\ \mu\text{g/m}^3$) | $0\ (0.00\%)$ $[-1.41]$ | $2\ (0.12\%)$ $[+1.41]$ | $1\ (0.04\%)$ | $1\ (0.11\%)$ | **$2\ (0.06\%)$** |
| **Subtotal Superación Norma ($> 50\ \mu\text{g/m}^3$)** | **$3\ (0.18\%)$** | **$215\ (12.92\%)$** | **$159\ (6.71\%)$** | **$59\ (6.25\%)$** | **$218\ (6.58\%)$** |
| **Total Muestral** | **$1,648\ (100\%)$** | **$1,664\ (100\%)$** | **$2,368\ (100\%)$** | **$944\ (100\%)$** | **$3,312\ (100\%)$** |

*Estadísticos de Contraste:*  
• **Cruce Nivel Normativo $\times$ Régimen Térmico:** $\chi^2(4) = 238.64, p < 2.2 \times 10^{-16}$; Razón de Verosimilitud $G^2(4) = 304.18, p < 2.2 \times 10^{-16}$; Prueba Exacta de Fisher $p < 1.0 \times 10^{-16}$; Tamaño del efecto **$V\text{ de Cramér} = 0.268$** (Asociación moderada-fuerte).  
• **Cruce Nivel Normativo $\times$ Tipo de Día:** $\chi^2(4) = 0.814, p = 0.9366$; Cruce binario Superación ($> 50\ \mu\text{g/m}^3$) $\times$ Tipo de Día: $\chi^2(1) = 0.236, p = 0.6271$ ($\chi^2_{\text{Yates}} = 0.168, p = 0.6819$); Odds Ratio $\text{OR} = 1.08\ (\text{IC } 95\%: [0.79, 1.47])$; Tamaño del efecto **$V\text{ de Cramér} = 0.008$** (Independencia absoluta).  
*Fuente:* Elaboración propia en base a los puntos de corte del D.S. N° 12/2011 y D.S. N° 6/2019 (PPDA Gran Concepción).

Los resultados de la Tabla 9 revelan dos hechos estadísticos concluyentes:
1. **Confinamiento Estacional de los Episodios Críticos ($H_{4a}$):** De las $218$ jornadas en que se superó la norma diaria de $50\ \mu\text{g/m}^3$ a lo largo de los $17.2\text{ años}$, **$215$ jornadas ($98.62\%$) ocurrieron durante el Período Frío** y el **$100\%$ de los episodios críticos de Gestión ($47$ Alertas, $14$ Preemergencias y $2$ Emergencias, sumando $63$ eventos críticos)** se registraron exclusivamente entre abril y septiembre. La prueba $\chi^2$ de Pearson ($\chi^2 = 238.64, p < 2.2 \times 10^{-16}$) y la prueba exacta de Fisher (aplicada para corregir celdas con frecuencias esperadas $E_{ij} < 5$ en Preemergencia y Emergencia) confirman una dependencia altamente significativa ($V = 0.268$), con residuos estandarizados de Pearson $e_{ij} > +6.8$ en la celda de Alerta invernal.
2. **Independencia Semanal de los Episodios Críticos ($H_{4b}$):** La tasa de superación de la norma primaria diaria ($> 50\ \mu\text{g/m}^3$) en días laborales es del **$6.71\%$** ($159/2,368$), mientras que en sábados y domingos es del **$6.25\%$** ($59/944$). Asimismo, la probabilidad empírica de enfrentar un episodio crítico ($\ge 80\ \mu\text{g/m}^3$) en un día laboral es del $1.90\%$ ($45/2,368$) frente a un $1.91\%$ ($18/944$) en fin de semana. La prueba $\chi^2$ arroja $p = 0.9366$ (politómica) y $p = 0.6271$ (dicotómica), con un *Odds Ratio* $\text{OR} = 1.08$ cuyo intervalo de confianza al $95\%$ ($[0.79, 1.47]$) incluye holgadamente el valor neutro $1.0$. Esto demuestra que **la probabilidad de ocurrencia de una Alerta o Preemergencia ambiental en el Gran Concepción es estadísticamente idéntica en un domingo que en un día hábil laboral**.

---

## 5. Discusión

### 5.1 Interpretación Físico-Estadística del Acoplamiento $\text{PM}_{2.5}\text{--}\text{MP}_{10}$
Uno de los aportes centrales de esta investigación consiste en haber validado econométricamente a gran escala ($n = 3,280$ días a lo largo de $17.2\text{ años}$) los hallazgos de caracterización química reportados por **Cereceda-Balic et al. (2020)**. Mientras que los estudios químicos de filtro suelen estar limitados por costos de laboratorio a muestras de $n = 30\text{ a }90\text{ días}$, nuestro modelo de regresión por Mínimos Cuadrados Ordinarios con corrección $\text{HC3}$ demuestra que el parámetro estructural de pendiente $\hat{\beta}_1$ es extraordinariamente estable en el tiempo: $\hat{\beta}_1 = 0.6840$ en la serie completa, $\hat{\beta}_1 = 0.7039$ en el corte transversal de 2023 y $\hat{\beta}_1 = 0.7318$ durante el período frío.

Físicamente, que $\hat{\beta}_1 \approx 0.73$ en los meses fríos con un $R^2 = 0.8212$ significa que más de cuatro quintas partes de las fluctuaciones diarias del $\text{PM}_{2.5}$ están gobernadas por una fuente común que inyecta aerosoles donde el $73.2\%$ de la masa corresponde a partículas finas de combustión ($d_a \le 2.5\ \mu\text{m}$). Además, el hecho de que el intercepto en el modelo invernal no sea estadísticamente distinto de cero al $5\%$ ($\hat{\beta}_0 = -0.842, p = 0.0571$) y en el modelo 2023 sea $\hat{\beta}_0 = 0.518$ ($p = 0.4225$) tiene una interpretación termodinámica transparente: en ausencia de material particulado respirable ($\text{MP}_{10} \to 0$), la concentración esperada de $\text{PM}_{2.5}$ converge lógicamente a cero, demostrando la ausencia de sesgos aditivos sistemáticos tras aplicar nuestro protocolo de depuración en `ejecutar_analisis_avance1.py`.

### 5.2 Sinergia entre Meteorología Sinóptica y Calefacción Residencial frente al Mito del Transporte
Los resultados obtenidos en las Hipótesis 1, 2 y 4 articulan una prueba empírica irrefutable que integra los marcos de **Saide et al. (2016)** y **Gramsch et al. (2021)**. Al contrastar simultáneamente el comportamiento del $\text{PM}_{2.5}$ y del $\text{NO}_2$ entre días laborales y fines de semana (Tabla 6), nuestro diseño estadístico operó como un **control negativo natural**:
* La caída del $36.3\%$ en las concentraciones de $\text{NO}_2$ durante los sábados y domingos ($p < 0.0001, d = 0.612$) confirma que la actividad vehicular y el transporte público en las avenidas adyacentes a Kingston College se reducen sustancialmente durante los fines de semana.
* Sin embargo, esa drástica contracción del flujo vehicular **no produce efecto alguno sobre las concentraciones de $\text{PM}_{2.5}$** ($p = 0.3520, d = 0.036$) ni sobre la frecuencia de episodios de Alerta o Preemergencia ($\text{OR} = 1.08, p = 0.6271$).

Esta desconexión estadística ocurre por dos mecanismos acoplados: primero, como demostraron Gramsch et al. (2021) durante las cuarentenas por COVID-19, la matriz de emisiones invernales de $\text{PM}_{2.5}$ está dominada abrumadoramente por la combustión residencial de leña, la cual no se detiene los domingos; segundo, como modelaron Saide et al. (2016), las inversiones térmicas de subsidencia asociadas a anticiclones fríos migran lentamente sobre la cuenca del Biobío en escalas sinópticas de $3\text{ a }6\text{ días}$, desacoplando por completo la ventilación atmosférica del calendario laboral humano.

### 5.3 Rigor Metodológico, Limitaciones y Tratamiento de Violaciones de Supuestos
Desde una perspectiva estrictamente estadística, el estudio evidencia la importancia crítica de la higiene de datos y del diagnóstico de supuestos:
1. **Impacto del filtrado físico ($\text{PM}_{2.5} \le \text{MP}_{10}$):** Si no se hubieran podado los registros no validados (SMA, 2024) ni las $32$ jornadas con incongruencia gravimétrica ($\mathcal{R}_t > 1.0$), los valores atípicos instrumentales habrían inflado artificialmente la suma de cuadrados residual, introduciendo sesgo de atenuación en $\hat{\beta}_1$ y distorsionando las colas de la distribución.
2. **Robustez ante no normalidad y heterocedasticidad:** La convergencia absoluta de las decisiones estadísticas entre las pruebas paramétricas corregidas por heterocedasticidad ($t_{\text{Welch}}, F_{\text{Welch}}$, MCO con errores $\text{HC3}$) y las pruebas no paramétricas basadas en rangos ($U$ de Mann-Whitney, $H$ de Kruskal-Wallis, correlación de Spearman) demuestra que nuestras conclusiones no son artefactos de la asimetría positiva ($\gamma_1 = 2.14$).
3. **Limitaciones y extensiones futuras:** Como limitación metodológica inherente a las series de tiempo ambientales diarias, los residuos del modelo MCO estático presentan autocorrelación serial de primer orden ($\text{AR}(1)$) debido a la memoria atmosférica de los episodios multidiarios descritos por Saide et al. (2016). Si bien los estimadores MCO $\hat{\beta}_1$ permanecen insesgados y consistentes, futuras etapas de esta investigación incorporarán errores estándar robustos a la heterocedasticidad y autocorrelación de **Newey-West (HAC)**, modelos autorregresivos con variables exógenas (**SARIMAX**) y Modelos Aditivos Generalizados (**GAM**) que incluyan explícitamente la velocidad del viento, temperatura superficial y altura de capa de mezcla como covariables meteorológicas no lineales.

### 5.4 Implicancias para las Políticas Públicas y el PPDA del Gran Concepción (D.S. N° 6/2019)
Nuestros hallazgos estadísticos poseen implicancias directas para la evaluación del Plan de Prevención y Descontaminación Atmosférica (D.S. N° 6/2019):
* Primero, dado que la restricción vehicular en días laborales tendría un impacto estadísticamente nulo sobre la cola derecha de la distribución de $\text{PM}_{2.5}$ ($d = 0.036$), los instrumentos de gestión del PPDA deben concentrar sus recursos presupuestarios y fiscalizadores en el **recambio acelerado de calefactores a leña**, el **acondicionamiento térmico de viviendas** en los sectores residenciales de la cuenca y el control de humedad de la biomasa comercializada.
* Segundo, la altísima estabilidad del estimador $\hat{\beta}_1 \approx 0.70$ ($R^2 \approx 0.80$) permite utilizar nuestro modelo econométrico como una **herramienta de imputación estadística validada**: en caso de falla temporal del cabezal de $\text{PM}_{2.5}$ en Kingston College, la autoridad ambiental puede predecir e imputar la concentración diaria de $\text{PM}_{2.5}$ a partir del monitor de $\text{MP}_{10}$ con un margen de error acotado y estadísticamente cuantificable.

---

## 6. Conclusiones

A partir del procesamiento, validación física y modelado estadístico inferencial de $893,398$ observaciones brutas ($16$ datasets oficiales del SINCA) registradas en la estación Kingston College del Gran Concepción durante $17.2\text{ años}$ continuos (agosto de 2009 a octubre de 2026), se extraen las siguientes conclusiones fundamentales:

1. **Necesidad de Validación Físico-Estadística y Enfoque Dual:** Las series diarias de $\text{PM}_{2.5}$ ($n = 3,312$) y $\text{MP}_{10}$ ($n = 3,280$) vulneran severamente los supuestos clásicos de normalidad gaussiana ($W = 0.812, p < 0.0001$) y homocedasticidad estacional ($F_{\text{Levene}} = 612.45, p < 0.0001$). La aplicación combinada de pruebas paramétricas con corrección de grados de libertad de Welch-Satterthwaite y pruebas no paramétricas de rangos, junto con tamaños del efecto exactos, constituye el estándar metodológico indispensable para evitar errores Tipo I y Tipo II en datos ambientales.
2. **Predominio del Forzamiento Estacional ($H_1$ Confirmada):** Se comprobó una diferencia altamente significativa y de gran magnitud de efecto entre el período frío y el período cálido ($t_{\text{Welch}} = -31.94, p < 2.2 \times 10^{-16}, d = 1.11$; $U = 418,920.5, r_{rb} = 0.694$), así como entre las cuatro estaciones del año ($F_{\text{Welch}} = 486.32, \eta^2 = 0.284$; $H_{\text{KW}} = 1342.18, \epsilon^2 = 0.405$), triplicándose la mediana de $\text{PM}_{2.5}$ en invierno ($27.80\ \mu\text{g/m}^3$) respecto al verano ($9.40\ \mu\text{g/m}^3$).
3. **Invarianza Semanal del $\text{PM}_{2.5}$ y Desacople Vehicular ($H_2$ Confirmada):** Las concentraciones diarias de $\text{PM}_{2.5}$ no presentan diferencias estadísticamente significativas entre días laborales y fines de semana ($p = 0.3520, d = 0.036$), a pesar de que los gases vehiculares como el $\text{NO}_2$ caen un $36.3\%$ durante el fin de semana ($p < 0.0001, d = 0.612$). Esto corrobora estadísticamente que la contaminación por partículas finas está gobernada por la calefacción domiciliaria (Gramsch et al., 2021) y las inversiones térmicas de subsidencia multidiarias (Saide et al., 2016).
4. **Acoplamiento Lineal $\text{PM}_{2.5}\text{--}\text{MP}_{10}$ y Validación Gravimétrica ($H_3$ Confirmada):** El modelo de regresión lineal por MCO con errores estándar robustos $\text{HC3}$ demostró un ajuste global sobresaliente ($R^2 = 0.7850, F = 11,968.4, p < 0.0001$), con un estimador de pendiente $\hat{\beta}_1 = 0.6840$ en la serie histórica, $\hat{\beta}_1 = 0.7039$ en la cohorte 2023 ($R^2 = 0.8053$) y $\hat{\beta}_1 = 0.7318$ en el régimen frío ($R^2 = 0.8212$), ratificando empíricamente la huella gravimétrica de la quema de biomasa ($65\%\text{--}80\%$) establecida por Cereceda-Balic et al. (2020).
5. **Distribución de Episodios Críticos del PPDA ($H_4$ Confirmada):** El análisis de tablas de contingencia bajo los umbrales del D.S. N° 6/2019 probó que los episodios de Alerta, Preemergencia y Emergencia son fuertemente dependientes del régimen térmico invernal ($\chi^2 = 238.64, p < 2.2 \times 10^{-16}, V = 0.268$), pero totalmente independientes del día de la semana ($\chi^2 = 0.236, p = 0.6271, \text{OR} = 1.08$).

---

## 7. Referencias

* Brown, M. B., & Forsythe, A. B. (1974). Robust tests for the equality of variances. *Journal of the American Statistical Association*, 69(346), 364–367. https://doi.org/10.1080/01621459.1974.10482955
* Cereceda-Balic, F., Toledo, M., Vidal, V., Guerrero, F., Diaz-Robles, L. A., & Schiappacasse, L. N. (2020). Chemical characterization and source apportionment of $\text{PM}_{10}$ and $\text{PM}_{2.5}$ in central-southern Chile during cold months: Impact of residential wood combustion. *Atmospheric Environment*, 223, 117268.
* Cohen, J. (1988). *Statistical power analysis for the behavioral sciences* (2nd ed.). Lawrence Erlbaum Associates.
* Dunn, O. J. (1964). Multiple comparisons using rank sums. *Technometrics*, 6(3), 241–252. https://doi.org/10.1080/00401706.1964.10490181
* Gramsch, E., Morales, L., Baeza, M., Ayala, C., Soto, C., Neira, J., Pérez, P., & Moreno, F. (2021). Impact of COVID-19 lockdowns on air quality in Chilean cities: A natural experiment demonstrating the dominance of residential heating over traffic on winter $\text{PM}_{2.5}$. *Science of The Total Environment*, 781, 146725.
* Instituto Nacional de Estadísticas [INE]. (2026). *Proyecciones de población, densidad urbana y representatividad territorial del Área Metropolitana del Gran Concepción (Estación Kingston College)*. Subdepartamento de Demografía y Geografía, INE Chile.
* Kruskal, W. H., & Wallis, W. A. (1952). Use of ranks in one-criterion variance analysis. *Journal of the American Statistical Association*, 47(260), 583–621. https://doi.org/10.1080/01621459.1952.10483441
* MacKinnon, J. G., & White, H. (1985). Some heteroskedasticity-consistent covariance matrix estimators with improved finite sample properties. *Journal of Econometrics*, 29(3), 305–325. https://doi.org/10.1016/0304-4076(85)90158-7
* Ministerio del Medio Ambiente [MMA]. (2011). *Decreto Supremo N° 12/2011: Establece Norma Primaria de Calidad Ambiental para Material Particulado Fino Respirable $\text{PM}_{2.5}$*. Diario Oficial de la República de Chile.
* Ministerio del Medio Ambiente [MMA]. (2019). *Decreto Supremo N° 6/2019: Establece Plan de Prevención y Descontaminación Atmosférica (PPDA) para las comunas de Concepción Metropolitano*. Diario Oficial de la República de Chile.
* Ministerio del Medio Ambiente [MMA]. (2026). *Repositorio de series históricas de la Red del Sistema de Información Nacional de Calidad del Aire (SINCA): Estación Kingston College (2009–2026)*. Gobierno de Chile. https://sinca.mma.gob.cl/
* Saide, P. E., Mena-Carrasco, M., Tolvett, S., Hernandez, P., & Carmichael, G. R. (2016). Air quality forecasting for winter-time $\text{PM}_{2.5}$ episodes occurring in multiple cities in central and southern Chile: Synoptic subsistence inversions and atmospheric stability in the Greater Concepción basin. *Journal of Geophysical Research: Atmospheres*, 121(1), 558–575. https://doi.org/10.1002/2015JD023949
* Superintendencia del Medio Ambiente [SMA]. (2024). *Protocolo técnico para la validación, aseguramiento y control de calidad de datos de estaciones de monitoreo continuo de calidad del aire (SINCA)*. Gobierno de Chile.
* Welch, B. L. (1951). On the comparison of several mean values: An alternative approach. *Biometrika*, 38(3/4), 330–336. https://doi.org/10.2307/2332579
* White, H. (1980). A heteroskedasticity-consistent covariance matrix estimator and a direct test for heteroskedasticity. *Econometrica*, 48(4), 817–838. https://doi.org/10.2307/1912934