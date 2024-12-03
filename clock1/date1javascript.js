document.addEventListener('DOMContentLoaded', () => {
    function updateDate() {
        const dateElement = document.getElementById('date');
        const now2 = new Date();

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[now2.getMonth()];
        const day = String(now2.getDate()).padStart(2, '0'); // Ensure two-digit format
        const year = String(now2.getFullYear());

        dateElement.textContent = `${month}/${day}/${year}`;
    }

    setInterval(updateDate, 1000);
    updateDate(); // Initial call
});
