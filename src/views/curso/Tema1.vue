<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'unidad 1. Conceptos y fuentes del Derecho Civil'" :subTitulo="'1. Conceptos y fuentes del Derecho Civil'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    #t_1_1.titulo-segundo.color-secundario
      h2 1.1  Concepto de Derecho Civil

    .row.mb-5
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad1/img-13.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-ppal-claro.p-4
        p.fs-18px.mb-0 El Derecho Civil es una de las ramas del derecho privado, que regula las relaciones entre personas, tanto físicas como jurídicas, en diferentes aspectos de la cotidianidad.

    .row.mb-5.mb-4
      p.fs-18px.mb-4 Es así, como primero debemos responder las siguientes preguntas:
      .col-12.col-lg-7
        AcordionA(tipo="b")
          .div(titulo="¿En qué se diferencia del derecho público?")
            p.fs-18px Se refieren a los hechos y circunstancias que originan la creación del derecho, como los contextos sociales, económicos y políticos, es decir, la realidad misma. Estas fuentes reflejan las necesidades y situaciones específicas de la sociedad que requieren regulación.
          .div(titulo="¿Cómo está orientado su propósito?")
            p.fs-18px Su propósito está orientado a garantizar la convivencia pacífica y armónica entre las personas, al regular asuntos como la propiedad, los contratos, las obligaciones, la familia y las sucesiones.
      .col-12.col-lg-5.d-none.d-lg-block
        img.-mt-18px(src='@/assets/curso/unidad1/img-14.png', alt='Texto que describa la imagen')
    
    .row.mb-4
      p.fs-18px.mb-4(data-aos="fade-up") Una parte esencial del Derecho Civil es que, siendo reguladora de las relaciones, prima la autonomía y la voluntad de los individuos. En ese sentido, son las personas las que determinan las condiciones de sus relaciones jurídicas, su duración, tipo de vinculación, entre otros. Sin embargo, debe señalarse que, aún con la voluntad de los individuos, esta rama tiene carácter protector al buscar un equilibrio en las relaciones donde pueden presentarse vínculos desequilibrados; en otras palabras, el Derecho Civil establece límites a la voluntad, para proteger a las partes que, posiblemente, son más vulnerables. 
      p.fs-18px.text-bold Ejemplo de lo anterior son:

    .row.justify-content-center.mb-5
      .d-none.d-xl-block.col-11.col-lg-4.col-xxl-4
        img.h-xxl-100(src='@/assets/curso/unidad1/img-15.png', alt='Texto que describa la imagen')
      .col-10.col-md-8.col-lg-10.col-xl-8.col-xxl-8
        SlyderF(columnas="col-12 col-lg-6")
          .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
            .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
              div.box-shadow.ms-3.h-100
                img(src='@/assets/curso/unidad1/img-16.png' alt='AvatarTop')
                p.mb-0.p-4.fs-18px.text-bold.text-center(style="borderRadius: 0px 0px 18px 18px") El matrimonio
          .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
            .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
              div.box-shadow.ms-3.h-100
                img(src='@/assets/curso/unidad1/img-17.png' alt='AvatarTop')
                p.mb-0.p-4.fs-18px.text-bold.text-center(style="borderRadius: 0px 0px 18px 18px") El contrato
          .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
            .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
              div.box-shadow.ms-3.h-100
                img(src='@/assets/curso/unidad1/img-18.png' alt='AvatarTop')
                p.mb-0.p-4.fs-18px.text-bold.text-center(style="borderRadius: 0px 0px 18px 18px") El testamento
          .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
            .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
              div.box-shadow.ms-3.h-100
                img(src='@/assets/curso/unidad1/img-19.png' alt='AvatarTop')
                p.mb-0.px-4.pb-0.pt-2.fs-18px.text-bold.text-center(style="borderRadius: 0px 0px 18px 18px") El cumplimiento de las obligaciones
          .row.py-4.px-4.px-lg-3.px-xxl-2.h-100.justify-content-center
            .col-10.col-md-11.col-lg-12.col-xxl-11.px-0
              div.box-shadow.ms-3.h-100
                img(src='@/assets/curso/unidad1/img-20.png' alt='AvatarTop')
                p.mb-0.p-4.fs-18px.text-bold.text-center(style="borderRadius: 0px 0px 18px 18px") Los negocios
          
    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-ppal-azul.p-3.col-12
          img.me-4(style="width: 90px" src='@/assets/curso/introduccion/img-12.svg', alt='Texto que describa la imagen')
          p.fs-18px.pe-xl-3.mb-0 Estos se dan por iniciativa de quienes los celebran y su conducta no es impuesta por el Estado.

    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      p.fs-18px.mb-4  Los principales objetivos del Derecho Civil, incluyen: 
      .col-8.col-sm-7.col-md-6.col-xl-3.mb-4.mb-xl-0
        .custom-image-card.d-flex.justify-content-center.p-2.h-100
          img.me-3(src='@/assets/curso/unidad1/img-21.svg', style="width: 68px")
          p.mb-0.flex-grow-1.d-flex.flex-row.align-items-center Proteger los derechos individuales.
      .col-8.col-sm-7.col-md-6.col-xl-3.mb-4.mb-xl-0
        .custom-image-card.d-flex.justify-content-center.p-2.h-100
          img.me-3(src='@/assets/curso/unidad1/img-22.svg', style="width: 68px")  
          p.mb-0.flex-grow-1.d-flex.flex-row.align-items-center Regular las relaciones contractuales.
      .col-8.col-sm-7.col-md-6.col-xl-3.mb-4.mb-xl-0
        .custom-image-card.d-flex.justify-content-center.p-2.h-100
          img.me-3(src='@/assets/curso/unidad1/img-23.svg', style="width: 68px")
          p.mb-0.flex-grow-1.d-flex.flex-row.align-items-center Establecer un marco para la resolución de conflictos entre particulares.
      .col-8.col-sm-7.col-md-6.col-xl-3.mb-4.mb-xl-0
        .custom-image-card.d-flex.justify-content-center.p-2.h-100
          img.me-3(src='@/assets/curso/unidad1/img-24.svg', style="width: 68px")
          p.mb-0.flex-grow-1.d-flex.flex-row.align-items-center Promover la justicia y la equidad en las transacciones.

    .row.mb-5
      TabsC.color-primario
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Derecho Civil")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/unidad1/img-25.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
              h4 Derecho Romano
              p.fs-18px(data-aos="fade-up") Chinchilla (2019), establece que en este se encuentran las relaciones obligatorias de intercambio o de asociatividad y prestaciones de los sujetos. Adicionalmente, esas relaciones tienen como centro la buena fe como motor de creación de reglas, que, a juicio del autor, podían ser la base de reglas de las relaciones. Chinchilla también enfatiza en la relevancia de los vínculos en las sociedades romanas y que esto es un fundamento de cómo se construye la base de las obligaciones en el Derecho Civil.
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Código Napoleónico")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/unidad1/img-26.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
              h4 Código Napoleónico
              p.fs-18px Este es el Código Civil más conocido a nivel global y para algunos implicó el nacimiento de la codificación civil en la modernidad. Así, para distintas naciones, fue un modelo para consolidar el ordenamiento jurídico y la consolidación de fuentes del derecho.
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Código Civil chileno")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
              figure
                img(src='@/assets/curso/unidad1/img-27.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
              h4 Código Civil chileno
              p.fs-18px Este no solo influenció el código colombiano, sino en general, el derecho en América Latina. Hinestrosa (2021) relata que, en 1873, los Estados Unidos de Colombia adoptaron el Código Civil chileno, redactado por Andrés Bello, con algunas modificaciones y que así también lo hicieron algunas otras naciones hispanoamericanas. Posteriormente, en 1887 y atendiendo a la nueva constitución de 1886, la ley 57 y la ley 153, se hicieron algunas de las modificaciones más relevantes. De ahí a que se considera que su expedición es de 1887.


    .row.justify-content-center.mb-5
      p.fs-18px.mb-5 Además de las mencionadas, Hinestrosa (2021) señala que han habido numerosas reformas dentro de las cuales, a modo de ejemplo, se encuentran: 
      .d-none.d-xl-block.col-11.col-md-4.col-xl-4
        figure.mb-4.mb-md-0
          img(src='@/assets/componentes/test-img-carousel.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        SlyderF(columnas="col-12 col-md-6")
          .row.py-4.px-3.h-100
            .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-lg-5.px-md-4
              .row.justify-content-center
                .col-5.col-md-4.mb-4
                  img(src='@/assets/componentes/test-slider.svg' alt='AvatarTop')
                h3.text-center.mb-4 Ley 8 de 1922
                p.text-center Introdujo la separación de bienes.
          .row.py-4.px-3.h-100
            .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-lg-5.px-md-4
              .row.justify-content-center
                .col-5.col-md-4.mb-4
                  img(src='@/assets/componentes/test-slider.svg' alt='AvatarTop')
                h3.text-center.mb-4 Ley 54 de 1924
                p.text-center Permitió el matrimonio civil entre católicos que declaran  haberse separado de la Iglesia.
          .row.py-4.px-3.h-100
            .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-lg-5.px-md-4
              .row.justify-content-center
                .col-5.col-md-4.mb-4
                  img(src='@/assets/componentes/test-slider.svg' alt='AvatarTop')
                h3.text-center.mb-4 Ley 8 de 1922
                p.text-center Restituyó la capacidad legal de la mujer casada.
          .row.py-4.px-3.h-100
            .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-lg-5.px-md-4
              .row.justify-content-center
                .col-5.col-md-4.mb-4
                  img(src='@/assets/componentes/test-slider.svg' alt='AvatarTop')
                h3.text-center.mb-4 Decreto Extraordinario 1260 de 1970
                p.text-center Expidió el “Estatuto del registro del estado civil de las personas”.
          .row.py-4.px-3.h-100
            .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-lg-5.px-md-4
              .row.justify-content-center
                .col-5.col-md-4.mb-4
                  img(src='@/assets/componentes/test-slider.svg' alt='AvatarTop')
                h3.text-center.mb-4 Ley 70 de 1931
                p.text-center Reglamentó la constitución de patrimonios de familia, no embargables.
          .row.py-4.px-3.h-100
            .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-lg-5.px-md-4
              .row.justify-content-center
                .col-5.col-md-4.mb-4
                  img(src='@/assets/componentes/test-slider.svg' alt='AvatarTop')
                h3.text-center.mb-4 Decreto Extraordinario 1250 de 1970
                p.text-center Expidió el “Estatuto del registro de instrumentos públicos” que reguló el catastro y creó el folio de matrícula inmobiliaria.

    .row.mb-5.pb-3
      p.fs-18px.mb-5 Los ejemplos de las reformas muestran que incluso existiendo el Código Civil colombiano desde 1887, este se ha adaptado a las nuevas realidades del país y a los cambios configurados en las relaciones entre los sujetos. 
      .col-12.col-xl-7.col-xxl-8.d-flex.align-items-center
        div.d-flex.align-items-start.bg-ppal-azul.px-3.py-30px
          img.me-3(style="width: 90px" src='@/assets/curso/unidad1/img-24.svg', alt='Texto que describa la imagen')
          p.pe-xl-3.fs-18px(data-aos="fade-up") Dentro de los ejemplos más notables en el caso colombiano, se destacan aquellos relacionados con el estado civil de las personas. También hay algunas modificaciones relacionadas a los bienes y obligaciones, imponiendo nuevas formas de regulación o de creaciones de registros. Los cambios y modificaciones al Código Civil son múltiples y permiten que hoy, esta rama del derecho, se regule acorde a las necesidades actuales de la sociedad .
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0
        img.h-100(src='@/assets/curso/unidad1/img-28.png', alt='Texto que describa la imagen')  

    p.mb-4.fs-18px Incluso con estos cambios, vale la pena aclarar que los tópicos centrales se mantienen y que los ajustes que se dan, es sobre la forma en la que se regulan las relaciones. Así, la estructura del Derecho Civil agrupa sus divisiones en la existencia de las personas, sus relaciones familiares, contractuales y de obligaciones.
    p.mb-4.fs-18px Estas divisiones, conocidas como <strong>subramas</strong>, son: 
    .row.position-relative.mb-4.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Derecho de Personas
              p.fs-18px(data-aos="fade-up") El derecho de personas regula a los individuos, su capacidad jurídica y estado civil. Dentro de los aspectos que le son relevantes, incluye el nacimiento, la nacionalidad, la capacidad para actuar y el estado civil (matrimonio, divorcio, etc.).
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad1/img-29.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Derecho de Familia
              p.fs-18px El derecho de familia aborda las relaciones familiares y las responsabilidades que surgen de ellas. Busca proteger los derechos de quienes la componen y regula el matrimonio, la adopción, la custodia de los hijos y la responsabilidad sobre estos.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad1/img-30.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Derecho de Sucesiones
              p.fs-18px El derecho de sucesiones regula la transmisión de bienes y derechos tras el fallecimiento de una persona. Establece las normas para la elaboración de testamentos, la distribución de herencias y los procedimientos sucesorios y así garantizar la seguridad patrimonial de los herederos.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad1/img-31.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Derecho de Obligaciones
              p.fs-18px El derecho de obligaciones aborda las relaciones contractuales y las obligaciones que surgen de ellas. Regula la formación, validez y efectos de los contratos, así como los derechos y deberes de las partes involucradas.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad1/img-32.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Derecho de Bienes
              p.fs-18px El derecho de propiedad regula los derechos sobre los bienes, tanto muebles como inmuebles. Incluye la adquisición, transmisión y protección de la propiedad, así como los derechos de usufructo y servidumbres. Usualmente, se estudia a la par de las obligaciones.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad1/img-33.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Responsabilidad Civil
              p.fs-18px La responsabilidad civil no es estudiada como una subrama del Derecho Civil. Sin embargo, es determinante en la aproximación procesal de esta área. Se centra en la obligación de reparar daños causados a terceros.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad1/img-34.png', alt='Texto que describa la imagen')

    .row.mb-5.pt-5
      h1.mb-4 Relación con otras ramas del Derecho
      p.fs-18px Además de las subramas del Derecho Civil, este también es relevante para otras áreas del derecho privado, como:
    
    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Derecho Comercial
              p.fs-18px(data-aos="fade-up") Las relaciones comerciales, si bien son reguladas por el derecho comercial, están ligadas a los procesos civiles. Esto se explica en que la ejecución de contratos, las transacciones y la responsabilidad sobre los productos tienen fundamentos en normas del proceso civil.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad1/img-35.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Derecho Laboral
              p.fs-18px El derecho laboral establece las relaciones entre empleadores y empleados, pero también está intrínsecamente ligado al Derecho Civil en la aplicación de los contratos. Además, la responsabilidad civil es relevante frente a situaciones de incumplimiento laboral y de las ejecuciones en las obligaciones contractuales.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad1/img-36.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Derecho Administrativo
              p.fs-18px Las interacciones entre particulares y la administración pública, están reguladas por el derecho administrativo, pero el Derecho Civil puede intervenir en casos donde se afectan derechos individuales, como en la expropiación de propiedades o la regulación de contratos administrativos.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad1/img-37.png', alt='Texto que describa la imagen')

    .row.mb-5.pt-3
      p.fs-18px.mb-5(data-aos="fade-up") La relación del Derecho Civil con otras ramas, refleja la importancia que tiene en distintos escenarios y relaciones de los individuos. Para garantizar una aplicación efectiva de la norma, se deben considerar los principios, como los elementos centrales que determinan la conducta a seguir en el ordenamiento de los procesos civiles, garantizando los derechos de las partes. Estos son aplicados por el Código de Procedimiento Civil y hacen parte de los principios generales del Derecho Procesal Colombiano. Algunos de estos son:
      .col-12.col-lg-7
        AcordionA(tipo="b")
          .div(titulo="Igualdad entre las partes")
            p.fs-18px La Corte Constitucional (2008) en la sentencia C-690 señala que quienes concurren en el proceso, de manera voluntaria u oficiosa, deben tener las mismas oportunidades procesales. Este principio es derivado del Artículo 13 de la Constitución Política “todas las personas nacen libres e iguales ante la ley”.
          .div(titulo="Acceso a la justicia")
            p.fs-18px Todas las personas deben tener garantías para el ejercicio de sus derechos y defensa de sus intereses, así como un debido proceso.
          .div(titulo="Legalidad")
            p.fs-18px El sometimiento de los jueces al dominio de la ley.
          .div(titulo="Debido proceso")
            p.fs-18px Deberá ser aplicado en todas las actuaciones previstas por el Código General del Proceso.
      .col-12.col-lg-5.d-none.d-lg-block
        img.-mt-18px(src='@/assets/curso/unidad1/img-38.png', alt='Texto que describa la imagen')
    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block
        img.-mt-18px(src='@/assets/curso/unidad1/img-39.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7
        AcordionA(tipo="b")
          .div(titulo="Observancia de las normas procesales")
            p.fs-18px Las normas procesales son de obligatorio cumplimiento.
          .div(titulo="Vacíos y deficiencias del código")
            p.fs-18px Cualquier vacío se llenará con las normas que regulen casos análogos.
          .div(titulo="Legalidad")
            p.fs-18px El sometimiento de los jueces al dominio de la ley.
          .div(titulo="Gratuidad")
            p.fs-18px El servicio de justicia es gratuito y será prestado por el Estado.
          .div(titulo="Instancias")
            p.fs-18px Los procesos tendrán dos instancias, salvo en los casos que la ley establezca solo una.

    .row.mb-5
      h1 Para recapitular:
      p.fs-18px(data-aos="fade-down") El Derecho Civil es una rama fundamental del sistema jurídico, que regula aspectos esenciales de la vida cotidiana y las relaciones entre particulares, a través de las subramas que lo componen. Su evolución histórica es relevante para entender los ajustes que ha tenido en la normativa, pero también para rastrear sus antecedentes, particularmente en lo referente a su codificación. Independiente a estos ajustes, así como otras ramas del derecho, esta se destaca por la aplicación de fuentes y principios que propenden porque en su aplicación se protejan y equilibren las relaciones entre los sujetos y se les brinde garantías.
    
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
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
