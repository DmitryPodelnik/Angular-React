import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import Article from '../Article/Article'

class ArticleList extends React.Component{

    constructor(props)   {
        super(props);

        this.articles = props.articles;

        this.state = {

            
        };
    }


    render() {

        return (
            <div id="main">
                <ul className="navbar-nav">
                    {
                    this.articles.map(function(item) {
                        return  <li key={item.id}>
                                    <Article article={item}/>
                                </li>
                        })
                    }
                </ul>
            </div>
        )
        
    } 
}

export default ArticleList;