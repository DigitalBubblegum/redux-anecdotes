import { useSelector, useDispatch } from 'react-redux'
import { voteForAnec,addNewAnec } from './reducers/anecdoteReducer'
const App = () => {
  const anecdotes = useSelector(state => state.slice().sort((a, b) => b.votes - a.votes))
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteForAnec(id))
  }
  const createNewAnec = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    console.log('content',content)
    dispatch(addNewAnec(content))
    event.target.anecdote.value = ''
  }

  return (
    <div>
      <h2>Anecdotes</h2>
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
      <h2>create new</h2>
      <form onSubmit={createNewAnec}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App