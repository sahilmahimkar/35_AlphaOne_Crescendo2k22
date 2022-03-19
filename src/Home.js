import React from 'react'
import "./Home.css";
import "./Product";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>

                <div className="home__row">
                    <Product 
                    id="12321341"
                    title="The Alchemist"
                    price={500}
                    image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
                    rating={5}
                    />
                    <Product 
                    id="49538094"
                    title="A Glimpse Of Universe"
                    price={220.00}
                    image="https://m.media-amazon.com/images/I/91wUFiHq0zL._AC_UY218_.jpg"
                    rating={5}
                    />
                    <Product 
                    id="4903850"
                    title="Stories We Never Tell"
                    price={399.99}
                    image="https://m.media-amazon.com/images/I/81dxL5k0sbL._AC_UY218_.jpg"
                    rating={3}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home;