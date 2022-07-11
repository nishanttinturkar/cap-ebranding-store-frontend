import CategoryService from "../../service/CategoryService";
import {
  ADD_CATEGORY_REQUEST,
  DELETE_CATEGORY_REQUEST,
  FETCH_CATEGORY_FAILURE,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  GET_CATEGORY_BY_ID,
  UPDATE_CATEGORY_REQUEST,
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
export const deleteCategoryRequest = (catId) => {
  return {
    type: DELETE_CATEGORY_REQUEST,
    payload: catId,
  };
};
export const updateCategoryRequest = (cat) => {
  return {
    type: UPDATE_CATEGORY_REQUEST,
    payload: cat, //data from database
  };
};
export const getCategory = (category) => {
  return {
    type: GET_CATEGORY_BY_ID,
    payload: category,
  };
};
export const addCategory = (cat) => {
  return (dispatch) => {
    let service = new CategoryService();
    service
      .addCategory(cat)
      .then((response) => {
        alert("category added");
        const category = response.data;
        dispatch(addCategoryRequest(category)); //take action as parameter,reudcer is triggered
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
export const getCategoryById = (catId) => {
  return (dispatch) => {
    let service = new CategoryService();
    service
      .getCategoryById(catId)
      .then((response) => {
        console.log("Response : " + response);
        dispatch(getCategory(response.data));
      })
      .catch((error) => {
        dispatch(fetchCategoryFailure(error.message));
      });
  };
};
export const updateCategory = (cat) => {
  return (dispatch) => {
    let service = new CategoryService();
    service
      .updateCategory(cat)
      .then((response) => {
        let category = response.data;
        dispatch(updateCategoryRequest(cat)); //take action as parameter,reudcer is triggered
      })
      .catch((error) => {
        // dispatch(fetchUsersFailure(error.message));
      });
  };
};
export const deleteCategory = (catId) => {
  return (dispatch) => {
    let service = new CategoryService();
    service
      .deleteCategoryById(catId)
      .then(() => {
        dispatch(deleteCategoryRequest(catId));
        service
          .getAllCategories()
          .then((response) => {
            const categories = response.data;
            dispatch(fetchCategorySuccess(categories)); //take action as parameter,reudcer is triggered
          })
          .catch((error) => {
            dispatch(fetchCategoryFailure(error.message));
          });
      })
      .catch((error) => {
        dispatch(fetchCategoryFailure(error.message));
      });
  };
};
