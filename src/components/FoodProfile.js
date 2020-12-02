import React from 'react'
import Ratings from './Ratings'

function FoodProfile(props) {
    const imgStyle = {
        position:'relative',
        left: '170px'
        // up:'20px'
    }
    // const btnStyle = {
    //     position: 'sticky',
    //     left: '170px'
    // }
    return (
        <div>
            <img 
                src = {props.imgUrl} 
                style = {imgStyle}
            />
            <p style = {imgStyle}> {props.name}  {props.price}</p>
            <table>
                <tr>
                    <th><div className="ratting"> <Ratings/></div></th>
                   <th><button className="AddtocartBtn" >Add to cart</button></th>
            </tr>
            
            </table>
        </div>
    )
}

export default FoodProfile