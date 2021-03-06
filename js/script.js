/* global monogatari */

/*function getLocation() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition);
} else {
var x = document.getElementById("demo");
x.innerHTML = "Geolocation is not supported by this browser.";
}
}

function showPosition(position) {
var x = document.getElementById("demo");
x.innerHTML = "Latitude: " + position.coords.latitude +
"<br>Longitude: " + position.coords.longitude;
}

function getLocation(positionProcessing) {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(positionProcessing);
return true;
} else {
return  false;
}
}*/

function getPicture() {
  // get a getPicture
  // confirm
  // do something
}

function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

/*monogatari.component ('game-screen').template (function() {
return " <h1>My Awesome Game</h1>antes<p id='demo'></p>despues";
});*/

// Define the messages used in the game.
monogatari.action("message").messages({
  Help: {
    title: "Help",
    subtitle: "Some useful Links",
    body: `
		<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
		<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`,
  },
});

// Define the notifications used in the game
monogatari.action("notification").notifications({
  Welcome: {
    title: "Welcome",
    body: "This is the Monogatari VN Engine1",
    icon: "",
  },
});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration("credits", {});

// Define the Particles JS Configurations used in the game
monogatari.action("particles").particles({});

// Define the images that will be available on your game's image gallery
monogatari.assets("gallery", {});

// Define the music used in the game.
monogatari.assets("music", {});

// Define the voice files used in the game.
monogatari.assets("voices", {});

// Define the sounds used in the game.
monogatari.assets("sounds", {});

// Define the videos used in the game.
monogatari.assets("videos", {});

// Define the images used in the game.
monogatari.assets("images", {
  escalinata2: "escalinata2.jpg",
  sanmartin2: "sanmartin2.jpg",
  torico3: "torico3.jpg",
});

// Define the backgrounds for each scene.
monogatari.assets("scenes", {
  panoramica: "panoramica1.jpg",
  panoramica2: "panoramica2.jpg",
  catedral1: "catedral1.jpg",
  catedral2: "catedral2.jpg",
  catedral3: "catedral3.jpg",
  escalinata1: "escalinata1.jpg",
  escalinata3: "escalinata3.jpg",
  escalinata4: "escalinata4.jpg",
  escalinata5: "escalinata5.jpg",
  mausoleo1: "mausoleo1.jpg",
  mausoleo2: "mausoleo2.jpg",
  salvador1: "salvador1.jpg",
  salvador2: "salvador2.jpg",
  sanmartin1: "sanmartin1.jpg",
  sanmartin3: "sanmartin3.jpg",
  torico1: "torico1.jpg",
  torico2: "torico2.jpg",
});

// Define the Characters
monogatari.characters({
  clara: {
    name: "clara",
    color: "#00bfff",
    directory: "clara", // Optional*
    sprites: {
      // Images Identifier for the 'Show' statement.
      normal1: "clara normal1.png",
      normal2: "clara normal2.png",
      lookright: "clara lookright.png",
    },
    default_expression: "face.resized.png", // Optional, side image to show every time the character speaks.
    expressions: {
      // Side images identifiers to show on dialogs
      normal1: "clara normal1.png",
      normal2: "clara normal2.png",
      lookright: "clara lookright.png",
    },
  },
  chomon: {
    name: "Segundo de Chom??n",
    color: "#00bfff",
    directory: "chomon", // Optional*
    sprites: {
      // Images Identifier for the 'Show' statement.
      normal1: "chomon1.png",
      normal2: "chomon2.png",
    },
    default_expression: "chomon3.png", // Optional, side image to show every time the character speaks.
    expressions: {
      // Side images identifiers to show on dialogs
      normal1: "chomon1.png",
      normal2: "chomon2.png",
    },
  },
  jose: {
    name: "jose",
    color: "#00bfff",
    directory: "jose", // Optional*
    sprites: {
      // Images Identifier for the 'Show' statement.
      normal: "jose full.png",
    },
    default_expression: "face.gif", // Optional, side image to show every time the character speaks.
    expressions: {
      // Side images identifiers to show on dialogs
      normal: "jose full.png",
    },
  },
  sylvie: {
    name: "sylvie",
    color: "#00bfff",
    directory: "sylvie", // Optional*
    sprites: {
      // Images Identifier for the 'Show' statement.
      giggle: "sylvie blue giggle.png",
      normal: "sylvie blue normal.png",
      smile: "sylvie blue smile.png",
      surprised: "sylvie blue surprised.png",
    },
    default_expression: "face.png", // Optional, side image to show every time the character speaks.
    expressions: {
      // Side images identifiers to show on dialogs
      giggle: "sylvie blue giggle.png",
      normal: "sylvie blue normal.png",
      smile: "sylvie blue smile.png",
      surprised: "sylvie blue surprised.png",
    },
  },
});
//https://makitweb.com/how-to-capture-picture-from-webcam-with-webcam-js/

