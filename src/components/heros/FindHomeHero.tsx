

const FindHomeHero = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className=" text-gray-600 gap-x-12 items-center justify-between  md:flex md:px-8 relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                    <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                        Do a Search for your Next Home.
                    </h2>
                    <div className="mt-8 flex items-center border border-gray-300 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-indigo-600 focus-within:border-indigo-600 ">
                        <input placeholder="Enter an Address, City or ZIP code"
                            className="w-full p-4 text-lg rounded-l-xl focus:outline-none"
                            type="search"
                        />
                        <span>
                            <button className=" p-4 bg-indigo-600 text-white rounded-r-xl hover:bg-indigo-500 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </button>

                        </span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default FindHomeHero