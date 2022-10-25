import { Component } from 'react';
import PropTypes from 'prop-types';


import Modal  from '../Modal/Modal';

export default class ImageGalleryItem extends Component {
      
    state = {
    modalImage: null,
  };

  handleClick = img => {
    if (!this.state.modalImage) {
      const { largeImageURL, tags } = img;
      this.setState({ modalImage: { tags, largeImageURL } });
      return;
    }

    this.setState({ modalImage: null });
    return;
    };
    

      render() {
    const { modalImage } = this.state;
    const { inputData } = this.props;
          return (
       
      <>
        {inputData.map(img => (
          <li className="ImageGalleryItem" key={img.id}>
            <img
              className="ImageGalleryItem-image"
              src={img.webformatURL}
              alt={img.tags}
              onClick={() => this.handleClick(img)}
            />
          </li>
        ))}
        {modalImage && (
          <Modal
            img={modalImage.largeImageURL}
            alt={modalImage.tags}
            onClose={this.handleClick}
          />
        )}
      </>
    )
  }
}

ImageGalleryItem.propTypes = {
        inputData: PropTypes.arrayOf(
      PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      })
    ),
}