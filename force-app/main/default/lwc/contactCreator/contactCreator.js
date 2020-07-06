import { LightningElement } from 'lwc';
import contactFname from '@salesforce/schema/Contact.FirstName';
import contactLname from '@salesforce/schema/Contact.LastName';
import contactEmail from '@salesforce/schema/Contact.Email';
import cont from '@salesforce/schema/Contact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ContactCreator extends LightningElement {
    objectapi=cont;
    fieldsto=[contactFname,contactLname,contactEmail];
    handleSuccess(event){
        //alert(event.detail.id);
        const toastEvent = new ShowToastEvent({
            title: "contact created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
    

}