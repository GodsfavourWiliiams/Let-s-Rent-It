import React, {useState} from 'react';
import FooterComponent from '../../component/footer-component/footer-component';
import Header from '../../component/header-component/header';
import BlogPreview from '../Blogs/blogPreview';
import Hero from './homePage Compenents/Hero/Hero';
import Brands from './homePage Compenents/brands/Brands';



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
                <Brands/>
                <BlogPreview/>
            </div>
        <FooterComponent/>
    </>
 )
}

export default HomePage;
