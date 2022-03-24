import React from 'react';
import FooterComponent from '../../component/footer-component/footer-component';
import Header from '../../component/header-component/header';
import Category from '../../component/category-components/catergories';

const HomePage = () =>  (
    <div className=''>
        <Header/>
            <Category/>
        <FooterComponent/>
    </div>
)

export default HomePage;
