import configsReducer from './ConfigsReducer';
import playersReducer from './PlayersReducer';
import cardsReducer from './CardsReducer';
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    configsReducer: configsReducer,
    playersReducer: playersReducer,
    cardsReducer: cardsReducer
})
export default allReducers