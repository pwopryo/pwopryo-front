export interface PropertyImage {
    imageUrl: string | null;
    isPrimary: boolean;
    propertyId: number;
}

export interface Property {
    id: number;
    title: string;
    address: string;
    city: string;
    department: string;
    type: string;
    price: number;
    disponibility: string;
    numBedrooms: number;
    numBathrooms: number;
    sqft: number;
    createdAt: string;
    images: PropertyImage[];
}
