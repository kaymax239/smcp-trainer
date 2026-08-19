# Motor de estabilidad y esfuerzos — SMCP Trainer (Fase 4.5)

> **TRAINING SIMULATOR — Synthetic vessel ENMT-1. Not approved by any
> classification society. Not a substitute for the vessel's approved
> loading instrument.**

Motor puro en TypeScript: sin dependencias, sin red, sin IA. Entra una lista de
pesos, sale un resultado completo — calados, asiento, GM, curva GZ, criterios
del IS Code y diagrama de esfuerzos longitudinales.

`analyse()` es **determinista**: mismos pesos, mismo resultado, siempre. Esa
propiedad es la que permite que el Performance Check de este módulo no use IA.

## Quién lo aprobó

Aprobación técnica del **Cap. Alt. Agustín Álvarez Medina**, Jefatura de
Carrera, ENM Tampico — **19 de agosto de 2026**. Cubre la tabla hidrostática,
las tres condiciones de referencia y la envolvente de esfuerzos.

## REGLA DURA — este motor no se reescribe

**No reescribas, no "optimices" y no refactorices `stability.ts`.**

Cada línea está respaldada por una prueba dorada y por una firma. Si crees que
tiene un error: **para y repórtalo con el caso que lo demuestra.** No lo
arregles por tu cuenta.

Si una prueba falla, lo más probable es un problema de **carga del JSON**, no de
cálculo. (De hecho, ya pasó una vez: el paquete original traía
`ENMT-1-vessel.json` un nivel arriba de donde la prueba lo buscaba.)

## Archivos

| Archivo | Qué es |
|---|---|
| `types.ts` | Interfaces. Ningún cálculo. |
| `stability.ts` | El motor. `analyse()` es la única función que importa. |
| `index.ts` | Punto de entrada público. Importa siempre desde aquí. |
| `__tests__/golden.test.ts` | 20 pruebas doradas contra el prototipo Python. |
| `__tests__/golden-python.json` | Valores de referencia del prototipo Python. |
| `../../data/vessels/ENMT-1.json` | Datos del buque sintético ENMT-1 (213 KB). |

`types.ts` y `stability.ts` están en el repo **byte por byte** como salieron del
paquete verificado. Lo único ajustado en `golden.test.ts` fueron las rutas de
import; ni un valor ni una tolerancia cambiaron.

## Uso

```ts
import { analyse, baseItems, loadHold, fillTank } from '@/app/lib/stability';

const items = baseItems(vessel);                   // rosca + constante
items.push(loadHold(vessel, 'CH1', 5061, 1.30));   // t, stowage factor m3/t
items.push(fillTank(vessel, 'FO1', 70));           // porcentaje

const r = analyse(vessel, items, { seagoing: true });

r.GM                  // GM corregido por superficies libres
r.draftAP, r.draftFP  // calados
r.criteria            // 6 criterios del IS Code con su veredicto
r.sfMax, r.bmMax      // máximos de cortante y momento flector
r.warnings            // NUNCA se ignoran: ver abajo
```

`loadHold` y `fillTank` **lanzan excepción** con carga fuera de capacidad o
porcentaje fuera de rango. En la UI hay que capturarlas y mostrarlas en inglés
marítimo, no dejar que revienten la pantalla.

`r.warnings` (extrapolación de curvas KN, no convergencia, calado por encima del
puntal) nunca se ignora. **Un resultado con aviso no es un resultado limpio.**

## Carga del JSON del buque — importante para la UI

`ENMT-1.json` pesa **213 KB**. A partir de la Etapa A nada lo importa todavía.
Cuando la Etapa B lo consuma, **no lo importes estáticamente en un componente de
cliente**: entraría al bundle de rutas que no lo usan. Opciones, en orden:

1. Leerlo en un Server Component / route handler y pasar solo lo necesario.
2. `const vessel = (await import('@/app/data/vessels/ENMT-1.json')).default`
   dentro de la ruta `/loading`, para que quede en su propio chunk.

Recordatorio: el filesystem de Vercel es de **solo lectura**. El JSON se lee,
nunca se escribe.

## Pruebas

```bash
npm test
```

Las 20 deben pasar. Node 22 o superior (usa borrado de tipos nativo, sin paso de
compilación). Si alguna falla: reportar cuál y con qué números. No tocar
`stability.ts`.

## Lo que este motor NO calcula

Esto no es una limitación oculta: hay que mostrárselo al cadete. Quien sabe qué
no calcula la herramienta aprende más que quien la cree completa.

| Hueco | Consecuencia |
|---|---|
| **Código de Granos (IMO)** | Sin momentos escorantes por corrimiento. Para grano real es obligatorio. Va en v2. |
| **Criterio meteorológico** (IS Code 2.3) | Falta el área vélica y su centroide. |
| **Estabilidad con avería** | Fuera de alcance. |
| **Escora por carga asimétrica** | El motor asume TCG = 0. |
| **Tablas de sondaje** | Los tanques usan capacidad y centroide constantes. |
| **Envolvente SF/BM sintética** | Aceptada para entrenamiento. No es una envolvente aprobada por clase. |
| **GZmáx en nodos de 5°** | El ángulo de GZ máximo sale en múltiplos de 5. Se afina interpolando con spline. |
| **Resolución de tablas** | Bonjean cada 25 cm de calado: ~4 mm de error en calados y KM contra la integración exacta. |

## Concordancia con el prototipo Python

| Magnitud | Diferencia máxima |
|---|---|
| Desplazamiento | 0.002 t |
| Calados | 4.5 mm |
| KM y GM | 5.2 mm |
| GZ máximo | < 0.1 mm |
| Esfuerzo cortante | 44 t sobre una envolvente de 4 600 t (0.9 %) |
| Momento flector | 318 t·m sobre una envolvente de 112 000 t·m (0.28 %) |

La diferencia residual viene de que el motor TS interpola tablas cada 25 cm de
calado, mientras el Python integra la geometría del casco directamente. El
prototipo Python de referencia **no vive en el repo**: se conserva aparte, en el
paquete de la Fase 4.5.
