import { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchForm } from '../SearchForm/SearchForm';

export class SearchBar extends Component {
    render() {
        return (
            <header className='header'>
                <SearchForm onSubmit={this.props.onSubmit} />
            </header>                
    )            
}
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}