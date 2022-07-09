import RoleService from "../../service/RoleService";
import {
  FETCH_ROLES_REQUEST,
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILURE,
  DELETE_ROLE_REQUEST,
  UPDATE_ROLE_REQUEST,
  ADD_ROLE_REQUEST,
  SEARCH_ROLES_REQUEST,
} from "./RoleTypes";

export const fetchRolesRequest = () => {
  return {
    type: FETCH_ROLES_REQUEST,
  };
};

export const fetchRolesSuccess = (roles) => {
  return {
    type: FETCH_ROLES_SUCCESS,
    payload: roles, //data from database
  };
};
export const fetchRolesFailure = (error) => {
  return {
    type: FETCH_ROLES_FAILURE,
    payload: error,
  };
};
export const deleteRoleRequest = (empId) => {
  return {
    type: DELETE_ROLE_REQUEST,
    payload: empId,
  };
};
export const updateRoleRequest = (emp) => {
  return {
    type: UPDATE_ROLE_REQUEST,
    payload: emp, //data from database
  };
};
export const addRoleRequest = (emp) => {
  return {
    type: ADD_ROLE_REQUEST,
    payload: emp, //data from database
  };
};
export const searchRole = (empId) => {
  return {
    type: SEARCH_ROLES_REQUEST,
    payload: empId,
  };
};

//get Roles
export const fetchRoles = () => {
  return (dispatch) => {
    let service = new RoleService();
    service
      .getAllRoles()
      .then((response) => {
        const roles = response.data;
        console.log(roles);
        dispatch(fetchRolesSuccess(roles)); //take action as parameter,reudcer is triggered
      })
      .catch((error) => {
        dispatch(fetchRolesFailure(error.message));
      });
  };
};

export const deleteRole = (empId) => {
  return (dispatch) => {
    let service = new RoleService();
    service
      .deleteRoleById(empId)
      .then(() => {
        dispatch(deleteRoleRequest(empId));
        service
          .getAllRoles()
          .then((response) => {
            const roles = response.data;
            dispatch(fetchRolesSuccess(roles)); //take action as parameter,reudcer is triggered
          })
          .catch((error) => {
            dispatch(fetchRolesFailure(error.message));
          });
      })
      .catch((error) => {
        dispatch(fetchRolesFailure(error.message));
      });
  };
};

export const updateRole = (emp) => {
  return (dispatch) => {
    let service = new RoleService();
    service
      .updateRole(emp)
      .then((response) => {
        let role = response.data;
        dispatch(updateRoleRequest(emp)); //take action as parameter,reudcer is triggered
      })
      .catch((error) => {
        // dispatch(fetchRolesFailure(error.message));
      });
  };
};

//Adding Role
export const addRole = (emp) => {
  console.log("Request Body: " + JSON.stringify(emp));
  return (dispatch) => {
    let service = new RoleService();
    service
      .addRole(emp)
      .then((response) => {
        alert("Role Added");
        const role = response.data;
        dispatch(addRoleRequest(role)); //take action as parameter,reudcer is triggered
      })
      .catch((error) => {
        alert(error);
        // dispatch(fetchRolesFailure(error.message));
      });
  };
};
