/**
 * Contrato común de los componentes de ejercicio. Sirven igual para la
 * práctica y para el quiz: el componente guarda su propia respuesta y avisa
 * al padre cada vez que cambia; el padre decide cuándo "revelar".
 */
export interface EjercicioUIProps<E> {
  ejercicio: E;
  /** true: muestra la retroalimentación y bloquea la respuesta. */
  revelado: boolean;
  /**
   * Se llama en cada cambio: true/false si la respuesta está completa
   * (correcta o no); null si todavía falta responder.
   */
  onCambio: (correcta: boolean | null) => void;
}
