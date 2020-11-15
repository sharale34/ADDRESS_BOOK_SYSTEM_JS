// Address Book System using JS

{
    // To ensure whether Valid Contacts are added...
    const NAME_PATTERN = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    const ADDRESS_CITY_STATE_PATTERN = RegExp('^[A-Za-z]{4,}$');
    const PINCODE_PATTERN = RegExp('^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$');
    const PHONE_NUMBER_PATTERN = RegExp('^[6-9]{1}[0-9]{9}$');
    const EMAIL_PATTERN = RegExp('^[a-zA-Z0-9-]+(.[_A-Za-z0-9-+.]+)+@[a-zA-Z0-9]+(.[A-Za-z0-9]+)+.[a-z]{2,4}$');
    class Contact {
        //Property
        firstName;
        lastName;
        address;
        city;
        state;
        zip;
        phoneNumber;
        email;

        constructor(...params) {
            if (!NAME_PATTERN.test(params[0])) throw "Invalid first Name provided"
            {
                this.firstName = params[0];
            }
            if (!NAME_PATTERN.test(params[1])) throw "Invalid last Name provided"
            {
                this.lastName = params[1];
            }
            if (!ADDRESS_CITY_STATE_PATTERN.test(params[2])) throw "Invalid address  provided"
            {
                this.address = params[2];
            }
            if (!ADDRESS_CITY_STATE_PATTERN.test(params[3])) throw "Invalid city Name provided"
            {
                this.city = params[3];
            }
            if (!ADDRESS_CITY_STATE_PATTERN.test(params[4])) throw "Invalid satate Name provided"
            {
                this.state = params[4];
            }
            if (!PINCODE_PATTERN.test(params[5])) throw "Invalid pin code provided"
            {
                this.zip = params[5];
            }
            if (!PHONE_NUMBER_PATTERN.test(params[6])) throw "Invalid phone number provided"
            {
                this.phoneNumber = params[6];
            }
            if (!EMAIL_PATTERN.test(params[7])) throw "Invalid email Id provided"
            {
                this.email = params[7];
            }
        }
        // returns the value of a String object.
        toString() {
            return "First Name: " + this.firstName + ", Last Name: " + this.lastName + ", Address: " + this.address + ", City: " + this.city +
                ", State: " + this.state + ", Zip: " + this.zip + ", Phone Number: " + this.phoneNumber + ", Email: " + this.email;
        }
    }
    try {
        let contact = new Contact("Sourabh", "Harale", "Gandhari", "Hyderabad", "Telangana", 503114, 9494118273, "hsourabh@gmail.com");
        console.log((contact.toString()));
    } catch (error) {
        console.error(error);
    }
}