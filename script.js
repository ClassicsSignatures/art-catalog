document.addEventListener("DOMContentLoaded", () => {
    const catalogGrid = document.getElementById("catalogGrid");

    // Predefined logic to display all images in the folder
    const numberOfImages = 3000; // Adjust this number based on the maximum expected images

    for (let i = 1; i <= numberOfImages; i++) {
        const imgPath = `images/art${i}.jpeg`;

        // Create an image element and check if the file exists
        const img = new Image();
        img.src = imgPath;

        img.onload = () => {
            const item = document.createElement("div");
            item.className = "grid-item";

            img.alt = `Artwork ${i}`;
            item.appendChild(img);
            catalogGrid.appendChild(item);
        };

        img.onerror = () => {
            // Stop processing when an image is missing
            console.warn(`Image not found: ${imgPath}`);
        };
    }
});
