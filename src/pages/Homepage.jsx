
//Importo componenti 
import SectionDownMain from "../components/Main/SectionDownMain";
import SectionMidMain from "../components/Main/SectionMidMain";
import SectionUpMain from "../components/Main/SectionUpMain";


export default function Homepage() {
  return (
    <main>
      {/* Search Bar with filter */}
      <SectionUpMain />

      {/* tables */}
      <SectionMidMain />

      {/* List Contact */}
      <SectionDownMain />

    </main>
  )
}
