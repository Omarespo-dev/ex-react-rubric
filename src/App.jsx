//Importo react router Per gestire la SPA 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Importo componenti page
import Homepage from "./pages/Homepage"
import AddContact from './pages/AddContact';
import Header from './components/Header/Header';

//Importiamo il Provider
import GlobalProvider from './context/GlobalContext';

function App() {

  return (
    <>
      <BrowserRouter>

        {/* GlobalProvider */}
        <GlobalProvider>
          
          {/* Header per tutte le page */}
          <Header />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/AddContact" element={<AddContact />} />
          </Routes>


        </GlobalProvider>

      </BrowserRouter>

    </>
  )
}

export default App
