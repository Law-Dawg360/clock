document.addEventListener('DOMContentLoaded', () => {
    function updateDate() {
        const dateElement = document.getElementById('date');
        const dateLongFormElement = document.getElementById('dateLongForm');
        const now2 = new Date();

        // Date formats
        const monthsAsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthLong = monthsAsLong[now2.getMonth()];
        const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        const month = months[now2.getMonth()];
        const day = String(now2.getDate()).padStart(2, '0'); // Ensure two-digit format
        const year = String(now2.getFullYear()).slice(-2); // Last two digits of the year

        // Update short date format in the parent container
        dateElement.firstChild.textContent = `${month}/${day}/${year}`;

        // Update long date format in the child container
        dateLongFormElement.textContent = `${monthLong} ${now2.getDate()}, ${now2.getFullYear()}`;
    }

    setInterval(updateDate, 1000);
    updateDate(); // Initial call
});
