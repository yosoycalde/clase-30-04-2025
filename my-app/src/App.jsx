import { ThemeProvider } from "./components/ThemeProvider";
import { Contenido } from "./components/Contenido";


function App() {
  return(
    <ThemeProvider>
      <Contenido />
    </ThemeProvider>  
   
  );

  
}
export default App; 