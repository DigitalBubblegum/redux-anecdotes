import { createSlice } from '@reduxjs/toolkit'
const initialState = 'this is init notification'
const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers:{
        changeNoti(state,action){
            console.log('state now: ', state)
            console.log('action', action.payload)
            return action.payload
        }
    }
})
export const { changeNoti } = notificationSlice.actions
export default notificationSlice.reducer