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