const today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");
    copyright.innerHTML = `Melise Gathers ${thisYear}`;

footer.appendChild(copyright);

let skills = ["HTML", "CSS", "JavaScript"];
let skillsSection = document.getElementById("skills");
let skillsList = document.querySelector("#skills");

for (i in skills) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let nameField = document.getElementById("name");
    let name = nameField.value;

    let emailField = document.getElementById("email");
    let email = emailField.value;

    let messageField = document.getElementById("message");
    let message = messageField.value;

    console.log(name, email, message);

    let messageSection = document.getElementById("messages");
    let messageList = messageSection.querySelector("ul");

    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>wrote: ${message} </span>`;

    /*if (messageList.hasChildNodes(newMessage)) {
        messageSection.style.visibility = "visible";
    } else {
        messageSection.style.visibility = "hidden";
    };*/

   /*if (messageList.style.display == "none") {
        messageSection.style.visibility = "hidden";
    };*/

    /*if (messageList.children.length = 0) {
        messageSection.style.display = 'none';
      } else {
        messageSection.style.visibility = 'hidden';
      }*/

    let removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener("click", (event) => {
        let entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    // HIDE MESSAGE SECTION - when list is empty (not working)
    /*if (messageList.style.display == "none") {
        messageSection.style.visibility = "hidden";
    };*/

    messageForm.reset();

});