import css from "./Contact.module.css";
const Contact = ({ data: { id, name, number }, onDelete }) => {
    return (
        <div className={css.container}>
        <div className={css.containertext}>
            <p className={css.text}>
                {name}
            </p>
            <p className={css.text}>
                {number}
            </p>
        </div>
            <button className={css.btn} onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    )
}
export default Contact;