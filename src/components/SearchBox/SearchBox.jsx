import css from "./SearchBox.module.css";
const SearchBox = ({value, onSearch}) => {
    return(
<div className={css.container}>
            <p>Search contacts by name</p>
            <input type="text" value={value} onChange={evt => onSearch(evt.target.value)}/>
</div>
    )
}
export default SearchBox;