import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  DELETE_USER_REQUEST,
  UPDATE_USER_REQUEST,
  ADD_USER_REQUEST,
  SEARCH_USERS_REQUEST,
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

//get Users
export const fetchUsers = () => {
  return (dispatch) => {
    let service = new UserService();
    service
      .getAllUsers()
      .then((response) => {
        const users = response.data;
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
  return (dispatch) => {
    let service = new UserService();
    service
      .addUser(emp)
      .then((response) => {
        const user = response.data;
        dispatch(addUserRequest(user)); //take action as parameter,reudcer is triggered
      })
      .catch((error) => {
        // dispatch(fetchUsersFailure(error.message));
      });
  };
};
