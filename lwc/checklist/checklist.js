import { LightningElement, api, track} from 'lwc';
export default class Checklist extends LightningElement {
    value;
    @api
    recordId;
    @api
    flexipageRegionWidth;


    // Track the current image source
    @api imgVariant = 'warning'; // Initial image variant
    @api imgVariant2 = 'warning'; // Initial image variant
    @api imgVariant3 = 'warning'; // Initial image variant
    @api
    docCheck1 = false; // 
    @api
    name1 = "Element One";
    @api
    docCheck2 = false; //
    @api
    name2 = "Element Two";
    @api
    docCheck3 = false; //
    @api
    name3 = "Element Three";
   
    @track renderFlow = false;
    @api inputVariables = [];
    @api
    label = "Check";
    @api
    label2 = "Check";
    @api
    label3 = "Check";


    handleStatusChange(event) {
        if (event.detail.status === 'FINISHED_SCREEN') {


            //Hide the Flow again
            this.renderFlow = false;

        }
        else {
            console.log('Flow execution encountered an unexpected status.');
        }
    }

    // Handle the button click event
    handleClick() {
        // Change the image source
       
        if (this.imgVariant === 'warning') {
            this.imgVariant = 'base-autocomplete'; // New image variant
            this.check1 = true;
            this.label = "Uncheck";

            //checks if other 2 have been checked
            if (this.imgVariant2 === 'base-autocomplete' && this.imgVariant3 === 'base-autocomplete') {
                this.inputVariables = [
                    { 
                    name: 'recordId',
                    type: 'String',
                    value: this.recordId
                    }
                ]
                this.renderFlow = true;
            } else {
                this.renderFlow = false;
            }
        } else {
            this.imgVariant = 'warning'; // Revert to the initial image URL
            this.check1 = false;
            this.label = "Check";
        }

    }

    handleClick2() {
        // Change the image source

        if (this.imgVariant2 === 'warning') {
            this.imgVariant2 = 'base-autocomplete'; // New image variant
            this.check2 = true;
            this.label2 = "Uncheck";


            if (this.imgVariant === 'base-autocomplete' && this.imgVariant3 === 'base-autocomplete') {
                this.inputVariables = [
                    {
                        name: 'recordId',
                        type: 'String',
                        value: this.recordId
                    }
                ]
                this.renderFlow = true;
            } else {
                this.renderFlow = false;
            }


        } else {
            this.imgVariant2 = 'warning'; // Revert to the initial image URL
            this.check2 = false;
            this.label2 = "Check";
        }

    }

    handleClick3() {
        // Change the image source
       
        if (this.imgVariant3 === 'warning') {
            this.imgVariant3 = 'base-autocomplete'; // New image variant
            this.check3 = true;
            this.label3 = "Uncheck";



            if (this.imgVariant === 'base-autocomplete' && this.imgVariant2 === 'base-autocomplete') {
                this.inputVariables = [
                    {
                        name: 'recordId',
                        type: 'String',
                        value: this.recordId
                    }
                ]
                this.renderFlow = true;
            } else {
                this.renderFlow = false;
            }


        } else {
            this.imgVariant3 = 'warning'; // Revert to the initial image URL
            this.check3 = false;
            this.label3 = "Check";
        }

    }

    

}
