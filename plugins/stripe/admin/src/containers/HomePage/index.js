/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

const HomePage = () => {
  return (
    <div>
      <h1>Stripe</h1>
      <p>Save your private key here</p>
    </div>
  );
};

export default memo(HomePage);
