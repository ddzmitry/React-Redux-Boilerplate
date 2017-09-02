/*  
    Creating action creator when user click the name 
The action made of two things type and payload 
the whole thing called action creator
*/  
export const SelectUser = ( user ) =>{
    console.log('Ypu Clicked on user! ')
    console.log(user)
    // payload data 
    // action what user is doing on page
    return {
        type: "USER_SELECTED",
        payload: user
    }

};