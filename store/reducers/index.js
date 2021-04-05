import playersReducer from './PlayersReducer';
import cardsReducer from './CardsReducer';
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    playersReducer: playersReducer,
    cardsReducer: cardsReducer
})
export default allReducers