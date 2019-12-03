export default function Items(state=[{name:"hello", text:"tetstststst"}],action) {
    if (action.type !=undefined ) {
        switch (action.type){
            case "ADD" : {
                return [...state, action.data];
            }

            case "DEC" : {
                return state - action.data;
            }

            default : {
                return state
            }
        }
    }
    return state
}