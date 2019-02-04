export const deleteCar = function (car) {
    return {
        type : "DELETE_CAR",
        payload : car
    }
}