import React from 'react'
import {Data}  from './Components/Data/Data'
import Card  from './Components/Card/Card'

const App = () => {
  return (
    <>
     {
        Data.map((e,i)=>{
        return  <Card key={e.id} category={e.category} img={e.image} title={e.title} 
        rating={e.rating.rate} Count={e.rating.count} price={e.price}/>
          
        })
      }

    </>
  )
}

export default App

