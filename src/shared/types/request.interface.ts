export interface IRequest {
    property: string;
}

export interface IRequestGet extends IRequest {
    query?: {
        id?: number;
    }
}