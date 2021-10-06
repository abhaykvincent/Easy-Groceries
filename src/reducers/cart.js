const cartReducer = (state=[] ,action)=>{
    switch (action.name){
        
        case 'ADDTOCART':{

            let newState=state.push(1)
            return newState
        }
        default:
            return false
    }

}
export default cartReducer