//$_ready(()=>{

/*
// example of event generation
monogatari.script({"NorthArea":['waitevent northarea 100',
"Things that happen in the north area"]});
monogatari.script({"SouthArea":['waitevent southarea 100',
"Things that happen in the south area"]});
monogatari.script ({	'Start': ["Testing event based choice",
{'Choice': {
'Dialog': 'Choose destination',
'North Area': {
'Text': 'Lets go to the north',
'Do': 'jump NorthArea',
'Condition': function () {
// check something else, such as items the character happens
// or the status of the novel
return true;
}
},
'South Area': {
'Text': 'Lets go to the south',
'Do': 'jump SouthArea',
}
}},"end"]});

// events can be produced like this
setTimeout(function(){monogatari.sendEvent("northarea");alert("Hello!");},10000);
*/

// check google maps to obtain coordinates by right clicking anyplace in the map
// and choosing "what's here"
monogatari.geolocations({
  torico: { latitude: 40.3428712201, longitude: -1.1071107232 },
  catedral: { latitude: 40.3434725, longitude: -1.10762977806 },
  sanmartin: { latitude: 40.34411104, longitude: -1.10916616498 },
  salvador: { latitude: 40.342070164, longitude: -1.10798861773 },
  escalinata: { latitude: 40.341260569, longitude: -1.10847370305 },
  mausoleo: { latitude: 40.342515053, longitude: -1.10642294447 },
});

