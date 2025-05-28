const musicList = [
    {
        title: "im glad you're evil too",
        artist: "PINOCCHIO-P",
        duration: "6:31",
        likes: 340,
        views: 1.424000,
        file: "imgyet.mp3",
        cover: "imgyet.jpg",
    },
    {
        title: "Fleeting girl",
        artist: "MISEKAI",
        duration: "4:05",
        likes: 8800,
        views: 18.200,
        file: "fleeting girl.mp3",
        cover: "fleeting girl.jpg",
    },
//     {
//         title: ".......
//         artist: "System",
//         duration: "2:47",
//         likes: 12000,
//         views: 5000000,
//         file: "mp3/.mp3",
//         cover: "img/....jpg",
//     },
//     {
//         title: ".......",
//         artist: "Red Hot fuck sex Peppers",
//         duration: "3:35",
//         likes: 25000,
//         views: 1000000,
//         file: "mp3/.....mp3",
//         cover: "img/....jpg",
//     },
//     {
//         title: "....... war",
//         artist: "ambatucum",
//         duration: "4:50",
//         likes: 30000,
//         views: 10000000,
//         file: "mp3/....mp3",
//         cover: "img/.....jpg",
//     },
//     {
//         title: ".......all - Remastered",
//         artist: "Oasis",
//         duration: "4:18",
//         likes: 15000,
//         views: 5000000,
//         file: "mp3/- Remastered.mp3",
//         cover: "img/- Remastered.jpg",
//     },
//     {
//         title: ".......arry",
//         artist: "Gorillaz x Bootie Brown",
//         duration: "3:50",
//         likes: 7000,
//         views: 2000000,
//         file: "mp3/.mp3",
//         cover: "img/.....jpg",
//     },
//     {
//         title: ".......s I Know The Better",
//         artist: "Tame Impala",
//         duration: "3:36",
//         likes: 20000,
//         views: 8000000,
//         file: "mp3/Know The Better.mp3",
//         cover: "img/.....jpg",
//     },
//     {
//         title: "....... Out",
//         artist: "Franz Ferdinand",
//         duration: "3:57",
//         likes: 18000,
//         views: 6000000,
//         file: "mp3/.mp3",
//         cover: "img/......jpg",
//     },
//     {
//         title: ".......ation Army",
//         artist: "The White Stripes",
//         duration: "3:52",
//         likes: 25000,
//         views: 9000000,
//         file: "mp3/.mp3",
//         cover: "img/......jpg",
//     }
];

const container = document.getElementById("musicList");
const audio = document.getElementById("audioPlayer");

let currentBtn = null;

musicList.forEach((song) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${song.cover}" alt="${song.title}">
    <div class="song-title">${song.title}</div>
    <div class="artist">${song.artist}</div>
    <div class="details">
      <span>❤️ ${song.likes}</span>
      <span>👁️ ${song.views}</span>
    </div>
    <div class="controls">
      <span>⏱ ${song.duration}</span>
      <br />
      <button class="play-btn" data-file="${song.file}">▶Play</button>
    </div>
  `;

  container.appendChild(card);
});

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("play-btn")) {
    const file = e.target.getAttribute("data-file");
    if (audio.src.includes(file) && !audio.paused) {
      audio.pause();
      e.target.textContent = "▶Play";
    } else {
      audio.src = file;
      audio.play();
      audio.style.display = "block";
      const allButtons = document.querySelectorAll(".play-btn");
      allButtons.forEach((btn) => (btn.textContent = "▶Play"));
      e.target.textContent = "⏸Pause";
      currentBtn = e.target;
    }
  }
});

audio.addEventListener("ended", () => {
  if (currentBtn) {
    currentBtn.textContent = "▶Play";
  }
});


audio.addEventListener("ended", () => {
    if (currentBtn) {
        currentBtn.textContent = "▶Play";
    }
});