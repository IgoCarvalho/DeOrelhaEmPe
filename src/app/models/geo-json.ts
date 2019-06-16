export class GeoJson {
    type: string
    features: any[]
    constructor( features: any[] = [] ){
        this.type = "FeatureCollection",
        this.features = features
    }
}
