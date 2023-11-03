//completed exercise 6.11
import { createSlice } from '@reduxjs/toolkit'
const anecdotesAtStart = {
  anecdotes: [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
],
  filter: 'INIT'
}

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.anecdotes.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    addNewAnec(state, action) {
      console.log('state now: ', state)
      console.log('action', action)
      const content = action.payload
      console.log('content',content)
      state.push({content,
      id: getId(),
      votes: 0})
    },
    voteForAnec(state,action) {
      console.log('state now: ', state)
      console.log('action', action)
      console.log('anecdote id is, ', action.payload)
      const id = action.payload
      const anecdoteToChange = state.find(n=> n.id === id)
      console.log(anecdoteToChange);
      const changedAnecdoteVote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      }
      return state.map(n=>n.id!==id?n:changedAnecdoteVote)
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
export const { addNewAnec,voteForAnec } = anecdoteSlice.actions
export default anecdoteSlice.reducer