monogatari.customForms({
  caracterizacion1: {
    schema: {
      description: "??Qu?? opinas de la gu??a?",
      type: "object",
      properties: {
        genero: {
          type: "string",
          title: "G??nero",
          enum: ["Hombre", "Mujer", "No-binario"],
        },
        edad: {
          type: "number",
          title: "Edad",
        },
      },
    },
    options: {
      form: {
        buttons: {
          submit: {
            title: "Siguiente",
          },
        },
      },
    },
    view: "bootstrap-create",
  },
  caracterizacion2: {
    schema: {
      description: "??Qu?? opinas de la gu??a?",
      type: "object",
      properties: {
        conectarme: {
          type: "string",
          title: "Utilizo la tecnolog??a para conectarme a internet???",
          enum: [
            "Nunca",
            "Una vez al mes",
            "Un d??a a la semana",
            "Varias veces por semana",
            "Todos los d??as de la semana",
          ],
        },
        comunicarme: {
          type: "string",
          title: "Utilizo la tecnolog??a para comunicarme???",
          enum: [
            "Nunca",
            "Una vez al mes",
            "Un d??a a la semana",
            "Varias veces por semana",
            "Todos los d??as de la semana",
          ],
        },
        jugar: {
          type: "string",
          title: "Utilizo la tecnolog??a para jugar???",
          enum: [
            "Nunca",
            "Una vez al mes",
            "Un d??a a la semana",
            "Varias veces por semana",
            "Todos los d??as de la semana",
          ],
        },
      },
    },
    options: {
      form: {
        buttons: {
          submit: {
            title: "Siguiente",
          },
        },
      },
    },
    view: "bootstrap-create",
  },
  caracterizacion3: {
    schema: {
      description: "??Qu?? opinas de la gu??a?",
      type: "object",
      properties: {
        ver: {
          type: "string",
          title:
            "Mi capacidad para ver lo que aparece en la pantalla de un tel??fono m??vil es???",
          enum: ["Muy buena", "Buena", "Regular", "Mala", "Muy mala"],
        },
        escuchar: {
          type: "string",
          title:
            "Mi capacidad para escuchar el tel??fono m??vil a volumen medio es???",
          enum: ["Muy buena", "Buena", "Regular", "Mala", "Muy mala"],
        },
        manipular: {
          type: "string",
          title:
            "Mi capacidad para manipular un tel??fono m??vil con las manos es???",
          enum: ["Muy buena", "Buena", "Regular", "Mala", "Muy mala"],
        },
      },
    },
    options: {
      form: {
        buttons: {
          submit: {
            title: "Siguiente",
          },
        },
      },
    },
    view: "bootstrap-create",
  },
  caracterizacion4: {
    schema: {
      description: "??Qu?? opinas de la gu??a?",
      type: "object",
      properties: {
        mobilidad: {
          type: "string",
          title: "Mi capacidad para subir escaleras en la ciudad es...",
          enum: ["Muy buena", "Buena", "Regular", "Mala", "Muy mala"],
        },
        escuchar: {
          type: "string",
          title: "Mi capacidad para escuchar los sonidos de los sem??foros es???",
          enum: ["Muy buena", "Buena", "Regular", "Mala", "Muy mala"],
        },
        vista: {
          type: "string",
          title: "Mi capacidad para ver las se??ales en la calle es???",
          enum: ["Muy buena", "Buena", "Regular", "Mala", "Muy mala"],
        },
      },
    },
    options: {
      form: {
        buttons: {
          submit: {
            title: "Enviar",
          },
        },
      },
    },
    view: "bootstrap-create",
  },
  opinion1: {
    schema: {
      description: "??Hasta qu?? punto te llam?? la atenci??n la gu??a?",
      type: "object",
      properties: {
        atencion: {
          type: "string",
          title: "??Te llam?? la atenci??n la gu??a?",
          enum: [
            "Totalmente en desacuerdo",
            "En desacuerdo",
            "Neutral",
            "De acuerdo",
            "Totalmente de acuerdo",
          ],
        },
        concentrado: {
          type: "string",
          title: "??Sentiste que estabas concentrado en la gu??a?",
          enum: [
            "Totalmente en desacuerdo",
            "En desacuerdo",
            "Neutral",
            "De acuerdo",
            "Totalmente de acuerdo",
          ],
        },
      },
    },
    options: {
      form: {
        buttons: {
          submit: {
            title: "Siguiente",
          },
        },
      },
    },
    view: "bootstrap-create",
  },
  opinion2: {
    schema: {
      description: "??Qu?? opinas de la gu??a?",
      type: "object",
      properties: {
        consciente: {
          type: "string",
          title: "??Era consciente de s?? mismo en su entorno?",
          enum: [
            "Totalmente en desacuerdo",
            "En desacuerdo",
            "Neutral",
            "De acuerdo",
            "Totalmente de acuerdo",
          ],
        },
        experimentando: {
          type: "string",
          title:
            "??Sentiste que la gu??a era algo que estabas experimentando, en lugar de algo que estabas haciendo?",
          enum: [
            "Totalmente en desacuerdo",
            "En desacuerdo",
            "Neutral",
            "De acuerdo",
            "Totalmente de acuerdo",
          ],
        },
      },
    },
    options: {
      form: {
        buttons: {
          submit: {
            title: "Siguiente",
          },
        },
      },
    },
    view: "bootstrap-create",
  },
  opinion3: {
    schema: {
      description: "??Qu?? opinas de la gu??a?",
      type: "object",
      properties: {
        dejarlo: {
          type: "string",
          title:
            "??Hubo momentos durante la gu??a en los que solo quer??as dejarlo?",
          enum: [
            "Totalmente en desacuerdo",
            "En desacuerdo",
            "Neutral",
            "De acuerdo",
            "Totalmente de acuerdo",
          ],
        },
        interesado: {
          type: "string",
          title: "??Estaba interesado en ver c??mo la gu??a continuaba?",
          enum: [
            "Totalmente en desacuerdo",
            "En desacuerdo",
            "Neutral",
            "De acuerdo",
            "Totalmente de acuerdo",
          ],
        },
      },
    },
    options: {
      form: {
        buttons: {
          submit: {
            title: "Siguiente",
          },
        },
      },
    },
    view: "bootstrap-create",
  },
  opinion4: {
    schema: {
      description: "??Qu?? opinas de la gu??a?",
      type: "object",
      properties: {
        disfrutar: {
          type: "string",
          title: "??Disfrutaste mucho realiz??ndola?",
          enum: [
            "Totalmente en desacuerdo",
            "En desacuerdo",
            "Neutral",
            "De acuerdo",
            "Totalmente de acuerdo",
          ],
        },
        hacerotra: {
          type: "string",
          title: "??Te gustar??a volver a realizar la gu??a u otra parecida?",
          enum: [
            "Totalmente en desacuerdo",
            "En desacuerdo",
            "Neutral",
            "De acuerdo",
            "Totalmente de acuerdo",
          ],
        },
      },
    },
    options: {
      form: {
        buttons: {
          submit: {
            title: "Siguiente",
          },
        },
      },
    },
    view: "bootstrap-create",
  },
  opinion5: {
    schema: {
      description: "??Qu?? opinas de la gu??a?",
      type: "object",
      properties: {
        comment: {
          type: "string",
          title:
            "Com??ntanos que te ha parecido interesante o lo que m??s te ha gustado al realizar esta gu??a.",
        },
        comment: {
          type: "string",
          title:
            "Com??ntanos si has tenido alg??n problema en el uso de la gu??a o en la visualizaci??n del contenido.",
        },
      },
    },
    options: {
      form: {
        buttons: {
          submit: {
            title: "Enviar",
          },
        },
      },
    },
    view: "bootstrap-create",
  },
});

