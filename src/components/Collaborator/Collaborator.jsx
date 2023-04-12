import "./Collaborator.css"

const Collaborator = (props) => {
  return(
    <div className="collaborator" >
      <div className="header" style={{backgroundColor: props.primaryColor}}>
        <img src={props.urlImage} alt="Foto do perfil" />
      </div>

      <div className="footer">
        <h4>{props.name}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  )
}

export default Collaborator;