import React, { Component } from 'react'
import Header from './Header.js'
import Filter from './Filter.js'
import ResultSection from './ResultSection.js'
import Pagination from './Pagination.js'
import Footer from './Footer.js'

export default class MainComponent extends Component {

    componentWillMount(){
        if(!localStorage.getItem('tokn')){
            window.location.href = "/login"
        }
        // localStorage.removeItem('tokn')
        // localStorage.removeItem('usr')
    }
    render() {
        return (
            <div className="container">   
                
                <Header />
                <Filter />
                <ResultSection />
                <Pagination />
                <Footer />
                
            </div>
        )
    }
}
