import React from 'react';
import './App.css';
import Cabecera from './cabecera/Cabecera';
import ListaDeTareas from './listaDeTareas/ListaDeTareas';
import Formulario from './formulario/Formulario';

class App extends React.Component {

	state = { 
		tareas: [
			'Tarea 1',
			'Tarea 2'
		]
	};

	componentWillUnmount() {
		alert('Goku aaahhhhhhhh')
	}

	componentDidUpdate() {
		/*setTimeout(()=>{
			this.setState({tareas: [
				'Tarea act',
				'Tarea act']
			})
		}, 2000)*/
	}

	/*componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(res => res.json())
			.then(
				result => {
					let tareasJson = result.map(x => x.title);
					this.setState({tareas: tareasJson});
				},
				error => {
					this.setState({tareas: ['Error']});
				}
			)
	}*/

	async componentDidMount() {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos');
		const json = await response.json();

		let tareasJson = json.map(x => x.title);
		this.setState({tareas: tareasJson});
	}

	handleBorrarTarea = (index) => {
		const nuevasTareas = this.state.tareas;
		nuevasTareas.splice(index, 1);

		this.setState({tareas: nuevasTareas});
	}

	handleAgregarTarea = tarea => {
		//this.setState({tareas: this.state.tareas.concat(tarea)});
		this.setState({tareas: [...this.state.tareas, tarea]});
	}

	render() {
		return (
			<div className="card text-center">
				<div className="card-header">
					<Cabecera cantidadTareas={this.state.tareas.length}/>
				</div>
				<div className="card-body">
					<ListaDeTareas 
						tareas={this.state.tareas}
						borrarTarea={this.handleBorrarTarea}/>
				</div>
				<div className="card-footer text-muted">
					<Formulario onFormSubmit={this.handleAgregarTarea}/>
				</div>
			</div>
		);	
	}
}

export default App;
