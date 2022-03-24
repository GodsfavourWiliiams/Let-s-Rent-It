import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import { Fragment } from 'react';
import './App.css';
import Auth from './pages/auth/auth';


function App() {
  return(
    <Fragment>
        <Routes>
         <Route path="/" element={ <HomePage /> } />
         <Route path="/shop" element={ <ShopPage/> } />
         <Route path="/signin" element={ <Auth/> } />
      </Routes>
  </Fragment>
  )
}

export default App;
