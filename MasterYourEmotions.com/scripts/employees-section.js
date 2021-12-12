// - - - - - - EMPLOYEE-SECTION - - - - - - 

// Array of objects with information about each employee inside the modal description.
const employeeCards = [{
        name: "Haris Avdicevic",
        title: "- Psychologist ",
        content: "If you want to have a one on one session with a serious therapist with over 10 years of experience in Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis maiores unde distinctio, odit repudiandae, quaerat, consequuntur dolor ea iste qui a nesciunt? Error corrupti voluptate amet aperiam exercitationem quisquam dolores!",
        phone: "073 123 45 67",
        mail: "test.testsson@gmail.com",
    },
    {
        name: "Albin Wahlström",
        title: "- Teacher of mental health",
        content: "Do you have a hectict lifestyle? Don't have enough time throughout the week to go to a physical location in order to get a session? Well look no further because we offer Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis maiores unde distinctio, odit repudiandae, quaerat, consequuntur dolor ea iste qui a nesciunt? Error corrupti voluptate amet aperiam exercitationem quisquam dolores! ",
        phone: "073 123 45 67",
        mail: "test.testsson@gmail.com",

    },
    {
        name: "Karl Blixt",
        title: "- Counsellor",
        content: "Reach out to Karl if you need any type of counseling in form of Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis maiores unde distinctio, odit repudiandae, quaerat, consequuntur dolor ea iste qui a nesciunt? Error corrupti voluptate amet aperiam exercitationem quisquam dolores!",
        phone: "073 123 45 67",
        mail: "test.testsson@gmail.com",
    },
    {
        name: "Filip Sjöstrand",
        title: "- Customer support",
        content: "Did you not find the answer you were looking for? If not, then Filip is your guy to ask any sort of question for a quick Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis maiores unde distinctio, odit repudiandae, quaerat, consequuntur dolor ea iste qui a nesciunt? Error corrupti voluptate amet aperiam exercitationem quisquam dolores!",
        phone: "073 123 45 67",
        mail: "test.testsson@gmail.com",
    },
];


// Creates the cards and puts the employees name inside an h2-tag on the card with the help of map-method. 
const cardElements = employeeCards
    .map(
        (card, index) =>
        `<div class="card" onclick="openModal(${index})"><h2 style="text-align:center;">${card.name}</h2></div>`
    )
    .join("");
document.querySelector("#cards-wrapper").innerHTML = cardElements;

/*  Opens the entire modal by displaying flex
and adds information from our object of arrays inside the relevant tags inside of the description modal.*/
const openModal = (index) => {
    document.querySelector("#modal-content").innerHTML = `
<div class="close-button-cards">
<span onclick="closeModal()">&times;</span>
</div>
<div class="modal-body">
<h2>${employeeCards[index].name}</h2>
<h3>${employeeCards[index].title}</h3>
<p>${employeeCards[index].content}</p>
<i class="fa fa-phone-square" aria-hidden="true"> <a href="tel:${employeeCards[index].phone}"> ${employeeCards[index].phone}</a></i>
<i class="fa fa-envelope" aria-hidden="true"><a href="mailto:${employeeCards[index].mail}"> ${employeeCards[index].mail}</a></i>
</div>
`;
    document.querySelector("#modal-wrapper").style.display = "flex";
};

// Closes the modal after user clicks on the span-element (X).
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

// - - - - - - EMPLOYEE-SECTION - - - - - -