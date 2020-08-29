import { ADD_CHEESE, SELECT_CHEESE, DELETE_CHEESE } from '../constants/constants';

const initialState = { cheeses: [
  { name: 'Mascarpone', description: 'Almost like cream cheese, but creamier' },
  { name: 'Roquefort', description: 'Moldy blue cheese' },
  { name: 'Havarti', description: 'Pretty basic cheese' },
  { name: 'Cheddar', description: 'This cheese is pretty yellow' },
]}

export default function cheeseReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHEESE:
      return {
        cheeses: [...state.cheeses, action.cheese],
      };
    case SELECT_CHEESE:
      return {
        cheeses: state.cheeses.filter(c => c.name == action.cheese.name),
      };
    case DELETE_CHEESE:
      return {
        cheeses: state.cheeses.filter(c => c.name !== action.cheese.name),
      };
    default:
      return state;
  }
}
