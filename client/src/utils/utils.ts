// TODO: fix types
// utility function for mapping star image from rating
export function defineStars(yelpData: Array<{}>) {
    const images = importAll(require.context('../../public/stars', false, /\.(png|jpe?g|svg)$/));
    const starsAdded = yelpData.map((row: any) => {
        const roundedRating = Math.round(row.rating * 2) / 2
        return { ...row, stars: starImage(images, roundedRating) };
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

const starImageMap: { [key: string]: string; } = {
    "0": "Review_Ribbon_small_16_0@2x.png",
    "0.5": "Review_Ribbon_small_16_half@2x.png",
    "1": "Review_Ribbon_small_16_2_1_half@2x.png",
    "1.5": "Review_Ribbon_small_16_2@2x.png",
    "2": "Review_Ribbon_small_16_2_half@2x.png",
    "2.5": "Review_Ribbon_small_16_3@2x.png",
    "3": "Review_Ribbon_small_16_3_half@2x.png",
    "3.5": "Review_Ribbon_small_16_4@2x.png",
    "4": "Review_Ribbon_small_16_4_half@2x.png",
    "4.5": "Review_Ribbon_small_16_5@2x.png",
    "5": "Review_Ribbon_small_16_5@2x.png",
}

// utility function to display Yelp star brand format for visual inspection
function starImage(images: any, roundedRating: number) {
    return images[starImageMap[roundedRating?.toString()]];
}

