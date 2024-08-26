

const FindHomeHero = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className=" text-gray-600 gap-x-12 items-center justify-between  md:flex md:px-8 relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                    <h2 className="text-4xl text-gray-800 mb-6 font-extrabold md:text-5xl">
                        Do a Search for your Next Home
                    </h2>
                    <input placeholder="Enter an address, City or ZIP code"
                        className="w-full md:w-96 p-4 text-lg mt-8 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600" 
                        type="search" />
                </div>
            </div>

        </section>
    )
}

export default FindHomeHero