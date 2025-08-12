//icone
import { MdOutlineGroups2 } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";

export default function SectionMidMain() {
  return (
    <div className="  mt-[50px] flex justify-center">
      <div className=" w-[80%] flex items-center flex-wrap p-2 justify-center gap-4">

        <section className="border-2 rounded-xl border-zinc-300 justify-center flex flex-col w-[200px] p-3 bg-blue-500 h-[100px]">
          <h3 className="text-[10px] text-white">TOTALE CONTATTI</h3>

          <section className="flex justify-between items-center">
            <p className="text-2xl text-white">40</p>
            <MdOutlineGroups2 size={35} className=" p-1 rounded-md text-white" />
          </section>

        </section>

        <section className="border-2 rounded-xl border-zinc-300 justify-center flex flex-col w-[200px] p-3 bg-green-300 h-[100px]">
          <h3 className="text-[10px] text-white">PREFERITI</h3>

          <section className="flex justify-between items-center">
            <p className="text-2xl text-white">40</p>
            <CiStar size={35} className=" p-1 rounded-md text-white" />
          </section>
        </section>

        <section className="border-2 rounded-xl border-zinc-300 justify-center flex flex-col w-[200px] p-3 bg-violet-400 h-[100px]">
          <h3 className="text-[10px] text-white">AGGIUNTI OGGI</h3>

          <section className="flex justify-between items-center">
            <p className="text-2xl text-white">40</p>
            <IoMdAdd  size={35} className=" p-1 rounded-md text-white" />
          </section>
        </section>


      </div>
    </div>
  )
}
