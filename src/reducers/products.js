const ProductsReducer = (state=[] ,action)=>{
    switch (action.name){
        
        case 'SETPRODUCTS':{

            let newState=state.push(1)
            return newState
        }
        default:
            return ''
    }

}
export default ProductsReducer