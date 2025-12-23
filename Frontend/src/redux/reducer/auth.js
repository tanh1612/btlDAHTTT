

export const reducerAuth = (state = JSON.parse(localStorage.getItem("user")),action) => {
    switch(action.type){
        case "login":
            return JSON.parse(localStorage.getItem("user"));
        case "logout":
            return null;
        default:
            return state;
    }
}