document.addEventListener('DOMContentLoaded', () => {
    function updateDate() {
        const dateElement = document.getElementById('date');
        const now2 = new Date();

        const monthsAsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthLong = monthsAsLong[now2.getMonth()];
        const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        const month = months[now2.getMonth()];
        const day = String(now2.getDate()).padStart(2, '0'); // Ensure two-digit format
        const year = String(now2.getFullYear()).slice(-2); // Get last two digits

        dateElement.textContent = `${month}/${day}/${year}\n${monthLong} ${day}, ${year}`;
        const dateLongFormElement = document.getElementById('dateLongForm');
        dateLongFormElement.textContent = `${monthLong} ${day}, ${year}`;
    }

    setInterval(updateDate, 1000);
    updateDate(); // Initial call
});
