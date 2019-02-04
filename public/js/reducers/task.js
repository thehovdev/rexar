import update from 'react-addons-update';

let initialState = [
    {
        id : 0,
        name : 'Отрефакторить код',
        edit : false,
    },
    {
        id : 1,
        name : 'Исправить баги',
        edit : false,
    },
    {
        id : 2,
        name : 'Ответить на почту',
        edit : false,
    },
]

export default function (state = initialState, action) {

    switch (action.type) {
        case 'ADD_TASK':
            console.log('ADD_TASK');
            return [...state, action.payload]
        case 'REMOVE_TASK':
            console.log('REMOVE_TASK');
            return state.filter(task => task.id !== action.payload.id);

        case 'EDIT_TASK':
            console.log('EDIT_TASK');
            
            return update(state, { 
                [action.payload] : {
                    edit: {$set: true}
                }
            });
        case 'SAVE_TASK':
            // console.log(action.payload.id);

            // console.log(action.payload);

            // return state;
            let element = document.getElementById('edit_task' + action.payload);

            return update(state, { 
                [action.payload] : {
                    name: {$set: element.value},
                    edit: {$set: false}
                }
            });
        default :
            return state
    }    

}