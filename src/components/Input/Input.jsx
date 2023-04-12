import "./Input.css";

const Input = (props) => {  
  return (
    <div className="container-input">
      <label>{props.label}</label>
      
      <input
        value={props.value}
        required={props.required}
        placeholder={props.placeholder}
        onChange={(event) => {
          props.inputReturn(event.target.value);
        }}
      />
    </div>
  );
};

export default Input;
