import "./Collaborator.css"

const Collaborator = (props) => {
  console.log(props.urlImage)


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

// https://user-images.githubusercontent.com/34304319/231544506-e232912c-70d9-4ba8-85a4-f699adc6ccbb.png