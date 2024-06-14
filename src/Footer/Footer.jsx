import './Footer.css'

export const Footer = ()=>{

    return(
        <>
        <footer className="Footer">
            <FooterNav/>
            <FooterSocial/>
        </footer>
        </>
    )
}

const FooterNav = ()=>{

    return(
        <>
        <nav className="Footer-nav Nav">
            <ul className="Nav-ul">
                <li className="Nav-li">
                    <a href="#" className="Nav-a">FAQ</a>
                </li>
                <li className="Nav-li">
                    <a href="#" className="Nav-a">Privacy</a>
                </li>
                <li className="Nav-li">
                    <a href="#" className="Nav-a">Terms</a>
                </li>
                <li className="Nav-li">
                    <a href="#" className="Nav-a">Security</a>
                </li>
            </ul>
        </nav>
        </>
    )
}

const FooterSocial = ()=>{
    return(
        <>
        <ul className="Social-ul">
            <li className="Social-li">
                <a href="mailto:triage@info.com" className="Social-a">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Social-svg" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                    </svg>
                </a>
            </li>
            <li className="Social-li">
                <a href="http://twitter.com" rel='noreferrer' target='_blank' className="Social-a">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Social-svg" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                    </svg>
                </a>
            </li>
        </ul>
        </>
    )
}