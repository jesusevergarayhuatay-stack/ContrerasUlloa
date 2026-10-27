// ============================================================================
// DATOS, TABLAS Y NOTAS DE EXPOSICIÓN (PONENCIA UNAM 2026)
// Autora: Cintia Bertha Contreras Ulloa · Defensoría del Pueblo (Perú)
// ============================================================================

const SECTIONS_MAP = [
  { id: 1, label: "I. Problema", startSlide: 2, endSlide: 3 },
  { id: 2, label: "II. Marco 2019", startSlide: 4, endSlide: 4 },
  { id: 3, label: "III. Presidencias", startSlide: 5, endSlide: 5 },
  { id: 4, label: "IV. Gabinetes", startSlide: 6, endSlide: 11 },
  { id: 5, label: "V. PCM y Carteras", startSlide: 12, endSlide: 13 },
  { id: 6, label: "VI. Conclusiones", startSlide: 14, endSlide: 15 }
];

const SPEAKER_NOTES = [
  {
    slide: 1,
    title: "Portada · III Congreso Internacional UNAM 2026",
    pacing: "Tiempo sugerido: 00:00 – 00:45",
    notes: [
      "Buenas tardes a todas y todos en el Aula H 314 de la Universidad Nacional Autónoma de México.",
      "Esta ponencia, titulada «PODER, GÉNERO Y CARRERA PÚBLICA: pisos pegajosos y escaleras rotas en el Estado Peruano», analiza las barreras estructurales en la trayectoria de las mujeres dentro del sector público peruano en un contexto de crisis institucional.",
      "No podemos analizar la carrera pública femenina desde una narrativa meritocrática individual, sino como un fenómeno atravesado por relaciones de poder, inestabilidad gubernamental y estructuras históricas de exclusión."
    ]
  },
  {
    slide: 2,
    title: "Índice de la Ponencia",
    pacing: "Tiempo sugerido: 00:45 – 01:30",
    notes: [
      "Estructuramos la exposición en seis ejes: primero, el planteamiento sobre cómo el binomio político de poder ha erosionado la democracia y el Estado de derecho en el Perú durante los últimos siete años.",
      "Segundo, el marco normativo desde 2019 (Ley N.º 28983 y DS N.º 008-2019-MIMP) y las cuatro condiciones de capacidad estatal.",
      "Tercero y cuarto, el balance presidencial y ministerial desde Martín Vizcarra hasta julio de 2026; quinto, el análisis de la Presidencia del Consejo de Ministros (PCM) y la segregación por carteras; y finalmente, las conclusiones sobre igualdad sustantiva."
    ]
  },
  {
    slide: 3,
    title: "Planteamiento del Problema: Poder, Crisis y Carrera Pública",
    pacing: "Tiempo sugerido: 01:30 – 02:30",
    notes: [
      "El binomio político de poder en el Perú ha generado una crisis institucional y gubernamental que impacta en un deterioro progresivo de la democracia y del Estado de derecho.",
      "La polarización política, el debilitamiento de los mecanismos democráticos y la precarización institucional afectan directamente las condiciones de participación y desarrollo de las mujeres en el aparato estatal.",
      "En este escenario, las brechas de género no solo persisten: se profundizan y normalizan bajo estructuras históricas que reproducen relaciones desiguales de poder."
    ]
  },
  {
    slide: 4,
    title: "Pisos Pegajosos, Escaleras Rotas y Segregación Horizontal",
    pacing: "Tiempo sugerido: 02:30 – 03:45",
    notes: [
      "Desde la teoría de género en la administración pública, observamos tres fenómenos simultáneos en el Estado peruano:",
      "1) Pisos pegajosos: las mujeres ingresan al servicio civil pero quedan retenidas en niveles operativos o técnicos medios.",
      "2) Escaleras rotas: los mecanismos de ascenso hacia la alta dirección y gabinetes se interrumpen ante cada crisis política o cambio de gobierno.",
      "3) Segregación horizontal: cuando las mujeres llegan al gabinete, suelen ser concentradas en carteras sociales (MIMP y MIDIS) y excluidas del núcleo económico y de seguridad."
    ]
  },
  {
    slide: 5,
    title: "¿Por qué partimos desde 2019? Marco Normativo y 4 Condiciones",
    pacing: "Tiempo sugerido: 03:45 – 04:45",
    notes: [
      "Partimos de 2019 porque ese año se aprobó la Política Nacional de Igualdad de Género (DS N.º 008-2019-MIMP), sumada a la Ley N.º 28983.",
      "Esta política reconoce que la discriminación estructural responde a normas y culturas institucionales que reproducen subordinación.",
      "Sin embargo, el desafío del Estado no es solo producir normas, sino asegurar su implementación mediante cuatro condiciones: 1) Voluntad política y criterios transparentes; 2) Seguimiento con datos desagregados; 3) Presupuesto y coordinación intersectorial (no depender solo del MIMP); y 4) Prevención del acoso político."
    ]
  },
  {
    slide: 6,
    title: "Cronología Presidencial en el Perú (2018–2026)",
    pacing: "Tiempo sugerido: 04:45 – 06:00",
    notes: [
      "En los últimos siete años tuvimos seis presidentes y solo una mujer asumió la Presidencia de la República (Dina Boluarte), quien accedió por sucesión constitucional tras vacancia y no por elección popular.",
      "Cuatro presidentes salieron por vacancia parlamentaria (Vizcarra, Castillo, Boluarte, Jerí), uno por renuncia en cinco días (Merino) y uno culminó el gobierno de transición (Sagasti). Esta volatilidad extrema erosiona la continuidad de las políticas de igualdad."
    ]
  },
  {
    slide: 7,
    title: "Gobierno de Martín Vizcarra (2018–2020) y Manuel Merino (2020)",
    pacing: "Tiempo sugerido: 06:00 – 07:00",
    notes: [
      "Durante el gobierno de Martín Vizcarra se designaron 115 titulares ministeriales en seis gabinetes: 45 ministras (38,9 %) y 70 ministros (61,1 %).",
      "La participación femenina osciló entre 26,3 % (Villanueva y Aráoz) y 47,4 % / 52,6 % en el gabinete de Salvador del Solar. Las mujeres encabezaron 7 de las 18 carteras en el corte de referencia, pero hubo 0 mujeres en PCM, RREE, Defensa, Interior y Vivienda.",
      "En el breve gabinete de Manuel Merino (Ántero Flores-Aráoz, nov. 2020), las mujeres ocuparon 7 de 18 carteras (38,9 %)."
    ]
  },
  {
    slide: 8,
    title: "Gobierno de Francisco Sagasti (2020–2021)",
    pacing: "Tiempo sugerido: 07:00 – 08:00",
    notes: [
      "En el gobierno de transición de Francisco Sagasti, el gabinete presidido por Violeta Bermúdez (18 de noviembre de 2020) estuvo integrado por 8 mujeres (42,1 %) y 11 hombres (57,9 %) de 19 integrantes.",
      "Destacan dos hitos relevantes: Violeta Bermúdez liderando la PCM y Nuria Esparch como la primera mujer en la historia del Perú en asumir la cartera de Defensa, además de Elizabeth Astete en Cancillería y Pilar Mazzetti en Salud.",
      "Aun así, los hombres mantuvieron la mayoría numérica y el avance no quedó institucionalizado para el siguiente periodo."
    ]
  },
  {
    slide: 9,
    title: "Gobierno de Pedro Castillo (2021–2022)",
    pacing: "Tiempo sugerido: 08:00 – 09:00",
    notes: [
      "El gobierno de Pedro Castillo inició con un severo retroceso en el gabinete de Guido Bellido (julio 2021): solo 2 mujeres de 19 integrantes (10,5 %), reducidas exclusivamente a MIDIS (Dina Boluarte) y MIMP (Anahí Durand).",
      "En sus composiciones posteriores subió a 26,3 % con Mirtha Vásquez, bajó a 21,1 % con Héctor Valer y a 15,8 % con Aníbal Torres, y cerró en 26,3 % con Betssy Chávez.",
      "En ninguno de sus cinco gabinetes las mujeres alcanzaron siquiera un tercio de las carteras."
    ]
  },
  {
    slide: 10,
    title: "Gobierno de Dina Boluarte (2022–2025)",
    pacing: "Tiempo sugerido: 09:00 – 10:00",
    notes: [
      "Con Dina Boluarte observamos que tener a una mujer en la Presidencia no garantiza paridad sostenida.",
      "En los gabinetes iniciales de Pedro Angulo y Alberto Otárola las mujeres ocuparon 9 de 19 carteras (47,4 %); pero con Gustavo Adrianzén cayó a 6 mujeres (31,6 %, llegando a solo 2 ministras en septiembre de 2024), y con Eduardo Arana (mayo 2025) cayó a 3 mujeres de 19 cargos (15,8 %), una brecha de 13 integrantes frente a los hombres."
    ]
  },
  {
    slide: 11,
    title: "Gobierno de José Jerí (2025–2026) y Gabinete de Julio 2026",
    pacing: "Tiempo sugerido: 10:00 – 11:00",
    notes: [
      "En el gabinete inicial de José Jerí, presidido por Ernesto Álvarez Miranda, las mujeres ocuparon 4 de los 19 cargos (21,1 %) frente a 15 hombres (78,9 %): MEF, Mincetur, MIMP y MIDIS.",
      "En el gabinete que juró el 28 de julio de 2026 (gobierno de Keiko Fujimori, presidido por Luis Galarreta), la composición inicial registra 2 mujeres de 19 cargos (10,5 %) frente a 17 hombres (89,5 %): únicamente en el MIMP (María Seminario) y en el MIDIS (Maritza Canales).",
      "Una diferencia de 10,6 puntos porcentuales que devuelve la representación al nivel de julio de 2021."
    ]
  },
  {
    slide: 12,
    title: "Serie Comparada (2018–2026): Inestabilidad y Volatilidad",
    pacing: "Tiempo sugerido: 11:00 – 12:15",
    notes: [
      "Al observar toda la serie histórica de 19 gabinetes entre 2018 y 2026, comprobamos que la representación femenina no sigue una línea ascendente ni consolidada.",
      "Si la igualdad es un compromiso jurídico y una política de Estado desde 2019, ¿cómo se explica que la participación femenina en la dirección ministerial oscile entre el 47,4 % y el 10,5 % de un gabinete a otro?",
      "Porque depende de la coyuntura política y no de reglas institucionalizadas."
    ]
  },
  {
    slide: 13,
    title: "Balance en la Presidencia del Consejo de Ministros (PCM 2019–2025)",
    pacing: "Tiempo sugerido: 12:15 – 13:10",
    notes: [
      "El Presidente del Consejo de Ministros (premier) es el jefe del gabinete ministerial. Entre 2019 y 2025, solo 3 mujeres ocuparon la PCM (15,8 %) frente a 16 hombres (84,2 %):",
      "1) Violeta Bermúdez (Sagasti), 2) Mirtha Vásquez (Castillo) y 3) Betssy Chávez (Castillo).",
      "Durante todo el gobierno de Martín Vizcarra y todo el gobierno de Dina Boluarte, ninguna mujer ocupó la Presidencia del Consejo de Ministros."
    ]
  },
  {
    slide: 14,
    title: "Distribución del Poder por Tipo de Cartera Ministerial (2018–2026)",
    pacing: "Tiempo sugerido: 13:10 – 14:00",
    notes: [
      "Más allá del porcentaje global, al desagregar qué carteras se asignan a las mujeres observamos tres anillos de poder diferenciados:",
      "1) Conducción política, economía y seguridad (PCM, MEF, Defensa, Interior), donde la presencia femenina es excepcional.",
      "2) Sectores productivos y de infraestructura, con presencia intermitente que retrocede en cada recomposición.",
      "3) Sectores sociales y de cuidado (MIMP y MIDIS), donde se concentra la participación femenina cuando los gabinetes retroceden al 10,5 % o 15,8 %."
    ]
  },
  {
    slide: 15,
    title: "De la Igualdad Formal a la Igualdad Sustantiva: Conclusiones",
    pacing: "Tiempo sugerido: 14:00 – 14:45",
    notes: [
      "Para cerrar: la igualdad formal establece un derecho en la norma; la igualdad sustantiva exige transformar las condiciones institucionales que impiden ejercerlo en la práctica.",
      "Desde la perspectiva de los pisos pegajosos y las escaleras rotas, la pregunta no es solamente cuántas mujeres llegan a ocupar un ministerio, sino qué condiciones les permiten acceder al poder, ejercerlo con autoridad y permanecer en él sin barreras discriminatorias.",
      "El Estado debe lograr que la participación de las mujeres en la dirección pública deje de depender de coyunturas políticas y se convierta en una condición efectiva, sostenida y verificable de la democracia peruana."
    ]
  },
  {
    slide: 16,
    title: "Cierre y Agradecimiento",
    pacing: "Tiempo sugerido: 14:45 – 15:00",
    notes: [
      "Muchas gracias al Comité Organizador del III Congreso Internacional de Estado Abierto y Gobernanza y a todas las colegas presentes en el Aula H 314. Quedo atenta a sus preguntas y comentarios."
    ]
  }
];

