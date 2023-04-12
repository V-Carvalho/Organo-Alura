import { useState } from "react";
import Banner from "./components/Banner/Banner.jsx";
import Form from "./components/Form/Form.jsx";
import Time from "./components/Time/Time.jsx";

function App() {
  const times = [
    {
      teamName: "Suporte",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      teamName: "Supervisão",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      teamName: "Manutenção",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      teamName: "Implantação",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      teamName: "Coordenação",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      teamName: "Monitoramento",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
  ];

  const [collaborators, setCollaborators] = useState([]);

  const addNewCollaborator = (newCollaborator) => {
    setCollaborators([...collaborators, newCollaborator]);
  };

  return (
    <div>
      <Banner />
      <Form
        times={times.map((time) => time.teamName)}
        formReturn={(newCollaborator) => {
          console.log(newCollaborator);
          addNewCollaborator(newCollaborator);
        }}
      />

      {times.map((time) => {
        return (
          <Time
            key={time.teamName}
            teamName={time.teamName}
            primaryColor={time.primaryColor}
            secondaryColor={time.secondaryColor}
            collaborators={collaborators.filter((collaborators) => {
              return collaborators.time === time.teamName;
            })}
          />
        );
      })}
    </div>
  );
}

export default App;
