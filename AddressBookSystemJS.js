// Address Book System using JS

{
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
            this.firstName = params[0];
            this.lastName = params[1];
            this.address = params[2];
            this.city = params[3];
            this.state = params[4];
            this.zip = params[5];
            this.phoneNumber = params[6];
            this.email = params[7];
        }
        //toString() method
        toString() {
            return "First Name: " + this.firstName + ", Last Name: " + this.lastName + ", Address: " + this.address + ", City: " + this.city +
                ", State: " + this.state + ", Zip: " + this.zip + ", Phone Number: " + this.phoneNumber + ", Email: " + this.email;
        }
    }

    let contact = new Contact("Sourabh", "Harale", "Gandhari", "Hyderabad", "Telangana", 503114, 9494118273, "hsourabh@gmail.com");
    console.log((contact.toString()));
}