import React from 'react';
import { Link } from 'react-router-dom';

export default function Project() {
    return (
        <div className='projectback'>
            <div className="projectcontainer" id='project'>
                <h1 className="projectheader">My projects</h1>
                <div className="projectframe">
                    <div className="card">
                        <h4 className='projectheading'>Portfolio Website</h4>
                        <p className='projecttext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className='projectlinks'>
                            <Link to='https://temi-michael-portfolio.netlify.app/' target='_blank' className='links'>Website Link</Link>
                            <Link to='https://github.com/Temi-Michael/Portfolio' target='_blank' className='links'>Github Repository</Link>
                        </div>
                    </div>
                    <div class="card">
                        <h4 className='projectheading'>Online Calculator</h4>
                        <p className='projecttex'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className='projectlinks'>
                            <Link to='https://lazy-calculator.netlify.app/' target='_blank' className='links'>Website Link</Link>
                            <Link to='https://github.com/Temi-Michael/calculator' target='_blank' className='links'>Github Repository</Link>
                        </div>
                    </div>
                    <div class="card">
                        <h4 className='projectheading'>Website Assignment(NEXFORD)</h4>
                        <p className='projecttex'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className='projectlinks'>
                            <Link to='https://little-lemon-temi.netlify.app/' target='_blank' className='links'>Website Link</Link>
                            <Link to='https://github.com/Temi-Michael/little-lemon' target='_blank' className='links'>Github Repository</Link>
                        </div>
                    </div>
                    <div class="card">
                        <h4 className='projectheading'>TODO Lists Creator</h4>
                        <p className='projecttex'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className='projectlinks'>
                            <Link to='https://activity-lists.netlify.app/' target='_blank' className='links'>Website Link</Link>
                            <Link to='https://github.com/Temi-Michael/todo-list' target='_blank' className='links'>Github Repository</Link>
                        </div>
                    </div>
                    <div class="card">
                        <h4 className='projectheading'>Profile Pane</h4>
                        <p className='projecttex'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className='projectlinks'>
                            <Link to='https://profile-pane.netlify.app/' target='_blank' className='links'>Website Link</Link>
                            <Link to='https://github.com/Temi-Michael/profile' target='_blank' className='links'>Github Repository</Link>
                        </div>
                    </div>
                    <div class="card">
                        <h4 className='projectheading'>Random Jokes Generator</h4>
                        <p className='projecttex'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className='projectlinks'>
                            <Link to='https://random-jokes-generation.netlify.app/' target='_blank' className='links'>Website Link</Link>
                            <Link to='https://github.com/Temi-Michael/Jokes' target='_blank' className='links'>Github Repository</Link>
                        </div>
                    </div>
                </div>
                <h3 className='projectend'>View Other Projects in my
                    <Link to='https://github.com/Temi-Michael/' target='_blank' className='projectend'> GitHub Profile</Link>
                </h3>
            </div>
        </div>
    )
};