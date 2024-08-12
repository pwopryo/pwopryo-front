import HomeHero from "../components/heros/HomeHero"
import MainNavbar from "../components/navbars/MainNavbar"
import Categories from "../components/sections/Categories"
import CTA from "../components/sections/CTA"
import Faqs from "../components/sections/Faqs"
import Footer from "../components/sections/Footer"
import GridCities from "../components/sections/GridCities"
import Testimonial from "../components/sections/Testimonial"

const Home = () => {
    return (
        <main className="w-full max-container min-h-screen">
            <MainNavbar />
            <HomeHero />
            <Categories />
            <Testimonial />
            <GridCities />
            <CTA />
            <Faqs />
            <Footer />
        </main>
    )
}

export default Home