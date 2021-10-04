/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import React, { Fragment } from 'react';
let measure = '';


const hocComponent = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        measure: '',
      };
    }

    // showToast = message => {};

    getMeasure = () => {
      const width = window.innerWidth;
      console.log(this.props, 'PROPS IN COMPONENT');
      console.log(width)
      switch (true) {
        case (width <= 360):
          measure = 'SMALL_MOBILE';
          break;

        case (width <= 480 && width > 360):
          measure = 'MEDIUM_MOBILE';
          break;

        case (width <= 640 && width > 480):
          measure = 'LARGE_MOBILE';
          break;

        case (width <= 768 && width > 640):
          measure = 'SMALL_TABLET';
          break;

        case (width <= 960 && width > 768):
          measure = 'MEDIUM_TABLET';
          break;

        case (width <= 1150 && width > 960):
          measure = 'LARGE_TABLET';
          break;

        case (width <= 1440 && width > 1150):
          measure = 'LAPTOP';
          break;

        case (width <= 2400 && width > 1440):
          measure = 'LAPTOP';
          break;
      }


      this.setState({
        measure
      })
      return measure;


    };
    componentDidMount() {
      this.getMeasure();
      window.addEventListener('resize', this.getMeasure)
    }
    componentWillMount() {
      window.removeEventListener('resize', this.resize)
    }

    render() {

      return (
        <Fragment>
          <Component {...this.props} measure={this.state.measure} />
        </Fragment>
      );
    }
  };
};

export { hocComponent };
