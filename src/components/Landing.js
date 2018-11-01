import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Landing extends Component {

    render() {
        return (
            <div>
                <h1 id="home-title">Who's watching?</h1>

                <div id="home-container">
                    <div id="Shir" className="user" ><Link to="/catalog"><span >Shir</span></Link></div>
                    <div id="Gefen" className="user" ><Link to="/catalog"><span>Gefen</span></Link></div>
                    <div id="Yuval" className="user" ><Link to="/catalog"><span>Yuval</span></Link></div>
                    <div id="Jona" className="user"><Link to="/catalog"><span>Jona</span></Link></div>
                </div>
            </div>
        );
    }
}

export default Landing;