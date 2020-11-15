// Address Book System using JS

{
    // To ensure whether Valid Contacts are added...
    const prompt = require('prompt-sync')();
    const NAME_PATTERN = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    const ADDRESS_CITY_STATE_PATTERN = RegExp('^[A-Za-z]{4,}$');
    const PINCODE_PATTERN = RegExp('^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$');
    const PHONE_NUMBER_PATTERN = RegExp('^[6-9]{1}[0-9]{9}$');
    const EMAIL_PATTERN = RegExp('^[a-zA-Z0-9-]+(.[_A-Za-z0-9-+.]+)+@[a-zA-Z0-9]+(.[A-Za-z0-9]+)+.[a-zA-Z]{2,4}$');
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
    //array to store contacts
    let addressBookArray = new Array();
    //add contacts to address book
    function addContactsToAddressBook() {
        let firstName = prompt("Enter First Name: ");
        let lastName = prompt("Enter Last Name: ");
        let address = prompt("Enter Address: ");
        let city = prompt("Enter City Name: ");
        let state = prompt("Enter State Name: ");
        let zipCode = prompt("Enter Zip Code: ");
        let phoneNumber = prompt("Enter Phone Number: ");
        let emailId = prompt("Enter Email id: ");
        try {
            let contact = new Contact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
            addressBookArray.push(contact);
            console.log((contact.toString()));
        }
        catch (e) {
            console.error(e);
        }
    }

    console.log("Welcome To AddressBook Program through JavaScript");
    let choice = 0;
    //calling addContactsToAddressBook method to add new contact to Array
    do {
        choice = prompt("Enter \n1 : Add contact \n0 : Exit: ");
        if (choice == 1) {
            addContactsToAddressBook();
        }
    } while (choice != 0);
}