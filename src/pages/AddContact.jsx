

export default function AddContact() {
  return (
    <div className="flex justify-center mt-[50px] ">
      <div className=" w-[80%] p-4 border-2 rounded-2xl border-zinc-300 flex justify-center">
        <form action="submit" className="flex flex-col items-center w-[300px] gap-3">

          <label for="text">Inserisci Nome:</label>
          <input
            type="text"
            className="border-1 w-full border-blue-500" />

          <label for="text">Inserisci Numero:</label>
          <input
            type="number"
            className="border-1 w-full border-blue-500" />

          <label for="email">Inserisci Email:</label>
          <input
            type="email"
            className="border-1 w-full border-blue-500" />

          <label for="email">Scegli categoria:</label>
          <section className="border-2 rounded-md border-zinc-300 flex p-2 text-black ">
            <select name="" id="" >
              <option value="">Tutti i contatti</option>
            </select>
          </section>

        </form>
      </div>
    </div>

  )
}
