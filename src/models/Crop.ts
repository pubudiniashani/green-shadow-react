export class Crop {
    cropId: string;
    commonName: string;
    specificName: string;
    category: string;
    season: string;


    constructor(cropId: string, commonName: string,specificName: string, category: string,season: string) {
        this.cropId = cropId;
        this.commonName =commonName;
        this.specificName = specificName;
        this.category=category;
        this.season=season;

    }
}