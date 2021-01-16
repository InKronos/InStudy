import React, { Component, useState } from 'react';

class Header extends Component{

    render(){
        return (
            <header>
                <h1>In<strong>Study</strong></h1>
                <div className="Header-menu">
                    <div className="Header-links">
                        <Link to="">Home</Link>
                    </div>
                </div>
            </header>
        );
    }
   
}