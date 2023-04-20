import "./Collaborator.css"

const Collaborator = (props) => {
  const defaultImage = "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png"

  return(
    <div className="collaborator" >
      <div className="header" style={{backgroundColor: props.primaryColor}}>
        <img src={props.urlImage == "" ? defaultImage : props.urlImage} alt="Foto do perfil" />
      </div>

      <div className="footer">
        <h4>{props.name}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  )
}

export default Collaborator;