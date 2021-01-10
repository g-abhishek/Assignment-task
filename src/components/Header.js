import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { searchQuery } from '../redux/Action'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchText : this.props.searchText
            
        }

    }

    onTextChange = (e) =>{
        this.setState({
            searchText: e.target.value
        })
        // this.props.searchQuery(this.state.searchText)
        this.props.searchQuery(e.target.value)
        this.props.history.push(`/?dateRange=all&page=0&prefix=true&query=${e.target.value}&sort=byPopularity&type=story`)

        
    }   

    handleLogout = () => {
        localStorage.removeItem('tokn')
        localStorage.removeItem('usr')
    }

    render() {
        return (
            <div>
                <header class="SearchHeader">
                    <div class="SearchHeader_search">
                        <a class="SearchHeader_logo" href="/">
                            <img src="//d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png" />
                            <div class="SearchHeader_label">{JSON.parse(localStorage.getItem('usr')).loginemail}</div>
                        </a>
                        <div class="SearchHeader_container">
                            <span class="SearchIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </span>
                            {/* =================================================================== */}
                            <input type="text" placeholder="Search stories by title, url or author" class="SearchInput" onChange= {this.onTextChange} name="searchText"/>
                            
                            
                        </div>
                    <div class="SearchHeader_settings mr-3">
                        <a href="/login">
                            <span onClick={this.handleLogout}>Logout</span>
                        </a>
                    </div>
                    </div>
                </header>
            </div>
        )
    }
}

const mapStateToprops = (state) => {
    return {
        searchText: state.searchText
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        searchQuery : (e) => dispatch(searchQuery(e))
    }
}

export default withRouter(connect(mapStateToprops, mapDispatchtoProps)(Header))
