import { Flag_of_the_US, Green_Statue } from "../../assets/images";
import './Introduction.css';
import { INTRODUCTION_TITLE, INTRODUCTION_DESC } from "../../constants";

export const Introduction = () => {
    return (
        <div className="introduction-section">
            <div className="intro">
                <p className="intro-title">{INTRODUCTION_TITLE}</p>
                <p className="intro-desc">{INTRODUCTION_DESC}</p>
                <a className="intro-start" href="/voting">Start</a>
            </div>

            <div className="america">
                <img src={Flag_of_the_US} alt="" className="flag" />
                <img src={Green_Statue} alt="" className="statue" />
            </div>
        </div>
    )
}