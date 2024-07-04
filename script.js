function updateDateTime() {
    const now = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = daysOfWeek[now.getUTCDay()];
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds} UTC`;
    document.getElementById('day').innerText = day;
    document.getElementById('time').innerText = time;
}

setInterval(updateDateTime, 1000);
updateDateTime();