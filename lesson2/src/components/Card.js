import React, {useState} from 'react';
import classes from "./Card.module.css";

const Card = ({cardInfo}) => {

    const [cardUser , setCardUser]= useState(true)
    const [userCard , setUserCard] = useState(false)

    const handleClick = ()=> {
        setCardUser(userCard)
        setUserCard(cardUser)
    }
    return (
        <div className={classes.card}  onClick={handleClick}>
            <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="" className='cardImg'/>
            <h2 className='cardTitle'>{ cardInfo.name }</h2>
            <p className='cardDescription'>{cardInfo.username}</p>
            {
                userCard===true&&(
                    <div>
                        <h3>{cardInfo.address.street}</h3>
                        <p>{cardInfo.address.zipcode}</p>
                        <a href={cardInfo.website}>website</a>
                    </div>
                )
            }
        </div>
    );
};
export default Card;