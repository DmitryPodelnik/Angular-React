import React from 'react';
import { Link } from 'react-router-dom'


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
        fetch("https://localhost:44318/api/articles")
        .then(res => res.json())
        .then(
            data => {
             this.setState({articles: data, isLoaded: true})   
            },
            error => {
                this.setState({isLoaded: true, error})
            }
        )
    }


    render() {

        const {articles, isLoaded, error} = this.state;

        let {id} = this.state.articles;

        let articleComponents = null;

        if (error) {
            articleComponents = <p>Error: {error.message}</p>
        }
        else if (!isLoaded) {
            articleComponents = <p>Loading...</p>
        }
        else if (articles.length) {
            articleComponents = articles.map(function(item) {
                return  <li key={item}>
                                <div class="card w-75">
                                    <div class="card-body">
                                        <h5 class="card-title">{item.title}</h5>
                                        <p class="card-text">{item.content.substring(0, item.content.indexOf(".", 30) + 1)}</p>
                                        
                                        <div class="blockquote-footer">
                                            Written by <Link><cite title="Username">{item.username}</cite></Link>
                                        </div>
                                        <Link to={{ pathname: `/articles/${item.id}`,
                                                state: { article: item 
                                                       }
                                                 }}>
                                        <div class="btn btn-primary">More details</div>
                                        </Link>
                                    </div> 
                                </div>
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