// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te regalo mis ojos si un día no puedes ver más allá del sol", time: 22 }, //
  { text: "Te regalo mi tiempo y sé que de todas no hay mejor inversión", time: 27 }, //
  { text: "Tú llegaste a mi vida y sacaste dentro 'e mí mi mejor versión", time: 32 }, //
  { text: "No tengo miedo de decir al mundo que te quiero", time: 36.30 }, //
  { text: "Todo lo que yo vi romperse, ella con un soplo vuelve a arreglar", time: 41.70 }, //
  { text: "Tú llegaste a mi vida y yo que ya no brillaba he vuelto a brillar", time: 47 }, //
  { text: "Solo cuando se acabe el mundo es que nuestra historia tendrá un final", time: 52 }, //
  { text: "No tengo miedo de decir al mundo que te quiero", time: 57 }, //
  { text: "Mi niña, te adoro, se pasa el tiempo cuando me mira'", time: 62.10 }, 
  { text: "Prométeme que nunca te irás de mi vida", time: 70 },
  { text: "Si me pide' la' estrella' te vuelco el cielo", time: 75 },
  { text: "Ya no tengo miedo de que sea' mi niña", time: 79 },
  { text: "Te adoro, se pasa el tiempo cuando me mira'", time: 85 },
  { text: "Prométeme que nunca te irá' de mi vida", time: 90},
  { text: "Si me pide' la' estrella' te vuelco el cielo", time: 95},
  { text: "Ya no tengo miedo", time:  99},
  { text: "Como tú no hay dos, Llegaste a mi vida y cambió mi suerte", time:  102.50},
  { text: "Me enseñaste a mirar donde en verdad tengo que mirar", time:  107},
  { text: "Aprendí a querer, a no juzgar tanto a la gente", time:  112},
  { text: "De todos mis errores saqué algo bueno al final", time:  117},
  { text: "Tú mi bandida, yo tu bandido, Donde vaya', ma, yo te sigo", time:  123},
  { text: "Nadie te mira como te miro, Ni te cuida como te cuido", time:  127},
  { text: "Tú mi bandida, yo tu bandido.Donde vaya', ma, yo te sigo", time:  133},
  { text: "Nadie te mira como te miro, Ni te cuida como te cuido", time:  138.50},
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );
  console.log("0. tiempo",time);
  console.log("0. texto",currentLine);
  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    console.log("2. vacio");
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 640);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);