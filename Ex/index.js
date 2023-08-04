var xhttp = new XMLHttpRequest;

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);

        document.getElementById('game-container').innerHTML = xhttp.responseText;
        var gameList = response.games_list;
        console.log(gameList);
    }
};

xhttp.open("GET", "data.json", true);
xhttp.send();