import AddressService from "../../service/AddressService";
import {
  FETCH_ADDRESSS_REQUEST,
  FETCH_ADDRESSS_SUCCESS,
  FETCH_ADDRESSS_FAILURE,
  DELETE_ADDRESS_REQUEST,
  UPDATE_ADDRESS_REQUEST,
  ADD_ADDRESS_REQUEST,
  SEARCH_ADDRESSS_REQUEST,
} from "./AddressTypes";

export const fetchAddresssRequest = () => {
  return {
    type: FETCH_ADDRESSS_REQUEST,
  };
};

export const fetchAddresssSuccess = (addresss) => {
  return {
    type: FETCH_ADDRESSS_SUCCESS,
    payload: addresss, //data from database
  };
};
export const fetchAddresssFailure = (error) => {
  return {
    type: FETCH_ADDRESSS_FAILURE,
    payload: error,
  };
};
export const deleteAddressRequest = (empId) => {
  return {
    type: DELETE_ADDRESS_REQUEST,
    payload: empId,
  };
};
export const updateAddressRequest = (emp) => {
  return {
    type: UPDATE_ADDRESS_REQUEST,
    payload: emp, //data from database
  };
};
export const addAddressRequest = (emp) => {
  return {
    type: ADD_ADDRESS_REQUEST,
    payload: emp, //data from database
  };
};
export const searchAddress = (empId) => {
  return {
    type: SEARCH_ADDRESSS_REQUEST,
    payload: empId,
  };
};

//get Addresss
export const fetchAddresss = () => {
  return (dispatch) => {
    let service = new AddressService();
    service
      .getAllAddresss()
      .then((response) => {
        const addresss = response.data;
        console.log(addresss);
        dispatch(fetchAddresssSuccess(addresss)); //take action as parameter,reudcer is triggered
      })
      .catch((error) => {
        dispatch(fetchAddresssFailure(error.message));
      });
  };
};

export const deleteAddress = (empId) => {
  return (dispatch) => {
    let service = new AddressService();
    service
      .deleteAddressById(empId)
      .then(() => {
        dispatch(deleteAddressRequest(empId));
        service
          .getAllAddresss()
          .then((response) => {
            const addresss = response.data;
            dispatch(fetchAddresssSuccess(addresss)); //take action as parameter,reudcer is triggered
          })
          .catch((error) => {
            dispatch(fetchAddresssFailure(error.message));
          });
      })
      .catch((error) => {
        dispatch(fetchAddresssFailure(error.message));
      });
  };
};

export const updateAddress = (emp) => {
  return (dispatch) => {
    let service = new AddressService();
    service
      .updateAddress(emp)
      .then((response) => {
        let address = response.data;
        dispatch(updateAddressRequest(emp)); //take action as parameter,reudcer is triggered
      })
      .catch((error) => {
        // dispatch(fetchAddresssFailure(error.message));
      });
  };
};

//Adding Address
export const addAddress = (emp) => {
  console.log("Request Body: " + JSON.stringify(emp));
  return (dispatch) => {
    let service = new AddressService();
    service
      .addAddress(emp)
      .then((response) => {
        alert("Address Added");
        const address = response.data;
        dispatch(addAddressRequest(address)); //take action as parameter,reudcer is triggered
      })
      .catch((error) => {
        alert(error);
        // dispatch(fetchAddresssFailure(error.message));
      });
  };
};