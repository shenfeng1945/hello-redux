import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/counter';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
//redux使用
// import {increment,decrease} from './actions/'

// const render = ()=>{
//   ReactDOM.render(<App 
//       onIncrement={()=>store.dispatch(increment())}
//       onDecrease={()=>store.dispatch(decrease())}
//       value={store.getState()}/>, document.getElementById('root'));
// }
// render()
// store.subscribe(render)

//中间件
const store = createStore(reducer,applyMiddleware(logger,thunk));
ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
