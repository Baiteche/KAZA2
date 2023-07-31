
import './App.css';
import{Routes , Route} from 'react-router-dom'
import Accueil from './pages/accueil/Accueil';
import Apropos from './pages/Apropos/Apropos';
import Product from './pages/productdetails/Product';

import Nomatch from './components/nomatch/Nomatch';

function App() {
  return (
<>

    <Routes> 
        <Route path='/' element={<Accueil/>}/>
        <Route path='Apropos' element={<Apropos/>}/>
        <Route path='*' element={<Nomatch/>}/>
        <Route path=":productId" element={<Product />} />

    </Routes>
</> 
  );
}

export default App;
