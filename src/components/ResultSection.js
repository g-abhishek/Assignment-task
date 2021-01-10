import React, { Component } from 'react'
import axios from 'axios'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'



class ResultSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            isDataReturned: false,
            searchText: this.props.searchText
        }
    }

    componentDidMount(){
        axios.get("https://hn.algolia.com/api/v1/search?tags=front_page").then(result => {
            this.setState({
                data: result.data.hits,
                isDataReturned: true
            })
        })

        
    }

    fetchData = (searchText) =>{
        axios.get(`https://hn.algolia.com/api/v1/search?query=${searchText}&tags=story`).then(result => {
            this.setState({
                data: result.data.hits,
                isDataReturned: true
            })

            for(var i = 0; i< result.data.hits.length; i++){
                var searchedPara = document.querySelector(`#searchResult${i}`);
                var words = searchText;
                var regex = RegExp(words, 'gi') // case insensitive
                var replacement = `<span style="background:yellow;font-weight:bold;">${words}</span>`;
                var newHTML = searchedPara.textContent.replace(regex, replacement);
                searchedPara.innerHTML = newHTML;
            }


        })     
        
        
    }


    componentDidUpdate(prevProps){
        if(this.props.searchText !== prevProps.searchText){
            this.setState({
                searchText: this.props.searchText
            })
        }
        this.fetchData(this.props.searchText)
        
    }

    selectText = () => {
        if(this.state.isDataReturned){
            let elem = document.getElementById("SearchResults").innerHTML;
            var res = elem.replace(this.props.searchText, `<b>${this.props.searchText}</b>`);
            document.getElementById("SearchResults").innerHTML = res;
        }
    }

    render() {
        
        return (
            this.state.isDataReturned ? 
            <section className="SearchResults" id="SearchResults">
                <div className="SearchResults_container">
                    {this.state.isDataReturned && this.state.data.map((item, idx) => {
                        return (
                        <article className="Story">
                        <div className="Story_container">
                            <div className="Story_data">
                                <div className="Story_title text-left">
                                    <a href={"https://news.ycombinator.com/item?id=" + item.created_at_i}>
                                        <span id={`searchResult${idx}`}>{item.title}</span>

                                    </a>
                                    <a href={item.url} target="_blank" className="Story_link">{item.url}</a>
                                </div>
                                <div className="Story_meta text-left">
                                    <span>
                                        <a href={"https://news.ycombinator.com/item?id=" + item.created_at_i}>{item.points} points</a>
                                    </span><span className="Story_separator">|</span>
                                    <span>
                                        <Link to={`https://news.ycombinator.com/user?id=${item.author}`}>
                                            <span>{item.author}</span>
                                        </Link>
                                    </span>
                                    <span className="Story_separator">|</span>
                                    <span>
                                        <a href={"https://news.ycombinator.com/item?id=" + item.created_at_i}>3 years ago</a>
                                    </span>
                                    <span className="Story_separator">|</span><span>
                                        <a href={"https://news.ycombinator.com/item?id=" + item.created_at_i}>{item.num_comments} comments</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>
                        )
                })}

                    <article className="Story">
                        <div className="Story_container">
                            <div className="Story_data">
                                <div className="Story_title">
                                    <a href="https://news.ycombinator.com/item?id=16582136">
                                        <span>Stephen Hawking has died</span>

                                    </a>
                                    <a href="http://www.bbc.com/news/uk-43396008" target="_blank" className="Story_link">(http://www.bbc.com/news/uk-43396008)</a>
                                </div>
                                <div className="Story_meta">
                                    <span>
                                        <a href="https://news.ycombinator.com/item?id=16582136">6015 points</a>
                                    </span><span className="Story_separator">|</span>
                                    <span>
                                        <a href="https://news.ycombinator.com/user?id=Cogito">
                                            <span>Cogito</span>
                                        </a>
                                    </span>
                                    <span className="Story_separator">|</span>
                                    <span>
                                        <a href="https://news.ycombinator.com/item?id=16582136">3 years ago</a>
                                    </span>
                                    <span className="Story_separator">|</span><span>
                                        <a href="https://news.ycombinator.com/item?id=16582136">436 comments</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>
                    
                </div>
            </section>
            : <></>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchText : state.searchText
    }
}


export default withRouter(connect(mapStateToProps, null)(ResultSection))