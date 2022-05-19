import HomePage from './pages/homepage/homepage.component';
import { Route, Routes } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import { Fragment, Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import SignIn from './pages/auth/signIn/sign-in';
import SignUp from './pages/auth/signUp/sign-up';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './firebase/firebase.utils';
import Checkout from './pages/checkout/checkOut';
import Page404 from './pages/404/notFound';
import CollectionsOverviewComponent from './component/collections-overview/collections-overview.component';
import CollectionPage from './pages/collections/collection.componennt';
import Reset from './pages/auth/reset/reset';
import StripeCheckOut from './component/stripeCheckOut/stripeCheckOut';

class App extends Component {
    unsubscribeFromAuth = null

  componentDidMount(){
    const { setCurrentUser } = this.props;
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if (userAuth) {
         setCurrentUser({ userAuth })}
         console.log(userAuth)
   })
   
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
  toast({
      autoClose: 3000,
      draggable: true
  });

   
  return (
    <Fragment>
      <ToastContainer/>
        <Routes>
         <Route path="/" element={ <HomePage /> } />
         <Route path="/shop" element={ <ShopPage /> }>
            <Route index element={ <CollectionsOverviewComponent/> }/>
            <Route path=":collectionId" element={<CollectionPage/>}/>
         </Route>
         <Route path="/signup" element={ <SignUp/> } />
         <Route path="/signin"  element={ <SignIn /> } />
         <Route path='/reset' element={ <Reset/> }/>
         <Route path="/checkout"  element={ <Checkout /> } />
         <Route path='/payment' element={ <StripeCheckOut/> }/>
         <Route path="*" element={ <Page404/>}/>
      </Routes>
    </Fragment>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser:  user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)


