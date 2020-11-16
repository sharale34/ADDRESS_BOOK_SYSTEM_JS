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

        if (addressBookArray.find((contact) => (contact.firstName == firstName && contact.lastName == lastName))) {
            console.log("Warning!!! No Duplicate Entry of the same person in the Address Book");
            return;
        }
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

    //view All Contacts available in Array
    let viewContacts = () => {
        console.log(addressBookArray.toString() + "\n");
    }
    // find existing contact person using their name and edit it
    let editContact = () => {
        console.log(addressBookArray.length);
        if (addressBookArray.length == 0) {
            console.log("No contacts Available in Array");
            return;
        }
        let firstNameEdit = prompt("Enter the first name whose contact you want to edit: ");
        let newFirstName = prompt("Enter new first name: ");
        let checkFirstName = addressBookArray.find((contact) => contact.firstName == firstNameEdit);
        if (checkFirstName == undefined) {
            console.log("No contact with given first name");
            return;
        }
        else {
            addressBookArray.find((contact) => contact.firstName == firstNameEdit).firstName = newFirstName;
        }
    }

    // To find a person with name delete it from the array
    let deleteContact = () => {
        if (addressBookArray.length == 0) {
            console.log("No contacts Available in Array");
            return;
        }
        let firstNamedelete = prompt("Enter the first name whose contact you want to delete: ");
        // returns the value of the element that passes the given condition
        let check = addressBookArray.find((contact) => contact.firstName == firstNamedelete);
        if (check == undefined) {
            console.log("No contact with given first name");
            return;
        }
        else {
            //Filtering out contacts which doesnt matches with given FirstName
            addressBookArray = addressBookArray.filter((contact) => contact.firstName != firstNamedelete);
        }
    }

    //Find total number of contacts
    let countOfContacts = () => {
        console.log("Total Number of contacts are : " + addressBookArray.reduce((totalCount, contact) => totalCount += 1, 0));
    }

    //To search Person in a particular City or State 
    let searchContactInState = () => {
        let stateName = prompt("Enter state name: ");
        let firstName = prompt("Enter contact first name: ")
        let serachcontactByState = addressBookArray.filter(contact => contact.state == stateName).find(contact => contact.firstName == firstName);
        console.log("First contact found in given state: \n" + serachcontactByState);
    }

    // To view Persons by State
    let viewContactInState = () => {
        let stateName = prompt("Enter state name: ");
        let viewcontactsByState = addressBookArray.filter(contact => contact.state == stateName).map(contact => contact);
        if (viewcontactsByState.length > 0)
            console.log("Contacts found in given state: \n" + viewcontactsByState.toString());
        else
            console.log("No contacts found for given state");
    }

    console.log("Welcome To AddressBook Program through JavaScript");
    let userChoice = 0;
    //calling add to addressbook method
    do {
        userChoice = prompt("Enter \n1 : Add contact \n2 : Edit a Contact \n3 : Delete a contact \n4 : Number of contacts \n5 : To search Person in City or State \n6 : To view Persons by State \n7 : View all Contacts \n0 : Exit:");
        if (userChoice == 1) {
            addContactsToAddressBook();
        }
        if (userChoice == 2) {
            editContact();
        }
        if (userChoice == 3) {
            deleteContact();
        }
        if (userChoice == 4) {
            countOfContacts();
        }
        if (userChoice == 5) {
            searchContactInState();
        }
        if (userChoice == 6) {
            viewContactInState();
        }
        if (userChoice == 7) {
            viewContacts();
        }
    } while (userChoice != 0);
}