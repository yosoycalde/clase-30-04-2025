import  { useState } from "react";
import { ThemeContext } from "../ThemeContext";

export function ThemeProvider ({ Children }) {
    const [tema, setTema] = useState ("claro");

    const toggleTema = () => {
        setTema((prev) => (prev === "claro" ? "oscuro" : "claro"));

    }

    return (
        <ThemeContext.Provider value={{tema, toggleTema}}>
            {Children}
        </ThemeContext.Provider>
    )
}