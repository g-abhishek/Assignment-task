import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div class="SearchFilters container">
                <button class="SearchFilters_menuButton">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
                <div class="SearchFilters_filters">
                    <span class="SearchFilters_filterContainer">
                        <span class="SearchFilters_text">Search</span>
                        <div class="Dropdown" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="downshift-0-label">
                            <label for="downshift-0-input" id="downshift-0-label" tabindex="0" class="Dropdown_label">Stories
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </label>
                            
                        </div>
                    </span>
                    <span class="SearchFilters_filterContainer">
                        <span class="SearchFilters_text">by</span>
                        <div class="Dropdown" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="downshift-1-label">
                            <label for="downshift-1-input" id="downshift-1-label" tabindex="0" class="Dropdown_label">Popularity
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </label>
                            <ul class="Dropdown_list" role="listbox" aria-labelledby="downshift-1-label" id="downshift-1-menu" style={{ position: "absolute" }}>
                            </ul>
                        </div>
                    </span>
                    <span class="SearchFilters_filterContainer">
                        <span class="SearchFilters_text">for</span>
                        <div class="Dropdown" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="downshift-2-label">
                            <label for="downshift-2-input" id="downshift-2-label" tabindex="0" class="Dropdown_label">All time
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </label>
                            <ul class="Dropdown_list" role="listbox" aria-labelledby="downshift-2-label" id="downshift-2-menu" style={{ position: "absolute" }}>
                            </ul>
                        </div>
                    </span>
                </div>
                
            </div>
        )
    }
}
