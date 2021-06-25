import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import Article from '../Article/Article'

class ArticleList extends React.Component{

    constructor(props)   {
        super(props);

        this.articles = props.articles;

        this.state = {
            articles: [],
            isLoaded: false,
            error: null,     
        };
    }

    componentDidMount(){
        fetch("https://localhost:44342/api/article")
        .then(res => res.json())
        .then(
            data => {
             this.setState({articles: data, isLoaded: true})   
            },
            error => {
                this.setState({isLoaded:true, error})
            }
        )
    }


    render() {

        const {articles, isLoaded, error} = this.state;

        let articleComponents = null;

        if (error) {
            articleComponents = <p>Error: {error.message}</p>
        }
        else if (!isLoaded) {
            articleComponents = <p>Loading...</p>
        }
        else if (articles.length) {
            articleComponents = articles.map(function(item) {
                return  <li key={item.id}>
                            <Article article={item}/>
                        </li>
                });
        } else {
            articleComponents = <p>No articles</p>
        }

        return (
            <div id="main">
                <ul className="navbar-nav">
                    {articleComponents}
                </ul>
            </div>
        )
        
    } 
}

export default ArticleList;