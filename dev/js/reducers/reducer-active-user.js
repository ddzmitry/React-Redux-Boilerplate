
// Selected User Reducer 
// listern for action if user selected retunrn that user as a part of the state ! 
// default value;
export default function(state = null, action){

    switch (action.type) {
        case 'USER_SELECTED':
            //here wi willa heva to return payload of the user as a part of the state
            return action.payload;

            break;
    
        default:
        return state;

            break;
    }
}
