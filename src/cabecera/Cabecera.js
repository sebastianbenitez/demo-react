import React from 'react';

const Cabecera = (props) => {
	return(
		<div>
			<h1>
				Hay {props.cantidadTareas} tareas pendientes
			</h1>
		</div>
	);
}

export default Cabecera;