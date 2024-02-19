// organization for custom types

// possible locations type
export enum NetflixLocation {
    LosGatos = '121 Albright Wy, Los Gatos, CA 95032',
    NewYork = '888 Broadway, New York, NY 10003',
    LosAngeles = '5808 Sunset Blvd, Los Angeles, CA 90028',
}

// partial Yelp API JSON object (only necessary fields)
export type YelpBusiness = {
    name: string;
    distance: number;
    rating: number;
    url: string;
}

