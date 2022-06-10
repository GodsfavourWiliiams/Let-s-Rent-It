import React, {useState} from 'react';
import FooterComponent from '../../component/footer-component/footer-component';
import Header from '../../component/header-component/header';
import Cookies from '../cookies/cookies';
import Hero from './homePage Compenents/Hero/Hero';



const HomePage = ({currentUser}) =>  {
    const  [IsFixed, setIsFixed] = useState(false)

    const onScrollTOp = () => {
    window.scrollY >= 35 ? setIsFixed(true) : setIsFixed(false)
    }

    window.addEventListener('scroll', onScrollTOp)
    
    return(
    <>
        <Header currentUser={currentUser}/>
            <div className={IsFixed ? 'mt-60' : 'mt-16'}>
                <Hero/>
                <Cookies/>
            </div>
        <FooterComponent/>
    </>
 )
}

export default HomePage;
