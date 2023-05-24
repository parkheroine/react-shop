import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: {name:'kim', age:20},
    reducers: {
        changeAge(state){
            state.age++
        }
    }
})

export let {changeAge}=user.actions

let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],

    reducers: {
        plusCount(state,action){
            let id=action.payload;
            let index=state.findIndex(function (x) {
                return x.id == id
            });
            state[index].count++
        },

        addCart(state,action){
            state.push(action.payload)
        }
    }
})

export let {plusCount, addCart}=cart.actions

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer
    }
}) 