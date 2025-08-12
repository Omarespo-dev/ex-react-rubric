
//Importiamo il contesto
import { createContext, useEffect, useState } from "react";

//Definiamo il GlobalContext
export const GlobalContext = createContext()


//Funzione Globale
export default function GlobalProvider({ children }) {

    //FUNZIONI DA AGGIUNGERE PER RENDERLE DISPONIBILE IN TUTTO IL CODICE

    //Variabile di stato per immagazzinare i dati ricevuti dalla chiamata
    const [dataContact, setDataContact] = useState([])

    //Chiamata per i contatti
    async function fetchContact() {

        try {
            const response = await fetch(`https://randomuser.me/api/?results=10&seed=reactcontacts`)

            //verifico response
            if (!response.ok) {
                console.error(`Errore HTTP`)
            }

            //converto la risposta in Json
            const convertJson = await response.json()
            //aggiorno la variabile con i dati ricevuti
            setDataContact(convertJson.results)

        } catch (err) {
            console.error(err)
        }

    }

    // Effetto per eseguire la fetch dei contatti al montaggio del provider
    useEffect(() => {
        fetchContact()
    }, [])





    return (
        <GlobalContext.Provider value={{
            //variabile di stato
            dataContact, setDataContact,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
