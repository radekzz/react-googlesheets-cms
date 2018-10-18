import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { year: new Date().getFullYear() };
    }
    render() {
        return (
            <footer className="App-footer">
                <p>
                    Created by <a
                        className="App-link"
                        href="http://www.mezulanik.cz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Radek & Adam</a>
                </p>
                <p>
                    &copy; {this.state.year}
                </p>
            </footer>
        );
    }
}

export default Footer;