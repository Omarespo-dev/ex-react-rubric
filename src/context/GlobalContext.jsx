
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
        //Verifico se  c'e gia la categoria altrimenti mi rimani quella che ho definito io
        const category = contact.category ? contact.category : categoryUser(index)

        return {
            id: contact.login.uuid,
            name: contact.name.first,
            surname: contact.name.last,
            gender: contact.gender,
            email: contact.email,
            cell: contact.cell.split(" ").join("-"),
            // picture: contact.picture.thumbnail,
            category

        }
    })

    //Rimuovo i duplicati per la categoria 
    const removeDuplicate = [...new Set(dataContactMappato.map(contact => contact.category))];
    //Rimuovi duplicati per genere
    const removeDuplicateGener = [...new Set(dataContactMappato.map(contact => contact.gender))]

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    // Normalizzo l'input e lo divido in parole
    const searchWords = inputSearch.trim().toLowerCase().split(" ");

    // Filtro dei contatti
    const filtroNameSurname = dataContactMappato.filter(contact => {

        //condizione se searchWord.length e > 1 allora controlla 
        if (searchWords.length > 1) {
            // Se ci sono più parole, tutte devono matchare nome o cognome (AND)
            return searchWords.every(word => contact.name.toLowerCase().includes(word) || contact.surname.toLowerCase().includes(word));
        } else {
            // Se c'è solo una parola, basta che una corrisponda (OR)
            return searchWords.some(word => contact.name.toLowerCase().includes(word) || contact.surname.toLowerCase().includes(word));
        }
    });

    
    

    //Funzione per rimuovere un contatto
    function removeContact(contactId) {
        setDataContact((prevArr) => {
            return prevArr.filter(contact => contact.login.uuid !== contactId)
        })
    }


    return (
        <GlobalContext.Provider value={{
            //variabile di stato
            dataContact, setDataContact, dataContactMappato,
            //input variabile con filtroName
            inputSearch, setInputSearch, filtroNameSurname,
            //removeDuplicate e genere
            removeDuplicate, removeDuplicateGener,

            //funzione rimuovi contact
            removeContact
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
