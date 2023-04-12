import "./DropdownList.css";

const DropdownList = (props) => {
  return (
    <div className="container-dropdown-list">
      <label>{props.label}</label>

      <select value={props.value} onChange={(event) => { props.selectReturn(event.target.value) }}>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropdownList;
