import { LoyaltyUser } from "./index";

export interface Review {
    name:string;
    stars:number;
    loyaltyUser:LoyaltyUser;
    date: string;
}

export interface Properties {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: [ number, string ];
    isAvailable: boolean;

}