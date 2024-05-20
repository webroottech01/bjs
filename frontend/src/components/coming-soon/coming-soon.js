import React from 'react';
import PropTypes from 'prop-types';
import './coming-soon.scss';
import Banner from '../banner/banner';

const ComingSoon = () => (
  <div className="coming-soon">
    <Banner
        title='Coming Soon...' 
        innerpage
      />
  </div>
);

ComingSoon.propTypes = {};

ComingSoon.defaultProps = {};

export default ComingSoon;
