export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1.',
        titulo: 'Conceptos y fuentes del Derecho Civil',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2.',
        titulo: 'Fuentes del Derecho Civil',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3.',
        titulo: 'Diferenciación entre personas naturales y jurídicas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/Programa_Derecho_Civil_Unidad_1.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/Anexo_Tipos_de_fuentes.pdf',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Chavarro Cadena, J. E. (Dir.) & Chavarro Moreno, C. L. (Il.). (2020). Código Civil: (3 ed.). Grupo Editorial Nueva Legislación SAS.',
    },
    {
      referencia:
        'Chinchilla, C (2019). El rol del Derecho Romano en la formación del civilista: el caso del Derecho contractual. Revista estudiantil de Derecho Privado, 2.',
    },
    {
      referencia: 'Corte Constitucional',
    },
    {
      referencia:
        'Hinestrosa, F. (2021). El desarrollo doctrinario del derecho civil. Revista De Derecho Privado, 41, 7-17',
    },
    {
      referencia: 'Corte Constitucional (2018) T-241/2018',
      link:
        'https://www.corteconstitucional.gov.co/relatoria/2018/t-241-18.htm',
    },
    {
      referencia:
        'Ortiz Monsalve, A. & Valencia Zea, A. (2021). Derecho civil: parte general y personas Tomo I. Editorial Temis.',
    },
    {
      referencia:
        'Medina Pabón Juan Enrique, & Bibliotecaebook. (n.d.). Derecho Civil. Aproximación al Derecho. Derecho de personas 5 edición. Derecho Civil. Aproximación Al Derecho. Derecho de Personas 5 Edición',
    },
  ],
  glosario: [
    {
      termino: 'Capacidad de obrar',
      significado:
        'Es la aptitud de una persona para realizar válidamente actos jurídicos por sí misma. Está relacionada con la posibilidad de ejercer derechos y cumplir obligaciones de forma autónoma. Generalmente se alcanza con la mayoría de edad.',
    },
    {
      termino: 'Capacidad jurídica',
      significado:
        'Es la aptitud general para ser titular de derechos y obligaciones desde el nacimiento hasta la muerte. A diferencia de la capacidad de obrar, toda persona natural la posee desde que nace, o en el caso de las personas jurídicas, se posee desde su creación.',
    },
    {
      termino: 'Código Civil',
      significado:
        'Es el conjunto de normas jurídicas que regulan las relaciones privadas entre las personas, abarcando aspectos como los derechos y deberes de los ciudadanos, la propiedad, los contratos, las obligaciones, las sucesiones, entre otros.',
    },
    {
      termino: 'Derecho de Bienes y obligaciones',
      significado:
        'Es la rama del derecho civil que se ocupa de regular la adquisición, uso, disfrute y disposición de los bienes, así como las relaciones jurídicas que generan obligaciones entre las personas, como contratos y deudas.',
    },
    {
      termino: 'Derecho de Familia',
      significado:
        'Es el conjunto de normas que regula las relaciones jurídicas entre los miembros de una familia, como el matrimonio, la filiación, la patria potestad, la tutela, el divorcio, entre otros aspectos relacionados con la vida familiar.',
    },
    {
      termino: 'Derecho de Personas',
      significado:
        'Es la parte del derecho civil que se encarga de regular el estado civil, la capacidad, los derechos fundamentales y la personalidad jurídica de los individuos.',
    },
    {
      termino: 'Derecho Privado',
      significado:
        'Es la rama del derecho que regula las relaciones entre particulares, es decir, entre personas naturales o jurídicas en su calidad de sujetos de derechos privados. Incluye el derecho civil y el derecho mercantil.',
    },
    {
      termino: 'Derecho de Sucesiones',
      significado:
        'Es la rama del derecho civil que regula la transmisión de los bienes, derechos y obligaciones de una persona fallecida a sus herederos o legatarios.',
    },
    {
      termino: 'Estado civil',
      significado:
        'Es la situación particular de una persona en cuanto a su posición dentro del derecho de familia. El estado civil incluye categorías como soltero, casado, viudo o divorciado.',
    },
    {
      termino: 'Fuentes del derecho',
      significado:
        'Son los orígenes o los mecanismos a través de los cuales se crean, modifican o extinguen las normas jurídicas. Entre las principales fuentes del derecho están la ley, la costumbre, la jurisprudencia y los principios generales del derecho.',
    },
    {
      termino: 'Persona Jurídica',
      significado:
        'Ente de creación legal o ficticio capaz de tener derechos y obligaciones, que actúa como una entidad distinta de las personas que la integran.',
    },
    {
      termino: 'Persona Natural',
      significado:
        'Es el ser humano considerado individualmente como sujeto de derechos y obligaciones desde su nacimiento hasta su muerte.',
    },
    {
      termino: 'MoodBoard',
      significado:
        'su traducción literal es mapa de inspiración y aunque su uso está muy asociado al ámbito de la decoración de interiores o la moda, <br/>realmente se utiliza en entornos creativos muy diversos, desde el diseño de productos o servicios al audiovisual o el diseño gráfico.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
