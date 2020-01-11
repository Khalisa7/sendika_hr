import {createStore} from 'redux'
import rootReducer from '@src/redux/reducer'


const store = createStore(rootReducer)
// store.subscribe(() => console.log('Look ma, Redux!!'));

export default store