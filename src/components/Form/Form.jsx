import "./Form.css";

import { useState } from "react";
import Input from "../Input/Input";
import DropdownList from "../DropdownList/DropdownList";
import ButtonSendForm from "../ButtonSendForm/ButtonSendForm";

const Form = (props) => {

  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [time, setTime] = useState("Suporte");

  const sendData = (event) => {
    event.preventDefault();
    props.formReturn({
      name: name,
      cargo: cargo,
      urlImage: urlImage,
      time: time,
    });

    setName("");
    setCargo("");
    setUrlImage("");
    setTime("Suporte");
  };

  return (
    <section className="container-form">
      <form onSubmit={sendData}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Input
          value={name}
          label="Nome"
          required={true}
          placeholder="Digite seu nome"
          inputReturn={(value) => {setName(value)}}
        />
        <Input 
          value={cargo}
          label="Cargo"
          required={true}           
          placeholder="Digite seu cargo"
          inputReturn={(value) => {setCargo(value)}} 
        />
        <Input
          value={urlImage} 
          label="Imagem" 
          placeholder="Informe o endereço da imagem"
          inputReturn={(value) => {setUrlImage(value)}} 
        />
        <DropdownList
          value={time}
          label="Time" 
          itens={props.times}
          selectReturn={(value) => {setTime(value)}} 
        />
        <ButtonSendForm>Criar Card</ButtonSendForm>
      </form>
    </section>
  );

  
};

export default Form;
