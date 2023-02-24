import { Link } from 'react-router-dom';
import './PodcastHeader.css';
import React, { useContext } from 'react';
import { BounceLoader } from "react-spinners";
import SpinnerContext from '../SpinnerContext';

const PodcastHeader = () => {
  const { isLoading } = useContext(SpinnerContext);


  return (
      <div className="app-header">
        <Link className='link' to="/">
          <p>Podcaster</p>
        </Link>

        {  isLoading === true && (<BounceLoader size={40} color={'#1d4ad7'}/>) }
      </div>
  );
};

export default PodcastHeader;