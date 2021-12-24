import React from 'react';
import figma from '../assets/figma.png';
import css from '../assets/css.png';
import git from '../assets/git.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import node from '../assets/node.png';
import postgresql from '../assets/db.png';
import react from '../assets/react.png';
import sass from '../assets/Sass_logo.png';
import {VscSmiley} from 'react-icons/vsc'



function About() {
    return (
        <div>
        <section className="about" id="aboutme">
            <div className="about__intro">
                <h4 className="intro"><span>Hello</span> <span className="emoji"><VscSmiley/></span>,</h4>
                <p>W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.
                </p>
                <button>Download Resume</button>
            </div>

            <div className="skills">
            <div className="skill__figma">
                <div>
                <div className="skill__imgBox">
                    <img className="img" src={figma} alt="figma"/>
                </div>
                </div>
                <p>Figma</p>
            </div>
            <div className="skill__html">
                <div>
                <div className="skill__imgBox">
                    <img className="img" src={html} alt="html"/>
                </div>
                </div>
                <p>Html 5</p>
            </div>
            <div className="skill__css">
                <div className="skill__imgBox">
                    <img className="img" src={css} alt="css"/>
                </div>
                <p>Css3</p>
            </div>
            <div className="skill__git">
                <div>
                <div className="skill__imgBox">
                    <img className="img" src={git} alt="git"/>
                </div>
                </div>
                <p>Git</p>
            </div>
            <div className="skill__react">
                <div>
                <div className="skill__imgBox">
                    <img className="img" src={react} alt="react"/>
                </div>
                </div>
            </div>
            <div className="skill__node">
                <div>
                <div className="skill__imgBox">
                    <img className="img" src={node} alt="node"/>
                </div>
                </div>
                <p> Node</p>
            </div>
            <div className="skill__js">
                <div>
                <div className="skill__imgBox">
                    <img className="img" src={js} alt="js"/>
                </div>
                </div>
                <p>Javascript</p>
            </div>
            <div className="skill__sass">
                <div>
                <div className="skill__imgBox">
                    <img className="img" src={sass} alt="sass"/>
                </div>
                </div>
                <p>Sass</p>
            </div>
           
            <div className="skill__db">
                <div>
                <div className="skill__imgBox">
                    <img  className="img"src={postgresql} alt="postgresql"/>
                </div>
                </div>
                <p>Postgresql</p>
            </div>
            </div>
            
        </section>
        </div>
    )
}

export default About
