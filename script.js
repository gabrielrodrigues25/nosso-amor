// ===== CONTADOR =====
const contador = document.getElementById('contador');
const inicio = new Date("2024-12-25");

setInterval(() => {
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  contador.innerHTML = `❤️ ${dias} dias ${horas}h ${minutos}m ${segundos}s juntos`;

}, 1000);

// ===== TIMELINE =====
const timeline = [
  {
    mes: "Dezembro 2024",
    frase: "O dia em que nossos corações decidiram caminhar juntos 💞✨",
    fotos: ["imgs/mes1/1.jpeg","imgs/mes1/2.jpeg","imgs/mes1/3.jpeg","imgs/mes1/4.jpeg"]
  },

  {
    mes: "Janeiro 2025",
    frase: "Um capítulo da nossa história cheio de risadas, descobertas e amor 🌹🥰",
    fotos: ["imgs/mes2/1.jpeg","imgs/mes2/2.jpeg","imgs/mes2/3.jpeg","imgs/mes2/4.jpeg","imgs/mes2/5.jpeg"]
  },

  {
    mes: "Fevereiro 2025",
    frase: "Todos os dias me apaixonando mais pela mulher incrível que você é 🌷😍",
    fotos: ["imgs/mes3/1.jpeg","imgs/mes3/1.mp4"]
  },

  {
    mes: "Março 2025",
    frase: "Cada passeio ao seu lado transforma qualquer lugar em lar 💑💫",
    fotos: ["imgs/mes4/1.jpeg","imgs/mes4/2.jpeg","imgs/mes4/3.jpeg","imgs/mes4/4.jpeg","imgs/mes4/5.jpeg"]
  },

  {
    mes: "Abril 2025",
    frase: "Vivendo momentos simples que se tornam eternos com você 🌸💖",
    fotos: ["imgs/mes5/1.jpeg","imgs/mes5/2.jpeg","imgs/mes5/3.jpeg","imgs/mes5/4.jpeg","imgs/mes5/5.jpeg","imgs/mes5/6.jpeg"]
  },

  {
    mes: "Maio 2025",
    frase: "Explorando o mundo, mas sempre encontrando meu lugar em você 🗺️❤️",
    fotos: ["imgs/mes6/1.jpeg","imgs/mes6/2.jpeg","imgs/mes6/3.jpeg","imgs/mes6/4.jpeg"]
  },

  {
    mes: "Junho 2025",
    frase: "Nosso primeiro Dia dos Namorados… e a certeza de que é você 💕🌹",
    fotos: ["imgs/mes7/1.jpeg","imgs/mes7/2.jpeg","imgs/mes7/3.jpeg","imgs/mes7/4.jpeg"]
  },

  {
    mes: "Julho 2025",
    frase: "Te admirando em silêncio e te amando em todos os detalhes ✨👑",
    fotos: ["imgs/mes8/1.jpeg","imgs/mes8/2.jpeg","imgs/mes8/3.jpeg","imgs/mes8/4.jpeg"]
  },

  {
    mes: "Agosto 2025",
    frase: "Construindo um lar, sonhos e uma vida inteira ao seu lado 🏡💐",
    fotos: ["imgs/mes9/1.jpeg","imgs/mes9/2.jpeg","imgs/mes9/3.jpeg"]
  },

  {
    mes: "Setembro 2025",
    frase: "Meu aniversário, mas quem ganhou o maior presente fui eu: você 🎁❤️",
    fotos: ["imgs/mes10/1.jpeg","imgs/mes10/2.jpeg","imgs/mes10/3.jpeg","imgs/mes10/4.jpeg","imgs/mes10/5.jpeg","imgs/mes10/6.jpeg","imgs/mes10/7.jpeg"]
  },

  {
    mes: "Outubro 2025",
    frase: "Uma viagem, mil memórias e um amor que só cresce 🍃💑",
    fotos: ["imgs/mes11/1.jpeg","imgs/mes11/2.jpeg"]
  },

  {
    mes: "Novembro 2025",
    frase: "Mesmo nos dias simples, amar você continua sendo extraordinário 🤍✨",
    fotos: ["imgs/mes12/1.jpeg","imgs/mes12/2.jpeg"]
  },

  {
    mes: "Dezembro 2025",
    frase: "Um ano de nós, seu aniversário e a certeza de que eu escolheria você em todas as vidas 💍🎂❤️",
    fotos: ["imgs/mes13/1.jpeg","imgs/mes13/2.jpeg","imgs/mes13/3.jpeg","imgs/mes13/4.jpeg","imgs/mes13/5.jpeg","imgs/mes13/6.jpeg","imgs/mes13/7.jpeg"]
  }
];

