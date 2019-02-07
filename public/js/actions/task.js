let nextId = 3;

export const addTask = (input) => {

    return {
      type: 'ADD_TASK',
      payload: {
          id : nextId++,
          name : input.value
      },
    }
}

export const removeTask = (task) => {
    return {
      type: 'REMOVE_TASK',
      payload: task
    }
}

export const editTask = (index) => {

    return {
      type: 'EDIT_TASK',
      payload: index
    }
}

export const saveTask = (index) => {
    return {
      type: 'SAVE_TASK',
      payload: index
    }
}
