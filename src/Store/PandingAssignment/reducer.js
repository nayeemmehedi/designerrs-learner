import {GET_WEEK_DATA,GET_FILTER_DATA,REMOVE_DATA,GET_EFFORT_DATA,GET_MENROT_PANDING_ASSINMENT} from "./actionType"

let initialState = {
    weekData : [],
    Effort : {},
    mentorData : [],
}


export const PandingAssignmentReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_WEEK_DATA:
         state = {
             ...state,
             weekData : action.payload
         }
         break;

         case GET_FILTER_DATA:
            state = {
                ...state,
                weekData : action.payload
            }
            break;
            case GET_EFFORT_DATA:
                state = {
                    ...state,
                    Effort : action.payload
                }
                break;
         case REMOVE_DATA:
             state = {
                    ...state,
                    weekData : []
                }
                break;

                case GET_MENROT_PANDING_ASSINMENT:
             state = {
                    ...state,
                    mentorData : action.payload
                }
                break;
         default:
            state = {
              ...state,
            };
            break;
        }
        return state;

}


export default PandingAssignmentReducer