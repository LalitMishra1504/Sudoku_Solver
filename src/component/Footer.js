import React from 'react';
import { ReactComponent as FooterDots } from '../assets/footer-dots.svg';
import { ReactComponent as Github } from '../assets/githubb.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';
import { ReactComponent as Mail } from '../assets/mail.svg';

const Footer = () => {
    const LalitLinks = {
        github: 'https://github.com/LalitMishra1504',
        llinkedin: 'https://www.linkedin.com/in/lalit-mishra-684230206/',
        website: '',
        email: 'lalitmishra7808@gmail.com'
    };
    return (
        <div className='footer'>
            <div className='footer-inner'>
                <div className='footer-left'>
                    <h3>Developer</h3>
                    <p><a target='_blank' rel='noreferrer' href={LalitLinks.website}>Lalit Mishra</a></p>
                </div>
                <div className='footer-right'>
                    <h3>Links</h3>
                    <div className='links'>
                        <a target='_blank' rel='noreferrer' href={LalitLinks.github}><Github className='github' /></a>
                        <a target='_blank' rel='noreferrer' href={LalitLinks.llinkedin}><Linkedin className='linkedin' /></a>
                        <a target='_blank' rel='noreferrer' href={`mailto:${LalitLinks.email}`}><Mail className='mail' /></a>
                    </div>
                    <p className='copyright'>&copy;</p>
                </div>
            </div>
            <h3 id='visit'>Play Sudoku</h3>
            <FooterDots id='footer-dots' />
        </div>
    );
};

export default Footer;