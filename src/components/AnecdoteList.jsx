import { useSelector, useDispatch } from 'react-redux'
import { voteForAnec } from '../reducers/anecdoteReducer'
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
    const vote = (id) => {
    console.log('vote', id)
    dispatch(voteForAnec(id))
  }
    return(
        <>
        {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
        </>
    )
}
export default AnecdoteList