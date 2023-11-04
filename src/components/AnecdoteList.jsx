import { useSelector, useDispatch } from 'react-redux'
import {  voteForAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
      if(state.filter === 'ALL'){
        return state.anecdotes.slice().sort((a, b) => b.votes - a.votes)
      }
      else{
        var filterList = state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
        console.log(filterList)
        return filterList.slice().sort((a, b) => b.votes - a.votes)
      }
    })
    const dispatch = useDispatch()
    const vote = async(anecdote) => {
    console.log('anecdte', anecdote.id)
      const changedAnecdoteVote = {
        ...anecdote,
        votes: anecdote.votes + 1,
      }
    dispatch(voteForAnecdote(anecdote.id,changedAnecdoteVote))
    // dispatch(changeNoti(`You Voted for '${anecdote.content}'`))
    //     setTimeout(()=>{
    //       dispatch(resetNoti())
    //     },5000)
    dispatch(setNotification(`You Voted for '${anecdote.content}'`,5))
  }
    return(
        <>
        {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          {/* {console.log(`id = ${anecdote.id} content = ${(anecdote.content)}, votes = ${anecdote.votes}`)} */}
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
        </>
    )
}
export default AnecdoteList