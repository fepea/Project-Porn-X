// Simulando um "banco de dados" de vídeos em JSON
const videos = [
    { id: 1, title: "Vídeo 1", thumbnail: "thumb1.jpg", url: "video1.mp4" },
    { id: 2, title: "Vídeo 2", thumbnail: "thumb2.jpg", url: "video2.mp4" },
    { id: 3, title: "Vídeo 3", thumbnail: "thumb3.jpg", url: "video3.mp4" },
];

// Carregar os vídeos na página inicial
function loadVideos() {
    const videoList = document.getElementById("video-list");
    videoList.innerHTML = ""; // Limpa a lista de vídeos

    videos.forEach(video => {
        const videoCard = document.createElement("div");
        videoCard.className = "video-card";
        videoCard.innerHTML = `
            <a href="video.html?id=${video.id}">
                <img src="${video.thumbnail}" alt="${video.title}">
                <h3>${video.title}</h3>
            </a>
        `;
        videoList.appendChild(videoCard);
    });
}

// Filtrar vídeos com base na pesquisa
document.getElementById("search").addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(query));
    const videoList = document.getElementById("video-list");
    videoList.innerHTML = "";

    filteredVideos.forEach(video => {
        const videoCard = document.createElement("div");
        videoCard.className = "video-card";
        videoCard.innerHTML = `
            <a href="video.html?id=${video.id}">
                <img src="${video.thumbnail}" alt="${video.title}">
                <h3>${video.title}</h3>
            </a>
        `;
        videoList.appendChild(videoCard);
    });
});

// Inicializa os vídeos
loadVideos();
