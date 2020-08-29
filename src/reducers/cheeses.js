import { ADD_CHEESE, SELECT_CHEESE, DELETE_CHEESE } from '../constants/constants';

const initialState = { cheeses: [
  { name: 'Mascarpone', description: 'Almost like cream cheese, but creamier', origin: 'Mascarpone originated in the area between Lodi and Abbiategrasso, Italy, southwest of Milan, probably in the late 16th or early 17th century. The name is popularly held to derive from mascarpa, an unrelated milk product made from the whey of stracchino (a young, barely aged cheese), or from mascarpia, a word in the local dialect for ricotta. Ricotta, unlike mascarpone, is made from milk and not cream.' },
  { name: 'Roquefort', description: 'Moldy blue cheese', origin: 'Legend has it that the cheese was discovered when a youth, eating his lunch of bread and ewes milk cheese, saw a beautiful girl in the distance. Abandoning his meal in a nearby cave, he ran to meet her. When he returned a few months later, the mold (Penicillium roqueforti) had transformed his plain cheese into Roquefort' },
  { name: 'Havarti', description: 'Pretty basic cheese', origin: 'In the 1800s, Hanne Nielsen (1829–1903) traveled around Europe to learn about cheesemaking. Nielsens farm was in Havarthigaard, north of Copenhagen, and in 1852, after returning from her travels, she developed the technique to create havarti, a semi-firm cheese dotted with small holes' },
  { name: 'Cheddar', description: 'This cheese is pretty yellow', origin: 'The cheese originates from the village of Cheddar in Somerset, south west England. Cheddar Gorge on the edge of the village contains a number of caves, which provided the ideal humidity and steady temperature for maturing the cheese. Cheddar cheese traditionally had to be made within 30 mi (48 km) of Wells Cathedral.' },
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
