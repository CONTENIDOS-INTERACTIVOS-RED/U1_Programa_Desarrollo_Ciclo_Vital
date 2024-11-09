<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'unidad 1. Conceptos y fuentes del Derecho Civil'" :subTitulo="'2. Fuentes del Derecho Civil     '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.align-items-center
        div.d-flex.align-items-start.bg-ppal-claro.px-3.py-30px
          img.me-3(style="width: 90px" src='@/assets/curso/unidad2/img-40.svg', alt='Texto que describa la imagen')
          p.pe-xl-3.fs-18px.mb-0(data-aos="fade-up") Para que haya una aproximación adecuada al Derecho Civil, es necesario entender cómo se fundamentan, se forman y se legitiman sus normas. Para ello, deben conocerse sus fuentes como los orígenes de los que surgen las diferentes normas jurídicas. Medina (2021) es enfático al señalar que no existen normas espontáneas, sino que estas son la respuesta a necesidades de la colectividad y buscan proteger los intereses. Así, las normas tienen bases antropológicas y sociológicas, las cuales buscan crear reglas sociales que pueden denominarse en fuentes reales o materiales del Derecho. 
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0
        img.h-100(src='@/assets/curso/unidad2/img-41.png', alt='Texto que describa la imagen')  

    .row.mb-5
      p.fs-18px.mb-5 En ese sentido, para comprender cómo se forman y legitiman las normas dentro del Derecho Civil, es esencial conocer sus fuentes, que son los distintos orígenes de donde emanan las normas jurídicas. <strong>Estas fuentes pueden ser de tipo:</strong>
      .col-10.col-md-6.mb-4.mb-md-0.mx-auto
        div.custom-image-card.rounded-8px
          img.mb-4(src='@/assets/curso/unidad2/img-42.png', alt='Texto que describa la imagen')
          div.mb-4
            p.fs-18px.text-bold.text-center Directa
            p.text-center.pb-1 Corresponden a las que se dan en el contexto jurídico.
      .col-10.col-md-6.mb-4.mb-md-0.mx-auto
        div.custom-image-card.rounded-8px
          img.mb-4(src='@/assets/curso/unidad2/img-43.png', alt='Texto que describa la imagen')
          div.mb-4
            p.fs-18px.text-bold.text-center Indirecta
            p.text-center.pb-1 Corresponden a los contextos sociológicos y políticos.

    .row.mb-4
      .d-none.d-lg-block.col-lg-6.pe-0
        img.h-100(src='@/assets/curso/unidad2/img-44.png', alt='Texto que describa la imagen')
      .col-12.col-lg-6.d-flex.justify-content-between.align-items-end.bg-ppal-azul-oscuro.p-4.ps-xl-5
        div
          div.d-flex.justify-items-center
            img.me-2(style="width: 15px" src='@/assets/curso/unidad2/img-45.svg', alt='Texto que describa la imagen')
            p.mb-0.fs-18px Producir normas. 
          div.d-flex.justify-items-center
            img.me-2(style="width: 15px" src='@/assets/curso/unidad2/img-45.svg', alt='Texto que describa la imagen')
            p.mb-0.fs-18px Carácter vinculante.
          div.d-flex.justify-items-center
            img.me-2(style="width: 15px" src='@/assets/curso/unidad2/img-45.svg', alt='Texto que describa la imagen')
            p.mb-0.fs-18px Aplicación.
          div.d-flex.justify-items-center
            img.me-2(style="width: 15px" src='@/assets/curso/unidad2/img-45.svg', alt='Texto que describa la imagen')
            p.mb-0.fs-18px Función.
          div.d-flex.justify-items-center
            img.me-2(style="width: 15px" src='@/assets/curso/unidad2/img-45.svg', alt='Texto que describa la imagen')
            p.mb-0.fs-18px Interacción.
        div
          img(style="width: 73px" src='@/assets/curso/unidad2/img-46.svg', alt='Texto que describa la imagen')

    p.pb-2.fs-18px Respecto a su naturaleza, las fuentes pueden ser:
    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Directas 
              p.fs-18px(data-aos="fade-up") Son aquellas que generan normas jurídicas de forma explícita y formal, y contribuyen a la creación del marco legal. Su función es la de crear reglas con carácter vinculante, es decir; que deben ser cumplidas.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad2/img-47.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Indirectas 
              p.fs-18px No tienen la capacidad de producir normas, pero sí las complementan. Esto quiere decir que contribuyen a la interpretación y aplicación y contribuyen a la comprensión de la aplicación del derecho y las necesidades en el marco de nuevas realidades sociales y culturales.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad2/img-48.png', alt='Texto que describa la imagen')

    .row.mb-3
      p.fs-18px El carácter vinculante de las fuentes directas, está ligado a su reconocimiento formal en el sistema jurídico, en el cual su incumplimiento puede tener sanciones legales. Diferente a ese carácter formal, las fuentes indirectas no tienen obligatoriedad; no obstante, tienen una influencia relevante en la aplicación de la ley y pueden ser determinantes en la interpretación de los procesos jurídicos.
    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.align-items-center
        div.d-flex.align-items-start.bg-ppal-claro.px-3.py-30px
          img.me-3(style="width: 90px" src='@/assets/curso/unidad2/img-49.svg', alt='Texto que describa la imagen')
          p.pe-xl-3.fs-18px(data-aos="fade-up") Pese a esa diferencia, la interacción entre los dos tipos de fuentes es fundamental en la aplicación e interacción del derecho, debido a que se conjuga el contenido normativo con análisis y reflexiones en el marco de los distintos procesos. Lo anterior, permite un desarrollo en la práctica y aplicación, respondiendo a las necesidades de la sociedad.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0
        img.h-100(src='@/assets/curso/unidad2/img-50.png', alt='Texto que describa la imagen')  

    .row.mb-5.d-flex.box-shadow.p-4.mx-0
      .col-lg-9.col-xl-10.d-flex.align-items-center
        div.w-fit.p-4.me-3.bg-red-claro.rounded-circle
          img(style="width: 44px" src='@/assets/template/icono-pdf.svg', alt='Texto que describa la imagen')
        div.w-fit
          p.mb-2.fs-18px.text-bold Tipos de fuentes
          p Teniendo claras las diferencias en los tipos de fuentes, es importante profundizar qué contiene cada una de estas y para ello lo invitamos a consultar el PDF <strong>Tipos de fuentes.</strong>
      .col-lg-3.col-xl-2.d-flex.align-items-center.justify-content-end
        a.anexo.px-3.py-2.bg-ppal-azul-primary.text-white.box-shadow.cursor-pointer(:href="obtenerLink('/downloads/Anexo_Tipos_de_fuentes.pdf')" target="_blank") Descargar
          i.fas.fa-arrow-right.ms-2
        
    .row.mb-5
      p.fs-18px Conocer las fuentes del derecho es fundamental en el Derecho Civil, debido a que estas constituyen la base a partir de la cual se estructura y aplica el ordenamiento jurídico en una sociedad.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0
        img.h-100(src='@/assets/curso/unidad2/img-51.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.align-items-center
        div.d-flex.align-items-start.px-3.py-30px(style="background-color: #F3F3F3")
          p.ps-4.pe-xl-3.fs-18px(data-aos="fade-up") Identificar las fuentes es una herramienta elemental en el ejercicio del derecho y de su correcta identificación y comprensión; se garantiza la coherencia y la previsibilidad en la aplicación del derecho, lo que es esencial para la seguridad jurídica y la protección de los derechos de los sujetos.
          img(style="width: 90px" src='@/assets/curso/unidad2/img-52.svg', alt='Texto que describa la imagen')
    p.fs-18px Además, permite a quienes lo ejercen, tomar decisiones fundamentadas y adecuadas. Esto es relevante en una rama en la que se procura que las relaciones entre los sujetos, sean precisas y reguladas al detalle, al exigir que la norma y su interpretación sea aplicada con precisión. 

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
