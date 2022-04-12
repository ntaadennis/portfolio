import React from 'react';
import CTA from './CTA';
import me from '../../assets/me.png'
import './header.css'

class Header extends React.Component {

    render() {
        return (
            <header className="App-header hero" id='hero'>
                <div className="container header__container">
                    <h1>dennis vollmer</h1>
                    <h3>webdeveloper.</h3>
                    <CTA />

                    <div className="me">
                        <img src={me} alt="me" />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
