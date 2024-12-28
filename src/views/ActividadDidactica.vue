<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Desarrollo Humano y Cambios Físicos',
      titulo: 'Cuestionario de Evaluación',
      introduccion:
        '<b>Objetivo:</b> Evaluar los conocimientos sobre el desarrollo físico y los cambios hormonales durante la infancia y adolescencia.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué cambios hormonales ocurren en la pubertad?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducción en la producción de hormonas sexuales',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumento en la producción de hormonas sexuales',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Estabilización hormonal', esCorrecta: false },
            {
              id: 'd',
              texto: 'Desarrollo de la motricidad fina',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿A qué edad se considera que comienza la adolescencia?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '0 años', esCorrecta: false },
            { id: 'b', texto: '2 años', esCorrecta: false },
            { id: 'c', texto: '6 años', esCorrecta: false },
            { id: 'd', texto: '12 años', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'En la infancia tardía, ¿qué habilidad se desarrolla principalmente?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Motricidad gruesa', esCorrecta: false },
            { id: 'b', texto: 'Motricidad fina', esCorrecta: true },
            { id: 'c', texto: 'Desarrollo verbal', esCorrecta: false },
            { id: 'd', texto: 'Habilidades sociales', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Durante la adolescencia, el desarrollo de los órganos sexuales primarios incluye:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El crecimiento del vello corporal',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Desarrollo del pene', esCorrecta: false },
            {
              id: 'c',
              texto: 'El aumento del tamaño de los senos',
              esCorrecta: false,
            },
            { id: 'd', texto: 'La 1 y la 3 son correctas', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es una función importante de la motricidad fina en la infancia?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Hacer deportes de equipo', esCorrecta: false },
            { id: 'b', texto: 'Escribir y dibujar', esCorrecta: true },
            {
              id: 'c',
              texto: 'Ganar control sobre grandes movimientos',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Realizar tareas cotidianas', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