let mesAtual = 0;
let fotoAtual = 0;

const tituloMes = document.getElementById('tituloMes');
const fraseMes = document.getElementById('fraseMes');
const midiaWrapper = document.getElementById('midiaWrapper');

function mostrarFoto() {
  const mes = timeline[mesAtual];
  const arquivo = mes.fotos[fotoAtual];

  tituloMes.textContent = mes.mes;
  fraseMes.textContent = mes.frase;

  midiaWrapper.style.opacity = 0;

  setTimeout(() => {
    midiaWrapper.innerHTML = "";

    if (arquivo.endsWith(".mp4")) {
      const video = document.createElement("video");
      video.src = arquivo;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.style.width = "100%";
      video.style.height = "100%";
      video.style.objectFit = "cover";
      midiaWrapper.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = arquivo;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      midiaWrapper.appendChild(img);
    }

    midiaWrapper.style.opacity = 1;
    gerarFundoFotos();
  }, 300);
}


function proximaFoto() {
  fotoAtual++;

  // acabou as fotos do mês?
  if (fotoAtual >= timeline[mesAtual].fotos.length) {
    fotoAtual = 0;
    mesAtual = (mesAtual + 1) % timeline.length;
  }

  mostrarFoto();
}

setInterval(proximaFoto, 4000);

document.getElementById("prevMes").onclick = () => {
  mesAtual = (mesAtual - 1 + timeline.length) % timeline.length;
  fotoAtual = 0;
  mostrarFoto();
};

document.getElementById("nextMes").onclick = () => {
  mesAtual = (mesAtual + 1) % timeline.length;
  fotoAtual = 0;
  mostrarFoto();
};

mostrarFoto();

// ===== MÚSICA =====
// ===== YOUTUBE PLAYER =====
const musicasYT = [
  { id: "1NPB5hM7cT8", nome: "Until I Found You – Stephen Sanchez 💖" },
  { id: "2Vv-BfVoq4g", nome: "Perfect – Ed Sheeran 💍✨" }
];


let ytAtual = 0;
const ytPlayer = document.getElementById("ytplayer");
const btnYT = document.getElementById("btnYT");

function proximaMusicaYT() {
  ytAtual = (ytAtual + 1) % musicasYT.length;
  const id = musicasYT[ytAtual].id;

  ytPlayer.src = `https://www.youtube.com/embed/${id}?autoplay=1&controls=1&loop=1&playlist=${id}`;
}

btnYT.addEventListener("click", proximaMusicaYT);


// ===== CORAÇÕES =====
const canvas = document.getElementById("heartsCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

class Heart {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 20 + 10;
    this.speed = Math.random() * 1 + 0.5;
  }
  draw() {
    ctx.font = this.size + "px serif";
    ctx.fillText("💗", this.x, this.y);
  }
  update() {
    this.y += this.speed;
    if (this.y > canvas.height) this.y = -20;
    this.draw();
  }
}

const hearts = Array.from({ length: 30 }, () => new Heart());

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  hearts.forEach(h => h.update());
  requestAnimationFrame(animate);
}
animate();
const fundoFotos = document.getElementById("fundoFotos");

function gerarFundoFotos() {
  fundoFotos.innerHTML = "";

  const fotos = timeline[mesAtual].fotos;

  fotos.forEach((foto) => {
    if (foto.endsWith(".mp4")) return; // ignora vídeos no fundo

    const img = document.createElement("img");
    img.src = foto;
    img.classList.add("foto-fundo");

    img.style.top = Math.random() * 100 + "%";
    img.style.left = Math.random() * 100 + "%";
    img.style.setProperty("--rotacao", `${Math.random() * 30 - 15}deg`);

    fundoFotos.appendChild(img);
  });
}

