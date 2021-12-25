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
                <h4 className="intro"><span>Hello, I'm Ademola Kelvin</span> <span className="emoji"><VscSmiley/></span>,</h4>
               <p>I'm a self-taught front-end developer. I build website with a focus on simplicity, responsiveness, accessibility and pleasing aesthetics. As a solution oriented person, my approach is always focused on breaking down problems into small pieces and repeating the loop until the end.</p>
               <p>I also write  <a className="link-dev" href="https://adegbiteademola1999.medium.com/">articles</a> to share knowledge about technologies i work with.</p>
                
               <a className="link-dev" href="https://drive.google.com/file/d/13e2KIeZQoe2UI9yn2MDHKV-fJP55Hdrd/view?usp=sharing"><button>Download Resume</button></a>
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
