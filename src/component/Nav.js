import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faMedium, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export default function Nav(props) {
    return (
        <div className="navcover">
            <div className="nav-container">
                <nav className="nav">
                    <div className="nav1">
                        <ul className="navlist1">
                            <li className="listitem1">
                                <Link to='mailto:olasehindemichael285@gmail.com'>
                                    <FontAwesomeIcon icon={faEnvelope} color="white" className="navlogo" />
                                </Link>
                            </li>
                            <li className="listitem1">
                                <Link to='https://github.com/Temi-Michael/' target="_blank">
                                    <FontAwesomeIcon icon={faGithub} color="white" className="navlogo" />
                                </Link>
                            </li>
                            <li className="listitem1">
                                <Link to='https://www.linkedin.com/in/temi-michael/' target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} color="white" className="navlogo" />
                                </Link>
                            </li>
                            <li className="listitem1">
                                <Link to='https://medium.com/@olasehindemichael285/' target="_blank">
                                    <FontAwesomeIcon icon={faMedium} color="white" className="navlogo" />
                                </Link>
                            </li>
                            <li className="listitem1">
                                <Link to='https://stackoverflow.com/users/20115733/lazy-coder' target="_blank">
                                    <FontAwesomeIcon icon={faStackOverflow} color="white" className="navlogo" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav2">
                        <ul className="navlist2">
                            <li className="listitem2">{props.project}</li>
                            <li className="listitem2">{props.contact}</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
};
