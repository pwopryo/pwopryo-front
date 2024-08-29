import MainNavbar from "../components/navbars/MainNavbar"
import FindHomeHero from "../components/heros/FindHomeHero"
import Footer from "../components/sections/Footer"

const FindHome = () => {
    return (
        <main className=" min-h-screen">
            <MainNavbar />
            <FindHomeHero />
            <Footer />
        </main>

    )
}

export default FindHome