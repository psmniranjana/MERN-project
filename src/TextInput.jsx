import "./TextInput.css"

function TextInput(props){
return(
    <div>
        <input type="text"  className="txt" placeholder={props.holder} />
    </div>
)
}

export default TextInput;