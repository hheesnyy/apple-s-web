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

        const imagePath = item.image || "background.jpeg";

        card.innerHTML = `
            <img src="${imagePath}">

            <div class="card-content">
                <p class="caption">
                    ${item.caption || "a little moment I wanted to remember."}
                </p>

                <h3>${item.place}</h3>

                <p>📍 ${item.region || ""}</p>

                <p>✦ ${item.mood}</p>
            </div>
        `;

        card.onclick = () => openDetail(item);

        gallery.appendChild(card);
    });
}

function filterMood(mood){

    if(mood === "all"){
        renderGallery(memories);
        return;
    }

    const filtered = memories.filter(
        item => item.mood === mood
    );

    renderGallery(filtered);
}

function openDetail(item){

    const panel = document.getElementById("detailPanel");
    panel.classList.add("show");

   const imagePath = item.image || "background.jpeg";

    document.getElementById("detailImage").src = imagePath;
    document.getElementById("detailMood").innerText = item.mood;
    document.getElementById("detailPlace").innerText = item.place;
    document.getElementById("detailRegion").innerText = "📍 " + (item.region || "");
    document.getElementById("detailActivity").innerText = item.activity || "a little moment I wanted to remember.";
    document.getElementById("detailSong").innerText = item.song ? "🎵 " + item.song : "";

    const map = document.getElementById("detailMap");
    const thread = document.getElementById("detailThread");

    if(item.maps){
        map.href = item.maps;
        map.style.display = "block";
    }else{
        map.style.display = "none";
    }

    if(item.threads){
        thread.href = item.threads;
        thread.style.display = "block";
    }else{
        thread.style.display = "none";
    }
}

function closeDetail(){
    document.getElementById("detailPanel").classList.remove("show");
}
