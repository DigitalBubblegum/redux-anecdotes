import {  useDispatch } from 'react-redux'
import { addNewAnec } from '../reducers/anecdoteReducer'
import { changeNoti,resetNoti } from '../reducers/notificationReducer'
const AnecdoteForm = () =>{
    const dispatch = useDispatch()
    const createNewAnec = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        console.log('content',content)
        dispatch(addNewAnec(content))
        event.target.anecdote.value = ''
        dispatch(changeNoti(`You added ${content} to the list`))
        setTimeout(()=>{
          dispatch(resetNoti())
        },5000)
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