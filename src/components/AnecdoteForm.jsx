import {  useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
const AnecdoteForm = () =>{
    const dispatch = useDispatch()
    const createNewAnec = async(event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        console.log('content',content)
        dispatch(createNewAnecdote(content))
        event.target.anecdote.value = ''
        // dispatch(changeNoti(`You added ${content} to the list`))
        // setTimeout(()=>{
        //   dispatch(resetNoti())
        // },5000)
        console.log('just before notification')
        dispatch(setNotification(`You added ${content} to the list`,5))
        console.log('just after notification')
    }
    return (
    <>
    <h2>create new</h2>
      <form onSubmit={createNewAnec}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </>
    )
}
export default AnecdoteForm