// describe("Testing CategoryService", function () {
//   var categoryService = require("../src/service/CategoryService");

//   var cat = require("../src/model/Category");

//   beforeEach(function () {
//     catService = new categoryService.CategoryService();
//   });

//   it("Category By ID", function () {
//     catService.getCategoryById(300).then((result) => {
//       let category = result.data;

//       expect(category.name).toBe("Apparel");
//     });
//   });

//   it("Adding the category", function () {
//     //let loanId=1199
//     // cat.id=102;
//     cat.name = "Apparel";
//     cat.description = "This is the description for apparel";
//     cat.imgUrl =
//       "https://th.bing.com/th?q=Blank+Apparel&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247";

//     catService.addCategory(cat).then((result) => {
//       let category = result.data;
//       expect(category.name).toBe("Apparel");
//     });
//   });
//   it("Updating the category", function () {
//     //let loanId=1172
//     cat.id = 302;
//     cat.name = "Apparel";
//     cat.description = "This is the description for apparel";
//     cat.imgUrl =
//       "https://th.bing.com/th?q=Blank+Apparel&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247";

//     catService.updateCategory(cat).then((result) => {
//       service.getCategoryById(301).then((result) => {
//         let category = result.data;

//         expect(category.name).toBe("Bag and Drinkware");
//       });
//     });
//   });

//   it("Delete Category By ID", function () {
//     let catId = 297;
//     catService.deleteCategoryById(catId).then(() => {
//       service.getCategoryById(catId).then((result) => {
//         let category = result.data;
//         expect(null).toBe(null);
//       });
//     });
//   });
// });
