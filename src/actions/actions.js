import { ADD_CHEESE, DELETE_CHEESE } from '../constants/constants';

export function addCheese(cheese) {
  return {
    type: 'ADD_CHEESE',
    cheese,
  };
}

export function deleteCheese(cheese) {
  return {
    type: 'DELETE_CHEESE',
    cheese,
  };
}
