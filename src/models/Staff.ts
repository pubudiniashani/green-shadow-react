export class Staff{
    staffId: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    address: string;


    constructor(staffId: string, firstName: string,lastName: string, gender: string, email: string,address: string) {
        this.staffId = staffId;
        this.firstName =firstName;
        this.lastName=lastName;
        this.gender=gender;
        this.email=email;
        this.address=address;



    }
}