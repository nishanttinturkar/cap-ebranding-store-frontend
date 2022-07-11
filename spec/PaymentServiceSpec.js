//const { default: Loan } = require('../src/model/Loan');

describe("Testing paymentService", function () {
    var payService = require('../src/service/PaymentService');
    var pay = require('../src/model/Payment');

    beforeEach(function () {

        paymentService = new payService.PaymentService();
    });

    it("Adding the payment", function () {
        //let loanId=1199
         pay.id = 57;
        pay.amount = 9000;
        pay.userId = 30;
        pay.mode = " ";
        pay.status = "paid";
        pay.createdAt = " "

        paymentService.addPayment((pay)).then((result) => {
            let payment = result.data;
            expect(payment.amount).toBe(9000);

        });
    });
    it("get payments ", function () {
        paymentService.getAllPayments().then((result) => {
            let payment = result.data;
            expect(payment.userId).toBe(30);
        });

    });





});