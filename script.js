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

  result.innerHTML = `

<div class="result-card">

    <h2>${recommendation.place}</h2>

    <p>📍 ${recommendation.region}</p>

    <p>🚶 ${recommendation.activity || "explore freely"}</p>

</div>

`;
    console.log(moodDatabase);
    console.log(filteredData);
}
