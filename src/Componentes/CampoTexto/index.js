import "./CampoTexto.css"
  const CampoTexto= (pros) =>{
    const aoDigitado=(evento) =>{
      pros.aoAlterado(evento.target.value)
  }

    return(
        <div className="campo-texto">
        <label>{pros.label}</label>
          <input value ={pros.valor}onChange={aoDigitado} required={pros.obrigatorio} placeholder={pros.placeholder}/>
        
      </div>
    )
}
export default CampoTexto