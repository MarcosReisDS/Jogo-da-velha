export interface IRequest {
    property: string;
}

export interface IRequestGet extends IRequest {
    query?: {
        id?: number;
    }
}

export interface IRequestPut extends IRequestGet {
    data?: {
        you?: string;
        draw?: string;
        they?: string;
    }
}