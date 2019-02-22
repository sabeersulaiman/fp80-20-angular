export interface DogList {
    offset: number;
    limit: number;
    total: number;
    data: Dog[];
}

export interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}
