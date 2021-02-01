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
            border="blue"
          />
        </div>
        <div className="content">
          <Job
            title="Writer"
            contractType="CDD"
            country="USA"
            city="New-York"
            border="lightblue"
          />
        </div>
        <div className="content">
          <Job
            title="Architect"
            contractType="CDI"
            country="England"
            city="London"
            border="green"
          />
        </div>
        <div className="content">
          <Job
            title="Secrétaire"
            contractType="CDD"
            country="France"
            city="Lyon"
            border="pink"
          />
        </div>
        <div className="content">
          <Job
            title="Skipper"
            contractType="Saisonnier"
            country="France"
            city="Bretagne"
            border="purple"
          />
        </div>
        <div className="content">
          <Job
            title="Chef de projet immobilier"
            contractType="CDI"
            country="France"
            city="Nancy"
            border="brown"
          />
        </div>
        <div className="content">
          <Job
            title="Technicen informatique"
            contractType="CDD"
            country="France"
            city="Paris"
            border="grey"
          />
        </div>
        <div className="content">
          <Job
            title="Mécanicien"
            contractType="CDD"
            country="France"
            city="Bordeaux"
            border="yellow"
          />
        </div>
        <div className="content">
          <Job
            title="Developpeur"
            contractType="Stage"
            country="France"
            city="Paris"
            border="black"
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
