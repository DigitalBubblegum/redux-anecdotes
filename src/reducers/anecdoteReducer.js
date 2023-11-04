//completed exercise 6.11
import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'
// const anecdotesAtStart = {
//   anecdotes: [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ],
// }

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.anecdotes.map(asObject)
const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    addNewAnec(state, action) {
      console.log('state now: ', state)
      console.log('action', action)
      const content = action.payload
      console.log('content is issisisi',JSON.parse(JSON.stringify(content)))
      state.push(content)
    },
    voteForAnec(state,action) {
      console.log('state now in vote: ', state)
      console.log('action', action)
      console.log('anecdote id is, ', action.payload.id)
      return state.map((n) =>
        n.id !== action.payload.id ? n : action.payload
      );
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

/*const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':{
      console.log('anecdote id is, ', action.payload.id)
      const id = action.payload.id
      const anecdoteToChange = state.find(n=> n.id === id)
      console.log(anecdoteToChange);
      const changedAnecdoteVote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      }
      return state.map(n=>n.id!==id?n:changedAnecdoteVote)
    }
    case 'NEW_ANEC': {
      const newanecdote = action.payload
      console.log(newanecdote)
      return [...state,newanecdote]
    }
    default:
      return state;
  }
}
//exercise 6.6
export const voteForAnec = (id) => {
  return {
    type: 'VOTE',
    payload: { id }
  }
}

export const addNewAnec = (content) => {
  return {
    type: 'NEW_ANEC',
    payload: {
      content,
      id: getId(),
      votes: 0
    }
  }
}*/
export const { addNewAnec,voteForAnec,appendAnecdote,setAnecdotes } = anecdoteSlice.actions
export const initializeAnecdotes = () => {
  return async dispatch => {
    console.log('exercise 6.16')
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
export const createNewAnecdote = content => {
  return async dispatch => {
    console.log('exercise 6.17')
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}
export const voteForAnecdote = (id,changedAnecdoteVote) => {
  return async dispatch => {
    console.log('exercise 6.18')
    const updatedAnecdoteVote = await anecdoteService.updateExisting(id,changedAnecdoteVote)
    dispatch(voteForAnec(updatedAnecdoteVote))
  }
}
export default anecdoteSlice.reducer