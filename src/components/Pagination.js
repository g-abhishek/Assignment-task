import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        return (
            <ul class="Pagination">
                <li class="Pagination_item Pagination_item-current">
                    <button>1</button>
                </li>
                <li class="Pagination_item">
                    <button>2</button>
                </li>
                <li class="Pagination_item">
                    <button>3</button>
                </li>
                <li class="Pagination_item">
                    <button>4</button>
                </li>
                <li class="Pagination_item">
                    <button>5</button>
                </li>
                <li class="Pagination_item">
                    <button>6</button>
                </li>
                <li class="Pagination_item Pagination_next">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="13 17 18 12 13 7"></polyline>
                            <polyline points="6 17 11 12 6 7">
                            </polyline>
                        </svg>
                    </button>
                </li>
            </ul>
        )
    }
}
