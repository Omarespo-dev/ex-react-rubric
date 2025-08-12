
//Impoto icone 
import { IoIosSearch } from "react-icons/io";



export default function SectionUpMain() {
  return (
    <div className=" mt-[50px] flex justify-center">
      <div className=" w-[80%] flex items-center flex-wrap p-6 border-2 rounded-2xl border-zinc-300 justify-between">

        <section className="border-2 rounded-md border-zinc-300 flex w-[80%] p-1">
          <IoIosSearch size={30} />
          <input type="text" placeholder="Cerca contatti..." className="text-zinc-500 w-full outline-0 ml-1" />
        </section>

        <section className="border-2 rounded-md border-zinc-300 flex p-2 text-black ">
          <select name="" id="" >
            <option value="">Tutti i contatti</option>
          </select>
        </section>

      </div>
    </div>
  )
}
