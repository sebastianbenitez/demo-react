import React, { useState, useEffect } from 'react';

function Formulario({ onFormSubmit }) {

	const [nombre, setNombre] = useState('');

	const handleEnviar = (e) => {
		e.preventDefault();
		if(nombre === '') return;
		onFormSubmit(nombre);
		setNombre('');
	}

	useEffect(()=>{
		document.title = nombre.length;
	});

	return(
		<form onSubmit={handleEnviar}>
			<input 
				type="text"
				value={nombre}
				onChange={(e)=> setNombre(e.target.value)}/>
			<button>+</button>
		</form>
	);
}

export default Formulario;