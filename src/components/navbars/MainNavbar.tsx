import NavbarWithLinks from "./NavbarWithLinks"
import NavbarWithSearch from "./NavbarWithSearch"
import { useUser } from "../../utils/userContext"



const MainNavbar:  React.FC = () => {
    const { user } = useUser();
    return user ? <NavbarWithSearch /> : <NavbarWithLinks />   


}



export default MainNavbar