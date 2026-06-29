function showMood() {

    let mood =
        document.getElementById("mood").value;

    let result =
        document.getElementById("result");

    if (mood == "海") {

        result.innerHTML =
            "📍 假日之森<br>🎵 Space Song";

    }

    else if (mood == "山") {

        result.innerHTML =
            "📍 侯硐貓村<br>🎵 Holocene";

    }

    else if (mood == "city walk") {

        result.innerHTML =
            "📍 大稻埕<br>🎵 Apocalypse";

    }

    else {

        result.innerHTML =
            "📍 北投<br>🎵 Ribs";

    }

}
