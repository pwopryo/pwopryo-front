import { useState } from "react"
import { useUser } from "../../utils/userContext"
import { logo1 } from "../../assets/images"


const NavbarWithSearch = () => {
    const [state, setState] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const { user, setUser } = useUser();

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:3333/auth/logout', {
                method: 'POST',
                // credentials: 'include'

            });
            console.log(response.ok);

            if (response.ok) {
                setUser(null);
            }
            else {
                console.error('Logout failed:', await response.json());
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const navigation = [
        { title: "Find Home", path: "/find-home" },
        { title: "Post a Property", path: "javascript:void(0)" },
        { title: "Explore", path: "javascript:void(0)" }
    ]

    const dropdownItems = [
        { title: "Profile", },
        { title: "Logout", action: handleLogout }
    ];


    return (
        <nav className="bg-white border-b w-full md:static md:text-sm ">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="/">
                        <img
                            src={logo1}
                            width={120}
                            height={50}
                            alt="Pwopryo logo"
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-gray-700 hover:text-indigo-600">
                                        <a href={item.path} className="block">
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                        <div className="relative">
                            <button onClick={toggleDropdown} className="flex items-center space-x-2">
                                <span className="text-gray-700 hover:text-indigo-600">{user?.fullName}</span>
                                <img src={logo1} alt="Avatar" className="rounded-full w-8 h-8" />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                    <ul>
                                        {
                                            dropdownItems.map((item, idx) => (
                                                <li key={idx}>
                                                    <button
                                                        onClick={item.action}
                                                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                    >
                                                        {item.title}
                                                    </button>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )}
                        </div>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default NavbarWithSearch