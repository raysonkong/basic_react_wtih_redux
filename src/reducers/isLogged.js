const isLoggedReducer = (state=false, action) => {
    switch(action.type) {
        case 'DECLASSIFY':
          return true;
        case 'CLASSIFY':
          return false;
        default:
          return state;
    }
} 

export default isLoggedReducer;