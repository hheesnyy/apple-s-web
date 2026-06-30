let memories = [];

fetch("moods.json")
    .then(response => response.json())
    .then(data => {
        memories = data;
        renderGallery(memories);
    });

function renderGallery(data){
    const gallery = document.getElementById("gallery");

    gallery.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${item.image || 'background.jpeg'}">

            <div class="card-content">
                <p class="caption">${item.caption || "a little moment I wanted to remember."}</p>
                <h3>${item.place}</h3>
                <p>📍 ${item.region || ""}</p>
                <p>🎵 ${item.song || "your choice"}</p>
            </div>
        `;

        card.onclick = () => openDetail(item);

        gallery.appendChild(card);
    });
}

function filterMood(mood){
    if(mood === "all"){
        renderGallery(memories);
    } else {
        const filtered = memories.filter(item => item.mood === mood);
        renderGallery(filtered);
    }
}

function openDetail(item){
    document.getElementById("detailPanel").classList.add("show");

    document.getElementById("detailImage").src = item.image || "background.jpeg";
    document.getElementById("detailMood").innerText = item.mood;
    document.getElementById("detailPlace").innerText = item.place;
    document.getElementById("detailRegion").innerText = "📍 " + (item.region || "");
    document.getElementById("detailCaption").innerText = item.caption || "a little moment I wanted to remember.";
    document.getElementById("detailSong").innerText = "🎵 " + (item.song || "your choice");
    document.getElementById("detailNearby").innerText = "☕ " + (item.nearby || "nearby cafe");

    const map = document.getElementById("detailMap");

    if(item.maps){
        map.href = item.maps;
        map.style.display = "block";
    } else {
        map.style.display = "none";
    }
}

function closeDetail(){
    document.getElementById("detailPanel").classList.remove("show");
}
