document.getElementById('button').addEventListener('click', function() {
    var N = parseInt(document.getElementById('N').value);

    var secondsLastHour = N % 3600;
    var fullMinutesLastHour = Math.floor(secondsLastHour / 60);

    document.getElementById('result').textContent = "Количество полных минут: " + fullMinutesLastHour;
});