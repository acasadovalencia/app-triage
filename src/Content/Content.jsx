import { useEffect, useState } from 'react'
import './Content.css'

export const Content = ()=>{

    const [content , setContent] = useState([])

    const {VITE_CONTENT} = import.meta.env

    const contentRequest = async ()=>{
        let controller = new AbortController()
        let options = {
            method : 'get',
            signal: controller.signal
        }
        await fetch( VITE_CONTENT , options)
        .then(res => res.json())
        .then(data => setContent(data))
        .catch(err => console.log(err))
        .finally(()=> controller.abort())
    }

    useEffect(()=>{
        contentRequest()
    }, [])

    return(
        <>
        {content.length == 0 && 
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
        {content.length != 0 && content.map(eachContent => 
            <Section key={eachContent.id} {...eachContent}/>
        )}

        </>
    )
}

const Section = (props)=>{

    const {name , title, image , alt_image, icon, description} = props

    return(
        <>
        <div className={`Section-wrapper Section-wrapper--${name}`}>
            <section className={`Section Section-${name}`}>
                    <div className={`Section-description Description-${name}`}>
                        <div className={`Description-wrapper Description-wrapper--${name}`}>
                            <picture className="Description-picture">
                                <img src={`./assets/${icon}`} alt={`${name} icon`} className={`Description-icon Icon-${name}`} loading='lazy' height='48' width='48' />
                            </picture>
                            <h2 className={`Description-h2 H2-${name}`}>{title}</h2>
                            <p className={`Description-paragraph Paragraph-${name}`}>{description}</p>
                            {name == 'triage' && 
                            <a href='https://www.apple.com/es/app-store/' target='_blank' rel='noreferrer' className='Appstore-link' title='Go to Appstore'>
                                <picture className='Appstore-picture'>
                                    <img src="./assets/appstore-icon-186x61.png" alt="Appstore Icon" className='Appstore-icon' width='186' height='61' />
                                </picture> 
                            </a>}
                        </div>
                    </div>
                    <div className={`Section-image Image-${name}`}>
                        <picture className={`Image-picture Image-picture--${name}`}>
                            <img src={`./assets/${image}`} alt={alt_image} className="Section-img" loading='lazy' width='395' height='610'  />
                        </picture>
                    </div>
            </section>
        </div>
        </>
    )
}