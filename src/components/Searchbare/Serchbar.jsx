import { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchForm } from '../SearchForm/SearchForm';

export class SearchBar extends Component {
    render() {
    return (
      <header className="header">
        <SearchForm onSub={this.props.onSub} />
      </header>
    );
  }
}

SearchBar.propTypes = {
    onSub: PropTypes.func.isRequired,
}

export default SearchBar;