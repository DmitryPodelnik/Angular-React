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

    componentDidMount(){
        fetch("https://localhost:44342/api/article")
        .then(res => res.json())
        .then(
            data => {
             this.setState({data: data, isLoaded: true})   
            },
            error => {
                this.setState({isLoaded:true, error})
            }
        )
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