import { STARTUPS } from "./action";
import { initialState } from "./appcontext";


const reducer = (state, action ) => {
    if(action.type === STARTUPS){
        return {
            ...state,
            isLoading : true,
            response : action.payload.response
        }
    }

    throw new Error(`no such action :  ${action.type}`);
};

export default reducer;