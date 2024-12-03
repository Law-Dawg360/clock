document.addEventListener('DOMContentLoaded', () => {
    function updateClock() {
        const clockElement = document.getElementById('clock');
        const now = new Date();

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        clockElement.textContent = `${hours}:${minutes}:${seconds}`;

        const dateElement = document.getElementById('date');
        const now2 = new Date();
        
        const month = String(now2.getMonth());
        const day = String(now2.getDate());
        const year = String(now2.getYear());

        dateElement.textContent = `${month}/${day}/${year}`;
    }

    setInterval(updateClock, 1000);
    updateClock();
});
