import { LightningElement, wire } from 'lwc';
import contactFname from '@salesforce/schema/Contact.FirstName';
import contactLname from '@salesforce/schema/Contact.LastName';
import contactEmail from '@salesforce/schema/Contact.Email';
import { reduceErrors } from 'c/ldsUtils';
const colData = [{ label: 'FName', fieldName: contactFname.fieldApiName, type: 'text' },
{ label: 'LName', fieldName: contactLname.fieldApiName, type: 'text' },
{ label: 'Email', fieldName: contactEmail.fieldApiName, type: 'Email' }
];
import getContacts from '@salesforce/apex/ContactController.getContacts';
export default class ContactList extends LightningElement {
    columData=colData;
    @wire(getContacts)
    contactList;
    showData(){
        alert(this.contactList.data);
        console.log('===data=='+this.contactList.data);
    }
    get errors(){
        return (this.contactList.error) ? reduceErrors(this.contactList.error):[];
    }
   


}