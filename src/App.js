import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import { Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import SignIn from './pages/auth/signIn/sign-in';
import SignUp from './pages/auth/signUp/sign-up';


function App() {
  return(
    <Fragment>
        <Routes>
         <Route path="/" element={ <HomePage /> } />
         <Route path="/shop" element={ <ShopPage/> } />
         <Route path="/signup" element={ <SignUp/> } />
         <Route path="/signin" element={ <SignIn/> } />
      </Routes>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatchEvent(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
