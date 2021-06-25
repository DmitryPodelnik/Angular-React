import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'



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
                    this.data.map(function(item) {
                        return  <li key={item.id}>
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">{item.Name}</h5>
                                            <p class="card-text">{item.Content}</p>
                                            <p class="card-text"><small class="text-muted">Posted {item.Date}</small></p>
                                        </div>
                                    </div>
                                </li>
                        })
                    }
                </ul>
            </div>
        )
        
    } 
}

export default ArticleList;