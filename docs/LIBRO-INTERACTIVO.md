# Libro interactivo — decisiones de diseño

Este documento es la fuente de verdad para las fases 2 a 5 del rediseño de la app como "libro interactivo". Si algo no está aquí, no está decidido.

## Decisiones

### Navegación

- Inicio (PN | MN) → Programa (semanas 1–16 del semestre) → Semana → Lección.
- Migas de pan y botón "Volver" en todas las pantallas.
- Un solo botón principal por pantalla.

### Rutas

- Formato: `/pn/s1/semana-01/<slug-leccion>`.
- Un libro por semestre: `s1`, `s3`, `s5`, `s7`.

### Estructura de la lección (orden fijo)

1. Objetivo (en español).
2. Lectura (en inglés) con vocabulario tocable.
3. Frases SMCP con audio.
4. Ejercicios: `opcion_multiple`, `completar`, `relacionar`, `escuchar_elegir`, `ordenar_dialogo`.
5. Quiz de 5 preguntas.
6. Botón "Siguiente lección".

### Desbloqueo

- La semana N+1 se abre cuando TODAS las lecciones de la semana N tienen una mejor calificación de quiz ≥ "aprobatorio" (por defecto, 70).
- Intentos ilimitados; se guarda la mejor calificación.

### Gamificación ligera

- XP por lección, insignia por semana y barra de progreso.
- Sin mapas ni personajes.

### Grupo del cadete

- El grupo se importa de las listas oficiales FIDENA, con el correo `@es.fidena.edu.mx` como llave.
- Si el cadete no aparece en las listas, elige su grupo y queda en estado `pendiente_validacion` hasta que lo confirme un docente.
- Las listas NUNCA se suben al repo: irán en `/data/listas-fidena/`, carpeta ignorada por git.

### Vista docente

- Acceso con correo `@fidena.edu.mx` O si el correo está en la variable de entorno `DOCENTE_ALLOWLIST` (lista separada por comas).
- El `signIn` de Auth.js debe aceptar los correos de la allowlist aunque no sean de dominio FIDENA.

### Lo que ya existe

- Lo actual (tareas, simuladores, English Levels, generador IA) se moverá a `/herramientas` sin borrar nada (fase 3).

### MN

- MN se muestra con el letrero "Próximamente" hasta que tenga contenido.

### Idioma y accesibilidad

- Interfaz en español; contenido de las lecciones en inglés.
- Letra ≥ 16px, botón 🔊 ≥ 48px, diseño primero para celular, contraste AA.
- Sin jerga en la portada (nada de "KAYMAX", "Marlins/CES" ni dominios de correo).

### Demo pública

- `pn/s1` semana-01, lección 1, disponible sin iniciar sesión.
- El avance se guarda en `localStorage` y se migra a la cuenta al iniciar sesión.

## Estructura de contenido

- `/content/programas.json`: lista de programas.
- `/content/frases/smcp-100.json`: banco de 100 frases SMCP, con IDs `smcp-001` … `smcp-100`.
- `/content/<carrera>/s<N>/semana-NN/_semana.json`: una por semana, para `pn` y `mn`, semestres 1, 3, 5 y 7, semanas 01–16.
- `/content/<carrera>/s<N>/semana-NN/<slug>.json`: archivos de lección (se crean en la fase 2).
- Las semanas sin contenido tienen estado `FALTA_CONTENIDO` y título `[FALTA CONTENIDO]`.
- En `pn/s1/semana-01` las lecciones listadas son `01-what-is-maritime-english` y `02-maritime-transport` (sus archivos aún no existen).

## Esquemas

- Definidos con Zod en `lib/content/schema.ts`: Programa, Semana, Lección, Ejercicio (unión discriminada por `tipo` con los 5 tipos) y Frase / banco de frases.
- La lectura marca los términos en los párrafos con `{{termino}}`. Cada marca debe tener su entrada en `vocabulario`, y cada entrada de `vocabulario` debe aparecer como marca.

## Validador

- Comando: `npm run validate:content` (`scripts/validate-content.ts`).
- Está enganchado a `prebuild`, así que el build falla si el contenido está roto.
- Revisa:
  - El esquema de cada JSON.
  - Que cada slug de `_semana.json` exista como archivo (solo advertencia si la semana está en `FALTA_CONTENIDO`).
  - Que cada ID en `frases` y en los ejercicios `escuchar_elegir` exista en `smcp-100.json`.
  - `{{termino}}` ↔ `vocabulario` en ambos sentidos.
  - Que el quiz tenga exactamente 5 preguntas.

## Audio con efecto radio

**Función que se reutilizará (no se modifica en la fase 1):**
`speakWithAccent(text, onEnd, opts?)` de `app/lib/voice.ts`, junto con `stopSpeaking()`.

- El botón 🔊 de una frase llamará `speakWithAccent(frase.en, onEnd)` desde un componente
  cliente; `onEnd` limpia el estado "reproduciendo" y `stopSpeaking()` se llama al
  desmontar o al iniciar otra frase.
- Flujo actual: `POST /api/tts` (`app/api/tts/route.ts`) → Gemini TTS (`@google/genai`,
  env `GEMINI_API_KEY`; opcional `GEMINI_TTS_MODEL`) → WAV. Si falla, cae a
  `speechSynthesis` del navegador (voz en-GB/en-US, `rate 0.92`, `pitch 0.9`).
  `onEnd` se llama siempre, aun en error.
- Respeta el acento elegido en `/voice-settings` (`localStorage["smcp.voice.accent"]`,
  default `filipino`; acentos en `app/lib/accents.ts`).
- Solo funciona en el navegador (usa `window`, `Audio`, `localStorage`).
- Hoy la llaman `app/vhf/VHFRadioSimulator.tsx` y `app/voice-settings/page.tsx`.

**Importante:** hoy NO existe un efecto de radio por procesamiento de audio (no hay
`AudioContext`, filtros ni estática). El tono "VHF" viene solo de la instrucción de
estilo que se le da a Gemini en `app/lib/accents.ts` ("radio operator on a VHF
channel"). Si el libro necesita sonido de radio real (filtro pasa-banda, estática),
será código nuevo en una fase posterior; no se construye en la fase 1.

## Fases

1. Estructura de contenido (esta fase).
2. Primeras lecciones, empezando por `pn/s1` semana-01.
3. UI del libro y mover lo actual a `/herramientas`.
4. Grupos con las listas oficiales en `/data/listas-fidena/` y vista docente.
5. Por definir.

Cualquier detalle no descrito en este documento está por definir.
