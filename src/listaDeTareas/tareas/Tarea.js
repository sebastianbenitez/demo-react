import React from 'react';

const Tarea = (props) => {
	return(
		<div>
			{props.textoTarea}
			<button onClick={()=>{props.borrarTarea(props.id)}}>Borrar</button>
		</div>
	);
}

export default Tarea;