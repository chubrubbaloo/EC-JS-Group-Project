// bygger form elementet:

// skapar fönster för form
const mainDiv = document.createElement('DIV')
mainDiv.id = 'DM'

// skapar formuläret
const form = document.createElement('FORM')
form.onsubmit = () => {sendForm(); return false}
mainDiv.appendChild(form)

//skapar rubrik
const title = document.createElement('H3')
title.innerHTML = "Send me a direct message!"
form.appendChild(title)

// skapar knapp för att stänga fönster
const closeWindow = document.createElement('I')
closeWindow.className = 'closeWindow fa fa-times-circle'
closeWindow.addEventListener('click',() => closeForm())
form.appendChild(closeWindow)

//skapar input fält med rubriker om vad som ska vara i fälten.
const subjectHelp = document.createElement('H5')
subjectHelp.innerHTML = "Subject:"
form.appendChild(subjectHelp)

const subject = document.createElement('INPUT')
subject.className = "subject"
subject.type = 'text'
subject.required = true
form.appendChild(subject)

const replyHelp = document.createElement('H5')
replyHelp.innerHTML = "Email:"
form.appendChild(replyHelp)

const reply = document.createElement('INPUT')
reply.className = 'reply'
reply.type = 'email'
reply.required = true
form.appendChild(reply)

const messageHelp = document.createElement('H5')
messageHelp.innerHTML = "Message:"
form.appendChild(messageHelp)

const message = document.createElement('TEXTAREA')
message.className = "message"
message.type = 'text'
message.required = true
form.appendChild(message)

//submit knapp för formuläret
const submit = document.createElement('INPUT')
submit.className = 'submit'
submit.type = 'submit'
submit.value = "Send"
form.appendChild(submit)


//Open form
function openForm(){
    document.body.appendChild(mainDiv);
}

//Create loader
//Creates 2x div (loaderWrapper & loader)
const loaderWrapper = document.createElement('DIV');
const loader = document.createElement('DIV');

//Show loader
//sendForm() "send"-button triggers: 1. loaderWrapper-div to be created and faded in mainDiv, 2. Show loader, 3. calls thankYouMessage in 3000 ms
function sendForm() {
    mainDiv.appendChild(loaderWrapper);
    loaderWrapper.id = "loader-wrapper";
    loaderWrapper.style.opacity = "60%";
    mainDiv.appendChild(loader);
    loader.id = "loader";
    loader.style.display = "flex";
    setTimeout(() => thankYouMessage(), 3000);
};

//Thank you
//thankyouMessage() triggers: 1. hide "loader-div" & reuse/unfade "loaderWrapper-div", 2. create thank you-message, 3. calls closeForm() in 2000 ms
function thankYouMessage() {
    loader.style.display = "none";
    loaderWrapper.style.opacity = "100%";
    loaderWrapper.innerHTML = `<h3>Tack för ditt meddelande!<h3>`
    setTimeout(() => {closeForm(); mainDiv.removeChild(loaderWrapper);}, 2000);
};

//Close form
//closeForm() triggers: 1. blanks form & thank you-message, 2. removes mainDiv (where the form is created)
function closeForm(){
    subject.value = "";
    reply.value = "";
    message.value = "";
    loaderWrapper.innerHTML = ``;
    document.body.removeChild(mainDiv);
};

// validerar formulärets innehåll innan formuläret skickas.
// hjälper användaren med vad som ska fyllas i i fält som misslyckas med valideringen.
