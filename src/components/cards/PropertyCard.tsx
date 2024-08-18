import React from "react";
import { Property } from "../../types/Property";
import { formatPrice, truncateText } from "../../utils/utils";

interface PropertyCardProps {
    property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    return (
        <div className="flex flex-col bg-white shadow-lg shadow-white border rounded-xl cursor-pointer text-gray-600 font-roboto group">
            <div className="relative w-full">
                <div className="h-56 overflow-hidden rounded-t-xl">
                    <img
                        className="w-full h-full object-cover"
                        src={property.images[0].imageUrl ? property.images[0].imageUrl : "https://via.placeholder.com/300"}
                        alt="Property Image"
                    />
                </div>

                <div className="absolute top-4 right-4 cursor-pointer transition-all duration-300 hover:scale-110 z-50">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                </div>

                <button type="button" className="absolute top-0 start-0 z-30 justify-center h-full px-3 cursor-pointer flex items-center transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 hover:scale-110">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white">
                        <svg className="w-3 h-3 text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 justify-center h-full px-3 cursor-pointer flex items-center transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 hover:scale-110">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white">
                        <svg className="w-3 h-3 text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

            <div className="p-4 md:p-5 space-y-2">
                <div className="flex justify-between">
                    <h4 className="text-gray-800 text-lg font-extrabold font-merriweather">
                        {formatPrice(property.price)}
                    </h4>

                    <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                        {property.disponibility}
                    </span>
                </div>
                <h5 className="text-gray-800 text-base font-medium font-merriweather">
                    {truncateText(property.title)}
                </h5>
                <div className="flex items-center gap-1 pb-5 border-b">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    <p className="text-sm">
                        {truncateText(property.address)}
                    </p>
                </div>

                <div className="flex justify-between items-center gap-5 pt-2 text-sm">
                    <div className="flex justify-center items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ruler"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" /><path d="m14.5 12.5 2-2" /><path d="m11.5 9.5 2-2" /><path d="m8.5 6.5 2-2" /><path d="m17.5 15.5 2-2" />
                        </svg>
                        <div className="pt-1 flex gap-1">
                            <span className="text-gray-800 font-semibold">
                                {property.sqft}
                            </span>
                            <span>
                                sqft
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bed-double"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" /><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" /><path d="M12 4v6" /><path d="M2 18h20" />
                        </svg>
                        <div className="pt-1 flex gap-1">
                            <span className="text-gray-800 font-semibold">
                                {property.numBedrooms}
                            </span>
                            <span>
                                bed
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shower-head"><path d="m4 4 2.5 2.5" /><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" /><path d="M15 5 5 15" /><path d="M14 17v.01" /><path d="M10 16v.01" /><path d="M13 13v.01" /><path d="M16 10v.01" /><path d="M11 20v.01" /><path d="M17 14v.01" /><path d="M20 11v.01" />
                        </svg>
                        <div className="pt-1 flex gap-1">
                            <span className="text-gray-800 font-semibold">
                                {property.numBathrooms}
                            </span>
                            <span>
                                bath
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PropertyCard;
