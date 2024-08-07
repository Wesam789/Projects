import React from 'react'
import './Popular.css'
import popular_data from '../data/data'
import Item from '../Item/Item'

export const PopularTops = () => {
  return (
    <div className='popular'>
      <h1>POPULAR TOPS</h1>
      <hr/>
      <div className="items_popular">
        {popular_data.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default PopularTops;
