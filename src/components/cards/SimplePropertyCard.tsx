import React from "react";
import { Property } from "../../types/Property";

interface PropertyCardProps {
    property: Property;
}

const SimplePropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    return (
        <div className="flex flex-col bg-white border rounded-xl cursor-pointer">
            <div className="w-full h-48 overflow-hidden rounded-t-xl">
                <img
                    className="w-full h-full object-cover"
                    src={property.images[0].imageUrl ? property.images[0].imageUrl : "https://via.placeholder.com/300"}
                    alt="Property Image"
                />
            </div>
            <div className="p-4 md:p-5">
                <h3 className="text-lg text-gray-800 font-semibold">
                    {property.title}
                </h3>
                <p className="mt-1 text-gray-600">
                    {property.address}
                </p>
                <p className="mt-1 text-gray-600 font-semibold">
                    ${property.price}
                </p>
            </div>
        </div>
    );
};

export default SimplePropertyCard;
