import { Property } from "../../types/Property";
import SimplePropertyCard from "../cards/SimplePropertyCard"

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
        <section className="max-w-screen-xl mx-auto py-16">
            <div className="text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                    <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                        Categories
                    </h2>
                    <p>
                        Explore a variety of rental options like houses, appartements, villas and more.
                    </p>
                </div>

                <div className="flex-none md:mt-0 md:max-w-xl">
                    <a href="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                        View All
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:px-8">
                {
                    properties.map((property: Property) =>
                        <SimplePropertyCard property={property} />
                    )
                }
            </div >
        </section>
    )
}

export default Categories
