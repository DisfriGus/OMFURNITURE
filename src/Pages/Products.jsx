import React from 'react'
import Layout from '../Component/Layout'
import Navbar from '../Component/Navbar'
import Banner from '../Component/ProductsPage/Banner'
import TopPickCard from '../Component/ProductsPage/TopPickCard'
import TopPickSlider from '../Component/ProductsPage/TopPickSlider'
import SliderComponent from '../Component/ProductsPage/SliderComp'
import FeaturedProductsCard from '../Component/ProductsPage/FeaturedProductsCard'
import FeaturedProductsSlider from '../Component/ProductsPage/FeaturedProductsSlider'
import Footer from '../Component/Footer'
import Logo from '../Assets/logo2.svg' 

const Products = () => (
    <>
        <Navbar logo={Logo} signup={'text-white'}  />
        <Layout>
            {/* banner */}
            <Banner />
            {/* banner */}
            <TopPickSlider />
            <FeaturedProductsSlider />


        </Layout>
        <br />
        <br />
        <br />
        <br />
        <br />

        <Footer />

    </>
)

export default Products