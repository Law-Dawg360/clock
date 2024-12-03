document.addEventListener('DOMContentLoaded', () => {
    function updateClock() {
        const clockElement = document.getElementById('clock');
        const now = new Date();

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        clockElement.textContent = `${hours}:${minutes}:${seconds}`;

        const dateElement = document.getElementById('date');
        
        const month = String(now.getMonth()).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const year = String(now.getYear()).padStart(2, '0');

        dateElement.textContent = `${month}/${day}/${year}`;
    }

    setInterval(updateClock, 1000);
    updateClock();
});