// using geolication with basic fail/success control
/*monogatari.script({"NorthArea":['geolocate berlin 1000 100000 1',
{'Conditional':{
'Condition':function(){return monogatari.checkAndResetIfLastActionFailed()},
'True':'nope, dude',
'False':'alright, you got there'
}
},"Things that happen in the north area"]});*/

// improved version to handle arrival to location or failure to do so within
// the timeout
monogatari.script({
  NorthArea: [
    {
      ConditionalGeolocation: {
        Condition: "geolocate berlin 1000 100000 0.001",
        False: "nope, dude",
        True: "alright, you got there",
      },
    },
    "Things that happen in the north area",
    "end",
  ],
});

monogatari.script({
  SouthArea: [
    "geolocate southarea 10000 100 1",
    "Things that happen in the south area",
  ],
});

monogatari.script({
  randommessage: [
    {
      Conditional: {
        Condition: function () {
          return randomInt(1, 4) + "";
        },
        1: "chomon Caminante no hay camino, se hace camino al andar, ??Ya est??s tardando!",
        2: "chomon No me digas que tienes cansancio, si apareciera un toro, ??ver??as c??mo corres!",
        3: "chomon ??Sab??as que andar es un ejercicio muy saludable? ??Andando!",
        4: "chomon Una vez tuve una piedra de mascota. Se mov??a m??s que t??.",
      },
    },
    "return",
  ],
});

function sitioaux(monogatari, etiqueta, sitio) {
  elemento = {};
  elemento[etiqueta] = [
    "call randommessage",
    "chomon Viajando al destino, toca o haz click en la pantalla para continuar",
    {
      ConditionalGeolocation: {
        Condition: "geolocate " + sitio + " 0.5 60 0.01",
        False: "call " + etiqueta,
        True: "ol??",
      },
    },
    "return",
  ];
  monogatari.script(elemento);
}

function sitio(monogatari, etiqueta, sitio) {
  elemento = {};
  sitioaux(monogatari, etiqueta + "aux", sitio);
  elemento[etiqueta] = [
    "chomon Viajando al destino, toca o haz click en la pantalla para continuar",
    {
      ConditionalGeolocation: {
        Condition: "geolocate " + sitio + " 0.5 60 0.01",
        False: "call " + etiqueta + "aux",
        True: "ol??",
      },
    },
    "return",
  ];
  monogatari.script(elemento);
}

sitio(monogatari, "primersitio", "torico");
sitio(monogatari, "segundositio", "catedral");
sitio(monogatari, "tercersitio", "sanmartin");
sitio(monogatari, "cuartositio", "salvador");
sitio(monogatari, "quintositio", "escalinata");
sitio(monogatari, "sextositio", "mausoleo");

function final(monogatari, etiqueta) {
  elemento = {};
  elemento[etiqueta] = [
    "Ya no hay nada m??s que decir. Puedes descargar otras gu??as o recargar para empezar de cero",
    "call " + etiqueta,
  ];
  monogatari.script(elemento);
}

final(monogatari, "finalhistoria");

function encuesta(monogatari, etiqueta) {
  elemento = {};
  elemento[etiqueta] = [
    "customform " + etiqueta,
    function () {
      monogatari.setContentToSend(monogatari.getFormResult(etiqueta));
      return true;
    },
    "sendaction geoteruel " + etiqueta,
    "return",
  ];
  monogatari.script(elemento);
}

