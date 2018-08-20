import {INCREMENT,DECREASE} from '../constants/'
export const increment = (name)=>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch({type:INCREMENT,name})
        },1000)
    }
}
export const decrease = ()=>{
    return {
        type: DECREASE
    }
}