let defaultCarsList = function () {
  return [
      {
          id : 0,
          name : 'Mercedes',
          speed : 300,
      },
      {
          id : 1,
          name : 'BMW',
          speed : 310,
      },
      {
          id : 2,
          name : 'Audi',
          speed : 320,
      },
      {
          id : 3,
          name : 'Jeep',
          speed : 290,
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
            // console.log(state);
            console.log('add car');
            return [...state, action.payload]
            break;
        default :    
            return state;
    }
}