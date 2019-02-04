let nextId = 3;

export const addCar = () => {

    let task = document.getElementById('new-task');

    return {
        type : "ADD_CAR",
        payload : {
          id : nextId++,
          name : task.value,
          speed : "330"
        }
    }
}