import React, {useState, useEffect} from 'react'
import Layout from '../Component/Layout'
import Navbar from '../Component/Navbar'
import Banner from '../Component/ProductsPage/Banner'
import TopPickCard from '../Component/ProductsPage/TopPickCard'
import TopPickSlider from '../Component/ProductsPage/TopPickSlider'
import SliderComponent from '../Component/ProductsPage/SliderComp'
import FeaturedProductsCard from '../Component/ProductsPage/FeaturedProductsCard'
import FeaturedProductsSlider from '../Component/ProductsPage/FeaturedProductsSlider'
import ShoppingCart from '../Assets/shoppingCart.svg'
import Footer from '../Component/Footer'
import Services from '../Component/ProductsPage/Services'
import TourBanner from '../Component/ProductsPage/TourBanner'
import Logo from '../Assets/logo2.svg'
import FurnituresSlider from '../Component/ProductsPage/FurnituresSlider'
import InspirationSets from '../Component/ProductsPage/InspirationSets'
import Skeleton from '../Component/ProductsPage/Skeleton'
import { ToastContainer, toast } from 'react-toastify';
import Subnavbar from '../Component/Subnavbar'

const Products = () => {


    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
      
        const timer = setTimeout(() => {
          setLoading(false);
        }, 800);
      
        return () => {
          clearTimeout(timer);
        };
      }, []);


      if (loading) {
        return <Skeleton />
      }



    return (
        <>
            <Subnavbar/>
            <Navbar logo={Logo} signup={'text-white'} cart={ShoppingCart} />
             <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
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
}




export default Products