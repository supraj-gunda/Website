document.addEventListener("DOMContentLoaded", function() {
    let randomNumber = Math.floor(Math.random() * 8) + 1; // Random number from 1 to 8
    let imagePath = `flower${randomNumber}.gif`;

    document.getElementById("flowerImage").src = imagePath;
});
