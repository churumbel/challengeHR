import React from "react";
import "./estilos/App.css";
import CarrouselResponse from "./componentes/CarrouselResponse";
import ButtonResponse from "./componentes/ButtonResponse";
import UserQuestion from "./componentes/UserQuestion";

const buttonActionItems = [
  {
    id: 1,
    title: "Lunes",
  },
  {
    id: 2,
    title: "Martes",
  },
  {
    id: 3,
    title: "Miércoles",
  },
  {
    id: 4,
    title: "Jueves",
  },
  {
    id: 5,
    title: "Viernes",
  },
];

const carrouselItems = [
  {
    imageUrl: "images/videojuego.svg",
    title: "Desarrollador JAVA Sr.",
    description: "3 candidatos preseleccionados",
    buttonText: "Seleccionar",
    onClickHandler: () =>
      alert(
        "¡Ha seleccionado el proceso de selección para Desarrollador JAVA Sr.!"
      ),
  },
  {
    imageUrl: "images/analista.svg",
    title: "Analista funcional Jr.",
    description: "4 candidatos preseleccionados",
    buttonText: "Seleccionar",
    onClickHandler: () =>
      alert(
        "¡Ha seleccionado el proceso de selección para Analista funcional Jr.!"
      ),
  },
  {
    imageUrl: "images/asistenteconversacional.svg",
    title: "Diseñador conversacional",
    description: "2 candidatos preseleccionados",
    buttonText: "Seleccionar",
    onClickHandler: () =>
      alert(
        "¡Ha seleccionado el proceso de selección para Diseñador conversacional!"
      ),
  },
];

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="questionBlock">
          <UserQuestion questionText="¿Cuáles son los procesos de selección activos?" />
        </div>
        <div className="responseBlock">
          <CarrouselResponse items={carrouselItems} />
        </div>
        <div className="questionBlock">
          <UserQuestion questionText="Quiero coordinar entrevistas" />
        </div>
        <div className="responseBlock">
          <ButtonResponse
            title="¿Qué día prefieres entrevistar a los candidatos?"
            actionItems={buttonActionItems}
            onClickHandler={(actionItem) =>
              alert(
                `Se envió un correo electrónico para coordinar la entrevista el ${actionItem.title}`
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
