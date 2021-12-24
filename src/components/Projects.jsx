import React from 'react'
import project1 from '../assets/petly.png';
import project2 from '../assets/windbnb.png';
import project3 from '../assets/bookmarker.png';
import scorekeeper from '../assets/scorekeeper.png';
import { FiLink } from 'react-icons/fi'
import { BiCode } from 'react-icons/bi'
import { SiCodeproject } from 'react-icons/si'
function Projects() {
    return (
        <section className="projects" id="project">
            <h2 className="recent">Recent Projects <SiCodeproject /></h2>
            <div className="grid">
                <div className="projects__card one">
                    <div className="card__image">
                        <img className="img" src={project1} alt={'project-petly'} />
                    </div>
                    <div className="card__details">
                        <div className="card__about">
                            <h5>Petly App</h5>
                            <p>Petly app is a project idea which aims to enable pet lovers easily find any pet of their choice and adopt. This project makes request to an external Api which contains several details of pets such as dogs, cat, reptiles, bird.
                                Users can make searches based on region, type of pet they desire top adopt. Here's a link to the figma design <a className='link-dev' href="https://www.figma.com/file/id3KHbySB8pxpMbYBsCmSi/Adoptme?node-id=0%3A1">Petly design</a> 
                            </p>
                        </div>

                        <div className="card__stacks">
                            <button>Html5</button>
                            <button>Css3</button>
                            <button>Javascript</button>
                            <button>React</button>
                            <button>Vercel</button>
                        </div>

                        <div className="card__link">
                            <p><a className='link' href="https://petly-blush.vercel.app/">Live url <FiLink /></a></p>
                            <p><a className='link' href="https://github.com/Adegbite1999/petly">Source code <BiCode /></a></p>
                        </div>
                    </div>
                </div>
                <div className="projects__card two">
                    <div className="card__image">
                        <img className="img" src={project2} alt={'project windbnb'} />
                    </div>
                    <div className="card__details">
                        <div className="card__about">
                            <h5>Windbnb Clone</h5>
                            <p>Windbnb clone is a <a className='link-dev' href="https://devchallenges.io/paths/front-end-developer">DevChallenge.io</a> challenges.</p>
                        </div>

                        <div className="card__stacks">
                            <button>Html5</button>
                            <button>Css3</button>
                            <button>Javascript</button>
                            <button>React</button>
                            <button>Vercel</button>
                        </div>

                        <div className="card__link">
                            <p><a className='link' href="https://windbnbapp.vercel.app/">Live url <span><FiLink /></span></a></p>
                            <p><a className='link' href="https://github.com/Adegbite1999/windbnb">Source code <span><BiCode /></span></a></p>
                        </div>
                    </div>
                </div>
                <div className="projects__card three">
                    <div className="card__image">
                        <img className="img" src={project3} alt={'project bookmarker'} />
                    </div>
                    <div className="card__details">
                        <div className="card__about">
                            <h5>Bookmarker</h5>
                            <p>A web app app to book mark website url</p>
                        </div>

                        <div className="card__stacks">
                            <button>Html5</button>
                            <button>Css3</button>
                            <button>Javascript</button>
                            <button>Github pages</button>
                        </div>

                        <div className="card__link">
                            <p><a className='link' href="https://adegbite1999.github.io/bookmark/">Live url <span><FiLink /></span></a></p>
                            <p><a className='link' href="https://github.com/Adegbite1999/bookmark">Source code <span><BiCode /></span></a></p>
                        </div>
                    </div>
                </div>
                <div className="projects__card four">
                    <div className="card__image">
                        <img className="img" src={scorekeeper} alt={'project-scorekeeper'} />
                    </div>
                    <div className="card__details">
                        <div className="card__about">
                            <h5>ScoreKeeper</h5>
                            <p>A gaming score keeping app that help player keeps track of game count.</p>
                        </div>

                        <div className="card__stacks">
                            <button>Html5</button>
                            <button>Css3</button>
                            <button>Javascript</button>
                            <button>Github pages</button>
                        </div>

                        <div className="card__link">
                            <p><a className='link' href="https://adegbite1999.github.io/scorekeeper/">Live url <span><FiLink /></span></a></p>
                            <p><a className='link' href="https://github.com/Adegbite1999/scorekeeper">Source code <span><BiCode /></span></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
