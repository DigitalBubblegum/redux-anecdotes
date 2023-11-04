import {  useDispatch } from 'react-redux'
import { addNewAnec } from '../reducers/anecdoteReducer'
import { changeNoti,resetNoti } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'
const AnecdoteForm = () =>{
    const dispatch = useDispatch()
    const createNewAnec = async(event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        console.log('content',content)
        const newAnecdote = await anecdoteService.createNew(content)
        console.log('33333333',newAnecdote)
        dispatch(addNewAnec(newAnecdote))
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