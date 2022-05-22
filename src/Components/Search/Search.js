import "./Search.css"
function Search(props){
    return(
        <div className="searchDiv">
        <input 
        type={props.type}
        onKeyUp={props.onKeyUp}
        placeholder={props.placeholder}
         />
    </div>
    )
}
export default Search