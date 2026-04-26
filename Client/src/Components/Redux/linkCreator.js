export const createLink = (endPoint) => {
    if (endPoint == undefined) {
        return `https://messanger-br6c.onrender.com/`;
    }
    return `https://messanger-br6c.onrender.com/${endPoint}`;
}