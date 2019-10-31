import { combineReducers } from 'redux'
import photosReducer, {moduleName as photosModule} from '../ducks/photos'

const createRootReducer = combineReducers({
  [photosModule]: photosReducer
});

export default createRootReducer