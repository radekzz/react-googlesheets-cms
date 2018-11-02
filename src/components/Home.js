import React, { Component } from 'react';
import config from '../config';
import Tabletop from 'tabletop';
import ReactHtmlParser from 'react-html-parser';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        Tabletop.init({
            key: config.spreadsheetId,
            callback: googleData => {
                this.setState({
                    data: googleData
                })
            },
            simpleSheet: true
        })
    }

    render() {
        console.log('updated state --->', this.state);
        const { data } = this.state
        return (
            <div className="App">
                <div id="recipe-list">
                    {
                        data.map((obj, i) => {
                            return (
                                <div className="recipe-home" id={`recipe-${i}`} key={obj.Title}>
                                    {ReactHtmlParser(obj.Content)}
                                    <p>{obj.Lang}</p>
                                    <p>{obj.Category}</p>
                                    <p>
                                        <ul>
                                            {obj.Ingredients.split(",").map((o, i) => (
                                                <li key={i}>
                                                    {o}
                                                </li>
                                            ))}
                                        </ul>
                                    </p>
                                    <p>
                                        <ul>
                                            {obj.IngredientsAmount.split(",").map((o, i) => (
                                                <li key={i}>
                                                    {o}
                                                </li>
                                            ))}
                                        </ul>
                                    </p>
                                    <p>{obj.Time}min</p>
                                    <p>{obj.Portions} portions</p>
                                    <img alt={obj.Title} src={obj.Image} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;
