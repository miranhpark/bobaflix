// TODO: fix types
// utility function for mapping star image from rating
export function defineStars(data: any) {
    const starsAdded = data.map((row: any) => {
        return { ...row, stars: mapStars(row.rating) };
    });
    return starsAdded
}

// utility function for importing images
function importAll(directoryContext: any) {
    let images: any = {};
    directoryContext.keys().map((item: any, _index: any) => {
        images[item.replace('./', '')] = directoryContext(item);
    });
    return images;
}

// utility function to display Yelp star brand format for visual inspection
function mapStars(rating: number) {
    const images = importAll(require.context('../../public/stars', false, /\.(png|jpe?g|svg)$/));

    // TODO: just map these
    if (rating <= 0.5) {
        return images["Review_Ribbon_small_16_0@2x.png"]
    } else if (rating > 0.5 && rating <= 1) {
        return images["Review_Ribbon_small_16_half@2x.png"]
    } else if (rating > 1 && rating <= 1.5) {
        return images["Review_Ribbon_small_16_2_1_half@2x.png"]
    } else if (rating > 1.5 && rating <= 2) {
        return images["Review_Ribbon_small_16_2@2x.png"]
    } else if (rating > 2 && rating <= 2.5) {
        return images["Review_Ribbon_small_16_2_half@2x.png"]
    } else if (rating > 2.5 && rating <= 3) {
        return images["Review_Ribbon_small_16_3@2x.png"]
    } else if (rating > 3 && rating <= 3.5) {
        return images["Review_Ribbon_small_16_3_half@2x.png"]
    } else if (rating > 3.5 && rating <= 4) {
        return images["Review_Ribbon_small_16_4@2x.png"]
    } else if (rating > 4 && rating <= 4.5) {
        return images["Review_Ribbon_small_16_4_half@2x.png"]
    } else if (rating > 4.5) {
        return images["Review_Ribbon_small_16_5@2x.png"]
    }
}

// utility function for making distance a human readable string
export function distanceHuman(distanceMeters: number) {
    // conversion factor: 1 meter = 0.000621371 miles
    const miles = distanceMeters * 0.000621371;

    // round to the second decimal point
    const roundedMiles = Math.round(miles * 100) / 100;

    return roundedMiles;
}

// utility function for estimating walking distance
export function walkingDistance(distanceMeters: number) {
    // conversion factor: average human walking speed is approximately 80.476 m/min. (3 mph)
    const walkTime = distanceMeters / 80.476;

    // round to the nearest minute
    const roundedTime = Math.round(walkTime);

    return roundedTime;
}