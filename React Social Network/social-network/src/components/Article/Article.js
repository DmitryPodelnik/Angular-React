import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {NavLink} from 'react-router-dom'


class Article extends React.Component{

    constructor(props)   {
        super(props);

        // this.article = props.article;
        //this.article = props.location.state.article; 

        this.state = {

            
        };
    }


    render() {

        return (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{this.article.Title}
                        <NavLink to={`/articles/${this.article.Id}`} >{this.article.Title}</NavLink>
                    </h5>
                    <p class="card-text">{this.article.Content}</p>
                    <p class="card-text"><small class="text-muted">Posted {this.article.Date} by {this.article.Username}</small></p>
                </div>
            </div>
        )
        
    } 
}

export default Article;