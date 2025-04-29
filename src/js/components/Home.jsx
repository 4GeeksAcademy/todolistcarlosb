import React, { useState } from "react";

//create your first component
const Home = () => {


	let [todos, setTodos] = useState([]);

	let [texto, setTexto] = useState("");


	let maximoTareas = 5;

	const agregar = (e) => {
		//verifica si la tecla es enter
		if (e.key == "Enter") {
			//valida si hay info en el input
			if (texto == "") {
				return;
			}
			//limite de tareas
			if (todos.length < maximoTareas) {
				todos.push(texto);
			} else {
				alert('solo puedes agregar maximo ' + maximoTareas + ' elementos');
			}
			//limpiar form
			setTexto("");

		}
	}

	const cambioTexto = (e) => {
		setTexto(e.target.value);
	}

	const eliminarTarea = (paramIndex) => {
		let elementos = todos.filter((item, index) => index !== paramIndex);
		setTodos(elementos);
	}

	return (
		<div className="row justify-content-center">
			<div className="col-md-6 col-xl-6 col-sm-12">
				<h1 className="text-center">Todos</h1>
				<ul className="list-group mt-4">
					<li className="list-group-item">
						<input type="text"
							className="form-control"
							placeholder="Ingrese una tarea"
							value={texto}
							onChange={cambioTexto}
							onKeyDown={agregar} />
					</li>
					{
						todos.map((item, index) => (
							<li className="list-group-item tarea" key={index}>
								{item}
								<span className="float-end btnEliminar d-none" onClick={() => eliminarTarea(index)}>X</span>
							</li>
						))
					}
					<li className="list-group-item text-muted">Total tareas {todos.length}</li>

				</ul>
			</div>

		</div>
	);
};

export default Home;