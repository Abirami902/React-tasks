import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value:0,
    data:[]

}

export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1

        },
        decrement:(state)=>{
            state.value-=1
        },
        addData:(state,action)=>{
            console.log(action.payload,'--------------');
            state.data=action.payload
        },
        removeData:(state,action)=>{
            console.log(action);
            let newData=state.data.filter((item)=>item.name!=action.payload)
            state.data=newData

        }
    }

})
export const {increment,decrement,addData,removeData}=counterSlice.actions
export default counterSlice.reducer
