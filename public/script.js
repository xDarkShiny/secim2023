$(document).ready(() => {
    const countdownElement = document.getElementById('countdown');
    let countdownValue = 10; // Geri sayım süresi (saniye cinsinden)

    const countdownInterval = setInterval(() => {
        countdownElement.textContent = `Sayfa ${countdownValue} saniye içinde yenilenecek`;

        countdownValue--;

        if (countdownValue < 0) {
            clearInterval(countdownInterval);
            location.reload(); // Sayfayı yenile
        }
    }, 1000);
});
