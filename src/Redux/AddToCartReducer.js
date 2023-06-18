import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit'


const sumItems = items => {
    const itemsCounter = items.reduce((total , product) => total + product.quantity, 0)
    const total = items.reduce((total , product) => total + product.productAmount * product.quantity,0).toFixed(2)
    return {
        itemsCounter,
        total
    }
}


const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
}


export const cartSlice = createSlice({
    name : "addToCart",
    initialState : initialState
,
reducers : {
    addProduct : (state, action ) =>{
        if (!state.selectedItems.find(item => item._id === action.payload._id)) {
            state.selectedItems.push({
                ...action.payload,
                quantity: 1
            })
     }

     const sum = sumItems(state.selectedItems);
    // Apply new count and totals to the state.
    state.itemsCounter = sum.itemsCounter;
    state.total = sum.total

    },
    removeProduct : (state, action ) =>{
        const newSelectedItems = state.selectedItems.filter(item => item._id !== action.payload.id);
        return {
            ...state,
            selectedItems: [...newSelectedItems],
            ...sumItems(newSelectedItems)
        }
        
    },
    clearCart : (state, action ) =>{
        console.log("here")
        return initialState  
    },
    incrementItem : (state ,action)=>{
        const indexI = state.selectedItems.findIndex(item => item._id === action.payload.id);
        let newSelectedItems =[...current(state.selectedItems)] 
        newSelectedItems[indexI] = {...newSelectedItems[indexI],quantity: newSelectedItems[indexI].quantity+1};
        return {
            ...state,
            selectedItems :[...newSelectedItems],
            ...sumItems(newSelectedItems)
        }
 },
    
    decrementItem  :(state , action) =>{
        const indexI = state.selectedItems.findIndex(item => item._id === action.payload.id);
        let newSelectedItems =[...current(state.selectedItems)] 
        newSelectedItems[indexI] = {...newSelectedItems[indexI],quantity: newSelectedItems[indexI].quantity === 1 ? 1 : newSelectedItems[indexI].quantity - 1 };
        return {
            ...state,
            selectedItems :[...newSelectedItems],
            ...sumItems(newSelectedItems)
        }
    }
}

})

export const { addProduct ,removeProduct,  clearCart  ,incrementItem , decrementItem } = cartSlice.actions
export default cartSlice.reducer


