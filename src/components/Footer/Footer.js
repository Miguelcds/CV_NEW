import "./Footer.css"
import { Button } from "../Button/Button";

const Footer = () => {
   const footer = document.querySelector("footer")

   footer.innerHTML =`
<h2> <a href="mailto:miguel-cds@hotmail.com"> Contact! </a> </h2>
<div>
<a href="#">${Button("/twitter.png", "Twitter")}</a>
<a href="https://github.com/Miguelcds">${Button("/githubb.png", "@Miguelcds")}</a>
<a href="https://linkedin.com/in/miguelcds">${Button("/linkedin.png", "Miguelcds")}</a>
<a href="https://t.me/Micosts">${Button("/telegram.png", "Telegram")}</a>
</div>
`
};


export default Footer;

