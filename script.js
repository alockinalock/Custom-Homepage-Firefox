function updateDateTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();

    const dayOfWeekElement = document.getElementById('dayOfWeek');
    const monthDateElement = document.getElementById('monthDate');

    dayOfWeekElement.textContent = dayOfWeek;
    monthDateElement.textContent = `${month}, ${date}.`;
}

updateDateTime(); 

setInterval(updateDateTime, 86400000);
