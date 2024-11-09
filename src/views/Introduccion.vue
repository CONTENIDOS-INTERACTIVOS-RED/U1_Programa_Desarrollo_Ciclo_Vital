<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(titulo="Unidad 1. Desarrollo Físico y Motor en Niños y Adolescentes" subTitulo="INTRODUCCIÓN")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .row.mb-2
      p.fs-18px.text-bold ¡Bienvenidos a la asignatura Desarrollo y ciclo vital: niños y adolescentes!

    .row.mb-5
      .col-12.col-xl-8.d-flex.align-items-center
        div.d-flex.align-items-center.flex-column.bg-ppal-azul.px-34px.py-30px
          p.fs-18px.pe-xl-4.mb-4.pb-2 En esta primera unidad, se explorará el desarrollo físico y motor durante la infancia y la adolescencia. Se invita a imaginar este viaje: desde los primeros pasos hasta los profundos cambios que trae la pubertad.
          p.fs-18px <strong>¿Por qué es relevante conocer este tema?</strong> Para quienes deseen trabajar con niños y jóvenes, comprender cómo crecen y se desarrollan sus cuerpos proporcionará las herramientas necesarias para acompañarlos de manera adecuada en cada etapa de su vida. Esto permitirá identificar sus necesidades, diseñar actividades apropiadas y celebrar sus logros. 
      .d-none.d-xl-block.col-auto.col-xl-4.mx-auto.mt-4.mt-xl-0
        figure
          img(src='@/assets/curso/unidad/img-03.png', alt='Texto que describa la imagen')  

    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      p.fs-18px.mb-4.pb-3 Al finalizar esta unidad, los estudiantes estarán en capacidad de:
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .rounded-8px.d-flex.justify-content-center.flex-column.p-4.h-100.bg-ppal-azul-primary
          img.mx-auto.mb-4.mb-xl-5(src='@/assets/curso/unidad/img-04.svg', style="width: 80px")
          p.fs-18px.mb-4.text-bold.text-center Reconocer hitos
          p.mb-0.flex-grow-1.d-flex.text-center.flex-row Identificación de etapas y momentos clave en el crecimiento y maduración física, incluyendo coordinación y habilidades motoras.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .rounded-8px.d-flex.justify-content-center.flex-column.p-4.h-100.bg-ppal-azul-oscuro
          img.mx-auto.mb-4.mb-xl-5(src='@/assets/curso/unidad/img-05.svg', style="width: 80px")
          p.fs-18px.mb-4.text-bold.text-center Comprender factores
          p.mb-0.flex-grow-1.d-flex.text-center.flex-row Análisis de elementos que afectan el desarrollo, como genética, nutrición, ejercicio y entorno.
      .col-10.col-md-8.col-lg-6.col-xl-4
        .rounded-8px.d-flex.justify-content-center.flex-column.p-4.h-100.bg-ppal-azul-oscuro
          img.mx-auto.mb-4.mb-xl-5(src='@/assets/curso/unidad/img-06.svg', style="width: 80px")
          p.fs-18px.mb-4.text-bold.text-center Describir cambios
          p.mb-0.flex-grow-1.d-flex.text-center.flex-row Explicación de transformaciones hormonales y físicas durante la pubertad, como el crecimiento acelerado y desarrollo de características sexuales.


    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-ppal-amarillo-claro.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-07.svg', alt='Texto que describa la imagen')
          p.fs-18px.pe-xl-3.mb-0 Estudiar el desarrollo físico y motor en niños y adolescentes implica considerar estas perspectivas y características. Comprender la interacción entre factores biológicos y psicológicos permite a los educadores ser más competentes y apoyar el desarrollo integral de sus estudiantes.

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
