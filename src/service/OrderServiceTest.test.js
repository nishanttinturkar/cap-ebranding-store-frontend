import Order from '../model/Order';
import OrderItems from '../model/OrderItems';
import OrderService from './OrderService';


test('Testing add order function.', async () => {
    let service = new OrderService();

    let odr = new Order("0012-01-12", 300, 179, 155 );
    console.log("inside test " + JSON.stringify(odr))
    await service.addOrder(new Order("0012-01-12", 300, 179, 155)).then((result) => {

        let order = result.data.success;
        expect(order).toBe(true);

    });
})

test('Testing add order items function.', async () => {
    let service = new OrderService();

    let odrItem = new OrderItems( "", 6, 199, 173, 1 );
    console.log("inside test " + JSON.stringify(odrItem))
    await service.addOrderItems(new OrderItems( "", 6, 199, 173, 1 )).then((result) => {

        let orderItems = result.data.success;
        expect(orderItems).toBe(true);

    });
})



// test('Testing find category by id function.', async () => {
//     let service = new CategoryService();
//     await service.getCategoryById(240).then((result) => {
//         let category = result.data;
    
//         expect(category.name).toBe('Apparel');
//     });
// })

// test('Testing Update category by id function.', async () => {
//     let cat=new Category();
//     cat.id=240;
//     cat.name="Apparel";
//     cat.description="apparel";
//     cat.imgUrl="https://th.bing.com/th?q=Blank+Apparel&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247";
//     let service = new CategoryService();
//     await service.updateCategory(cat).then((result) => {
//          service.getCategoryById(240).then((result) => {
//             let category = result.data;
//             expect(category.name).toBe('Apparel');
//         });
//     });
// })