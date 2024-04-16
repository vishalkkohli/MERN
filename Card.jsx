import React from 'react'

const Card = (props) => {
    const {id,title,description,price,brand,category,thumbnail}=props;
  return (

    <div>
<div className='card' style={{width:"18rem",height:"30rem"}}>
<img src={thumbnail} className='card-img-top' height={"230px"} alt="..."/>
    <div className='card-body'>
<h5 className='card-title'>card title</h5>
<p className='card-text' style={{height:"30px"}}>{description}</p>
<div className='d-flex flex-row justify-content-between'>
<div>price:{price}</div>
<div>brand:{brand}</div>
<div>category:{category}</div>
</div>
    </div>
    </div>
    </div>
  )
}

export default Card