const CABINET_SERIES = [
  { short: "Villanueva", date: "Abr 18", label: "Villanueva (Vizcarra · Abr 2018)", pct: 26.3, w: 5, m: 14, gov: "Vizcarra" },
  { short: "Del Solar", date: "Mar 19", label: "Del Solar (Vizcarra · Mar 2019)", pct: 47.4, w: 9, m: 10, gov: "Vizcarra" },
  { short: "Aráoz", date: "Sep 19", label: "Aráoz (Vizcarra · Sep 2019)", pct: 26.3, w: 5, m: 14, gov: "Vizcarra" },
  { short: "Zeballos", date: "Oct 19", label: "Zeballos (Vizcarra · Oct 2019)", pct: 44.4, w: 8, m: 10, gov: "Vizcarra" },
  { short: "Cateriano", date: "Jul 20", label: "Cateriano (Vizcarra · Jul 2020)", pct: 38.9, w: 7, m: 11, gov: "Vizcarra" },
  { short: "Martos", date: "Ago 20", label: "Martos (Vizcarra · Ago 2020)", pct: 38.9, w: 7, m: 11, gov: "Vizcarra" },
  { short: "Flores-A.", date: "Nov 20", label: "Flores-Aráoz (Merino · Nov 2020)", pct: 38.9, w: 7, m: 11, gov: "Merino" },
  { short: "Bermúdez ★", date: "Nov 20", label: "Bermúdez ★ (Sagasti · Nov 2020)", pct: 42.1, w: 8, m: 11, gov: "Sagasti", womanPcm: true },
  { short: "Bellido", date: "Jul 21", label: "Bellido (Castillo · Jul 2021)", pct: 10.5, w: 2, m: 17, gov: "Castillo" },
  { short: "Vásquez ★", date: "Oct 21", label: "Vásquez ★ (Castillo · Oct 2021)", pct: 26.3, w: 5, m: 14, gov: "Castillo", womanPcm: true },
  { short: "Valer", date: "Feb 22", label: "Valer (Castillo · Feb 2022)", pct: 21.1, w: 4, m: 15, gov: "Castillo" },
  { short: "Torres", date: "Feb 22", label: "Torres (Castillo · Feb 2022)", pct: 15.8, w: 3, m: 16, gov: "Castillo" },
  { short: "Chávez ★", date: "Nov 22", label: "Chávez ★ (Castillo · Nov 2022)", pct: 26.3, w: 5, m: 14, gov: "Castillo", womanPcm: true },
  { short: "Angulo", date: "Dic 22", label: "Angulo (Boluarte · Dic 2022)", pct: 47.4, w: 9, m: 10, gov: "Boluarte" },
  { short: "Otárola", date: "Dic 22", label: "Otárola (Boluarte · Dic 2022)", pct: 47.4, w: 9, m: 10, gov: "Boluarte" },
  { short: "Adrianzén", date: "Mar 24", label: "Adrianzén (Boluarte · Mar 2024)", pct: 31.6, w: 6, m: 13, gov: "Boluarte" },
  { short: "Arana", date: "May 25", label: "Arana (Boluarte · May 2025)", pct: 15.8, w: 3, m: 16, gov: "Boluarte" },
  { short: "Álvarez", date: "Oct 25", label: "Álvarez (Jerí · Oct 2025)", pct: 21.1, w: 4, m: 15, gov: "Jerí" },
  { short: "Galarreta", date: "Jul 26", label: "Galarreta (Fujimori · Jul 2026)", pct: 10.5, w: 2, m: 17, gov: "Fujimori" }
];

