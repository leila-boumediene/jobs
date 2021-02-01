import "./App.css";
import Job from "./Job";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="Header">
        <Header head="The board job" />
      </div>

      <div className="Work">
        <div className="content">
          <Job
            title="Assistante de direction"
            contractType="CDI"
            country="France"
            city="Paris"
          />
        </div>
        <div className="content">
          <Job
            title="Writer"
            contractType="CDD"
            country="USA"
            city="New-York"
          />
        </div>
        <div className="content">
          <Job
            title="Architect"
            contractType="CDI"
            country="England"
            city="London"
          />
        </div>
        <div className="content">
          <Job
            title="Secrétaire"
            contractType="CDD"
            country="France"
            city="Lyon"
          />
        </div>
        <div className="content">
          <Job
            title="Skipper"
            contractType="Saisonnier"
            country="France"
            city="Bretagne"
          />
        </div>
        <div className="content">
          <Job
            title="Chef de projet immobilier"
            contractType="CDI"
            country="France"
            city="Nancy"
          />
        </div>
        <div className="content">
          <Job
            title="Technicen informatique"
            contractType="CDD"
            country="France"
            city="Paris"
          />
        </div>
        <div className="content">
          <Job
            title="Mécanicien"
            contractType="CDD"
            country="France"
            city="Bordeaux"
          />
        </div>
        <div className="content">
          <Job
            title="Developpeur"
            contractType="Stage"
            country="France"
            city="Paris"
          />
        </div>
      </div>
      <div className="footer">
        <Footer name="Made with React at le Reacteur" />
      </div>
    </>
  );
}
export default App;
