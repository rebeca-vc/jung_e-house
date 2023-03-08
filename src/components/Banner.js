import "./style/Banner.css";
import logo from "../assets/logo.png";

const Banner = () => {
    const title = "Jung_e House"
    return (
    <div class="jh-banner">
    <img src={logo} class="jh-logo"></img>
    <h1 class="jh-title">{title}</h1>
    </div>);

}


export default Banner;