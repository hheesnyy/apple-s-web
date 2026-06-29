function showMood(mood) {

    let result = document.getElementById("result");

    if (mood == "海") {
        result.innerHTML = "📍 假日之森<br>🚶 看海發呆<br>🎵 Space Song";
    }

    else if (mood == "山") {
        result.innerHTML = "📍 侯硐貓村<br>🚶 散步<br>🎵 Holocene";
    }

    else if (mood == "city walk") {
        result.innerHTML = "📍 大稻埕<br>☕ 初二咖啡<br>🎵 Apocalypse";
    }

    else if (mood == "coffee date") {
        result.innerHTML = "📍 果宅<br>☕ 早午餐<br>🎵 Best Part";
    }

    else if (mood == "nights") {
        result.innerHTML = "📍 Sugarman<br>🌙 夜晚小酌<br>🎵 Nights";
    }

}
