//const { default: Loan } = require('../src/model/Loan');

describe("Testing  cart Service",  function () {

   

    
    var cartService = require('../src/service/ShoppingCartService');

  
    var cart=require('../src/model/ShoppingCart');
    var cartItem=require('../src/model/ShoppingCartItems');

  
  
  
  
  
      beforeEach(function () {
  
           shopCartService = new cartService.ShoppingCartService();
  
       
  
      });
  
  
  
  
      it("Order By ID",  function () {
  
        shopCartService.getCartById(184).then((result) => {
  
              let cart = result.data;
  
              expect(cart.userId).toBe(156);
  
             
  
         });
  
      });


      it("Adding the cart", function() {

        cart.userId= 159;
    


        shopCartService.addShoppingCart((cart)).then((result) => {     
            let cart = result.data;   
            expect(cart.userId).toBe(159);
           
        });
      
    })

  
        
        
        

  });