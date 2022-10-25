import { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeCircles } from 'react-loader-spinner';



import FetchImages from './GalleryApi/GalleryApy'
import SearchBar from './Searchbare/Serchbar'
import ImageGallery from './ImageGallery/ImageGallery'




export class App extends Component {
  state = {
    page: 1,
    input: '',
    date: [],
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    const { input, page } = this.state;

    if (prevState.input !== input || page !== prevState.page) {
      this.setState({ loading: true });

      FetchImages(page, input)
        .then(imgArr => {
          if (input !== prevState.input) this.setState({ data: imgArr.hits });
          else
            this.setState(prevState => {
              return {
                data: [...prevState.data, ...imgArr.hits],
              };
            });
        })
        .catch(error => console.log(error))
        .finally(this.setState({ loading: false }));
      return;
    }
  }
  
  onSubmit = input => {
    this.setState({
      input,
      page: 1,  
  })
  }
  
  onClick = e => {
    if (e) {
      this.setState(prevState => {
        return {
          page: prevState.page + 1,
        }
      })
    }
  }


  render() {
    const { data, loading, input } = this.state;
  return (
    <>
      <SearchBar onSub={this.onSubmit} />
      {data && <ImageGallery inputData={data} />}
      {loading && (
          <ThreeCircles
            height="100"
            width="100"
            color="#468645"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        )}
    
    </>
    );
    }
};
