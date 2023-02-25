import "./ListaSuspensa.css"
const ListaSuspensa=(props) => {
    return(
        <div className="Lista-Suspensa">
            <label>{props.label}</label>
            <select value={props.valor} onChange={evento=>props.aoAlterado(evento.target.value)}  required={props.required}>
                <option value="" ></option>
                {props.itens.map(item =><option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
export default ListaSuspensa 