import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios';

export default function Todo() {
    const {isLoading,error,datas} = useQuery('datas',() => axios("https://jsonplaceholder.typicode.com/users")); 
  if(error) return <h1>Error: {error}</h1>
  if(isLoading) return <h1>Loading...</h1>
    return (
    <div>
        {datas.map((data,index) => <h1 key={index}>{data}</h1>)}
    </div>
  )
}
