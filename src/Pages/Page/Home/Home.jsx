import React from 'react';
import { Banner } from './Banner/Banner';
import TextStyle from '../../../Components/TextStyle/TextStyle';
import HomeSwiper from './Banner/HomeSwiper/HomeSwiper';
import Topsale from './TopSale/Topsale';
import LastAddProduct from './LastAddedProduct/LastAddProduct';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <TextStyle pragraph={'From 11:00am to 10:00pm'} hading={'ORDER ONLINE'}></TextStyle>
            </div>
            <div className='max-w-6xl mx-auto'>
                <LastAddProduct></LastAddProduct>
            </div>
            <div className='max-w-6xl mx-auto'>
                <HomeSwiper></HomeSwiper>

                <div className='my-7'>
                    <Topsale></Topsale>
                    <TextStyle pragraph={'Check it out'} hading={'FROM OUR MENU'}></TextStyle>
                </div>
            </div>

        </div>
    );
};

export default Home;