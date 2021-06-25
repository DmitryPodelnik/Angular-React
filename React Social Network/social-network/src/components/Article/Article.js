import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'



class Article extends React.Component{

    constructor(props)   {
        super(props);

        this.article = props.article;

        this.state = {

            
        };
    }


    render() {

        return (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{article.Name}</h5>
                    <p class="card-text">{article.Content}</p>
                    <p class="card-text"><small class="text-muted">Posted {article.Date}</small></p>
                </div>
            </div>
        )
        
    } 
}

export default Article;