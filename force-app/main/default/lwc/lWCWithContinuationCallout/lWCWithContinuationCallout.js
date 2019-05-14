import { LightningElement, track, wire } from 'lwc';
import startRequest from '@salesforce/apexContinuation/ContinuationHandler_AC.startRequest';
export default class LWCWithContinuationCallout extends LightningElement {
    @track studentList;
    @track customerList;
    @track candidateList;

    startRequest() {
        startRequest()
        .then(result => {
            // eslint-disable-next-line no-console
            console.log('result --> '+result);
            // eslint-disable-next-line vars-on-top
            var parsedVal = JSON.parse(result);
            
            this.studentList = parsedVal.studentWrapperList;
            console.log('11-->  '+this.studentList);

            
            this.candidateList = parsedVal.candidateList;
            console.log('22-->  '+this.candidateList);

            
            this.customerList = parsedVal.customerList;
            console.log('33-->  '+this.customerList);
        })
        .catch(error => {
            this.error = error;
        });
    }

}