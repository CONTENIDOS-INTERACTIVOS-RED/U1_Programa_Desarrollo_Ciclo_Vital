<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 1. Desarrollo Físico y Motor en Niños y Adolescentes'" :subTitulo="'2. Etapas del crecimiento físico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-ppal-amarillo-claro.p-4
        p.fs-18px.mb-0 Después de explorar el desarrollo, es fundamental abordar el crecimiento físico, un proceso fascinante que abarca diversas etapas desde el nacimiento hasta la adolescencia. Durante estas fases, los cambios corporales son notables y tienen un impacto significativo en el desarrollo motor y psicológico. Este apartado se centrará en las etapas del crecimiento físico: infancia temprana, infancia media, infancia tardía y adolescencia, con el objetivo de identificar los hitos principales del desarrollo físico en niños y adolescentes.

    .row.mb-5
      p.fs-18px.mb-0 Las etapas del crecimiento físico comprenden diferentes fases, cada una caracterizada por cambios específicos en el desarrollo del cuerpo:

    .row.mb-5.justify-content-center.img-infografica.px-0.mx-0
      ImagenInfografica.color-acento-contenido.px-0
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-20.svg', alt='Texto que describa la imagen')

        .tarjeta.bg-white.p-4(x="21.7%" y="74%" numero="+")
          .h5.mb-3.fs-18px Infancia temprana (0-2 años)
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/unidad/img-21.svg', alt='Texto que describa la imagen')
            p.fs-18px.mb-0 Cambios rápidos en talla y peso. 
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/unidad/img-21.svg', alt='Texto que describa la imagen')
            p.fs-18px.mb-0 Desarrollo de los sentidos.
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/unidad/img-21.svg', alt='Texto que describa la imagen')
            p.fs-18px.mb-0 Primeros hitos motores: sostener la cabeza, sentarse, gatear, caminar.
          
        .tarjeta.bg-white.p-4(x="40.5%" y="25%" numero="+")
          .h5.mb-3.fs-18px Infancia media (2-6 años)
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/unidad/img-21.svg', alt='Texto que describa la imagen')
            p.fs-18px.mb-0 Crecimiento más lento pero continuo. 
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/unidad/img-21.svg', alt='Texto que describa la imagen')
            p.fs-18px.mb-0 Desarrollo de la coordinación y equilibrio. 
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/unidad/img-21.svg', alt='Texto que describa la imagen')
            p.fs-18px.mb-0 Desarrollo de habilidades motoras finas (dibujar, manipular objetos pequeños).

        .tarjeta.bg-white.p-4(x="59.4%" y="74%" numero="+")
          .h5.mb-3.fs-18px Infancia tardía (6-12 años)
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/unidad/img-21.svg', alt='Texto que describa la imagen')
            p.fs-18px.mb-0 Crecimiento más constante.
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/unidad/img-21.svg', alt='Texto que describa la imagen')
            p.fs-18px.mb-0 Desarrollo de la fuerza y resistencia. 
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/unidad/img-21.svg', alt='Texto que describa la imagen')
            p.fs-18px.mb-0 Cambios en la composición corporal

        .tarjeta.bg-white.p-4(x="78.4%" y="25%" numero="+")
          .h5.mb-3.fs-18px Adolescencia (12-18 años)
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/unidad/img-21.svg', alt='Texto que describa la imagen')
            p.fs-18px.mb-0 Estirón puberal. 
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/unidad/img-21.svg', alt='Texto que describa la imagen')
            p.fs-18px.mb-0 Desarrollo de características sexuales secundarias. 
          div.d-flex
            img.mt-2.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/unidad/img-21.svg', alt='Texto que describa la imagen')
            p.fs-18px.mb-0 Cambios en la composición corporal.
    
    .row.mb-5.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.pb-md-3
        h1.mb-4.pb-2 Infancia temprana (0-2 años)
        p.mb-4(data-aos="fade-up") La <strong>infancia temprana</strong> es un periodo caracterizado por <strong>cambios físicos rápidos y profundos</strong>. Desde el nacimiento, un bebé experimenta un crecimiento significativo. Papalia y Feldman (2012) afirman que “los recién nacidos tienen características distintivas, como cabeza grande (un cuarto de toda su estatura) y barbilla hundida (que facilita la lactancia)” (p. 102). Al nacer, la cabeza del bebé puede parecer más grande y de una forma diferente a la esperada. Esto se debe a que, durante el parto, los huesos de su cráneo, aún blandos, se amoldan para poder atravesar el canal de parto. Con el tiempo, estos huesos se fusionan, y la cabeza adquiere una forma más redondeada.
        p.mb-5 El desarrollo físico durante los primeros meses es:
        .row
          .col-10.col-md-6.mb-4.mb-md-0.mx-auto
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
              div.mb-4
                p.fs-18px.text-bold.text-center Crecimiento y peso
                p.px-4.text-center.pb-2 En los primeros meses, los recién nacidos pasan de pesar alrededor de 3 kg a cerca de 6 kg al cumplir seis meses. Este aumento de peso es esencial, ya que proporciona la energía necesaria para el desarrollo del cerebro y otros órganos.
          .col-10.col-md-6.mb-4.mb-md-0.mx-auto
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
              div.mb-4
                p.fs-18px.text-bold.text-center Desarrollo motor
                p.px-4.text-center.pb-2 Durante esta etapa, el control motor comienza a desarrollarse. Inicialmente, los bebés no son capaces de sostener su cabeza, pero, a medida que crecen, empiezan a levantarla y girarla. A los 3 meses, la mayoría puede mantener la cabeza en posición vertical. Al cumplir un año, muchos comienzan a gatear y algunos incluso a caminar.
    .row.mb-5
      h1.mb-5.pb-2 Desarrollo entre los 12 y 18 meses
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-ppal-azul-primary.p-4
        p.fs-18px.mb-0(data-aos="fade-up") Entre los 12 y 18 meses, los niños presentan un crecimiento significativo en su <strong>desarrollo físico</strong>; muchos ya logran dar sus primeros pasos, aunque con apoyo. A medida que se acercan a los 18 meses, su <strong>equilibrio mejora</strong>, lo que les permite caminar con mayor confianza y explorar su entorno. Este aumento en la <strong>movilidad</strong> no solo resulta emocionante para ellos, sino que también les motiva a interactuar más con su entorno y con otras personas.

    .row.mb-5
      h1.mb-5.pb-2 Importancia de la estimulación temprana
      .col-12.col-xl-8.d-flex.align-items-center.bg-ppal-amarillo-claro.p-4
        p.fs-18px.mb-0 Es fundamental señalar que cada niño puede alcanzar estos hitos a su propio ritmo. Algunos pueden caminar antes que otros, y esto es completamente normal. Lo importante es <strong>brindarles un entorno seguro y motivador</strong>. La <strong>estimulación temprana</strong> desempeña un papel crucial. La interacción con el entorno, a través de <strong>juegos, música</strong> o simples <strong>conversaciones</strong>, contribuye a fortalecer las <strong>conexiones neuronales</strong>.
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')

    .row.mb-5.bg-fondo-3.bg-full-width
      div.px-4.px-md-5.pb-md-3
        h1.mb-5.pb-2 Habla dirigida al bebé
        .row.mb-5
          .d-none.d-xl-block.col-4.px-0
            img.h-100(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
          .col-12.col-xl-8.d-flex.align-items-center.bg-ppal-azul-oscuro.p-4
            p.fs-18px.mb-0 Un ejemplo de estimulación es el uso de un patrón de habla caracterizado por un tono más alto, una pronunciación más clara y una entonación exagerada cuando se interactúa con los bebés. Este tipo de habla se conoce como baby talk  o "habla dirigida al bebé", y facilita la adquisición del lenguaje por parte del bebé, además de reforzar el vínculo afectivo entre madre e hijo (Brugué y Sellabona, 2008).
        p.fs-18px.text-bold.mb-5 Los juegos y experiencias sensoriales son:  
        .row
          .col-10.col-md-6.mb-4.mb-md-0.mx-auto
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
              div.mb-4
                p.fs-18px.text-bold.text-center Jugar con bloques de colores
                p.px-4.text-center.pb-2 No solo estimula la <strong>motricidad fina</strong>, sino que también fomenta la <strong>creatividad</strong> y la <strong>resolución de problemas</strong>.
          .col-10.col-md-6.mb-4.mb-md-0.mx-auto
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
              div.mb-4
                p.fs-18px.text-bold.text-center Experiencias sensoriales
                p.px-4.text-center.pb-2 Tocar diferentes texturas es fundamental para el <strong>desarrollo integral</strong> del niño, ya que contribuye a su conocimiento del mundo y a la estimulación de sus sentidos.

    .row.mb-5
      h1.mb-4.pb-2 Infancia media (2-6 años)
      p.fs-18px.mb-4 Los ejemplos de las reformas muestran que incluso existiendo el Código Civil colombiano desde 1887, este se ha adaptado a las nuevas realidades del país y a los cambios configurados en las relaciones entre los sujetos.
      .d-none.d-xl-block.col-auto.col-xl-4.mx-auto.mt-4.mt-xl-0
        figure
          img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-8.d-flex.align-items-center
        div.d-flex.align-items-center.bg-ppal-amarillo-claro.p-4
          div.col-auto.mb-auto.d-none.d-lg-block
            img(style="width: 90px" src='@/assets/curso/unidad/img-30.svg', alt='Texto que describa la imagen')
          div
            p.fs-18px.pe-xl-4.mb-2.ps-lg-4.mb-0(data-aos="fade-up") La <strong>infancia media</strong>, que abarca de los <strong>2 a los 6 años</strong>, es una etapa caracterizada por un crecimiento significativo. Durante este periodo, los niños comienzan a parecerse más a niños mayores. Su cuerpo se vuelve <strong>más delgado y fuerte</strong>, y se observa un <strong>alargamiento de piernas y brazos</strong>. Papalia y Feldman (2012) destacan que, en esta etapa, los niños <strong>consolidan su control motor</strong> y desarrollan nuevas habilidades. Pasan de realizar actividades simples, como <strong>correr y saltar</strong>, a habilidades más complejas, como <strong>montar en bicicleta o practicar deportes</strong>.
    
    p.mb-4.pb-2.fs-18px El desarrollo emocional se da a partir de:
    .row.position-relative.mb-5.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Expresión de emociones
              p.fs-18px Entre los 3 y 4 años, los niños comienzan a expresar sus sentimientos de manera más clara y a comprender las emociones de los demás. Por ejemplo, pueden sentir alegría al jugar con amigos o tristeza si se rompe un juguete.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Desarrollo de la empatía
              p.fs-18px Este desarrollo emocional es crucial, ya que permite a los niños formar relaciones y desarrollar empatía, lo que contribuye a su integración social.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Juegos de imaginación
              p.fs-18px A esta edad, los niños suelen participar en juegos de imaginación, lo que les permite explorar diferentes roles y situaciones, facilitando su comprensión del mundo que les rodea.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
    .row.mb-5
      p.fs-18px.mb-5 El juego se convierte en un componente esencial de la infancia media. A través del juego libre y estructurado, los niños exploran su entorno y aprenden a interactuar con sus compañeros. 
      .col-10.col-md-6.mb-4.mb-md-0.mx-auto
        div.custom-image-card.rounded-8px
          img.mb-4(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
          div.mb-4
            p.px-4.text-center.py-3 <strong>Juego y habilidades físicas</strong>. Actividades como jugar a la pelota mejoran la coordinación y el equilibrio.
      .col-10.col-md-6.mb-4.mb-md-0.mx-auto
        div.custom-image-card.rounded-8px
          img.mb-4(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
          div.mb-4
            p.px-4.text-center.py-3 <strong>Juego y habilidades sociales</strong>. Estas actividades también enseñan habilidades sociales, como el trabajo en equipo.

    .row.mb-5
      p.fs-18px.mb-4.pb-2 Las recomendaciones de actividad física son: 
      div.bg-ppal-amarillo-claro.d-flex.align-items-center
        .col-12.col-xl-6.px-4
          div.d-flex.mb-4
            i.fas.fa-baby.fs-18px.me-2.mt-1
            p.fs-18px.mb-0 <strong>Duración de la actividad</strong>. Se recomienda que los niños de esta edad realicen al menos una hora de actividad física diaria.
  
          div.d-flex
            i.fas.fa-baby.fs-18px.me-2.mt-1
            p.fs-18px.mb-0 <strong>Beneficios</strong>. La actividad física favorece su desarrollo físico y tiene un impacto positivo en su salud mental, ayudando a reducir el estrés y a mejorar su estado de ánimo.
  
        .d-none.d-xl-block.col-xl-6
          img(src='@/assets/curso/unidad/img-36.svg', alt='Texto que describa la imagen')

    .row.mb-5
      p.fs-18px En conjunto, la infancia media es un periodo clave para el desarrollo físico, emocional y social de los niños, en el que las actividades motoras y el juego desempeñan un papel central.

    .row.mb-5
      h1.mb-4.pb-2 Infancia tardía (6-12 años)
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-ppal-azul-oscuro.p-4
        p.fs-18px.mb-0(data-aos="fade-up") A diferencia de la etapa anterior, la <strong>infancia tardía</strong> (6 a 12 años) se caracteriza por cambios físicos más graduales. En este periodo, los niños experimentan un crecimiento constante en altura y peso, aunque menos pronunciado que en etapas anteriores. Según Brugué y Sellabona (2008), el cuerpo del niño se vuelve más proporcionado, sus músculos se desarrollan y su capacidad pulmonar aumenta, mejorando significativamente sus habilidades físicas.

    .row.mb-5
      p.fs-18px.mb-5 Los cambios físicos y el entorno social influyen en el desarrollo motor, la autoestima y el bienestar emocional de los niños, como:
      .col-12.col-xl-7
        AcordionA(tipo="b")
          .div(titulo="Influencia física y social")
            p.fs-18px.px-2.mb-0 Los cambios físicos afectan no solo el desarrollo motor, sino también la autoestima y las relaciones sociales. Brugué y Sellabona (2008) destacan que “lo que un niño o niña muestra externamente –temperamento, tipo corporal, atractivo físico, estrategias o habilidades motoras– tiene efectos muy considerables sobre su autoconcepto” (p. 198).
          .div(titulo="Importancia del entorno social")
            p.fs-18px.px-2.mb-0 Los conocimientos adquiridos en la escuela, junto con experiencias como la música o el deporte, son cruciales para el desarrollo integral del niño. Aunque pueden surgir conflictos, mantener un diálogo abierto y normas consensuadas contribuye a su crecimiento emocional.
          .div(titulo="Dieta balanceada")
            p.fs-18px.px-2.mb-0 Una alimentación saludable es fundamental en esta etapa. Los niños deben consumir una dieta equilibrada que incluya frutas, verduras, proteínas y cereales integrales.
          .div(titulo="Educación nutricional")
            p.fs-18px.px-2.mb-0 Aprender sobre nutrición y tomar decisiones alimenticias correctas puede tener un impacto positivo en su desarrollo físico y prevenir problemas de salud a largo plazo.
      .col-5.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')

    .row.mb-5
      .col-5.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7
        AcordionA(tipo="b")
          .div(titulo="Deportes y actividades")
            p.fs-18px.px-2.mb-0 Durante esta etapa, los niños desarrollan habilidades motoras más refinadas. Participar en deportes organizados o actividades recreativas mejora su coordinación, agilidad y fuerza.
          .div(titulo="Fomento de la autoestima")
            p.fs-18px.px-2.mb-0 Estas actividades no solo desarrollan habilidades físicas, sino que también fomentan la confianza y la autoestima, ayudando a que los niños se sientan más seguros de sí mismos.
          .div(titulo="Estilo de vida activo")
            p.fs-18px.px-2.mb-0 Mantener un estilo de vida activo es esencial para el bienestar físico y emocional, asegurando un crecimiento saludable en esta etapa.

    .row.mb-5
      p.fs-18px En conclusión, la infancia tardía es un periodo de crecimiento gradual y desarrollo físico continuo, donde la <strong>alimentación</strong>, la <strong>actividad física</strong> y un entorno <strong>afectivo y seguro</strong> juegan un papel central para un desarrollo integral.

    .row.mb-5
      h1.mb-4.pb-2 Adolescente (12 y 18 Años)
      p.fs-18px Siguiendo el hilo conductor, la <strong>adolescencia</strong>, que abarca aproximadamente entre los <strong>12 y 18 años</strong>, es una etapa de <strong>cambios significativos</strong> en el desarrollo físico, marcada por la transición de la niñez a la adultez. Es un período crucial, donde se experimentan cambios visibles y profundos en el cuerpo y la percepción de sí mismos.

    .row.position-relative.mb-5.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Crecimiento acelerado
              p.fs-18px Durante la adolescencia, los jóvenes atraviesan un crecimiento rápido en estatura y peso. Un chico de 12 años puede crecer hasta 10 cm en un año, mientras que las chicas pueden crecer alrededor de 8 cm en el mismo período. Este crecimiento no solo afecta la apariencia física, sino también la autoimagen y la forma en que se relacionan con su cuerpo.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Características sexuales secundarias
              p.fs-18px En esta etapa, se desarrollan las características sexuales secundarias, como el inicio de la menstruación y el desarrollo de los senos en las chicas, y la voz más grave y el aumento del vello facial y corporal en los chicos.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Cambios emocionales y actitudinales
              p.fs-18px Los adolescentes también enfrentan fluctuaciones de humor y actitudes desafiantes. Según Mulsow (1998), estas actitudes reflejan una búsqueda de autoexploración y no deben interpretarse como un ataque personal. Proporcionar un entorno seguro y comprensivo les ayuda a expresar sus emociones y a construir su identidad.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Cambios en la masa muscular y composición corporal
              p.fs-18px En los chicos, la masa muscular aumenta debido a la producción de testosterona, lo cual mejora la fuerza y resistencia, especialmente si practican deportes. Las chicas, aunque presentan un aumento menor de masa muscular, también desarrollan mayor fuerza y capacidad física.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Desarrollo óseo
              p.fs-18px El desarrollo óseo también es fundamental en esta etapa: los huesos se vuelven más fuertes y densos. Un adolescente que practica deportes como el baloncesto puede fortalecer sus huesos gracias a la actividad física regular.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.fs-18px.text-bold Importancia de la nutrición
              p.fs-18px La nutrición desempeña un papel esencial durante la adolescencia. Los adolescentes necesitan una dieta equilibrada y rica en nutrientes como proteínas, calcio y hierro para apoyar su desarrollo. Una alimentación adecuada, que incluya frutas, verduras y proteínas magras, contribuye a un crecimiento saludable y a la adaptación a los cambios físicos de la etapa.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')

    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-ppal-azul-claro.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-46.svg', alt='Texto que describa la imagen')
          p.fs-18px.pe-xl-3.mb-0 La adolescencia es una etapa marcada por el <strong>crecimiento acelerado</strong>, la <strong>madurez física</strong>, y el desarrollo de una <strong>nueva autoimagen</strong>. Acompañar este proceso con comprensión, <strong>apoyo emocional y una nutrición adecuada</strong> es clave para ayudar a los adolescentes a enfrentar los desafíos de esta etapa.


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
