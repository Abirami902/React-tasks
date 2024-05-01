import React, { useEffect, useState } from 'react'


const FetchData = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{

            let response=await fetch('https://jsonplaceholder.typicode.com/posts')
            console.log(response);
            response=await response.json()
            setData(response)

        }
        fetchData()
    },[])
  return (
    <div>
        {data.map((item,index)=>(
            <div className='bg-black text-white'>
            <h2>Title: {item.title}</h2>
            <h2>Body:{item.body} </h2>
            </div>
        ))}
    </div>
  )
}

export default FetchData