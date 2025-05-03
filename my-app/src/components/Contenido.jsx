import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { BotonCambioTema } from "./BotonCambioTema";
import ListaTareas from "./ListaTareas";


export function Contenido(){
    const { tema } = useContext(ThemeContext);
    const estilos = {
        backgroundColor: tema === "claro" ? "#fff" : "#222",
        color: tema === "claro" ? "#000" : "#fff",
        height: "100vh",
        padding: "2rem",
        transition: "all 0.3s",
    };

    return(
        <div style={estilos}>
            <h1>App Con tema {tema}</h1>
            <BotonCambioTema/>
                <h1> Lista de tareas </h1>
                <ListaTareas/>
        
        </div>
    );

}