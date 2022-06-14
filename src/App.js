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
import CollectionViewMore from './component/collection-view-more/collectionViewMore';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import Blog from './pages/Blogs/blog';
import About from './pages/aboutPage/About';
import Admindashboard from './pages/adminDashboard/dashboard';
import Dashboard from './pages/adminDashboard/dashboard/dashboard';
import Products from './pages/adminDashboard/products/Products';
import FormProduct from './pages/adminDashboard/uploadProduct/form.product';
import Settings from './pages/adminDashboard/settings/Settings';
import Profile from './pages/adminDashboard/profile/Profile';
import OrderSuccess from './component/orderSuccess/OrderSuccess';





class App extends Component {
    unsubscribeFromAuth = null

  componentDidMount(){
    const { setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
          setCurrentUser({ userAuth })
        }
          console.log(userAuth);
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
            <Route index element={ <CollectionsOverviewComponent/> }/> {/* this is the default /shop view/ */}
            <Route path=":collectionId" element={<CollectionPage/>}/> {/* this is for the product categories/ */}
            <Route path=':collectionId/:productId' element={ <CollectionViewMore/> }/> {/* this is for the product overview/ */}
         </Route>
         
         <Route path="/signup" element={ <SignUp/> } />
         <Route path="/signin"  element={ <SignIn /> } />
         <Route path='/reset' element={ <Reset/> }/>
         <Route path="/checkout"  element={ <Checkout /> } />
         <Route path="/ordersuccess" element={ <OrderSuccess/> }/>
         <Route path="/blog"  element={ <Blog /> } />
         <Route path="/about"  element={ <About /> } />
         <Route path="*" element={ <Page404/>}/>
         <Route path='/dashboard' element={ <Admindashboard/>}>
            <Route index element={ <Dashboard/> }/>
            <Route path="products" element={<Products/>}/> {/* this is for the product view/ */}
            <Route path="addItem" element={ <FormProduct/> }/> {/* this is for the creating new product / */}
            <Route path='settings' element={ <Settings/> }/>
            <Route path="profile" element={ <Profile/> }/>
         </Route>
      </Routes>
    </Fragment>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser:  selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)



