import React from 'react';
import './Tarea.sass';

const Tarea = (props) => {
	return(
		<div className="tarea">
			{props.textoTarea}
			<button onClick={()=>{props.borrarTarea(props.id)}}>Borrar</button>
		</div>
	);
}

export default Tarea;