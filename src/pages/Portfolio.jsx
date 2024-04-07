import Proj from "../components/Proj";
const projList = [
  {
    title: "National Parks and Birds",
    imgSrc: "images/parks.jpg",
    deployed: "https://treblotnad.github.io/07-project-1/",
    id: 0,
  },
  {
    title: "JATE",
    imgSrc: "images/jate.jpg",
    deployed: "https://pwa-text-editor-rmyc.onrender.com/",
    id: 1,
  },
  {
    title: "SpellSmith",
    imgSrc: "images/spellsmith.png",
    deployed: "https://spellsmith-mvp-859237cb6128.herokuapp.com/",
    id: 2,
  },
  {
    title: "WeatherDashboard",
    imgSrc: "images/weather.jpg",
    deployed: "https://treblotnad.github.io/06-weather-dashboard/",
    id: 3,
  },
];

export default function Portfolio() {
  return (
    <div className="portfolioContainer">
      {projList.map((proj) => (
        <Proj props={{...proj}} key={proj.id}></Proj>
      ))}
    </div>
  );
}
