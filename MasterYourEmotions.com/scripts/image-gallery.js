// - - - - - - IMAGE-GALLERY-SECTION - - - - - -

// Images inside an array of objects for our image-slider.
const images = [{
        imageName: "jonna.jpg",
        alt: "Happy client after a successful session.",
    },
    {
        imageName: "jonas.jpg",
        alt: "Jonas having a good time.",
    },
    {
        imageName: "johanna.jpg",
        alt: "Self love is the best kind of love.",
    },
    {
        imageName: "julia.jpg",
        alt: "Julia smiling like she means it.",
    },
    {
        imageName: "nina.jpg",
        alt: "Nina embracing her mental wellbeing.",
    },
    {
        imageName: "summer-camp.jpg",
        alt: "Our first summer camp.",
    },
    {
        imageName: "filip.jpg",
        alt: "Setting up the younger generation for success.",
    },
    {
        imageName: "second-summer-camp.jpg",
        alt: "Our second summer camp.",
    },
];
// Triggers the modal with the image the user clicked on.
const imageElements = images
    .map(
        (img) =>
        `<img alt="${img.alt}" src="../media/img/${img.imageName}" onclick="openModal('${img.imageName}')">`
    )
    .join("");

// Triggers main image.
const imageThumbnails = images
    .map(
        (img) =>
        `<img alt="${img.alt}" src="../media/img/${img.imageName}" onclick="setMainImage('${img.imageName}')" class="thumbnail">`
    )
    .join("");

// Opens the modal and sets the image that the user clicked on as the main image by displaying flex.
const openModal = (imageName) => {
    setMainImage(imageName);
    document.querySelector("#modal-wrapper").style.display = "flex";
};

// Sets the main image.
const setMainImage = (imageName) => {
    document
        .querySelector("#main-image")
        .setAttribute("src", `../media/img/${imageName}`);
    setActiveThumbnail();
};

/*  Sets the active thumbnail with a border around it.
IF the thumbnail matches the main image. Set this thumbnail with the border.
ELSE set the border to 0px and no color.*/
const setActiveThumbnail = () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach((thumb) => {
        if (thumb.src === document.querySelector("#main-image").src) {
            thumb.style.border = "8px solid lightskyblue";
        } else {
            thumb.style.border = "0px";
        }
    });
};

/* 
Previous image.
IF the thumbnail is NOT the first image of the thumbnail section. Go forward.
ELSE IF the thumbnail IS the first image. Go to the last image of the section.*/
const previousImage = () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    for (let i = 0; i < thumbnails.length; i++) {
        if (
            thumbnails[i].src === document.querySelector("#main-image").src &&
            i !== 0
        ) {
            document
                .querySelector("#main-image")
                .setAttribute("src", thumbnails[(i -= 1)].src);
            setActiveThumbnail();
        } else if (
            thumbnails[i].src === document.querySelector("#main-image").src &&
            i === 0
        ) {
            document
                .querySelector("#main-image")
                .setAttribute("src", thumbnails[(i += thumbnails.length - 1)].src);
            setActiveThumbnail();
        }
    }
};

/*  Nex image.
IF the thumbnail is not the last image of the thumbnail section. Go forward.
ELSE IF the thumbnail IS the last image. Go back to the first image of the section.*/
const nextImage = () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    for (let i = 0; i < thumbnails.length; i++) {
        if (
            thumbnails[i].src === document.querySelector("#main-image").src &&
            i !== thumbnails.length - 1
        ) {
            document
                .querySelector("#main-image")
                .setAttribute("src", thumbnails[(i += 1)].src);
            setActiveThumbnail();
        } else if (
            thumbnails[i].src === document.querySelector("#main-image").src &&
            i === thumbnails.length - 1
        ) {
            document.querySelector("#main-image").setAttribute("src", thumbnails[0].src);
            setActiveThumbnail();
        }
    }
};

// Closes the modal after the user presses on the span-element (X).
const closeModal = () => {
    document.querySelector("#modal-wrapper").style.display = "none";
};

// Closes the modal after the user clicks anywhere outside of the modal-content.
let getModal = document.getElementById("modal-wrapper");
window.onclick = function(event) {
    if (event.target === getModal) {
        getModal.style.display = "none";
    }
}

// When the whole page has loaded, add images and thumbnails.
window.addEventListener("load", () => {
    document.querySelector("#image-grid").innerHTML = imageElements;
    document.querySelector("#thumbnails-wrapper").innerHTML = imageThumbnails;
});

// - - - - - - IMAGE-GALLERY-SECTION - - - - - -