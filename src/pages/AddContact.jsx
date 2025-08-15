
//Dati dal context
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../src/context/GlobalContext"

export default function AddContact() {
  const { dataContact, setDataContact, removeDuplicate, removeDuplicateGener } = useContext(GlobalContext)

  //dati filtrati su cui andremo ad aggiungere il contatto
  // console.log(filtroName)

  //Inizializziamo form con variabile di stato con ""
  const [formData, setFormaData] = useState({
    name: "",
    surname: "",
    cell: "",
    email: "",
    category: "",
    gender: "",
  })

  //funzione onChange per gestire il cambiamento di ogni input
  function handleChange(e) {
    setFormaData((prevalue) => {
      return {
        //copio oggetto e metto variabile dinamica su e.target.name dove ad ogni cambiamento che ha = name mi cambi anche il suo value
        ...prevalue,
        [e.target.name]: e.target.value
      }
    })
  }

  //Funzione per aggiungere contatto all arr originale 
  function addContact(e) {
    e.preventDefault()

    //Contatto da aggiungere deve essere uguale a quello mappato che abbiamo nel contex
    const newContact = {
      //inventa id univoco
      login: { uuid: crypto.randomUUID() },
      name: { first: formData.name, last: formData.surname},
      gender: formData.gender,
      email: formData.email,
      cell: formData.cell.split(" ").join("-"),
      category: formData.category
    }
    

    setDataContact((prevArr) => {
      return [...prevArr, newContact]
    })
  }

  return (
    <div className="flex justify-center mt-[50px] ">
      <div className=" w-[80%] p-4 border-2 rounded-2xl border-zinc-300 flex justify-center">
        <form action="submit" className="flex flex-col items-center w-[300px] gap-3" onSubmit={addContact}>

          <label>Inserisci Nome*:</label>
          <input
            type="text"
            className="border-1 w-full border-blue-500"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Inserisci Cognome*:</label>
          <input
            type="text"
            className="border-1 w-full border-blue-500"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />

          <label>Inserisci Numero*:</label>
          <input
            type="number"
            className="border-1 w-full border-blue-500"
            name="cell"
            value={formData.cell}
            onChange={handleChange}
          />

          <label>Inserisci Email*:</label>
          <input
            type="email"
            className="border-1 w-full border-blue-500"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Scegli categoria*:</label>
          <section className="border-2 rounded-md border-zinc-300 flex p-2 text-black ">
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="">--Scegli Categoria--</option>
              {removeDuplicate.map(categ => (
                <option value={categ} key={categ}>{categ}</option>
              ))}
            </select>
          </section>

          <label>Scegli Genere*:</label>
          <section className="border-2 rounded-md border-zinc-300 flex p-2 text-black ">
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">--Scegli Genere--</option>
              {removeDuplicateGener.map(categ => (
                <option value={categ} key={categ}>{categ}</option>
              ))}
            </select>
          </section>

          <label>Inserisci Img*:</label>

          <button type="submit" className="cursor-pointer bg-blue-500 p-2 rounded-2xl flex items-center text-white font-bold hover:bg-blue-950 transition ease-in-out duration-300 delay-150">Aggiungi Contatto</button>
        </form>
      </div>
    </div>

  )
}
