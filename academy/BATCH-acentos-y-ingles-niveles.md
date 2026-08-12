# BATCH 2: Normalización de acentos + Completar Inglés por Niveles

Trabajo autónomo. Dos tareas independientes. Un commit por tarea (o por archivo en
la tarea A). **Verificar `npx tsc --noEmit` antes de cada commit. NO hacer `git push`
ni `git merge`. Quedarse en `main`.** Al terminar, dar un reporte con un resumen del
diff por archivo para que Victor revise antes de pushear.

Los archivos objetivo:

```
data/academic/mission-tasks/pn-semester-i.ts
data/academic/mission-tasks/mn-semester-i.ts
data/academic/mission-tasks/pn-semester-iii.ts
data/academic/mission-tasks/mn-semester-iii.ts
data/academic/mission-tasks/pn-semester-v.ts
data/academic/mission-tasks/mn-semester-v.ts
data/academic/mission-tasks/pn-semester-vii.ts
data/academic/mission-tasks/mn-semester-vii.ts
```

Preservar los line endings existentes de cada archivo (todos LF).

---

## TAREA A — Normalizar acentos en español (unit / topic / subjectName)

**Objetivo:** dejar todos los valores de `unit:`, `topic:` y `subjectName:` en
**español correctamente acentuado**, igual que `data/academic/subjects.ts` (que ya
está 100% acentuado). Hoy los 8 archivos están mezclados: ~40-50% de las líneas
tienen acentos y el resto no (artefacto de extracción de PDF).

### Alcance estricto

- **Solo** modificar el contenido de string de los campos `unit:`, `topic:` y
  `subjectName:`. NO tocar `scenario`, `instructions`, `deliverable`,
  `assessmentCriteria`, `taskTitle`, `taskId`, ni ningún otro campo.
- **NO acentuar palabras en inglés.** Varias materias (Inglés Marítimo, Maritime
  English, Inglés por Niveles) tienen `topic`/`unit` con términos gramaticales en
  inglés: "past simple", "phrasal verbs", "present perfect", "word order",
  "question forms", "sentence builder", etc. Esas palabras se dejan TAL CUAL.
- Regla práctica: dentro de un mismo valor puede haber español e inglés mezclados
  (p. ej. `topic: "Phrasal verbs del puente"`). Acentuar solo las palabras
  españolas ("del", "puente" no llevan; pero "navegación" sí), dejar el inglés.
- No cambiar mayúsculas/minúsculas, ni el orden de palabras, ni la redacción. Solo
  agregar los diacríticos que falten (á é í ó ú ñ ü) donde el español lo exige.
- Trabajar **archivo por archivo**: normalizar, `npx tsc --noEmit`, y commitear ese
  archivo con mensaje `style(tasks): acentos correctos en <archivo>`.

### Diccionario base (forma sin acento → forma correcta)

Aplicar estas y todas las demás palabras españolas que sigan las mismas reglas
(terminaciones -ción, -ía, -ico/-ica, esdrújulas, etc.). Lista no exhaustiva:

```
navegacion→navegación   operacion→operación   comunicacion→comunicación
comunicaciones→comunicaciones→comunicaciones   informacion→información
aplicacion→aplicación   construccion→construcción   proteccion→protección
propulsion→propulsión   presion→presión   combustion→combustión
posicion→posición   posiciones→posiciones→posiciones   seccion→sección
correccion→corrección   inspeccion→inspección   deteccion→detección
distribucion→distribución   introduccion→introducción   division→división
tripulacion→tripulación   embarcacion→embarcación   estacion→estación
refrigeracion→refrigeración   evaluacion→evaluación   situacion→situación
identificacion→identificación   señales (senales→señales)   maniobra (sin acento)
maritimo→marítimo   maritima→marítima   mecanica→mecánica   mecanico→mecánico
electrica→eléctrica   electrico→eléctrico   fisica→física   fisico→físico
tecnica→técnica   tecnico→técnico   quimica→química   quimico→químico
teoria→teoría   energia→energía   ingenieria→ingeniería   bateria→batería
calculo→cálculo   angulo→ángulo   angulos→ángulos   metodo→método
metodos→métodos   numero→número   numeros→números   codigo→código
diametro→diámetro   parametro→parámetro   maquina→máquina   maquinas→máquinas
hidraulico→hidráulico   hidraulica→hidráulica   estatica→estática
dinamica→dinámica   cinematica→cinemática   logico→lógico   logicos→lógicos
analisis→análisis   sintesis→síntesis   grafico→gráfico   graficos→gráficos
practica→práctica   practicas→prácticas   basico→básico   basica→básica
oceanico→oceánico   atmosferico→atmosférico   magnetico→magnético
electronica→electrónica   automatico→automático   hidrografico→hidrográfico
brujula→brújula   compas→compás   direccion→dirección   reduccion→reducción
funcion→función   funciones→funciones   seleccion→selección   conexion→conexión
version→versión   tension→tensión   expansion→expansión   corrosion→corrosión
combustoleo→combustóleo   区   区
```
(Las entradas con "区" son placeholders inválidos: ignorarlas.)

