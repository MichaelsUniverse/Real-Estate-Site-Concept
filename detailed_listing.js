document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnails img");
    const mainImage = document.querySelector(".main-image");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            mainImage.src = this.src;
            mainImage.alt = this.alt;
        });
    });
});