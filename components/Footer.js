import Link from 'next/link'

import Logo from './SVG/logo'

import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="footer" id="footer">
            <div className="footer--top">
                <div className="footer--logo">
                    <Link href="/">
                        <a>
                            <Logo />
                        </a>
                    </Link>
                </div>
                <nav className="footer--nav">
                    <ul className="footer--nav__left">
                        <li className="j-text p-small _700 bold">Pages</li>
                        <li className="p-small">
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className="p-small">
                            <Link href="/features">
                                <a>Features</a>
                            </Link>
                        </li>
                        <li className="p-small">
                            <Link href="/pricing">
                                <a>Pricing</a>
                            </Link>
                        </li>
                        <li className="p-small">
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="footer--nav__left">
                        <li className="j-text p-small _700 bold">Legal</li>
                        <li className="p-small">
                            <Link href="/privacy">
                                <a>Privacy</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="footer--bot">
                <div className="j-display footer--copyright">© {currentYear} Unwired Revolution</div>
                <div className="footer--social__wrapper">
                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
                        <BsLinkedin 
                            style={{
                                height:"25px",
                                width: 'auto',
                                fill: '#b8bac3'
                            }}
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer