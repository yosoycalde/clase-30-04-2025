import { useState } from "react";

function ListaTareas() {
    const[tareas, setTareas] = useState([])
    const[tareaActual, setTareaActual ] = useState("")

    const agregarTarea = () => {
        if(tareaActual.trim() !== "") {
            setTareas([...tareas, tareaActual]);
            setTareaActual("");
        }
    };
    return(
        <div>
            <input 
            type="text"
            value={tareaActual}
            onChange={(e) => setTareaActual(e.target.value)}
            placeholder="Nueva tarea" 
            />
            <button onClick={agregarTarea}>Agregar</button>
            <ul>
                {tareas.map((tarea, i)=> ( 
                <li key={i}>{tarea}</li>
                ))}
            </ul>
        
        </div>

    );
}
export default ListaTareas;