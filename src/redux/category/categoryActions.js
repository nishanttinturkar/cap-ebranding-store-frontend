import CategoryService from "../../service/CategoryService"
import {
    
    ADD_CATEGORY_REQUEST,
    FETCH_CATEGORY_FAILURE,
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS

} from "./categoryTypes";

export const addCategoryRequest = (cat) => {
       return {
             type: ADD_CATEGORY_REQUEST,
             payload: cat, //data from database
         };
     };
     export const fetchCategoryRequest = () => {
        return {
          type: FETCH_CATEGORY_REQUEST,
        };
      };

      export const fetchCategorySuccess = (categories) => {
        return {
          type: FETCH_CATEGORY_SUCCESS,
          payload: categories, //data from database
        };
      };
      export const fetchCategoryFailure = (error) => {
        return {
          type: FETCH_CATEGORY_FAILURE,
          payload: error,
        };
      };
export const addCategory =(cat)  => {
    return (dispatch) => {
        let service = new CategoryService();
        service.addCategory(cat)
            .then((response) => {
                alert("category added")
                const category = response.data;
                dispatch(addCategoryRequest(category));//take action as parameter,reudcer is triggered
            })
            .catch((error) => {
                // dispatch(fetchEmployeesFailure(error.message));
            });
    };
};
export const fetchCategory = () => {
    return (dispatch) => {
      let service = new CategoryService();
      service
        .getAllCategories()
        .then((response) => {
          const categories = response.data;
          console.log(categories);
          dispatch(fetchCategorySuccess(categories)); //take action as parameter,reudcer is triggered
        })
        .catch((error) => {
          dispatch(fetchCategoryFailure(error.message));
        });
    };
  };

