import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Header from './Header';
import Footer from './Footer';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            googledata: []
        }
    }

    componentDidMount() {
        console.log("Home component mounted");
    }

    render() {
        console.log(this.props);
        const googledataInit = this.props.googledata;
        const googledata = googledataInit.slice(0, -1);
        console.log(googledata); //Data from google, array of objects without first line
        return (
            <div className="App">
                <Header />asdas
                <div id="recipe-list">
                    {
                        googledata.map((recipe, i) => {
                            return (
                                <div className="recipe-home" id={`recipe-${i}`} key={recipe.Title}>
                                    {ReactHtmlParser(recipe.Content)}
                                    <p>{recipe.Lang}</p>
                                    <p>{recipe.Category}</p>
                                    <ul>
                                        {recipe.Ingredients.split(",").map((o, i) => (
                                            <li key={i}>
                                                {o}
                                            </li>
                                        ))}
                                    </ul>
                                    <ul>
                                        {recipe.IngredientsAmount.split(",").map((o, i) => (
                                            <li key={i}>
                                                {o}
                                            </li>
                                        ))}
                                    </ul>
                                    <p>{recipe.Time}min</p>
                                    <p>{recipe.Portions} portions</p>
                                    <img alt={recipe.Title} src={recipe.Image} />
                                </div>
                            )
                        })
                    }
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
