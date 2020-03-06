import React from 'react';

class Formulario extends React.Component {

	state = {nombre: ''};

	handleEnviar = (e) => {
		e.preventDefault();
		if(this.state.nombre === '') return;
		this.props.onFormSubmit(this.state.nombre);
		this.setState({nombre:''});
	}

	render() {
		return(
			<form onSubmit={this.handleEnviar}>
				<input 
					type="text"
					value={this.state.nombre}
					onChange={(e)=> this.setState({nombre: e.target.value})}/>
				<button>+</button>
			</form>
		);
	}
}

export default Formulario;