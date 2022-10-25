import PropTypes from 'prop-types';
import { Component } from 'react';

export class Button extends Component {
 
  onClickEvent = e => {
    this.props.handleClick(e);
  };

  render() {
    return (
      <div type="button" className="Button" onClick={this.onClickEvent}>
        Load more
      </div>
    );
  }
}
Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
}
