document.addEventListener('DOMContentLoaded', () => {
    function updateDate() {
        const dateElement = document.getElementById('date');
        const now2 = new Date();
        
        const month = String(now2.getMonth() + 1);
        const day = String(now2.getDate());
        const year = String(now2.getYear());

        dateElement.textContent = `{month}/{day}/{year}`;
    }

    setInterval(updateDate, 1000);
    updateDate();
});
