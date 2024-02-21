import {createSlice} from "@reduxjs/toolkit"
import { _getUsers } from "../_DATA"



const initialUsersState = {
    users: []
}



const UsersSlices = createSlice({
    name: 'Users' ,
    initialState : initialUsersState ,
    reducers : {
        getUsers(state , action){
            state.users = action.payload
        }
    }
})


export const getUsers = () => {
    return async (dispatch) => {
      try {
        const usersData = await _getUsers();
        dispatch(UserActions.getUsers(usersData));
      } catch (error) {
        console.log(error);
      }
    };
  };


// export const getUsers = () => {
//     return async (dispatch) => {
//         const fetchData = async () => {
//             const response = await _getUsers()

//             if(!response.ok){
//                 throw new Error('No users')
//             }

//             const data = await response.json()
//             return data
//         }

//         try {
//          const usersData = await  fetchData()
//          dispatch(UserActions.getUsers(usersData))
//         } catch(error){
//             console.log(error)
//         }
//     }
// }


export const UserActions = UsersSlices.actions

export default UsersSlices.reducer;