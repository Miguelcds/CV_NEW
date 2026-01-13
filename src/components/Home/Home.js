import "./Home.css";
import data from "../Data_JC/Data_JC";
import cleanPage from "../../../utils/cleanPage";

/* ===== ABOUT ME ===== */
const aboutMe = (data) => {
  const section = document.querySelector("#container");

  section.innerHTML += `
    <div class="block">
      <h2 class="section-title">Hello!</h2>
      <p class="text">${data.aboutMe_English}</p>
    </div>
  `;
};

/* ===== EDUCATION ===== */
const education = (data) => {
  const section = document.querySelector("#container");

  section.innerHTML += `
    <div class="block">
      <h3>Education</h3>
      <ul class="list"></ul>
    </div>
  `;

  const ul = section.querySelector(".list:last-of-type");

  for (const el of data.education) {
    ul.innerHTML += `
      <li class="card">
        <p>${el.degree}</p>
        <p>${el.university}</p>
        <p>${el.graduationYear}</p>
        <p>${el.honors}</p>
        <p>${el.relevantCourses}</p>
      </li>
    `;
  }
};

/* ===== EXPERIENCE ===== */
const workExperience = (data) => {
  const section = document.querySelector("#container");

  section.innerHTML += `
    <div class="block">
      <h3>Experience</h3>
      <ul class="list"></ul>
    </div>
  `;

  const ul = section.querySelector(".list:last-of-type");

  for (const el of data.workExperience) {
    ul.innerHTML += `
      <li class="card">
        <p>${el.position}</p>
        <p>${el.company}</p>
        <p>${el.startDate}</p>
        <p>${el.description}</p>
      </li>
    `;
  }
};

/* ===== SKILLS ===== */
const skills = (data) => {
  const section = document.querySelector("#container");

  section.innerHTML += `
    <div class="block">
      <h3>Skills</h3>
      <ul id="ulSkills"></ul>
    </div>
  `;

  const ul = document.querySelector("#ulSkills");

  for (const skill of data.skills) {
    ul.innerHTML += `<li class="skill">${skill}</li>`;
  }
};

/* ===== HOME ===== */
const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  main.innerHTML = `
    <section id="container" class="section"></section>
  `;

  aboutMe(data);
  education(data);
  workExperience(data);
  skills(data);
};

export default Home;
