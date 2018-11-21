export default (state = [], action) => {
  let stateIds
  let idx
  let quote
  let updatedQuote

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      stateIds = state.map(st => {
        return st.id
      })
      idx = stateIds.indexOf(action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
    case 'UPVOTE_QUOTE':
      stateIds = state.map(st => {
        return st.id
      })
      idx = stateIds.indexOf(action.quoteId)
      quote = state[idx]
      updatedQuote = {...quote, votes: quote.votes + 1}
      return [...state.slice(0, idx), updatedQuote, ...state.slice(idx + 1)]
    case 'DOWNVOTE_QUOTE':
      stateIds = state.map(st => {
        return st.id
      })
      idx = stateIds.indexOf(action.quoteId)
      quote = state[idx]
      if (quote.votes > 0) {
        updatedQuote = {...quote, votes: quote.votes - 1}
        return [...state.slice(0, idx), updatedQuote, ...state.slice(idx + 1)]
      }
      else{
        return state
      }
    default:
      return state;
  }
}