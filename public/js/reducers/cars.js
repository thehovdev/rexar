export let defaultCarsList = function () {
    return [
        {
            id : 0,
            name : 'Send mail',
        },
        {
            id : 1,
            name : 'Write Code',
        },
        {
            id : 2,
            name : 'Buy Milk',
        },
    ]
}

export default function (state = defaultCarsList(), action) {
  switch (action.type) {
      case "SELECT_CAR" :
          console.log('select car');
          return action.payload;
          break;
      case "ADD_CAR" :   
          console.log('add car');
          return [...state, action.payload]
          break;
      default :    
          return state;
  }
}