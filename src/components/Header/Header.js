import "./Header.css";

/*const Header = (data) => {
  const header = document.querySelector("header");

  header.innerHTML = `
<video autoplay muted loop id="background-video">
    <source src="./fondocvv.mp4" type="video/mp4">
</video>
    <h1>C.V J.COSTA</h1>
      <img id="imgCv" src="${data.avatar}" alt="ImagenCv">
      <nav>
        <ul id="ulContent">
          <li>
          <a href="#" id="homelink">Home</a>
          </li>
          <li>
          <a href="#" id="projectslink">Projects</a>
          </li>
        </ul>
      </nav>


    `;
};*/

import "./Header.css";

const Header = (data) => {
  const header = document.querySelector("header");

  header.innerHTML = `
    <div class="header-video">
      <video autoplay muted loop>
        <source src="./fondocvv.mp4" type="video/mp4">
      </video>
      <div class="overlay"></div>
    </div>

    <div class="header-content">
      <img class="avatar" src="${data.avatar}" alt="Foto de perfil">

      <h1>Joao Costa</h1>
      <p class="subtitle">Web Developer · DAW Student</p>

      <nav>
        <a href="#" id="homelink">Home</a>
        <a href="#" id="projectslink">Projects</a>
      </nav>
    </div>
  `;
};





export default Header;