encuesta(monogatari, "caracterizacion1");
encuesta(monogatari, "caracterizacion2");
encuesta(monogatari, "caracterizacion3");
encuesta(monogatari, "caracterizacion4");

encuesta(monogatari, "opinion1");
encuesta(monogatari, "opinion2");
encuesta(monogatari, "opinion3");
encuesta(monogatari, "opinion4");
encuesta(monogatari, "opinion5");

monogatari.script({
  Start: [
    // _Introducci??n
    "show scene panoramica",
    "show character chomon normal2 at right with fadeIn end-fadeOut",
    "Hola soy Segundo de Chom??n y voy a contarte la historia del casco antiguo de Teruel",
    "Para ello vamos a visitar varios lugares emblem??ticos en la historia de Teruel.",
    "Pero antes, me gustar??a que rellenases un cuestionario para saber un poco m??s de t??.",
    "Tienes que saber que no se van a recoger tus datos personales y que lo que vas a ver a continuaci??n tiene un proposito de investigaci??n.",
    "sendaction geoteruel inicio_encuesta",
    "hide character chomon",
    "call caracterizacion1",
    "call caracterizacion2",
    "call caracterizacion3",
    "call caracterizacion4",
    "show character chomon lookright at left with fadeIn end-fadeOut",
    "Para comenzar necesito que te dirijas al siguiente destino",
    "sendaction geoteruel yendo_torico",
    "call primersitio",
    "sendaction geoteruel llegado_torico",

    // _Torico
    "show scene torico1",
    "chomon La antigua plaza mayor fue siempre el centro neur??lgico de la ciudad.",
    "chomon Su morfolog??a responde al terreno donde est?? ubicada. Su forma tiene que ver con las pendientes naturales por donde discurr??a el agua de lluvia",
    "chomon En el a??o 1858 tiene lugar un hecho significativo.",
    "chomon Se levanta la nueva fuente del Torico situada en una zona m??s c??ntrica que no entorpec??a el tr??nsito de los carros por la plaza.",
    "show scene torico2",
    "chomon Es una fuente circular con una columna de piedra anillada en la que se ven incrustadas cuatro cabezas de toro por las que mana el agua.",
    "show image torico3 center with fadeIn",
    "chomon En la parte alta del pedestal, a siete metros de altura, descansa la figura de El Torico.",
    "chomon Es el icono m??s representativo de Teruel.",
    "chomon Esta peque??a escultura de bronce fundido es maciza y pesa nada menos que 54,5 kilos.",
    "chomon Se emplaza sobre una base rectangular de piedra.",
    "chomon Tiene una altura de 37 cent??metros.",
    "hide image torico3 with fadeOut",
    "show scene torico1",
    "chomon Desde el a??o 1858 en que fue colocado s??lo dos veces ha sido bajado de su emplazamiento.",
    "chomon La primera vez los propios vecinos lo quitaron para guardarlo en un lugar seguro y protegerlo durante la Guerra Civil.",
    "chomon La segunda vez en 2003 se volvi?? a bajar para una restauraci??n.",
    // _Catedral
    "chomon El siguiente destino que vamos a visitar es la Catedral.",
    "sendaction geoteruel yendo_catedral",
    "call segundositio",
    "sendaction geoteruel llegado_catedral",
    "show scene catedral1",
    "chomon La Catedral de Teruel tiene su origen en la iglesia de Santa Mar??a de Mediavilla, que comenz?? a edificarse en estilo rom??nico en 1171 y se concluy?? con la construcci??n de la torre mud??jar en 1257.",
    "chomon En la segunda mitad del siglo XIII, se reestructura la antigua obra rom??nica y se le a??aden tres naves mud??jares de mamposter??a y ladrillo, que mejoran y elevan la estructura rom??nica del siglo XII.",
    "chomon En el mismo estilo g??tico-mud??jar, se van realizando cambios en toda la iglesia.",
    "chomon Ya en estilo plateresco-mud??jar, fue construido en 1538 el cimborrio de la nave central, obra de Mart??n de Montalb??n.",
    "show scene catedral3",
    "chomon M??s tarde, en 1587, con la creaci??n de la di??cesis de Teruel, fue promovida a Catedral y consagrada como tal.",
    "chomon La torre, techumbre y cimborrio de la Catedral de Teruel fueron declarados Patrimonio de la Humanidad por la Unesco en 1986.",
    // _Torre de San Mart??n
    "chomon A continuaci??n, te mostrar?? dos torres con una historia conectada, acomp????ame.",
    "sendaction geoteruel yendo_sanmartin",
    "call tercersitio",
    "sendaction geoteruel llegado_sanmartin",
    "show scene sanmartin1",
    "chomon La Torre de San Mart??n se edific?? entre 1315 y 1316.",
    "chomon Est?? adosada a la iglesia de San Mart??n, construida en 1706 y que sustituy?? a la anterior mud??jar.",
    "chomon A los pies de esta torre discurre, la Cuesta de la Andaquilla, testigo de una de las escenas de la Historia de los Amantes.",
    "chomon Es ejemplo de la tipolog??a de torre alminar almohade.",
    "chomon Siguiendo esta estructura posee dos torres conc??ntricas, separadas casi un metro, entre las que se desarrollan pasillos y escaleras, que llevan a un campanario, cubiertos por b??veda de ladrillo.",
    "chomon De planta cuadrada, da paso a una calle bajo su b??veda de ca????n apuntado.",
    "show scene sanmartin3",
    "chomon El exterior, de ladrillo, aparece decorado con cer??mica vidriada en verde y blanco y pa??os horizontales de distintas alturas. Presenta un gran repertorio decorativo.",
    "chomon El motivo decorativo que predomina es el de estrellas de 8 puntas blancas y con orla verde.",
    "chomon Como en otros lugares de esta provincia esta torre tiene una leyenda sobre su construcci??n que, como no pod??a ser menos, es de amor.",
    // _Torre el Salvador
    "chomon Pero te la contar?? a continuaci??n, cuando vayamos a ver la torre de El Salvador.",
    "sendaction geoteruel yendo_salvador",
    "call cuartositio",
    "sendaction geoteruel llegado_salvador",
    "show scene salvador1",
    "chomon All?? por el siglo XIV los alarifes mud??jares, Omar y Abdal??, constructores de las torres de San Mart??n y El Salvador respectivamente, estaban de paseo por la calle, de pronto, los dos amigos vieron una hermosa joven de la que ambos quedaron prendados, Zoraida se llamaba.",
    "chomon Su amistad se convirti?? en odio, y como ninguno quer??a perder a su amada, fueron por separado a visitar al padre. ??ste, les dio a ambos la misma respuesta: la mano de Zoraida ser?? para el primero que acabe su torre.",
    "chomon Las obras comenzaron a los pocos d??as, sin apenas descansos.",
    "chomon Cierto d??a, Omar, arquitecto de la torre de San Mart??n, anunci?? que su construcci??n hab??a finalizado.",
    "chomon Los habitantes de Teruel se reunieron en torno a ella, y, conforme iban retirando los andamios que cubr??an la obra, las gentes se quedaban maravilladas y su arquitecto se mostraba cada vez m??s orgulloso.",
    "chomon Sin embargo, cuando quedo totalmente descubierta, Omar solt?? un grito de horror. Algo hab??a salido mal, su torre estaba ligeramente torcida.",
    "show scene salvador2",
    "chomon Desesperado subi?? a lo m??s alto de la torre y ante las gentes de la ciudad se arroj?? al vac??o.",
    "chomon Unas semanas despu??s, Abdal?? finalizaba su torre, la de El Salvador.",
    "chomon Cuando el andamio fue retirado y los ciudadanos pudieron contemplar la nueva obra, se quedaron totalmente sorprendidos, las dos torres, salvo algunos detalles, eran muy parecidas.",
    "chomon Los motivos decorativos son muy parecidos a los que hemos visto antes en la torre de San Mart??n.",
    "show image sanmartin2 center with fadeIn",
    "chomon La torre es usada como campanario de la iglesia a la que est?? adosada, la Iglesia del Salvador.",
    "chomon Alberga en su interior el Centro de Interpretaci??n de la Arquitectura Mud??jar Turolense.",
    "hide image sanmartin2 with fadeOut",
    "chomon La Torre El Salvador junto con la torre de San Mart??n, en 1986 fueron declarados Patrimonio de la Humanidad por la Unesco.",
    // _Escalinata
    "chomon Cerca de esta torre, vamos a ver uno de los monumentos m??s emblem??ticos de Teruel.",
    "sendaction geoteruel yendo_escalinata",
    "call quintositio",
    "sendaction geoteruel llegado_escalinata",
    "show scene escalinata4",
    "chomon La construcci??n de la escalinata se inspir?? en elementos intr??nsecos a la ciudad como la arquitectura mud??jar, el g??tico y el modernismo.",
    "chomon Es obra del ingeniero turolense Jos?? Tor??n de la Rad.",
    "chomon Se construy?? a comienzo de los a??os veinte, para salvar el desnivel existente entre la estaci??n de ferrocarril y el Casco Hist??rico de la ciudad.",
    "chomon Por Decreto del Gobierno de Arag??n, la Escalinata de Teruel fue declarada Bien de Inter??s Cultural, en la categor??a de Monumento.",
    "show scene escalinata1",
    "chomon La Escalinata es en definitiva la imagen resumida de Teruel para el viajero que llegaba a la ciudad y en la actualidad constituye la obra clave del neomud??jar turolense.",
    "chomon Su desarrollo es perpendicular al Paseo del ??valo y salva los 26 metros de desnivel existente.",
    "chomon El recorrido de la Escalinata se estructura en tres partes bien diferenciadas, articuladas entre s?? por dos peque??as plazas.",
    "show image escalinata2 center with fadeIn",
    "chomon Situado en el frontal de la placeta principal, entre el escudo de la ciudad y la fuente se encuentra el altorrelieve de Los Amantes de Teruel obra del escultor segoviano Aniceto Marinas.",
    "show scene escalinata3",
    "hide image escalinata2 with fadeOut",
    "chomon Tras un primer tramo recto, y m??s o menos a la mitad de su altura, se divide en dos tramos curvos hasta alcanzar la altura m??xima, llegando al Paseo del ??valo",
    "chomon En total habremos subido 140 escalones de una forma suave y agradable.",
    //_ Mausoleo
    "chomon Para conocer m??s de la historia de los amantes, vamos a dirigirnos al sitio perfecto, acomp????ame a este ??ltimo destino.",
    "sendaction geoteruel yendo_mausoleo",
    "call sextositio",
    "sendaction geoteruel llegado_mausoleo",
    "show scene mausoleo1",
    "chomon En septiembre de 2005 se inaugura el actual Mausoleo de los Amantes. ",
    "chomon El proyecto del edificio, dise??ado por el arquitecto Alejandro Ca??ada, dispone de diferentes salas expositivas que pretenden acercar la Historia de los Amantes al visitante.",
    "chomon Desde el punto de vista conceptual, la organizaci??n del recorrido expositivo se articula en torno a cuatro sectores:",
    "chomon En el primer sector se explican las caracter??sticas sociales, pol??ticas y culturales que rodearon los acontecimientos en el Teruel de principios del siglo XIII.",
    "chomon En el segundo sector se relatan los hechos que ocurrieron en 1217 en Teruel entre Juan Diego Mart??nez de Marcilla e Isabel de Segura. Tambi??n se habla del debate hist??rico que este relato ha generado a trav??s de los siglos.",
    "chomon El tercer sector est?? destinado a explicar la influencia de los Amantes en el mundo de las artes a lo largo de la historia.",
    "show scene mausoleo2",
    "chomon Por ??ltimo, en el cuarto sector se encuentra el Mausoleo de los Amantes, obra del escultor Juan de ??valo.",
    "chomon En esta zona y a trav??s de una serie de paneles se explica c??mo se llev?? a cabo el hallazgo de las momias, as?? como el emplazamiento que ha tenido a lo largo del tiempo.",

    //_Final
    "show scene panoramica2",
    "show character chomon normal2 at right with fadeIn end-fadeOut",
    "Este es el final del recorrido",
    "Espero que te haya resultado interesante conocer m??s de la historia de Teruel",
    "Ahora, te pedir??a que rellenases un peque??o cuestionario de satisfacci??n para ayudarnos a mejorar la gu??a.",
    "sendaction geoteruel inicio_encuesta",
    "??Hasta pronto!",
    "show scene panoramica2",
    "call opinion1",
    "call opinion2",
    "call opinion3",
    "call opinion4",
    "call opinion5",
    "call finalhistoria",
    "end",
  ],
});
