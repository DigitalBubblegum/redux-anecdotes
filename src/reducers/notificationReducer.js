import { createSlice } from '@reduxjs/toolkit'
const initialState = ''
const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers:{
        changeNoti(state,action){
            console.log('state now: ', state)
            console.log('action', action.payload)
            return action.payload
        },
        resetNoti(state){
            console.log('resetting notification')
            console.log(state)
            return null
        }
    }
})
export const { changeNoti,resetNoti } = notificationSlice.actions
export default notificationSlice.reducer