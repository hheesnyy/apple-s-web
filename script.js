let moodDatabase = [];

fetch("moods.json")
    .then(response => response.json())
    .then(data => {

        moodDatabase = data;

        console.log("Database Loaded");

    });

function showMood(mood) {

    let result =
        document.getElementById("result");

    let filteredData =
        moodDatabase.filter(
            item => item.mood === mood
        );

    let randomIndex =
        Math.floor(
            Math.random() * filteredData.length
        );

    let recommendation =
        filteredData[randomIndex];

    result.innerHTML =

        `
        <div class="result-card">

            <p>📍 ${recommendation.place}</p>

            <p>🚶 ${recommendation.activity}</p>

            <p>🎵 ${recommendation.song}</p>

        </div>
        `;
    console.log(moodDatabase);
    console.log(filteredData);
}
