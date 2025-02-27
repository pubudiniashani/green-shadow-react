export class Field{
    fieldId: string;
    name: string;
    size: number;
    location: string;


    constructor(fieldId: string, name: string,size: number, location: string) {
        this.fieldId = fieldId;
        this.name =name;
        this.size=size;
        this.location=location;



    }
}