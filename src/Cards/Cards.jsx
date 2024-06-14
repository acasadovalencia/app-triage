import { useEffect, useState } from 'react'
import './Cards.css'

export const Cards = ()=>{

    const [cards , setCards] = useState([])

    const {VITE_CARDS} = import.meta.env || 'http://localhost:3000'

    const getCards = async ()=>{
        let controller = new AbortController()
        let options = {
            method: 'get',
            signal: controller.signal
        }
        await fetch( VITE_CARDS , options)
        .then(res => res.json())
        .then(data => setCards(data))
        .catch(err => console.log(err))
        .finally(()=> controller.abort())
    }

    useEffect(()=>{
        getCards()
    }, [])

    return(
        <>
        {cards.length == 0 && 
        <div className='Spinner'>
            <div className="dot-spinner">
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
            </div>
        </div>}
        <div className="Cards-wrapper">
            <ul className='Cards-ul Cards-grid'>
                {cards.length != 0 && cards.map(eachCard =>
                <Card key={eachCard.id} {...eachCard}/>  
                )}
            </ul>
        </div>
        </>
    )
}

const Card = (props)=>{
    const {name , title, icon} = props

    return(
        <>
        <li className={`Cards-li Card-${name}`}>
            <picture className="Cards-picture">
                <img src={`./assets/${icon}`} alt={`${name} card icon`} className={`Cards-img Card-icon--${name}`} loading='lazy' width='48' height='48' />
            </picture>
            <h3 className="Cards-h3">{title}</h3>
        </li>
        </>
    )
}