const MODAL_DATASETS = {
  presidencial: {
    title: "Sucesión Presidencial en el Perú (2018–2026) · Mecanismos Constitucionales y Salidas",
    html: `
      <table class="data-table">
        <thead>
          <tr>
            <th>N.º</th>
            <th>Presidente/a</th>
            <th>Inicio</th>
            <th>Fin</th>
            <th>Tiempo en el Cargo</th>
            <th>Forma de Acceso</th>
            <th>Mecanismo Constitucional</th>
            <th>Sustento Normativo</th>
            <th>Forma de Salida</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1</strong></td>
            <td><strong>Martín Vizcarra Cornejo</strong></td>
            <td>23/03/2018</td>
            <td>09/11/2020</td>
            <td>2 años, 7 meses y 17 días</td>
            <td>Sucesión constitucional</td>
            <td>1.er Vicepresidente → Presidente</td>
            <td>Res. Leg. N.º 008-2017-2018-CR · art. 115 Const.</td>
            <td><span class="badge-sex-alert">Vacancia</span></td>
          </tr>
          <tr>
            <td><strong>2</strong></td>
            <td><strong>Manuel Merino de Lama</strong></td>
            <td>10/11/2020</td>
            <td>15/11/2020</td>
            <td>5 días</td>
            <td>Sucesión constitucional</td>
            <td>Pdte. del Congreso → Presidente</td>
            <td>Res. del Congreso N.º 001-2020-2021-CR · art. 115 Const.</td>
            <td><span class="badge-sex-m">Renuncia</span></td>
          </tr>
          <tr>
            <td><strong>3</strong></td>
            <td><strong>Francisco Sagasti Hochhausler</strong></td>
            <td>17/11/2020</td>
            <td>28/07/2021</td>
            <td>8 meses y 11 días</td>
            <td>Sucesión constitucional</td>
            <td>Pdte. del Congreso → Presidente</td>
            <td>Res. Leg. del Congreso N.º 007-2020-2021-CR · art. 115 Const.</td>
            <td>Fin de transición</td>
          </tr>
          <tr>
            <td><strong>4</strong></td>
            <td><strong>Pedro Castillo Terrones</strong></td>
            <td>28/07/2021</td>
            <td>07/12/2022</td>
            <td>1 año, 4 meses y 9 días</td>
            <td><strong>Elección popular</strong></td>
            <td>Elecciones Generales 2021</td>
            <td>Resolución N.º 0750-2021-JNE</td>
            <td><span class="badge-sex-alert">Vacancia</span></td>
          </tr>
          <tr>
            <td><strong>5</strong></td>
            <td><strong>Dina Boluarte Zegarra</strong> <span class="badge-sex-f">Mujer</span></td>
            <td>07/12/2022</td>
            <td>10/10/2025</td>
            <td>2 años, 10 meses y 3 días</td>
            <td>Sucesión constitucional</td>
            <td>1.ra Vicepresidenta → Presidenta</td>
            <td>Res. del Congreso N.º 001-2022-2023-CR · art. 115 Const.</td>
            <td><span class="badge-sex-alert">Vacancia</span></td>
          </tr>
          <tr>
            <td><strong>6</strong></td>
            <td><strong>José Jerí Oré</strong></td>
            <td>10/10/2025</td>
            <td>17/02/2026</td>
            <td>4 meses y 7 días (130 días)</td>
            <td>Sucesión constitucional</td>
            <td>Pdte. del Congreso → Presidente</td>
            <td>Res. del Congreso N.º 001-2025-2026-CR · art. 115 Const.</td>
            <td><span class="badge-sex-alert">Vacancia</span></td>
          </tr>
        </tbody>
      </table>
    `
  },
  vizcarra_carteras: {
    title: "Gobiernos de Martín Vizcarra y Manuel Merino · Ministras por Cartera",
    html: `
      <div style="display:grid;grid-template-columns:1.25fr 0.75fr;gap:18px;">
        <div>
          <h4 style="margin-bottom:8px;color:#0c2340;">Martín Vizcarra (2018–2020): Ministras por Cartera</h4>
          <table class="data-table">
            <thead>
              <tr><th>#</th><th>Cartera Ministerial</th><th>N.º</th><th>Ministras Designadas</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>PCM</td><td><span class="badge-sex-alert">0</span></td><td><em>Ninguna</em></td></tr>
              <tr><td>2</td><td>Relaciones Exteriores</td><td><span class="badge-sex-alert">0</span></td><td><em>Ninguna</em></td></tr>
              <tr><td>3</td><td>Defensa</td><td><span class="badge-sex-alert">0</span></td><td><em>Ninguna</em></td></tr>
              <tr><td>4</td><td>Economía y Finanzas</td><td><span class="badge-sex-f">1</span></td><td>María Antonieta Alva</td></tr>
              <tr><td>5</td><td>Interior</td><td><span class="badge-sex-alert">0</span></td><td><em>Ninguna</em></td></tr>
              <tr><td>6</td><td>Justicia y DD. HH.</td><td><span class="badge-sex-f">2</span></td><td>Ana Teresa Revilla; Ana Neyra</td></tr>
              <tr><td>7</td><td>Educación</td><td><span class="badge-sex-f">1</span></td><td>Flor Pablo</td></tr>
              <tr><td>8</td><td>Salud</td><td><span class="badge-sex-f">4</span></td><td>Silvia Pessah; Zulema Tomás; Elizabeth Hinostroza; Pilar Mazzetti</td></tr>
              <tr><td>9</td><td>Agricultura y Riego</td><td><span class="badge-sex-f">1</span></td><td>Fabiola Muñoz</td></tr>
              <tr><td>10</td><td>Trabajo y Prom. Empleo</td><td><span class="badge-sex-f">1</span></td><td>Sylvia Cáceres</td></tr>
              <tr><td>11</td><td>Producción</td><td><span class="badge-sex-f">1</span></td><td>Rocío Barrios</td></tr>
              <tr><td>12</td><td>Comercio Exterior y Turismo</td><td><span class="badge-sex-f">1</span></td><td>Rocío Barrios</td></tr>
              <tr><td>13</td><td>Energía y Minas</td><td><span class="badge-sex-f">1</span></td><td>Susana Vilca</td></tr>
              <tr><td>14</td><td>Transportes y Comunicaciones</td><td><span class="badge-sex-f">1</span></td><td>María Jara</td></tr>
              <tr><td>15</td><td>Vivienda, Construcción y San.</td><td><span class="badge-sex-alert">0</span></td><td><em>Ninguna</em></td></tr>
              <tr><td>16</td><td>Mujer y Pob. Vulnerables</td><td><span class="badge-sex-f">3</span></td><td>Ana María Mendieta; Gloria Montenegro; Rosario Sasieta</td></tr>
              <tr><td>17</td><td>Ambiente</td><td><span class="badge-sex-f">3</span></td><td>Fabiola Muñoz; Lucía Ruiz; Kirla Echegaray</td></tr>
              <tr><td>18</td><td>Cultura</td><td><span class="badge-sex-f">3</span></td><td>Patricia Balbuena; Ulla Holmquist; Sonia Guillén</td></tr>
              <tr><td>19</td><td>Desarrollo e Inclusión Social</td><td><span class="badge-sex-f">4</span></td><td>Liliana La Rosa; Paola Bustamante; Ariela Luna; Patricia Donayre</td></tr>
            </tbody>
          </table>
        </div>
        <div>
          <h4 style="margin-bottom:8px;color:#0c2340;">Manuel Merino (Nov. 2020): 7 Ministras</h4>
          <table class="data-table">
            <thead>
              <tr><th>Cartera</th><th>Ministra</th></tr>
            </thead>
            <tbody>
              <tr><td>Relaciones Exteriores</td><td>Franca Lorella Deza Ferreccio</td></tr>
              <tr><td>Justicia y DD. HH.</td><td>Delia Muñoz Muñoz</td></tr>
              <tr><td>Comercio Exterior y Tur.</td><td>María Magdalena Seminario Marón</td></tr>
              <tr><td>Vivienda, Const. y San.</td><td>Hilda Sandoval Cornejo</td></tr>
              <tr><td>Mujer y Pob. Vulnerables</td><td>Patricia Lisette Teullet Pipoli</td></tr>
              <tr><td>Ambiente</td><td>Lizzet del Carmen Rojas Sánchez</td></tr>
              <tr><td>Cultura</td><td>María del Carmen de Reparaz Zamora</td></tr>
              <tr><td colspan="2"><strong>Total: 7 de 18 carteras (38,9 %)</strong></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  boluarte_nominas: {
    title: "Gobierno de Dina Boluarte (2022–2025) · Composición Inicial de sus 4 Gabinetes",
    html: `
      <table class="data-table">
        <thead>
          <tr>
            <th>Ministerio / Cartera</th>
            <th>1. Pedro Angulo (Dic 2022 · 47,4%)</th>
            <th>2. Alberto Otárola (Dic 2022 · 47,4%)</th>
            <th>3. Gustavo Adrianzén (Mar 2024 · 31,6%)</th>
            <th>4. Eduardo Arana (May 2025 · 15,8%)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>PCM</strong></td><td>Pedro Angulo</td><td>Alberto Otárola</td><td>Gustavo Adrianzén</td><td>Eduardo Arana</td></tr>
          <tr><td><strong>Relaciones Exteriores</strong></td><td><span class="badge-sex-f">Ana Cecilia Gervasi</span></td><td><span class="badge-sex-f">Ana Cecilia Gervasi</span></td><td>Javier González-Olaechea</td><td>Elmer Schialer</td></tr>
          <tr><td><strong>Defensa</strong></td><td>Alberto Otárola</td><td>Jorge Chávez Cresta</td><td>Walter Astudillo</td><td>Walter Astudillo</td></tr>
          <tr><td><strong>Economía y Finanzas</strong></td><td>Alex Contreras</td><td>Alex Contreras</td><td>José Arista</td><td>Raúl Pérez Reyes</td></tr>
          <tr><td><strong>Interior</strong></td><td>César Cervantes</td><td>Víctor Rojas</td><td>Víctor Torres</td><td>Carlos Malaver</td></tr>
          <tr><td><strong>Justicia y DD. HH.</strong></td><td>José Tello</td><td>José Tello</td><td>Eduardo Arana</td><td>Juan Alcántara</td></tr>
          <tr><td><strong>Educación</strong></td><td><span class="badge-sex-f">Patricia Correa</span></td><td>Óscar Becerra</td><td><span class="badge-sex-f">Miriam Ponce</span></td><td>Morgan Quero</td></tr>
          <tr><td><strong>Salud</strong></td><td><span class="badge-sex-f">Rosa Gutiérrez</span></td><td><span class="badge-sex-f">Rosa Gutiérrez</span></td><td>César Vásquez</td><td>César Vásquez</td></tr>
          <tr><td><strong>Desarrollo Agrario</strong></td><td><span class="badge-sex-f">Nelly Paredes</span></td><td><span class="badge-sex-f">Nelly Paredes</span></td><td><span class="badge-sex-f">Jennifer Contreras</span></td><td>Ángel Manero</td></tr>
          <tr><td><strong>Trabajo y Empleo</strong></td><td>Eduardo García</td><td>Eduardo García</td><td>Daniel Maurate</td><td>Daniel Maurate</td></tr>
          <tr><td><strong>Producción</strong></td><td><span class="badge-sex-f">Sandra Belaunde</span></td><td><span class="badge-sex-f">Sandra Belaunde</span></td><td><span class="badge-sex-f">Ana María Choquehuanca</span></td><td>Sergio González</td></tr>
          <tr><td><strong>Comercio Exterior</strong></td><td>Luis Fernando Helguero</td><td>Luis Fernando Helguero</td><td>Juan Carlos Mathews</td><td><span class="badge-sex-f">Úrsula Desilú León</span></td></tr>
          <tr><td><strong>Energía y Minas</strong></td><td>Óscar Vera</td><td>Óscar Vera</td><td>Rómulo Mucho</td><td>Jorge Montero</td></tr>
          <tr><td><strong>Transportes y Com.</strong></td><td><span class="badge-sex-f">Paola Lazarte</span></td><td><span class="badge-sex-f">Paola Lazarte</span></td><td>Raúl Pérez Reyes</td><td>César Sandoval</td></tr>
          <tr><td><strong>Vivienda y Saneamiento</strong></td><td><span class="badge-sex-f">Hania Pérez de Cuéllar</span></td><td><span class="badge-sex-f">Hania Pérez de Cuéllar</span></td><td><span class="badge-sex-f">Hania Pérez de Cuéllar</span></td><td>Durich Whittembury</td></tr>
          <tr><td><strong>Mujer (MIMP)</strong></td><td><span class="badge-sex-f">Grecia Rojas</span></td><td><span class="badge-sex-f">Grecia Rojas</span></td><td><span class="badge-sex-f">Nancy Tolentino</span></td><td><span class="badge-sex-f">Fanny Montellanos</span></td></tr>
          <tr><td><strong>Ambiente</strong></td><td><span class="badge-sex-f">Albina Ruiz</span></td><td><span class="badge-sex-f">Albina Ruiz</span></td><td>Juan Carlos Castro</td><td>Juan Carlos Castro</td></tr>
          <tr><td><strong>Cultura</strong></td><td>Jair Pérez Bráñez</td><td><span class="badge-sex-f">Leslie Urteaga</span></td><td><span class="badge-sex-f">Leslie Urteaga</span></td><td>Fabricio Valencia</td></tr>
          <tr><td><strong>MIDIS</strong></td><td>Julio Demartini</td><td>Julio Demartini</td><td>Julio Demartini</td><td><span class="badge-sex-f">Leslie Urteaga</span></td></tr>
        </tbody>
      </table>
    `
  },
  jeri_fujimori_nominas: {
    title: "Nómina Comparada de las 19 Carteras · Gabinete José Jerí (2025) y Gabinete Julio 2026",
    html: `
      <table class="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Ministerio / Cartera</th>
            <th>Gob. José Jerí (PCM Ernesto Álvarez · 21,1% Mujeres)</th>
            <th>Gob. Keiko Fujimori (PCM Luis Galarreta · 10,5% Mujeres)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td><strong>PCM</strong></td><td>Ernesto Álvarez Miranda</td><td>Luis Galarreta Velarde</td></tr>
          <tr><td>2</td><td><strong>Relaciones Exteriores</strong></td><td>Hugo de Zela Martínez</td><td>Elmer Schialer Salcedo</td></tr>
          <tr><td>3</td><td><strong>Defensa</strong></td><td>César Díaz Peche</td><td>Walter Astudillo Chávez</td></tr>
          <tr><td>4</td><td><strong>Economía y Finanzas</strong></td><td><span class="badge-sex-f">Denisse Miralles Miralles</span></td><td>David Loret de Mola</td></tr>
          <tr><td>5</td><td><strong>Interior</strong></td><td>Vicente Tiburcio Orbezo</td><td>Carlos Morán Soto</td></tr>
          <tr><td>6</td><td><strong>Justicia y DD. HH.</strong></td><td>Walter Martínez Laura</td><td>Jorge Chávez Cresta</td></tr>
          <tr><td>7</td><td><strong>Educación</strong></td><td>Jorge Figueroa Guzmán</td><td>Rosendo Serna Román</td></tr>
          <tr><td>8</td><td><strong>Salud</strong></td><td>Luis Quiroz Avilés</td><td>Hernando Cevallos Flores</td></tr>
          <tr><td>9</td><td><strong>Transportes y Comunicaciones</strong></td><td>Aldo Prieto Barrera</td><td>Edmer Trujillo Mori</td></tr>
          <tr><td>10</td><td><strong>Desarrollo Agrario y Riego</strong></td><td>Vladimir Cuno Salcedo</td><td>Ángel Manero Campos</td></tr>
          <tr><td>11</td><td><strong>Trabajo y Promoción del Empleo</strong></td><td>Óscar Fernández Cáceres</td><td>Daniel Maurate Romero</td></tr>
          <tr><td>12</td><td><strong>Producción</strong></td><td>César Quispe Luján</td><td>Sergio González Guerrero</td></tr>
          <tr><td>13</td><td><strong>Comercio Exterior y Turismo</strong></td><td><span class="badge-sex-f">Teresa Mera Gómez</span></td><td>Juan Carlos Mathews Salazar</td></tr>
          <tr><td>14</td><td><strong>Energía y Minas</strong></td><td>Luis Bravo de la Cruz</td><td>Rómulo Mucho Mamani</td></tr>
          <tr><td>15</td><td><strong>Vivienda, Const. y Saneamiento</strong></td><td>Wilder Sifuentes Quilcate</td><td>Hernán Navarro Franco</td></tr>
          <tr><td>16</td><td><strong>Mujer y Pob. Vulnerables (MIMP)</strong></td><td><span class="badge-sex-f">Sandra Gutiérrez Cuba</span></td><td><span class="badge-sex-f">María Magdalena Seminario Marón</span></td></tr>
          <tr><td>17</td><td><strong>Ambiente</strong></td><td>Miguel Ángel Espichán Mariñas</td><td>Juan Carlos Castro Vargas</td></tr>
          <tr><td>18</td><td><strong>Cultura</strong></td><td>Alfredo Luna Briceño</td><td>Fabricio Valencia Gibaja</td></tr>
          <tr><td>19</td><td><strong>Desarrollo e Inclusión Social (MIDIS)</strong></td><td><span class="badge-sex-f">Lesly Shica Seguil</span></td><td><span class="badge-sex-f">Maritza Ivonne Canales Martínez</span></td></tr>
        </tbody>
      </table>
    `
  },
  pcm_tabla: {
    title: "Presidentes/as del Consejo de Ministros en el Perú (2018–2025)",
    html: `
      <table class="data-table">
        <thead>
          <tr><th>N.º</th><th>Gobierno</th><th>Presidente/a del Consejo de Ministros (PCM)</th><th>Género</th><th>Periodo de Gestión</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Martín Vizcarra</td><td>César Villanueva</td><td><span class="badge-sex-m">Hombre</span></td><td>Abril de 2018 – marzo de 2019</td></tr>
          <tr><td>2</td><td>Martín Vizcarra</td><td>Salvador del Solar</td><td><span class="badge-sex-m">Hombre</span></td><td>Marzo – septiembre de 2019</td></tr>
          <tr><td>3</td><td>Martín Vizcarra</td><td>Vicente Zeballos</td><td><span class="badge-sex-m">Hombre</span></td><td>Septiembre de 2019 – julio de 2020</td></tr>
          <tr><td>4</td><td>Martín Vizcarra</td><td>Pedro Cateriano</td><td><span class="badge-sex-m">Hombre</span></td><td>Julio – agosto de 2020</td></tr>
          <tr><td>5</td><td>Martín Vizcarra</td><td>Walter Martos</td><td><span class="badge-sex-m">Hombre</span></td><td>Agosto – noviembre de 2020</td></tr>
          <tr><td>6</td><td>Manuel Merino</td><td>Ántero Flores-Aráoz</td><td><span class="badge-sex-m">Hombre</span></td><td>Noviembre de 2020</td></tr>
          <tr><td>7</td><td>Francisco Sagasti</td><td><strong>Violeta Bermúdez</strong></td><td><span class="badge-sex-f">Mujer</span></td><td>Noviembre de 2020 – julio de 2021</td></tr>
          <tr><td>8</td><td>Pedro Castillo</td><td>Guido Bellido</td><td><span class="badge-sex-m">Hombre</span></td><td>Julio – octubre de 2021</td></tr>
          <tr><td>9</td><td>Pedro Castillo</td><td><strong>Mirtha Vásquez</strong></td><td><span class="badge-sex-f">Mujer</span></td><td>Octubre de 2021 – enero de 2022</td></tr>
          <tr><td>10</td><td>Pedro Castillo</td><td>Héctor Valer</td><td><span class="badge-sex-m">Hombre</span></td><td>Febrero de 2022</td></tr>
          <tr><td>11</td><td>Pedro Castillo</td><td>Aníbal Torres</td><td><span class="badge-sex-m">Hombre</span></td><td>Febrero – noviembre de 2022</td></tr>
          <tr><td>12</td><td>Pedro Castillo</td><td><strong>Betssy Chávez</strong></td><td><span class="badge-sex-f">Mujer</span></td><td>Noviembre – diciembre de 2022</td></tr>
          <tr><td>13</td><td>Dina Boluarte</td><td>Pedro Angulo</td><td><span class="badge-sex-m">Hombre</span></td><td>Diciembre de 2022</td></tr>
          <tr><td>14</td><td>Dina Boluarte</td><td>Alberto Otárola</td><td><span class="badge-sex-m">Hombre</span></td><td>Diciembre de 2022 – marzo de 2024</td></tr>
          <tr><td>15</td><td>Dina Boluarte</td><td>Gustavo Adrianzén</td><td><span class="badge-sex-m">Hombre</span></td><td>Marzo de 2024 – mayo de 2025</td></tr>
          <tr><td>16</td><td>Dina Boluarte</td><td>Eduardo Arana</td><td><span class="badge-sex-m">Hombre</span></td><td>Mayo – octubre de 2025</td></tr>
        </tbody>
      </table>
    `
  }
};

// ============================================================================
// MOTOR DE NAVEGACIÓN, ESCALADO 16:9, GRÁFICOS Y CONTROLES
// ============================================================================

let currentSlideIndex = 0;
let slides = [];
let timerSeconds = 0;
let timerInterval = null;
let laserActive = false;

function initPresentation() {
  slides = Array.from(document.querySelectorAll('.slide'));
  scaleViewport();
  window.addEventListener('resize', scaleViewport);

  injectSectionSteppers();
  renderTrajectorySvgChart();
  renderHistoricalSeriesChart();
  buildOverviewGrid();
  goToSlide(0);

  document.addEventListener('keydown', (e) => {
    const modalOpen = document.getElementById('mainModal').classList.contains('open');
    const gridOpen = document.getElementById('gridDrawer').classList.contains('open');

    if (e.key === 'Escape') {
      if (modalOpen) closeModal();
      if (gridOpen) toggleGridDrawer(false);
      if (laserActive) toggleLaserMode(false);
      return;
    }
    if (modalOpen || gridOpen) return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToSlide(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToSlide(slides.length - 1);
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullScreen();
    } else if (e.key === 'g' || e.key === 'G') {
      toggleGridDrawer();
    } else if (e.key === 'l' || e.key === 'L') {
      toggleLaserMode();
    }
  });
}

function injectSectionSteppers() {
  slides.forEach((slideEl, idx) => {
    if (idx === 0 || idx === slides.length - 1) return;
    const topMeta = slideEl.querySelector('.slide-top-meta');
    if (!topMeta) return;

    const stepper = document.createElement('div');
    stepper.className = 'section-stepper';
    stepper.innerHTML = SECTIONS_MAP.map((sec) => {
      const isActive = idx >= sec.startSlide && idx <= sec.endSlide;
      return `<span class="stepper-dot ${isActive ? 'active' : ''}" onclick="goToSlide(${sec.startSlide})" title="Ir a ${sec.label}">${sec.label}</span>`;
    }).join('');

    if (topMeta.children.length >= 2) {
      topMeta.insertBefore(stepper, topMeta.children[1]);
    } else {
      topMeta.appendChild(stepper);
    }
  });
}

function scaleViewport() {
  const viewport = document.getElementById('deckViewport');
  if (!viewport) return;
  const padX = 32;
  const padY = 82;
  const availW = window.innerWidth - padX;
  const availH = window.innerHeight - padY;
  const scale = Math.min(availW / 1280, availH / 720, 1.35);
  viewport.style.transform = `scale(${scale.toFixed(4)})`;
}

function goToSlide(idx) {
  if (idx < 0 || idx >= slides.length) return;
  currentSlideIndex = idx;
  slides.forEach((s, i) => {
    s.classList.toggle('active', i === idx);
  });

  const counter = document.getElementById('hudCounter');
  if (counter) {
    counter.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  }
  const fill = document.getElementById('hudProgressFill');
  if (fill) {
    fill.style.width = `${(((idx + 1) / slides.length) * 100).toFixed(1)}%`;
  }

  updateSpeakerNotesPanel(idx);

  document.querySelectorAll('.overview-card').forEach((card, i) => {
    card.classList.toggle('active', i === idx);
  });
}

function nextSlide() {
  if (currentSlideIndex < slides.length - 1) goToSlide(currentSlideIndex + 1);
}

function prevSlide() {
  if (currentSlideIndex > 0) goToSlide(currentSlideIndex - 1);
}

function updateSpeakerNotesPanel(idx) {
  const data = SPEAKER_NOTES[idx] || { title: `Diapositiva ${idx + 1}`, pacing: "", notes: [] };
  const titleEl = document.getElementById('speakerSlideTitle');
  const pacingEl = document.getElementById('speakerPacing');
  const bodyEl = document.getElementById('speakerNotesBody');
  if (titleEl) titleEl.textContent = `${idx + 1}. ${data.title}`;
  if (pacingEl) pacingEl.textContent = data.pacing || "";
  if (bodyEl) {
    bodyEl.innerHTML = data.notes.map(p => `<p>• ${p}</p>`).join('');
  }
}

function toggleSpeakerNotes() {
  const drawer = document.getElementById('speakerDrawer');
  const btn = document.getElementById('btnNotes');
  const isOpen = drawer.classList.toggle('open');
  if (btn) btn.classList.toggle('hud-btn--active', isOpen);
}

function toggleLaserMode(forceState) {
  laserActive = typeof forceState === 'boolean' ? forceState : !laserActive;
  document.body.classList.toggle('laser-mode', laserActive);
  const btn = document.getElementById('btnLaser');
  if (btn) btn.classList.toggle('hud-btn--active', laserActive);
}

function toggleGridDrawer(forceState) {
  const drawer = document.getElementById('gridDrawer');
  const btn = document.getElementById('btnGrid');
  const isOpen = typeof forceState === 'boolean'
    ? (drawer.classList.toggle('open', forceState), forceState)
    : drawer.classList.toggle('open');
  if (btn) btn.classList.toggle('hud-btn--active', isOpen);
}

function buildOverviewGrid() {
  const container = document.getElementById('slidesOverviewGrid');
  if (!container) return;
  container.innerHTML = SPEAKER_NOTES.map((item, i) => `
    <div class="overview-card" onclick="goToSlide(${i}); toggleGridDrawer(false);">
      <div class="overview-card__num">DIAPOSITIVA ${String(i + 1).padStart(2, '0')}</div>
      <div class="overview-card__title">${item.title}</div>
    </div>
  `).join('');
}

function openDataModal(key) {
  const data = MODAL_DATASETS[key];
  if (!data) return;
  const modal = document.getElementById('mainModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  title.textContent = data.title;
  body.innerHTML = data.html;
  modal.classList.add('open');
}

function closeModal() {
  document.getElementById('mainModal').classList.remove('open');
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timerSeconds++;
    const m = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
    const s = String(timerSeconds % 60).padStart(2, '0');
    const el = document.getElementById('speakerTimer');
    if (el) el.textContent = `${m}:${s}`;
  }, 1000);
}

function switchSeriesView(mode) {
  const curveBox = document.getElementById('trajectoryCurveContainer');
  const barsBox = document.getElementById('historicalSeriesContainer');
  const btnCurve = document.getElementById('btnViewCurve');
  const btnBars = document.getElementById('btnViewBars');
  if (!curveBox || !barsBox) return;

  if (mode === 'bars') {
    curveBox.style.display = 'none';
    barsBox.style.display = 'block';
    if (btnCurve) btnCurve.classList.remove('active');
    if (btnBars) btnBars.classList.add('active');
  } else {
    curveBox.style.display = 'block';
    barsBox.style.display = 'none';
    if (btnCurve) btnCurve.classList.add('active');
    if (btnBars) btnBars.classList.remove('active');
  }
}

function renderTrajectorySvgChart() {
  const container = document.getElementById('trajectoryCurveContainer');
  if (!container) return;

  const W = 710;
  const H = 355;
  const padL = 44;
  const padR = 18;
  const padT = 26;
  const padB = 76;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const maxPct = 56;

  // Margen interno horizontal (24px a izquierda y 16px a derecha) para que ningún punto toque el eje Y
  const startX = padL + 24;
  const endX = W - padR - 16;

  const getX = (i) => startX + (i / (CABINET_SERIES.length - 1)) * (endX - startX);
  const getY = (pct) => padT + plotH - (pct / maxPct) * plotH;

  const y50 = getY(50);
  const y30 = getY(30);
  const y15 = getY(15);
  const y0 = getY(0);

  // Posicionamiento individualizado por punto (arriba vs. abajo) para evitar cualquier superposición
  const labelPlacement = [
    { dy: 18, dx: 0 },   // 0: Villanueva (26,3%) -> debajo para no tocar 30% ni la pendiente
    { dy: -14, dx: 0 },  // 1: Del Solar (47,4%) -> arriba con pastilla blanca
    { dy: 18, dx: 0 },   // 2: Aráoz (26,3%) -> debajo del vértice en V
    { dy: -14, dx: 0 },  // 3: Zeballos (44,4%) -> arriba
    { dy: -14, dx: -2 }, // 4: Cateriano (38,9%) -> arriba
    { dy: 18, dx: 0 },   // 5: Martos (38,9%) -> abajo (alternado entre los tres 38,9%)
    { dy: -14, dx: 2 },  // 6: Flores-Aráoz (38,9%) -> arriba
    { dy: -14, dx: 0 },  // 7: Bermúdez ★ (42,1%) -> arriba
    { dy: 18, dx: 0 },   // 8: Bellido (10,5%) -> abajo
    { dy: -14, dx: 0 },  // 9: Vásquez ★ (26,3%) -> arriba
    { dy: -14, dx: 2 },  // 10: Valer (21,1%) -> arriba
    { dy: 18, dx: 0 },   // 11: Torres (15,8%) -> abajo
    { dy: 18, dx: 2 },   // 12: Chávez ★ (26,3%) -> abajo para despejar la subida hacia Angulo
    { dy: -14, dx: -5 }, // 13: Angulo (47,4%) -> arriba-izquierda
    { dy: 18, dx: 3 },   // 14: Otárola (47,4%) -> abajo (alternado para no chocar con Angulo)
    { dy: -13, dx: 7 },  // 15: Adrianzén (31,6%) -> arriba-derecha
    { dy: 18, dx: 0 },   // 16: Arana (15,8%) -> abajo
    { dy: -14, dx: 0 },  // 17: Álvarez (21,1%) -> arriba
    { dy: 18, dx: -2 }   // 18: Galarreta (10,5%) -> abajo
  ];

  const pts = CABINET_SERIES.map((d, i) => ({
    x: getX(i),
    y: getY(d.pct),
    place: labelPlacement[i] || { dy: -14, dx: 0 },
    ...d
  }));

  const polylinePoints = pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const areaPoints = `${pts[0].x.toFixed(1)},${y0.toFixed(1)} ${polylinePoints} ${pts[pts.length - 1].x.toFixed(1)},${y0.toFixed(1)}`;
  const deficitPolygon = `${pts[0].x.toFixed(1)},${y50.toFixed(1)} ${polylinePoints} ${pts[pts.length - 1].x.toFixed(1)},${y50.toFixed(1)}`;

  // Dibujar primero las líneas guía verticales y la curva, y encima las etiquetas con fondo blanco
  const guideLinesSvg = pts.map((p) => `
    <line x1="${p.x.toFixed(1)}" y1="${y0.toFixed(1)}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="2,2" />
  `).join('');

  const nodesSvg = pts.map((p) => {
    const isPeak = p.pct >= 42;
    const isLow = p.pct <= 16;
    const color = isLow ? '#b91c1c' : isPeak ? '#00796b' : '#1c75bc';
    const lx = p.x + p.place.dx;
    const ly = p.y + p.place.dy;
    const txt = `${p.pct.toFixed(1).replace('.', ',')}%`;

    return `
      <g>
        <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${p.womanPcm ? 5.8 : 4.5}" fill="${color}" stroke="#ffffff" stroke-width="2">
          <title>${p.label}: ${txt} (${p.w} mujeres / ${p.m} hombres)</title>
        </circle>
        <rect x="${(lx - 16.5).toFixed(1)}" y="${(ly - 8.5).toFixed(1)}" width="33" height="12" rx="3.5" fill="#ffffff" fill-opacity="0.94" stroke="#cbd5e1" stroke-width="0.6" />
        <text x="${lx.toFixed(1)}" y="${(ly + 0.5).toFixed(1)}" text-anchor="middle" font-size="8.6" font-weight="800" fill="${color}">
          ${txt}
        </text>
        <g transform="translate(${p.x.toFixed(1)}, ${(y0 + 9).toFixed(1)}) rotate(-42)">
          <text x="0" y="0" text-anchor="end" font-size="8.8" font-weight="700" fill="${p.womanPcm ? '#00695c' : '#334155'}">
            ${p.short} (${p.date})
          </text>
        </g>
      </g>
    `;
  }).join('');

  // Etiqueta de Paridad 50% ubicada en el tramo central despejado (sobre Bellido-Vásquez-Valer, x=350..510)
  const parityBadgeX = getX(8) - 10;

  container.innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" width="100%" height="100%" style="display:block;overflow:visible;">
      <defs>
        <linearGradient id="areaTealGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#00a99d" stop-opacity="0.30" />
          <stop offset="100%" stop-color="#00a99d" stop-opacity="0.03" />
        </linearGradient>
        <linearGradient id="deficitRedGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e11d48" stop-opacity="0.08" />
          <stop offset="100%" stop-color="#e11d48" stop-opacity="0.01" />
        </linearGradient>
      </defs>

      <!-- Líneas guía horizontales -->
      <line x1="${padL}" y1="${y0.toFixed(1)}" x2="${W - padR}" y2="${y0.toFixed(1)}" stroke="#94a3b8" stroke-width="1.5" />
      <line x1="${padL}" y1="${y30.toFixed(1)}" x2="${W - padR}" y2="${y30.toFixed(1)}" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3" />
      <line x1="${padL}" y1="${y15.toFixed(1)}" x2="${W - padR}" y2="${y15.toFixed(1)}" stroke="#fecaca" stroke-width="1" stroke-dasharray="3,3" />

      <text x="${padL - 8}" y="${(y0 + 3).toFixed(1)}" text-anchor="end" font-size="9.5" font-weight="700" fill="#64748b">0%</text>
      <text x="${padL - 8}" y="${(y15 + 3).toFixed(1)}" text-anchor="end" font-size="9.5" font-weight="700" fill="#b91c1c">15%</text>
      <text x="${padL - 8}" y="${(y30 + 3).toFixed(1)}" text-anchor="end" font-size="9.5" font-weight="700" fill="#64748b">30%</text>
      <text x="${padL - 8}" y="${(y50 + 3).toFixed(1)}" text-anchor="end" font-size="9.5" font-weight="800" fill="#0c2340">50%</text>

      <!-- Zona de brecha respecto a la paridad -->
      <polygon points="${deficitPolygon}" fill="url(#deficitRedGrad)" />

      <!-- Área bajo la curva -->
      <polygon points="${areaPoints}" fill="url(#areaTealGrad)" />

      <!-- Líneas guía verticales por gabinete -->
      ${guideLinesSvg}

      <!-- Línea de Paridad 50% -->
      <line x1="${padL}" y1="${y50.toFixed(1)}" x2="${W - padR}" y2="${y50.toFixed(1)}" stroke="#0c2340" stroke-width="1.8" stroke-dasharray="6,4" />

      <!-- Pastilla de Paridad 50% en la zona central despejada (2021-2022) -->
      <rect x="${parityBadgeX.toFixed(1)}" y="${(y50 - 8).toFixed(1)}" width="178" height="16" rx="4" fill="#0c2340" />
      <text x="${(parityBadgeX + 89).toFixed(1)}" y="${(y50 + 3).toFixed(1)}" text-anchor="middle" font-size="8.8" font-weight="800" fill="#ffc000">
        PARIDAD 50 % (9,5 DE 19 CARTERAS)
      </text>

      <!-- Curva principal -->
      <polyline fill="none" stroke="#00796b" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" points="${polylinePoints}" />

      <!-- Puntos y etiquetas con fondo blanco sin superposición -->
      ${nodesSvg}
    </svg>
    <div style="display:flex;align-items:center;justify-content:space-between;padding-top:4px;border-top:1px solid #e2e8f0;font-size:11px;color:#475569;">
      <span><strong style="color:#00796b;">● Mayor representación (42,1% – 47,4%):</strong> Del Solar, Zeballos, Bermúdez ★, Angulo, Otárola</span>
      <span><strong style="color:#b91c1c;">● Menor representación (10,5% – 15,8%):</strong> Bellido (2021), Torres (2022), Arana (2025), Galarreta (2026)</span>
    </div>
  `;
}

function renderHistoricalSeriesChart() {
  const container = document.getElementById('historicalSeriesContainer');
  if (!container) return;

  container.innerHTML = CABINET_SERIES.map((item) => {
    const isPeak = item.pct >= 42;
    const isLow = item.pct <= 16;
    const barColor = isLow
      ? 'linear-gradient(90deg, #b91c1c 0%, #e11d48 100%)'
      : isPeak
        ? 'linear-gradient(90deg, #00796b 0%, #00a99d 100%)'
        : 'linear-gradient(90deg, #1c75bc 0%, #4a89dc 100%)';

    return `
      <div style="display:grid;grid-template-columns:235px 1fr 90px;align-items:center;gap:10px;padding:2px 0;">
        <div style="font-size:11.2px;font-weight:700;color:#0f172a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
          ${item.label}
        </div>
        <div style="position:relative;height:12px;background:#e2e8f0;border-radius:999px;overflow:visible;">
          <div style="position:absolute;left:50%;top:-3px;bottom:-3px;width:2px;background:#0c2340;z-index:3;opacity:0.55;" title="Paridad 50%"></div>
          <div style="width:${item.pct}%;height:100%;background:${barColor};border-radius:999px;"></div>
        </div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:11.2px;font-weight:800;color:${isLow ? '#b91c1c' : isPeak ? '#00796b' : '#1c75bc'};text-align:right;">
          ${item.pct.toFixed(1).replace('.', ',')}% (${item.w}/${item.w + item.m})
        </div>
      </div>
    `;
  }).join('');
}

window.addEventListener('DOMContentLoaded', initPresentation);
