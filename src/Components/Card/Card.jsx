import React from 'react'
import styles from "./Card.module.css"

const Card = ({img,title,category,rating,Count,price}) => {
  return (
    <>
        <div className={styles.container}>

            <p className={styles.category}>{category}</p>
            <div className={styles.imgg}>
            <img src={img} alt="" />
            </div>
            <p>{title}</p>
                <div style={{display:"flex",justifyContent:"center",columnGap:"20px"}}>
                <p style={{fontWeight:"bold"}}>Rating: {rating}</p>
                <p style={{fontWeight:"bold"}}>Count: {Count}</p>
                </div>
                <p className={styles.price}>Price: {price} $</p>
            </div>
    </>
    
    )
}

export default Card
