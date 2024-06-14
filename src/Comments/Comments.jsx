import { useEffect, useState } from 'react'
import './Comments.css'

export const Comments = ()=>{

    const [comments , setComments] = useState([])

    const {VITE_COMMENTS} = import.meta.env

    const getComments = async ()=>{
        let controller = new AbortController()
        let options = {
            method: 'get',
            signal: controller.signal
        }
        await fetch( VITE_COMMENTS , options)
        .then(res => res.json())
        .then(data => setComments(data))
        .catch(err => console.log(err))
        .finally(()=> controller.abort())
    }

    useEffect(()=>{
        getComments()
    }, [])

    return(
        <>
        {comments.length == 0 && 
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
        <div className="Comments-wrapper">
        {comments.length != 0 && <h2 className='Comments-h2'>Praise for Triage 1</h2>}
            <ul className='Comments-ul Comments-grid'>
                {comments.length != 0 && comments.map(eachComment =>
                <Comment key={eachComment.id} {...eachComment}/>
                )}
            </ul>
        </div>
        </>
    )
}

const Comment = (props)=>{

    const {name, comment , image} = props

    return(
        <>
        <li className={`Comments-li Comment${name}`}>
            <p className="Comment-paragraph">{comment}</p>
            <picture className="Comment-picture">
                <img src={`./assets/${image}`} alt={`${name} logo`} className="Comment-img" loading='lazy' />
            </picture>
        </li>
        </>
    )
}