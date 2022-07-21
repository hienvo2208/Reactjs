import React, { Component } from 'react';
import './Navbar.css'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'hachiko3179',
            name: 'Hien Vo',
            age: 22,

        }
    }
    render() {
        return (
            <nav id='navbar'>
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Contact</li></a>
                    <a href="#"><li>About</li></a>
                </ul>

                <div className="nav-details">
                    user: {this.state.user}
                    <br />
                    name: {this.state.name}
                    <br />
                    age: {this.state.age}
                </div>
            </nav>
        )
    }


}
export default Navbar;