import { legacy_createStore as createStore} from 'redux';
import rootReducer from './rootReducer';

// REDUX STORE
const store = createStore(
  rootReducer,
);

export default store;
