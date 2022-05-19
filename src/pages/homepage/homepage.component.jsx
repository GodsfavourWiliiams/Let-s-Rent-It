import React, {useState} from 'react';
import FooterComponent from '../../component/footer-component/footer-component';
import Header from '../../component/header-component/header';
import Category from '../../component/category-components/catergories';

const HomePage = ({currentUser}) =>  {
    const  [IsFixed, setIsFixed] = useState(false)

    const onScrollTOp = () => {
    window.scrollY >= 35 ? setIsFixed(true) : setIsFixed(false)
    }

    window.addEventListener('scroll', onScrollTOp)
    
    return(
    <>
        <Header currentUser={currentUser}/>
            <div className={IsFixed ? 'mt-60' : ''}>
                <Category/>
            </div>
        <FooterComponent/>
    </>
 )
}

export default HomePage;
