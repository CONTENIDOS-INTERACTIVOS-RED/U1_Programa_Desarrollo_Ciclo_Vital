<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 1. Desarrollo Físico y Motor en Niños y Adolescentes'" :subTitulo="'1. Etapas del crecimiento físico en la infancia y adolescencia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5
      .col-12.col-xl-9.col-xxl-10
        p.fs-18px El desarrollo es un concepto amplio que se aborda desde diversas perspectivas, siendo las más relevantes la biológica y la psicológica. Según el Diccionario de Psicología de Anaya, N. C. (2004), el desarrollo se define como el “conjunto de procesos de maduración y aprendizaje mediante los cuales el organismo cumple su ciclo vital, actualizando sus potencialidades” (p. 81). Esto significa que el desarrollo es un recorrido que todos emprendemos, marcado por cambios tanto en lo que somos (cualitativos) como en lo que tenemos (cuantitativos). A medida que crecemos, nuestras habilidades, conocimientos y forma de percibir el mundo evolucionan. 
      .d-none.d-xl-block.col-xxl-2.col-xl-3    
        img.h-xxl-100(src='@/assets/curso/unidad/img-08.svg', alt='Texto que describa la imagen')
    
    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Perspectiva biológica
              p.fs-18px Desde la perspectiva biológica, el desarrollo se refiere a los cambios físicos y fisiológicos que se experimentan a lo largo de la vida, como el crecimiento corporal, el desarrollo cerebral y la maduración de los sistemas orgánicos.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="flip-up")
              figure
                img(src='@/assets/curso/unidad/img-09.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Perspectiva psicológica
              p.fs-18px Desde la perspectiva psicológica, el desarrollo implica transformaciones en el comportamiento, las emociones y las capacidades cognitivas, abarcando el aprendizaje, la formación de la identidad y el desarrollo de habilidades sociales.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Interdependencia
              p.fs-18px Ambos enfoques son interdependientes, ya que los cambios biológicos pueden influir en el desarrollo psicológico y viceversa.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')

    .row.mb-5
      p.fs-18px.mb-4(data-aos="fade-up") Una de las características más importantes del desarrollo es que se trata de un <strong>proceso continuo</strong>. Esto implica que no existe un momento específico en el que se detenga; más bien, continúa a lo largo de toda la vida. Además, el desarrollo es <strong>ordenado</strong>, lo que significa que sigue una <strong>secuencia predecible</strong> (Lizaso et al., 2018). Por ejemplo, primero se aprende a <strong>gatear</strong>, luego a <strong>caminar</strong> y, finalmente, a <strong>correr</strong>. Sin embargo, el desarrollo también es <strong>variable</strong>, ya que cada persona se desarrolla a su propio ritmo y de manera única, influenciada por diversos factores.
      p.fs-18px Los factores que influyen en el desarrollo físico:

    .row.mb-5
      TabsC.color-primario
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Genética")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="flip-up")
              figure
                img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
              h4 Genética
              p.fs-18px(data-aos="fade-up") La genética desempeña un papel fundamental, ya que se heredan características de los padres que influyen en el crecimiento y desarrollo de los individuos (Mateo y Sáez, 2010).
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Nutrición")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
              h4 Nutrición
              p.fs-18px Una dieta equilibrada es esencial para alcanzar el máximo potencial físico y mental, favoreciendo un desarrollo adecuado.
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Entorno")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
              h4 Entorno
              p.fs-18px La calidad de la educación, el apoyo familiar y las oportunidades sociales son factores del entorno que impactan significativamente en el desarrollo de una persona.

    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-ppal-azul-primary.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-18.svg', alt='Texto que describa la imagen')
          p.fs-18px.pe-xl-3.mb-0(data-aos="fade-left") Estudiar el desarrollo físico y motor en niños y adolescentes implica considerar estas perspectivas y características. Comprender la interacción entre factores biológicos y psicológicos permite a los educadores ser más competentes y apoyar el desarrollo integral de sus estudiantes.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-img-1
  position: absolute
  max-width: none
  width: calc( 100% + 96px  )
  height: calc( 100% + 96px )
  left: -48px
  top: -48px
  inline-size: auto
.tabs-content
  background-color: $color-primario
.img-infografica
  background-color: $color-adicional-1
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
