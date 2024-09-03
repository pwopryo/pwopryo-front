import { house1, } from "../../assets/images"

const HomeHero = () => {
    return (
        <section className="py-16 relative overflow-hidden">
            <div className=" text-gray-600 gap-x-12 items-center justify-between  md:flex md:px-8 relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                    <h1 className="text-sm text-indigo-600 font-medium">
                        Over 200 successful deals
                    </h1>
                    <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                        Find your perfect space in Haiti
                    </h2>
                    <p>
                        Discover a wide range of rental properties including houses, appartements, offices, and more on Pwopryo.
                    </p>
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                        <a href="javascript:void(0)" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                            Explore
                        </a>
                        <a href="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                            Learn More
                        </a>
                    </div>
                </div>
                <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                    <img
                        src={house1}
                        className=" md:rounded-tl-[108px]"
                        alt="Image"
                    />
                </div>
            </div>
        </section>
    )
}

export default HomeHero