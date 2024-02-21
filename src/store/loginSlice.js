import {createSlice} from "@reduxjs/toolkit"


const initialLoginState = {
    name:'' ,
    password : '' ,
    access : false
}


const loginSlice = createSlice({
    name : 'Login' ,
    initialState : initialLoginState ,
    reducers : {
        updateName(state, action){
            state.name = action.payload
        },
        password(state, action){
            state.password = action.payload
        },
        login(state , action){
            
            state.name = ''
            state.password = ''
            state.access = action.payload
        }
    }
})





export const LoginActions = loginSlice.actions
export default loginSlice.reducer;