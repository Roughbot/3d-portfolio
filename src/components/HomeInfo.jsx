import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center ">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-2 px-4 text-white mx-5">
      Hi, I'm <span className="font-semibold">Sathyanarayanan</span>👋
      <br />A Software Engineer From Pondicherry
    </h1>
  ),
  2: (
    <InfoBox
      text="Want to know more about me and Check out my skills."
      link="/about"
      btnText="Go on and Click"
    />
  ),
  3: (
    <InfoBox
      text="Built multiple projects to strengthen my Knowledge and Skills."
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Looking for a dev? I'm just few clicks aways."
      link="/contact"
      btnText="Ping me."
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
