import { createSlice } from '@reduxjs/toolkit'
const initialState = ''
const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers:{
        changeNoti(state,action){
            console.log('state now in notification: ', state)
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
export const setNotification = (content,timeInSec) => {
    return async dispatch => {
        console.log('hitting up notification',content)
        const timeInMSec = timeInSec * 1000
        console.log('exercise 6.19')
        console.log(timeInMSec);
        dispatch(changeNoti(`You added ${content} to the list`));
        setTimeout(() => {
          dispatch(resetNoti());
        }, timeInMSec);
    }
}
export default notificationSlice.reducer