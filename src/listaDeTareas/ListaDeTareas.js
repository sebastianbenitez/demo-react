import React from 'react';
import Tarea from './tareas/Tarea';

const ListaDeTareas = (props) => {
	
	const ListaTareas = props.tareas.map((tarea, i)=>{
		return <Tarea 
				textoTarea={tarea} 
				key={i} 
				id={i}
				borrarTarea={props.borrarTarea}/>
	});

	return(
		<div>
			{ListaTareas}
		</div>
	);
}

export default ListaDeTareas;