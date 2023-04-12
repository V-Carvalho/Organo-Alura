import Collaborator from "../Collaborator/Collaborator";
import "./Time.css";

const Time = (props) => {
  return props.collaborators.length > 0 ? (
    <section
      className="container-time"
      style={{ backgroundColor: props.secondaryColor }}
    >
      <h3 style={{ borderColor: props.primaryColor }}>{props.teamName}</h3>

      <div className="collaborators">
        {props.collaborators.map((collaborator) => {
          return (
            <Collaborator
              key={collaborator.name}
              name={collaborator.name}
              cargo={collaborator.cargo}
              urlImage={collaborator.urlImage}
              time={collaborator.time}
              primaryColor={props.primaryColor}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
