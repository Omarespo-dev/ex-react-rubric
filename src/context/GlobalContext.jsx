
//Importiamo il contesto
import { createContext, useEffect, useState } from "react";

//Definiamo il GlobalContext
export const GlobalContext = createContext()


//Funzione Globale
export default function GlobalProvider({ children }) {

    //FUNZIONI DA AGGIUNGERE PER RENDERLE DISPONIBILE IN TUTTO IL CODICE

    //Variabile di stato per immagazzinare i dati ricevuti dalla chiamata
    const [dataContact, setDataContact] = useState([])

    //1 Creiamo una variabile di stato per input inizializzandolo a stringa vuota
    const [inputSearch, setInputSearch] = useState("")
    //2 Impostiamo il value dell input e fa funzione onChange per gestire il cambiamento dell input


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



    //////////////////////////////////////////////////////////////////////////////////////////////
    
    // Controllo se i dati ci sono e se parte da arr vuoto prima che abbiamo i dati
    if (!dataContact || dataContact.length === 0) return <div className="flex justify-center mt-[50px] font-bold">CARICAMENTO...</div>


    //MAPPO DATI RICEVUTI
    //Funzione per aggiunta cotegorie Amico Lavoro Parente 
    function categoryUser(index) {
        if (index <= 2) {
            return "Amico"
        } else if (index <= 5) {
            return "Lavoro"
        } else {
            return "Parente"
        }
    }

    //Formattiamo i dati ricevuti dove andremo a ricavarci solo le proprieta che davvero ci servono
    const dataContactMappato = dataContact.map((contact, index) => {
        return {
            id: index + 1,
            name: Object.values(contact.name).slice(-2).join(" "),
            gender: contact.gender,
            email: contact.email,
            cell: contact.cell.split(" ").join("-"),
            picture: contact.picture.thumbnail,
            category: categoryUser(index)
        }
    })

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    //Ora da questi dati ricevuti dovremmo andare a filtrare per nome con la barra di ricerca in tempo reale 
    const filtroName = dataContactMappato.filter(contact => {
        return contact.name.toLowerCase().includes(inputSearch.toLowerCase().trim())
    })


    return (
        <GlobalContext.Provider value={{
            //variabile di stato
            dataContact, setDataContact, dataContactMappato,
            //input variabile con filtroName
            inputSearch,setInputSearch,filtroName
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
