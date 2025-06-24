<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno.text-uppercase(:titulo="'Unidad 1. Desarrollo Físico y Motor en Niños y Adolescentes'" :subTitulo="'4. Cambios hormonales y sexuales en la pubertad'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.mb-5
        p.fs-18px Todos hemos vivido un momento en la vida en el que nos sentimos invencibles. Sin embargo, la pubertad nos recuerda nuestra naturaleza humana y la importancia de aceptar los cambios como parte natural del crecimiento. En esta sesión, exploramos  juntos los aspectos más relevantes de este proceso. Para comenzar, se invita a leer el cuento La Mariposa y la Crisálida, una historia que nos ayudará a comprender mejor los cambios que estamos viviendo.

      .row.mb-5.p-4.p-lg-5.bg-fondo-4
        .col-12.mb-0.mb-lg-4(data-aos="flip-up")
          div.d-flex.justify-content-center
            p.text-bold.title__tema La mariposa y la crisálida
        .col-12.col-lg-8(data-aos="fade-right")
          p.fs-18px Había una vez una pequeña oruga que vivía en una hoja. Era feliz masticando hojas y explorando su pequeño mundo. Pero un día, empezó a sentir cosquillas en todo su cuerpo. Crecía y crecía, y su piel se sentía muy ajustada. Decidió que era hora de construir un hogar seguro, así que tejió un capullo alrededor de sí misma.
          p.fs-18px Dentro del capullo, la oruga se sentía extraña y un poco asustada. Su cuerpo comenzaba a cambiar de una manera que no entendía. Se sentía hinchada y adolorida. 
        .d-none.d-lg-block.col-lg-4(data-aos="fade-left")
          img(src='@/assets/curso/unidad/img-62.png', alt='Texto que describa la imagen')
        .col-12.my-4.my-lg-5(data-aos="flip-up")
          p.fs-18px A veces, sentía como si su cuerpo se desintegrara. Tenía miedo de lo que podría convertirse. Se preguntaba si alguna vez volvería a sentir la luz del sol o el viento en su cara. Pero, a pesar de sus miedos, la oruga también sentía emoción. Sabía que algo grande estaba por suceder. Se imaginaba volando de flor en flor, sintiendo la brisa en sus alas y viendo el mundo desde una perspectiva completamente nueva. Con el tiempo, los cambios se hicieron más intensos. La oruga sentía que estaba renaciendo. 
        .d-none.d-lg-block.col-lg-4(data-aos="fade-right")
          img(src='@/assets/curso/unidad/img-63.png', alt='Texto que describa la imagen')
        .col-12.col-lg-8(data-aos="fade-left")
          p.fs-18px Sus patas se transformaban en alas, su cuerpo se volvía más ligero y sus colores cambiaban. Era como si estuviera dentro de una máquina mágica que la transformaba en algo completamente diferente.
          p.fs-18px Finalmente, llegó el momento de salir del capullo. Con un gran esfuerzo, la mariposa rompió la envoltura y salió al mundo. Al principio, sus alas estaban húmedas y arrugadas, pero pronto se secaron y se estiraron. La mariposa alzó el vuelo y se maravilló ante la belleza del mundo que la rodeaba.
        
      .row.mb-5
        h1.mb-4.pb-2 Reflexión
        p.fs-18px Después de leer el cuento, reflexionemos sobre la relación entre el ciclo de vida de la mariposa y los cambios que ocurren durante la pubertad, respondiendo a las siguientes preguntas:

      .row.mb-5.justify-content-center(data-aos="zoom-in-up")
        .col-8.col-sm-7.col-md-6.col-xl-4.mb-4.mb-xl-0
          .custom-image-card.d-flex.justify-content-center.p-2.h-100
            img.me-3(src='@/assets/curso/unidad/img-64.svg', style="width: 68px")
            p.mb-0.flex-grow-1.d-flex.flex-row.align-items-center ¿Qué crees que representa la metamorfosis de la mariposa en el contexto del desarrollo humano?
        .col-8.col-sm-7.col-md-6.col-xl-4.mb-4.mb-xl-0
          .custom-image-card.d-flex.justify-content-center.p-2.h-100
            img.me-3(src='@/assets/curso/unidad/img-64.svg', style="width: 68px")  
            p.mb-0.flex-grow-1.d-flex.flex-row.align-items-center ¿Qué habilidades o cualidades se pueden desarrollar durante este proceso?
        .col-8.col-sm-7.col-md-6.col-xl-4.mb-4.mb-xl-0
          .custom-image-card.d-flex.justify-content-center.p-2.h-100
            img.me-3(src='@/assets/curso/unidad/img-64.svg', style="width: 68px")
            p.mb-0.flex-grow-1.d-flex.flex-row.align-items-center ¿Cómo crees que los cambios que se experimentan durante la pubertad nos preparan para el futuro?

      .row.mb-5.mx-0
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-65.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.align-items-center.bg-ppal-azul-oscuro.p-4
          p.fs-18px.mb-0(data-aos="fade-up") Al igual que la mariposa, los cuerpos cambian y crecen. A veces, estos cambios pueden ser desafiantes y dolorosos, pero al final nos permiten convertirnos en la mejor versión de nosotros mismos. 

      p.fs-18px.my-4.pb-2 La pubertad y la adolescencia son dos etapas de la vida que, aunque relacionadas, presentan características únicas:
      .row.position-relative.mb-5.bg-fondo-1.bg-full-width  
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5
              .col-md-12.col-lg-7.mb-4.mb-md-0
                p.fs-18px.text-bold La pubertad
                p.fs-18px La pubertad es un proceso biológico complejo que marca el inicio de la madurez sexual. El término "pubertad" proviene del latín y hace referencia al desarrollo del vello púbico (Güemes et al., 2017). Este periodo se caracteriza por una serie de cambios físicos y hormonales significativos que son esenciales para el desarrollo sexual y reproductivo. Generalmente, la pubertad ocurre entre los 10 y 14 años en las chicas y entre los 12 y 16 años en los chicos.
              .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="flip-up")
                figure
                  img(src='@/assets/curso/unidad/img-66.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5
              .col-md-12.col-lg-7.mb-4.mb-md-0
                p.fs-18px.text-bold La adolescencia 
                p.fs-18px La adolescencia, cuyo término proviene del latín adolescere, que significa "crecer o desarrollarse", es un periodo de transición entre la infancia y la adultez, caracterizado por cambios biológicos, psicológicos y sociales (Güemes et al., 2017). Esta etapa comienza con la pubertad y se prolonga hasta que se alcanza la madurez física y psicosocial. La Organización Mundial de la Salud establece que la adolescencia abarca desde los 10 hasta los 19 años, mientras que la Sociedad Americana de Salud y Medicina de la Adolescencia la sitúa entre los 10 y los 21 años.
              .d-none.d-lg-block.col-md-6.col-lg-4
                figure
                  img(src='@/assets/curso/unidad/img-67.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5
              .col-md-12.col-lg-7.mb-4.mb-md-0
                p.fs-18px.text-bold Diferencias entre pubertad y adolescencia
                p.fs-18px Existe una diferencia clara entre la pubertad y la adolescencia. La pubertad se centra en los cambios biológicos que llevan al inicio de la madurez sexual, como el desarrollo de características sexuales secundarias y la capacidad reproductiva. Por otro lado, la adolescencia es un proceso más amplio que abarca no solo los cambios físicos de la pubertad, sino también transformaciones psicológicas, sociales y emocionales, siendo una etapa de preparación para la vida adulta.
              .d-none.d-lg-block.col-md-6.col-lg-4
                figure
                  img(src='@/assets/curso/unidad/img-68.png', alt='Texto que describa la imagen')
      .row.mb-5
        p.fs-18px(data-aos="fade-up") La edad a la que comienza la pubertad varía considerablemente entre los individuos, aunque existe un rango considerado normal (Güemes et al., 2017). En las últimas décadas, se ha observado una tendencia hacia un inicio cada vez más temprano de la pubertad, fenómeno conocido como tendencia secular del crecimiento. Se ha sugerido que esta aceleración podría estar relacionada con mejoras en las condiciones de vida, como una mejor nutrición, aunque su ritmo parece haberse desacelerado en los últimos años.

      #t_4_1.titulo-segundo
        div.d-flex
          span.me-3 4.1  
          h2 Desarrollo de los órganos sexuales primarios y secundarios

      .row.mb-5.mx-0
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-69.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.align-items-center.bg-ppal-amarillo-claro.p-4(data-aos="fade-left")
          p.fs-18px.mb-0 Continuando con el tema, hablaremos ahora sobre el desarrollo de los órganos sexuales primarios. Los ovarios y los testículos maduran y comienzan a funcionar, lo cual es fundamental para la producción de hormonas sexuales que jugarán un papel esencial en los cambios que se experimentan durante la pubertad. Además, los órganos sexuales secundarios, como el desarrollo de los senos en las chicas y el aumento del tamaño del pene en los chicos, también se manifiestan. Estos cambios son visibles y pueden influir en la forma en que los adolescentes se perciben a sí mismos y se relacionan con los demás.
        
      .tarjeta.box-shadow.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/template/bg-icono-pdf.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.text-bold.mb-3 Desarrollo de los órganos sexuales primarios y secundarios
                p.text-small Lo invitamos a consultar el documento Desarrollo de los órganos sexuales primarios y secundarios para produndizar sobre el desarrollo de los órganos sexuales en los niños y adolescentes así como los cambios que se experimentan durante la pubertad.
              .col-sm-auto(data-aos="zoom-in")
                a.download-btn.boton.color-acento-contenido.text-white(:href="obtenerLink('/downloads/Anexos_Desarrollo.pdf')" target="_blank")
                  span.text-small Descargar
                  i.fas.fa-arrow-right

      .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema4',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Desarrollo Humano y Cambios Físicos',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
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
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
.title__tema
  font-size: 22px
  border-radius: 99px
  background-color: #E5CD2F
  width: fit-content
  padding: 12px 38px
</style>
