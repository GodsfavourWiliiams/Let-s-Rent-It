import HomePage from './pages/homepage.component';
import { Route, Routes } from 'react-router-dom';

function App() {
  return(
    <Routes>
       <Route path="/" element={ <HomePage /> } />
       <Route path="/" element={ <e/> } />
     </Routes>
  )
}

export default App;
