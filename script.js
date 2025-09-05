const getTimeBtn = document.getElementById('getTimeBtn');
const timeDisplay = document.getElementById('timeDisplay');

getTimeBtn.addEventListener('click', () => {
    const now = new Date();
    const options = {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };
    const indianTime = new Intl.DateTimeFormat('en-US', options).format(now);
    timeDisplay.textContent = indianTime;
});