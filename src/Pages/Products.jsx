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
import Services from '../Component/ProductsPage/Services'
import TourBanner from '../Component/ProductsPage/TourBanner'
import Logo from '../Assets/logo2.svg' 
import FurnituresSlider from '../Component/ProductsPage/FurnituresSlider'
import InspirationSets from '../Component/ProductsPage/InspirationSets'

const Products = () => (
    <>
        <Navbar logo={Logo} signup={'text-white'}  />
        <Layout>
            {/* banner */}
            <Banner />
            {/* banner */}
            <TopPickSlider />
            <FeaturedProductsSlider />
            <InspirationSets />
            <FurnituresSlider />
            <Services />
            <TourBanner />

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