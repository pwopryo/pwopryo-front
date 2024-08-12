export interface PropertyImage {
    imageUrl: string | null;
    isPrimary: boolean;
    propertyId: number;
}

export interface Property {
    title: string;
    address: string;
    city: string;
    department: string;
    type: string;
    price: number;
    disponibility: string;
    createdAt: string;
    images: PropertyImage[];
}
