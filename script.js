// Recupera os vídeos do Local Storage
let videos = JSON.parse(localStorage.getItem("videos")) || [];

// Função para salvar vídeos no Local Storage
function saveVideos() {
    localStorage.setItem("videos", JSON.stringify(videos));
}

// Função para carregar vídeos na página
function loadVideos() {
    const videoList = document.getElementById("video-list");
    videoList.innerHTML = ""; // Limpa a lista

    videos.forEach((video, index) => {
        const videoCard = document.createElement("div");
        videoCard.className = "video-card";
        videoCard.innerHTML = `
            <a href="video.html?id=${index}">
                <img src="${video.thumbnail}" alt="${video.title}">
                <h3>${video.title}</h3>
            </a>
        `;
        videoList.appendChild(videoCard);
    });
}

// Mostra o formulário de upload
document.getElementById("upload-button").addEventListener("click", () => {
    const form = document.getElementById("upload-form");
    form.style.display = form.style.display === "none" ? "block" : "none";
});

// Gerencia o envio do formulário
document.getElementById("video-upload-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    // Coleta os dados do formulário
    const title = document.getElementById("video-title").value;
    const thumbnail = document.getElementById("video-thumbnail").value;
    const url = document.getElementById("video-url").value;

    // Adiciona o vídeo ao array
    videos.push({ title, thumbnail, url });
    saveVideos(); // Salva no Local Storage
    loadVideos(); // Atualiza a lista de vídeos

    // Limpa o formulário
    document.getElementById("video-title").value = "";
    document.getElementById("video-thumbnail").value = "";
    document.getElementById("video-url").value = "";

    // Esconde o formulário
    document.getElementById("upload-form").style.display = "none";
});

// Inicializa os vídeos na página
loadVideos();
