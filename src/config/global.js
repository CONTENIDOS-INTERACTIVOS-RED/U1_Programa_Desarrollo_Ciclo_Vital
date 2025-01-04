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
        titulo: 'Etapas del crecimiento físico en la infancia y adolescencia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2.',
        titulo: 'Etapas del crecimiento físico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Infancia temprana (0-2 años)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Infancia media (2-6 años)',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Infancia tardía (6-12 años)',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Adolescente (12 y 18 Años)',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3.',
        titulo: 'Diferenciación entre personas naturales y jurídicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Infancia temprana (0-2 años)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Infancia media (2-6 años)',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Infancia tardía (6-12 años)',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Adolescencia',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4.',
        titulo: 'Cambios hormonales y sexuales en la pubertad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Desarrollo de los órganos sexuales primarios y secundarios',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        unidad: '',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividadDidactica',
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
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip ',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Adolescents. (2023). GADE: Revista Científica, 3(4). Edición especial. McGraw-Hill. ISSN: 2745-2891.',
    },
    {
      referencia:
        'Anaya, N. C. (2004). Diccionario de psicología. Ecoe Ediciones.',
    },
    {
      referencia:
        'Blanco, M. C. C. (2019). Desarrollo de la adolescencia y la juventud.',
    },
    {
      referencia:
        'Brugué, M. S., Sànchez, C. R., & Sellabona, E. S. (2008). El desarrollo de los niños, paso a paso (Vol. 121). Editorial UOC.',
    },
    {
      referencia:
        'Coronado, S. R. V. (2023). Desarrollo motor: Desde una perspectiva integral. GADE: Revista Científica, 3(4), 299-309.',
    },
    {
      referencia:
        'Gallahue, D. L., & Ozmun, J. C. (2006). Understanding motor development: Infants, children, adolescents, adults. McGraw-Hill.',
    },
    {
      referencia:
        'Gallahue, D. L., & Ozmun, J. C. (2012). Understanding motor development: Infants, children, adults. McGraw-Hill.',
    },
    {
      referencia:
        'Güemes-Hidalgo, M., Ceñal, M., & Hidalgo, M. (2017). Pubertad y adolescencia. Revista de Formación Continuada de la Sociedad Española de Medicina de la Adolescencia, 5(1), 7-22.',
    },
    {
      referencia:
        'Hyde, J. H., & DeLamater, M. J. (2006). Sexualidad humana (9ª ed.). McGraw-Hill.',
    },
    {
      referencia:
        'Iverson, J. M., & Thelen, E. (1999). Hand, mouth, and brain: The dynamic emergence of speech and gesture. Journal of Consciousness Studies, 6(11-12), 19-40.',
    },
    {
      referencia:
        'Johnson, A., & Harris, P. L. (2020). Developing social understanding. In R. J. Sternberg & J. C. Kaufman (Eds.), The Cambridge Handbook of Intelligence (2nd ed., pp. 443-468). Cambridge University Press.',
    },
    {
      referencia:
        'Lizaso Elgarresta, I., Acha Morcillo, J., & Arruabarrena, L. R. (2018). Desarrollo biológico y cognitivo en el ciclo vital. Difusora Larousse - Ediciones Pirámide. https://elibro.net/es/ereader/tecnologicadeloriente/123058?page=1',
    },
    {
      referencia:
        'Mateo, C. M., & Sáez, S. C. (2010). Desarrollo físico y psicomotor en la etapa infantil. Tolosa, San Sebastián.',
    },
    {
      referencia:
        'Mulsow, G. (1998). Desarrollo humano: ciclo vital y educación. Educación, 7(13), 61-73.',
    },
    {
      referencia:
        'Papalia, D. E., Feldman, R. D., & Martorell, G. (2012). Desarrollo humano. McGraw-Hill.',
    },
    {
      referencia:
        'Piaget, J. (1967). Development and learning. Journal of Research in Science Teaching, 5(3), 219-226.',
    },
    {
      referencia:
        'Ramos, M., & Ramos, J. (2021). Calendario del desarrollo infantil.',
    },
    {
      referencia:
        'Smith, L. B., Thelen, E., & Titzer, R. (2018). Development as a dynamic system. Trends in Sciences, 22(3), 259-262.',
    },
  ],
  glosario: [
    {
      termino: 'Cambios físicos',
      significado: 'La pubertad, el crecimiento, la maduración sexual.',
    },
    {
      termino: 'Desarrollo cognitivo',
      significado:
        'El pensamiento, el aprendizaje, la resolución de problemas.',
    },
    {
      termino: 'Desarrollo socioemocional',
      significado:
        'Las relaciones interpersonales, la identidad, la autoestima.',
    },
    {
      termino: 'Estrógenos',
      significado:
        'Hormonas sexuales femeninas que influyen en el desarrollo de los caracteres sexuales secundarios, como el crecimiento de los senos y el ensanchamiento de las caderas.',
    },
    {
      termino: 'Eyaculación',
      significado: 'Expulsión de semen durante el orgasmo masculino.',
    },
    {
      termino: 'Factor',
      significado:
        'Cualquier elemento o condición que influye en el desarrollo de una persona. Puede ser biológico (genes, hormonas), psicológico (personalidad, emociones), social (familia, amigos) o ambiental (educación, cultura).',
    },
    {
      termino: 'Hito',
      significado:
        'Un punto de referencia importante en el desarrollo de una persona, que marca un avance significativo en una determinada área (cognitiva, social, emocional o física). Por ejemplo, aprender a caminar, hablar o alcanzar la pubertad.',
    },
    {
      termino: 'Hormonas',
      significado:
        'Sustancias químicas producidas por el cuerpo que regulan diversos procesos fisiológicos, incluyendo el crecimiento, el desarrollo sexual y el metabolismo.',
    },
    {
      termino: 'Lateralidad',
      significado:
        'Preferencia por usar una parte del cuerpo (mano, pie, ojo) más que otra. La lateralidad dominante se establece generalmente en la infancia.',
    },
    {
      termino: 'Menstruación',
      significado:
        'Proceso fisiológico femenino que consiste en el sangrado periódico del útero. Es una señal de madurez sexual.',
    },
    {
      termino: 'Motricidad',
      significado:
        'Capacidad de realizar movimientos coordinados y precisos. Se divide en: motricidad fina: movimientos pequeños y precisos, como escribir o abotonarse una camisa. Motricidad gruesa: Movimientos amplios del cuerpo, como correr o saltar.',
    },
    {
      termino: 'Psicomotricidad',
      significado:
        'Relación entre los procesos mentales y los movimientos corporales. Involucra aspectos cognitivos, emocionales y motores.',
    },
    {
      termino: 'Sexualidad',
      significado:
        'Dimensión integral del ser humano que abarca aspectos biológicos, psicológicos y sociales. Incluye el deseo sexual, la identidad de género, las relaciones interpersonales y la reproducción.',
    },
    {
      termino: 'Testosterona',
      significado:
        'Hormona sexual masculina que promueve el desarrollo de los caracteres sexuales secundarios, como el crecimiento de la barba y el aumento de la masa muscular.',
    },
  ],
  complementario: [
    {
      tema: 'Desarrollo físico y psicomotor',
      referencia:
        'Sánchez, F. J., Campos, A. M., Vega, M., Cortés, O., Esparza, M. J., Galbe, J., Gallego, A., García, J., Pallás, C. R., Rando, Á., San Miguel, M. J., Colomer, J., & Mengual, J. M. (2019). Promoción de la actividad física en la infancia y la adolescencia (parte 1). Pediatría Atención Primaria, 21(83), 279-291.',
      tipo: 'Artículo',
      link:
        'http://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S1139-76322019000300019&lng=es&tlng=es',
    },
    {
      tema: 'Desarrollo infantil',
      referencia:
        'Maganto, C., & Cruz, S. (s.f.). Desarrollo físico y psicomotor en la etapa infantil. Facultad de Psicología, Universidad del País Vasco.',
      tipo: 'PDF',
      link:
        'https://isfd112-bue.infd.edu.ar/sitio/wp-content/uploads/2020/07/APUNTE-DESARROLLO-MOTOR-LIBRO-1.pdf',
    },
    {
      tema: 'Pubertad y era digital',
      referencia:
        'Ballagas Lorenzo, Y., Conde Castro, R. C., Cuba Ortega, S., & Reyes Ortiz, L. D. (s.f.). La pubertad en la era digital. Universidad "Martha Abreu" de las Villas.',
      tipo: 'Artículo',
      link: 'https://acupsi.org/la-pubertad-en-la-era-digital/',
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
