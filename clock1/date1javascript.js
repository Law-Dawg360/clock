document.addEventListener('DOMContentLoaded', () => {
    function updateDate() {
        const dateElement = document.getElementById('date');
        const now2 = new Date();

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month = months[now2.getMonth()];
        const day = String(now2.getDate()).padStart(2, '0'); // Ensure two-digit format
        const year = String(now2.getFullYear()).slice(-2); // Get last two digits

        dateElement.textContent = `${month} ${day}, ${year}`;
    }

    setInterval(updateDate, 1000);
    updateDate(); // Initial call
});
