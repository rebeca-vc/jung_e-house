import "./style/Banner.css";
import logo from "../assets/logo.png";
import Recommendation from "./Recommendation.js";

const Banner = () => {
    const title = "Jung_e House"
    return (
    <div className="jh-banner">
        <div className="jh-banner-logo">
            <img src={logo} className="jh-logo"></img>
            <h1 className="jh-title">{title}</h1>
        </div>
        <div className="jh-subtitle">
            <Recommendation />
        </div>
    </div>
    );

}


export default Banner;