import Category from '../model/Category';
import CategoryService from '../service/CategoryService';


test('Testing add category function.', async () => {
    let service = new CategoryService();

    let cat = new Category();
    cat.id = 200;
    cat.name = "Apparel";
    cat.description = "Description for apparel";
    cat.imgUrl = "https://th.bing.com/th?q=Blank+Apparel&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247";
    console.log("inside test " + JSON.stringify(cat))
    await service.addCategory((cat)).then((result) => {
        let category = result.data.success;
        expect(category).toBe(true);

    });
})

test('Testing find category by id function.', async () => {
    let service = new CategoryService();
    await service.getCategoryById(297).then((result) => {
        let category = result.data;
    
        expect(category.name).toBe('Bags and Drinkware');
    });
})

test('Testing Update category by id function.', async () => {
    let cat=new Category();
    cat.id=297;
    cat.name="Bags and Drinkware";
    cat.description="Description";
    cat.imgUrl="https://www.bing.com/th?id=OPA.i%2fJnvKyNsa7xUw474C474&o=5&pid=21.1&w=140&h=140&rs=1&qlt=100&dpr=1.5";
    let service = new CategoryService();
    await service.updateCategory(cat).then((result) => {
         service.getCategoryById(297).then((result) => {
            let category = result.data;
            expect(category.name).toBe('Apparel');
        });
    });
})

test('Testing delete category by id funciton.', async () => {
    let catId=303;
    let service = new CategoryService();
    await service.deleteCategoryById(catId).then(() => {
        service.getCategoryById((catId)).then((result) => {     
            let category = result.data;   
            expect(null).toBe(null);
    });
})
})