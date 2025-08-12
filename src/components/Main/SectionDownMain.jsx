
//icone
import { HiOutlineViewList } from "react-icons/hi";
import { LuLayoutGrid } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

//Dati dal context
import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/GlobalContext"

export default function SectionDownMain() {

  const { dataContact, setDataContact } = useContext(GlobalContext)

  // Controllo se i dati ci sono e se parte da arr vuoto prima che abbiamo i dati
  if (!dataContact || dataContact.length === 0) return <div className="flex justify-center mt-[50px] font-bold">CARICAMENTO...</div>

  //Debug per i dati
  // console.log(dataContact)



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

  //dati mappati
  console.log(dataContactMappato)

  return (
    <div className="flex justify-center mt-[50px] ">
      <div className=" w-[80%] p-4 border-2 rounded-2xl border-zinc-300 flex flex-col">

        <section>
          <h2 className="flex justify-between items-center text-xl">Lista Contatti
            <span className="flex gap-3">
              <HiOutlineViewList size={25} />
              <LuLayoutGrid size={25} />
            </span>
          </h2>
        </section>


        {/* Card */}
        <div className="w-full flex gap-4 justify-center items-center flex-wrap mt-[50px]">
          {dataContactMappato.map(contact => (
            <div className=" w-[260px] p-2 border-2 rounded-xl border-zinc-300" key={contact.id}>
              {/* Section 1 */}
              <section className="flex justify-between ">
                <img src={contact.picture} alt="Foto random" className="h-[50px] w-[50px] rounded-full object-cover" />
              <h2 className="flex flex-col font-bold">{contact.name} <span className="text-[12px] font-normal">{contact.category}</span></h2>
                <CiStar size={35} className=" p-1 rounded-md text-zinc-400" />
              </section>

              {/* Section 2 */}
              <section className="mt-[15px]">
                <p className="flex items-center gap-2 text-zinc-600 text-[12px] mb-[10px]"><CiMail size={20} /> {contact.email}</p>
                <p className="flex items-center gap-2 text-zinc-600 text-[12px]"><IoIosCall size={20} />{contact.cell}</p>
              </section>

              {/* Section 3 */}
              <section className="flex mt-[20px] gap-3 mb-[10px]">

                <section className="bg-blue-200 w-[50%] p-1 rounded-xl flex justify-center items-center cursor-pointer">
                  <p className="flex items-center gap-1 text-[10px] text-blue-500 font-bold"><IoCreateOutline size={17} />Modifica</p>
                </section>

                <section className="bg-red-200 w-[50%]  p-1 rounded-xl flex justify-center items-center cursor-pointer">
                  <p className="flex items-center gap-1 text-[10px] text-red-500 font-bold"><MdDeleteOutline size={17} />Elimina</p>
                </section>
              </section>

            </div>
          ))}

        </div>

      </div>
    </div>
  )
}
