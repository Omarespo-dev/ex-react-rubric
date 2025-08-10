//icone
import { MdOutlineGroups2 } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

//Link
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className=" h-[100px] flex justify-center shadow-lg">
      <div className=" w-[80%] flex items-center flex-wrap sm:flex-row flex-col justify-center ">

        <section className="flex items-center sm:w-[50%] ">
          <MdOutlineGroups2 size={40} className="bg-blue-500 p-1 rounded-md text-white" />
          <h1 className="ml-2">Rubrica Contatti</h1>
        </section>

        <section className="flex justify-center sm:w-[50%] flex-wrap sm:justify-end sm:m-0 mt-[20px] items-center">

          <Link to={"/"} className="mr-7">
            <h2 className="text-blue-400 hover:text-blue-950 transition ease-in-out duration-300 delay-150">Home</h2>
          </Link>

          <Link to={"/AddContact"}>
            <button className="cursor-pointer bg-blue-500 p-2 rounded-2xl flex items-center text-white font-bold hover:bg-blue-950 transition ease-in-out duration-300 delay-150" >
              <IoMdAdd size={20} /> Aggiungi contatto
            </button>
          </Link>

        </section>

      </div>
    </header>
  )
}
