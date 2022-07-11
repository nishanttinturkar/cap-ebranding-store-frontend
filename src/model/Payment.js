
class Payment {
    id ='' ;
    amount='';
    userId='' ;
    mode='';
    status='';
    created_At='';

    constructor(amount, userId, mode, status, created_At) {
        this.amount = amount;
        this.userId = userId;
        this.mode = mode;
        this.status = status;
        this.created_At = created_At
    }
    

}

export default Payment ;