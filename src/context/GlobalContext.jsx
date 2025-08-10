
//Importiamo il contesto
import { createContext } from "react";

//Definiamo il GlobalContext
export const GlobalContext = createContext()


//Funzione Globale
export default function GlobalProvider({ children }) {

    //FUNZIONI DA AGGIUNGERE PER RENDERLE DISPONIBILE IN TUTTO IL CODICE
    




    return (
        <GlobalContext.Provider value={""}>
            {children}
        </GlobalContext.Provider>
    )
}
