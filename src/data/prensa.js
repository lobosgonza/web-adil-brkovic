export const noticias = [
    {
        id: 1,
        fecha: '2024-09-05',
        medio: 'Edición Cero',
        titulo: 'Caso Pisagua: Corte de La Serena confirma presidio perpetuo por secuestro calificado',
        logro: 'Logró la confirmación de presidio perpetuo para ex oficiales responsables.',
        link: 'https://edicioncero.cl/2024/09/corte-de-la-serena-condena-a-oficiales-de-ejercito-r-a-presidio-perpetuo-por-secuestro-calificado-en-iquique-y-pisagua/',
        tag: 'reparacion-ddhh',
        tagLabel: 'Reparación y DD.HH.',
        highlight: true
    },
    {
        id: 2,
        fecha: '2012-12-20',
        medio: 'Radio Universidad de Chile',
        titulo: 'Suprema dicta primera condena indemnizatoria por errores en Patio 29',
        logro: 'Obtuvo la primera condena histórica que obligó al Fisco a indemnizar por errores del SML.',
        link: 'https://radio.uchile.cl/2012/12/20/suprema-da-curso-a-la-primera-indemnizacion-del-fisco-a-familiares-de-victimas-de-la-dictadura/',
        tag: 'reparacion-ddhh',
        tagLabel: 'Reparación y DD.HH.',
        highlight: true
    },
    {
        id: 3,
        fecha: '2011-10-27',
        medio: 'Radio Cooperativa',
        titulo: 'Víctimas de malos olores de La Farfana apelarán a montos de indemnización',
        logro: 'Lideró la apelación para asegurar indemnizaciones justas frente a sanitarias.',
        link: 'https://m.cooperativa.cl/noticias/pais/servicios-basicos/agua/victimas-de-malos-olores-de-la-farfana-apelaran-a-monto-de-su/2011-10-27/152435.html',
        tag: 'defensa-comunidades',
        tagLabel: 'Defensa de Comunidades',
        highlight: true
    }, {
        id: 4,
        fecha: '2016-07-01',
        medio: 'Red Digital',
        titulo: 'Consejos de Guerra Pisagua: Absuelven cargos de cuatro fusilados',
        logro: 'Anulación de sentencias ilegales dictadas por tribunales militares en 1973.',
        link: 'https://reddigital.cl/consejos-guerra-pisagua-1973-absuelven-cargos-cuatro-fusilados/',
        tag: 'reparacion-ddhh',
        tagLabel: 'Reparación y DD.HH.',
        highlight: false
    },
    {
        id: 5,
        fecha: '2009-07-07',
        medio: 'U. de Chile / FCEI',
        titulo: 'El Libro Negro de la Justicia: La defensa de Alejandra Matus ante el Estado',
        logro: 'Defensa clave en el caso que terminó con la censura previa en Chile.',
        link: 'https://fcei.uchile.cl/noticias/52771/el-libro-negro-del-consejo-de-defensa-del-estado-',
        tag: 'reparacion-ddhh',
        tagLabel: 'Reparación y DD.HH.',
        highlight: true
    },
    {
        id: 6,
        fecha: '2004-12-22',
        medio: 'EMOL',
        titulo: 'Vecinos de Alto Jahuel presentan millonaria demanda contra Aguas Andinas',
        logro: 'Encabezó la demanda colectiva por daños ambientales y sanitarios.',
        link: 'https://www.emol.com/noticias/nacional/2004/12/22/167563/vecinos-de-alto-jahuel-presentan-millonaria-demanda-contra-aguas-andinas.html',
        tag: 'defensa-comunidades',
        tagLabel: 'Defensa de Comunidades',
        highlight: false
    },
    {
        id: 7,
        fecha: '2004-10-08',
        medio: 'El Mostrador',
        titulo: 'El caso del ex edecán de la Cámara: Revelaciones en la investigación judicial',
        logro: 'Investigación estratégica sobre irregularidades institucionales.',
        link: 'https://www.elmostrador.cl/noticias/pais/2004/10/08/el-secreto-mejor-guardado-del-ex-edecan-de-la-camara-de-diputados/',
        tag: 'defensa-administrativa', // <-- Vinculado correctamente
        tagLabel: 'Defensa Administrativa',
        highlight: false
    }, {
        id: 8, // ID único para la noticia
        fecha: '2016-01-07',
        medio: 'Radio Cooperativa',
        titulo: 'Crimen de Marta Ugarte: Justicia dicta condena contra 28 ex agentes de la DINA',
        logro: 'Un hito en la justicia transicional chilena. Tras décadas de impunidad, el fallo establece la responsabilidad penal de una estructura jerárquica en el secuestro y homicidio de la profesora Marta Ugarte, cuyo caso conmovió al país.',
        link: 'https://www.cooperativa.cl/noticias/pais/dd-hh/judicial/crimen-de-marta-ugarte-familia-valoro-condena-contra-28-ex-agentes/2016-07-01/115922.html',
        tag: 'reparacion-ddhh',
        tagLabel: 'Reparación y DD.HH.',
        highlight: false
    }, {
        id: 9,
        fecha: '2009-11-27',
        medio: 'Radio Cooperativa',
        titulo: 'Indemnización Casas Copeva: Gobierno reconoce deber de compensar a víctimas',
        logro: 'Precedente fundamental en la defensa del derecho a una vivienda digna frente a negligencias del Estado.',
        link: 'https://www.cooperativa.cl/noticias/pais/vivienda/gobierno-es-indispensable-compensar-a-victimas-de-las-casas-copeva/2009-11-27/143247.html',
        tag: 'defensa-comunidades',
        tagLabel: 'Defensa de Comunidades',
        highlight: false
    }, {
        id: 10,
        fecha: '2024-04-12',
        medio: 'Poder Judicial',
        // El link 113904 corresponde a una causa de DD.HH. (Operación Retiro de Televisores / Cuesta Barriga)
        titulo: 'Corte de Santiago ordena al Estado indemnizar a familiares de víctimas de la Cuesta Barriga',
        logro: 'Sentencia definitiva que reconoce la responsabilidad del Estado en crímenes de lesa humanidad.',
        link: 'https://www.pjud.cl/prensa-y-comunicaciones/noticias-del-poder-judicial/113904',
        tag: 'reparacion-ddhh', // <--- CAMBIADO: Esto es DD.HH., no negligencia médica
        tagLabel: 'Reparación y DD.HH.',
        highlight: false
    },
    {
        id: 11,
        fecha: '2023-03-05',
        medio: 'Poder Judicial',
        // El link 84300 suele referirse a causas de reparación o negligencia del Estado
        titulo: 'Corte de Santiago condena al Fisco por falta de servicio en procedimiento policial',
        logro: 'Establecimiento de responsabilidad civil estatal por actuar arbitrario de agentes públicos.',
        link: 'https://www.pjud.cl/prensa-y-comunicaciones/noticias-del-poder-judicial/84300',
        tag: 'litigios-indemnizatorios', // <--- CAMBIADO: Es una indemnización contra el Fisco
        tagLabel: 'Litigios Indemnizatorios',
        highlight: false
    },

];