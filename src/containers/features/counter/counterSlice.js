import { continueStatement } from '@babel/types';
import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    cart:JSON.parse(localStorage.getItem('cart'))
  },
  reducers: {
    
    addToCart: (state, action) => {
      let newItem=action.payload;
      let newItemExist=false;
      state.cart.forEach(item=>{
        if(item.id  === newItem.id){
          newItemExist =  true
        }
      })

      if(newItemExist){

        state.cart=state.cart.map(item=>{
          if(item.id === newItem.id){
              return newItem
          }
          else{
            return item
          }
        })

        localStorage.setItem('cart', JSON.stringify(state.cart))
        console.log(`local storate cart updated modifire  item`)
      }
      else{
        state.cart[state.cart.length]=newItem

        localStorage.setItem('cart', JSON.stringify(state.cart))
        console.log(`local storate cart updated with new item`)
      }

    },

    removeFromCart: (state, action) => {
      let newItem=action.payload;
      let newItemExist=false;
      let newItemExistPos=null;
      state.cart.forEach((item,i)=>{
        if(item.id  === newItem.id){
          newItemExist =  true
          newItemExistPos=i;
        }
      })
      if(newItemExist){
        state.cart.splice(newItemExistPos,1)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    localToCart: (state, action) => {
      state.cart=JSON.parse(localStorage.getItem('cart'))
    }
  },
});

export const { addToCart,removeFromCart,localToCart } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.cart;

export default counterSlice.reducer;
