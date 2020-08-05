/*
 *
 * HomePage
 *
 */

import React, { useState, useEffect, memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import {
  request
} from 'strapi-helper-plugin'

const HomePage = () => {

  const [pk, setPk] = useState('')

  useEffect(() => {
    const loadPk = async () => {
      const response = await request(`/${pluginId}/settings`, {
        method: 'GET'
      })

      const {pk} = response
      setPk(pk)
    }
    loadPk()
  }, [])

  const updatedPk = async (e) => {
    try{
      e.preventDefault()

      const response = await request(`/${pluginId}/settings`, {
        method: 'POST',
        body: {pk}
      })
    } catch(err){
      console.log("err ", err)
    }
  }

  return (
    <div>
      <h1>Stripe</h1>
      <p>Save your private key here</p>
      <form onSubmit={updatedPk}>
        <input 
          value={pk}
          onChange={(e) => setPk(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default memo(HomePage);
