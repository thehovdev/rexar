import React from 'react';
import ReactDOM from 'react-dom';

// хранилище Redux
import {createStore} from 'redux';
import {combineReducers} from 'redux';

import {Provider} from 'react-redux';
import allReducers from './reducers';



// компоненты
import HomeComponent from './components/home';
import TaskComponent from './components/tasks';
import CarsComponent from './components/cars';

// создаем хранилище со всеми reducers
const store = createStore (allReducers);
store.subscribe(() => console.log(store.getState()))

ReactDOM.render( 
    <Provider store={store}>
        <TaskComponent />
    </Provider>,    
    document.getElementById('root') 
);



// -----------------------------------

// let todoList = ['buy milk', 'write code'];

// function todoReducer(state = todoList, action) {

//   switch (action.type) {
//     case 'SHOW_TODOS':
//       return state
//       break;
//     case 'ADD_TODO':
//       return [...state, action.payload]
//       break;
//     default:
//       return state
//   }
// }

// let initialState = {
//   posts : ['weekly news']
// }

// function postReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'SHOW_POSTS':
//       return state
//       break;
//     case 'ADD_POST':
//       return {
//         ...state,
//         posts: [...state.posts, action.payload]
//       }  
//       break;
//     default:
//       return state
//   }
// }

// const allReducers = combineReducers({
//     todos : todoReducer,
//     post : postReducer
// });

// let store = createStore(allReducers)

// store.subscribe(() => console.log(store.getState()))

// console.log('show todos:')
// store.dispatch({ type: 'SHOW_TODOS' })

// console.log('add todo:')
// store.dispatch({ type: 'ADD_TODO', payload: 'send email' })


// console.log('show posts:')
// store.dispatch({ type: 'SHOW_POSTS' })

// console.log('add post:')
// store.dispatch({ type: 'ADD_POST', payload: 'daily news' })