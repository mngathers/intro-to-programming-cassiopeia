const today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");
    copyright.innerHTML = `&copy ${thisYear} Melise Gathers`;

footer.appendChild(copyright);

let connect = document.getElementById("connect");
    footer.appendChild(connect);

let skills = ["HTML", "CSS", "JavaScript", "GitHub", "Git", "VSCode", "Drupal", "SEO"];
let skillsSection = document.getElementById("skills");
let skillsList = document.querySelector("#skills");

for (i in skills) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

let messageSection = document.getElementById("messages");
let messageList = messageSection.querySelector("ul");
let newMessage = document.createElement("li");
    messageSection.style.display = "none";

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

    if (messageList.style.visibility = "hidden") {
        messageSection.style.display = "block";
        messageList.style.visibility = "visible";
      }

    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>wrote: ${message} </span>`;

    let removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener("click", (event) => {
        let entry = removeButton.parentNode;

        if (messageList.children.length <= 1) {
            messageSection.style.display = "none";
          }

        entry.remove();
            
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();

});

fetch("https://api.github.com/users/mngathers/repos")
    .then(response => response.json())
    .then(repositories => {
        console.log(repositories);

        let projectSection = document.getElementById("projects");
        let projectList = projectSection.querySelector("ul");

        for (let i = 0; i < repositories.length; i++ ) {
            let project = document.createElement("li");
            project.innerHTML = `<a href="${repositories[i].html_url}">${repositories[i].name}</a>`
            projectList.appendChild(project);
        }
    })
    .catch(error => console.error(error))