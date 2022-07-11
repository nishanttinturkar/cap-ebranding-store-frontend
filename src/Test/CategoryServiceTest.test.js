// import Category from '../model/Category';
// import CategoryService from '../service/CategoryService';


// test('Testing add category function.', async () => {
//     let service = new CategoryService();

//     let cat = new Category(258, "a", "apparel", "https://th.bing.com/th?q=Blank+Apparel&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247");
//     console.log("inside test " + JSON.stringify(cat))
//     await service.addCategory(new Category(259, "a", "apparel", "https://th.bing.com/th?q=Blank+Apparel&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247")).then((result) => {

//         let category = result.data.success;
//         expect(category).toBe(true);

//     });
// })

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