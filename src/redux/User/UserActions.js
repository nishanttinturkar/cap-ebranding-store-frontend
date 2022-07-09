import UserService from "../../service/UserService";

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  DELETE_USER_REQUEST,
  UPDATE_USER_REQUEST,
  ADD_USER_REQUEST,
  SEARCH_USERS_REQUEST,
  VALIDATE_USER_REQUEST,
  IS_INVALID_LOGIN,
  IS_ADMIN,
  IS_VENOR,
  IS_USER,
  GET_USER_BY_ID,
} from "./UserTypes";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users, //data from database
  };
};
export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
export const deleteUserRequest = (empId) => {
  return {
    type: DELETE_USER_REQUEST,
    payload: empId,
  };
};
export const updateUserRequest = (emp) => {
  return {
    type: UPDATE_USER_REQUEST,
    payload: emp, //data from database
  };
};
export const addUserRequest = (emp) => {
  return {
    type: ADD_USER_REQUEST,
    payload: emp, //data from database
  };
};
export const searchUser = (empId) => {
  return {
    type: SEARCH_USERS_REQUEST,
    payload: empId,
  };
};

export const validateUserRequest = () => {
  return {
    type: VALIDATE_USER_REQUEST,
  };
};

export const isAdmin = () => {
  return {
    type: IS_ADMIN,
  };
};

export const isVendor = () => {
  return {
    type: IS_VENOR,
  };
};

export const isUser = () => {
  return {
    type: IS_USER,
  };
};

export const isInvalidLogin = () => {
  return {
    type: IS_INVALID_LOGIN,
  };
};

export const getUser = (user) => {
  return {
    type: GET_USER_BY_ID,
    payload: user,
  };
};

//get Users
export const fetchUsers = () => {
  return (dispatch) => {
    let service = new UserService();
    service
      .getAllUsers()
      .then((response) => {
        const users = response.data;
        console.log(users);
        dispatch(fetchUsersSuccess(users)); //take action as parameter,reudcer is triggered
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const deleteUser = (empId) => {
  return (dispatch) => {
    let service = new UserService();
    service
      .deleteUserById(empId)
      .then(() => {
        dispatch(deleteUserRequest(empId));
        service
          .getAllUsers()
          .then((response) => {
            const users = response.data;
            dispatch(fetchUsersSuccess(users)); //take action as parameter,reudcer is triggered
          })
          .catch((error) => {
            dispatch(fetchUsersFailure(error.message));
          });
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const getUserById = (empId) => {
  return (dispatch) => {
    let service = new UserService();
    service
      .getUserById(empId)
      .then((response) => {
        console.log("Response : " + response);
        dispatch(getUser(response.data));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const updateUser = (emp) => {
  return (dispatch) => {
    let service = new UserService();
    service
      .updateUser(emp)
      .then((response) => {
        let user = response.data;
        dispatch(updateUserRequest(emp)); //take action as parameter,reudcer is triggered
      })
      .catch((error) => {
        // dispatch(fetchUsersFailure(error.message));
      });
  };
};

//Adding User
export const addUser = (emp) => {
  console.log("Request Body: " + JSON.stringify(emp));
  return (dispatch) => {
    let service = new UserService();
    service
      .addUser(emp)
      .then((response) => {
        alert("User Added");
        const user = response.data;
        console.log(user.success);
        dispatch(addUserRequest(user)); //take action as parameter,reudcer is triggered
      })
      .catch((error) => {
        alert(error);
        // dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const validateUser = (emp) => {
  console.log("Request Body: " + JSON.stringify(emp));

  return (dispatch) => {
    let service = new UserService();
    service
      .validateUser(emp)
      .then((result) => {
        dispatch(validateUserRequest());
        localStorage.setItem("userID", JSON.stringify(result.data.id));
        localStorage.setItem("role", JSON.stringify(result.data.role));
        switch (result.data.role) {
          case "admin":
            dispatch(isAdmin());
            break;
          case "vendor":
            dispatch(isVendor());
            break;
          case "user":
            dispatch(isUser());
            break;
        }
        var stored = localStorage.getItem("userID");
        console.log(stored);
        // dispatch(selectHome());
        // console.log(navSelector.login);
        // navigate("/home");
      })
      .catch((error) => {
        alert(error);
        dispatch(isInvalidLogin());
        // dispatch(fetchUsersFailure(error.message));
      });
  };
};
