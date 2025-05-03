import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export function BotonCambioTema(){
    const {tema, toggleTema } = useContext(ThemeContext);

    return(
        <button onClick={toggleTema}>
            Cambiar a tema {tema === "claro" ? "oscuro" : "claro"}
        </button>
    );   
}