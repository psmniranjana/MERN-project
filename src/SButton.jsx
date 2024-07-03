import "./SButton.css"

function SButton(props){
    return(
        <button className="sb" style={{backgroundColor:props.color}} onClick={props.func}>{props.title}</button>

    )
}

export default SButton;