Y en general: toda terminación **-cion** española va a **-ción**; **-sion** con
sílaba tónica final va a **-sión**; adjetivos técnicos esdrújulos (-ico/-ica) se
acentúan; "maritimo/a", "calculo", "angulo", "metodo", "numero", "codigo",
"maquina", "brujula", "analisis" y similares llevan tilde. Nombres propios de
convenios/organismos (SOLAS, MARPOL, STCW, OMI, IMDG) quedan igual.

### Verificación de la Tarea A

- `npx tsc --noEmit` = 0 errores por archivo.
- Ningún `taskId` cambiado (grep de conteo antes/después debe coincidir).
- Ninguna palabra inglesa acentuada (revisar las materias de inglés).
- El diff de cada archivo debe tocar SOLO líneas `unit:`/`topic:`/`subjectName:`.

---

## TAREA B — Completar la escalera de Inglés por Niveles

**Contexto:** en `pn-semester-i.ts` existe la materia `subjectCode: "Inglés por
Niveles"` / `subjectName: "Sentence Builder"` (subjectId `pn-s1-maritime-english-i`),
una pista de juegos de inglés. Hoy tiene 6 tareas:

- Semanas 5-8: Sentence Builder **Niveles 3, 4, 5, 6** (game `grammar-sentence-builder`)
- Semanas 9-10: **Vocabulary Match** (game `vocabulary-match`)

**Objetivo:** completar la escalera de niveles agregando **4 tareas nuevas de
Sentence Builder** para cubrir Niveles 1, 2, 7 y 8:

- **Semana 3 → Nivel 1** (principiante A0-A1): verbo to be, artículos a/an, plurales
  simples, this/that, saludos y presentación. taskId `pn-ing102-w03-sentence-builder-l1-game`.
- **Semana 4 → Nivel 2** (A1): present simple, there is/are, preposiciones de lugar,
  can/can't, adjetivos posesivos. taskId `pn-ing102-w04-sentence-builder-l2-game`.
- **Semana 11 → Nivel 7** (B1-B2): present perfect vs past simple, first/second
  conditional, passive voice, reported speech básico. taskId
  `pn-ing102-w11-sentence-builder-l7-game`.
- **Semana 12 → Nivel 8** (B2): relative clauses, third conditional, passives
  perfectos, modales de deducción, conectores discursivos. taskId
  `pn-ing102-w12-sentence-builder-l8-game`.

### Reglas de la Tarea B

- Copiar EXACTAMENTE la forma del objeto de las tareas Sentence Builder existentes
  (ver Nivel 3, semana 5, en el mismo archivo como modelo). Mismos campos: career
  "PN", semester "Semester I", subjectCode "Inglés por Niveles", subjectName
  "Sentence Builder", subjectId "pn-s1-maritime-english-i".
- `game: { type: "grammar-sentence-builder", sentences: [...] }` con **exactamente
  12 oraciones** por tarea, cada una `{ words: [...], grammarPoint: "..." }`.
- Las `words` deben estar en el ORDEN CORRECTO (el juego las revuelve). Sabor
  marítimo donde sea natural (buque, engineer, bridge, port, crew, watch), pero al
  nivel gramatical correcto — Nivel 1 muy simple, Nivel 8 complejo.
- `taskTitle` estilo `"English Lesson: Nivel N — Sentence Builder"`.
- `difficulty`: Nivel 1-2 "Foundation", Nivel 7 "Standard", Nivel 8 "Advanced".
  `xp: 20`, `estimatedTime: "15 min"`, `unit: "Construcción de oraciones"`,
  `topic` acorde al nivel (en español correcto, describiendo el rango CEFR).
- Insertar Nivel 1 y 2 junto al clúster de Sentence Builder (antes de la tarea de
  semana 5); Nivel 7 y 8 después de la última tarea de Vocabulary Match (semana 10).
- Verificar `npx tsc --noEmit` = 0 errores y sin `taskId` duplicados.
- Commit: `feat(tasks): completar Ingles por Niveles - Niveles 1,2,7,8`.

---

## Reporte final

- Tarea A: archivos normalizados, nº de líneas cambiadas por archivo, confirmación
  de que ninguna palabra inglesa fue acentuada y de que solo se tocaron
  unit/topic/subjectName.
- Tarea B: 4 tareas nuevas añadidas (Niveles 1,2,7,8), total Inglés por Niveles = 10.
- `npx tsc --noEmit` global = estado.
- Commits creados (uno por archivo en A + uno en B), todos en `main`, sin push/merge.
