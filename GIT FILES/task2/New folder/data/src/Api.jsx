import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Api = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        let Api=async()=>{

            let response=await axios.get('https://jsonplaceholder.typicode.com/photos')
            console.log(response.data);
            setData(response.data)
        }
        Api()
    },[])
console.log(data,'---------------------');
  return (
    <div>
        {data.map((item,index)=>(
            <div >
            <h2>Title: {item.title}</h2>
            <img src={item.thumbnailUrl} alt="" />
            </div>
        ))}
    </div>
  )
}

export default Api
