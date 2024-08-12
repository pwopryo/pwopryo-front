import { Property } from "../../types/Property";
import PropertyCard from "../cards/PropertyCard"

const properties: Property[] = [
    {
        title: "Luxurious Beachfront Villa",
        address: "Delmas 19",
        city: "Port-au-Prince",
        department: "Ouest",
        type: "Villa",
        price: 500000,
        disponibility: "À louer",
        createdAt: "2024-08-08T00:34:34.467+00:00",
        images: [
            { imageUrl: null, isPrimary: true, propertyId: 1 },
            { imageUrl: null, isPrimary: false, propertyId: 1 },
            { imageUrl: null, isPrimary: false, propertyId: 1 }
        ]
    },
    {
        title: "Modern Apartment in Downtown",
        address: "Rue du Centre",
        city: "Cap-Haïtien",
        department: "Nord",
        type: "Apartment",
        price: 250000,
        disponibility: "À vendre",
        createdAt: "2024-07-15T10:22:12.123+00:00",
        images: [
            { imageUrl: null, isPrimary: true, propertyId: 2 },
            { imageUrl: null, isPrimary: false, propertyId: 2 }
        ]
    },
    {
        title: "Cozy Cottage in the Mountains",
        address: "Route de Kenscoff",
        city: "Kenscoff",
        department: "Ouest",
        type: "Cottage",
        price: 150000,
        disponibility: "À louer",
        createdAt: "2024-05-21T14:56:34.467+00:00",
        images: [
            { imageUrl: null, isPrimary: true, propertyId: 3 },
            { imageUrl: null, isPrimary: false, propertyId: 3 }
        ]
    },
    {
        title: "Charming Villa with Pool",
        address: "Rue Faustin 1er",
        city: "Jacmel",
        department: "Sud-Est",
        type: "Villa",
        price: 600000,
        disponibility: "À vendre",
        createdAt: "2024-04-10T09:12:34.467+00:00",
        images: [
            { imageUrl: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isPrimary: true, propertyId: 4 },
            { imageUrl: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isPrimary: false, propertyId: 4 }
        ]
    },
    {
        title: "Penthouse with Ocean View",
        address: "Avenue Jean-Paul II",
        city: "Pétion-Ville",
        department: "Ouest",
        type: "Penthouse",
        price: 800000,
        disponibility: "À vendre",
        createdAt: "2024-03-05T13:45:34.467+00:00",
        images: [
            { imageUrl: "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isPrimary: true, propertyId: 5 },
            { imageUrl: "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isPrimary: false, propertyId: 5 }
        ]
    },
    {
        title: "Rustic Farmhouse in the Countryside",
        address: "Route Nationale #1",
        city: "Gonaïves",
        department: "Artibonite",
        type: "Farmhouse",
        price: 300000,
        disponibility: "À louer",
        createdAt: "2024-02-14T08:20:34.467+00:00",
        images: [
            { imageUrl: "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isPrimary: true, propertyId: 6 },
            { imageUrl: "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", isPrimary: false, propertyId: 6 }
        ]
    },
    {
        title: "Elegant Mansion in the Suburbs",
        address: "Route de Frères",
        city: "Pétion-Ville",
        department: "Ouest",
        type: "Mansion",
        price: 1200000,
        disponibility: "À vendre",
        createdAt: "2024-01-30T11:34:34.467+00:00",
        images: [
            { imageUrl: null, isPrimary: true, propertyId: 7 },
            { imageUrl: null, isPrimary: false, propertyId: 7 }
        ]
    },
    {
        title: "Chic Loft in the City Center",
        address: "Boulevard Toussaint Louverture",
        city: "Port-au-Prince",
        department: "Ouest",
        type: "Loft",
        price: 450000,
        disponibility: "À louer",
        createdAt: "2024-06-12T07:10:34.467+00:00",
        images: [
            { imageUrl: null, isPrimary: true, propertyId: 8 },
            { imageUrl: null, isPrimary: false, propertyId: 8 }
        ]
    }
];

const Categories = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {
                    properties.map((property: Property) =>
                        <PropertyCard property={property} />
                    )
                }
            </div>
        </div>
    )
}

export default Categories