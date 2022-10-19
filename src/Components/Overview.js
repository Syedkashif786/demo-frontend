import React from 'react';
import './overview.css';

const Overview = () => {
  return (
    <div className='col-md-6'>

      <div className='box text-dark'>
        <img src="filepreview.png" alt="file preview" />
        <h1 className='header text-black'>Easy and secure access to your content</h1>
        <p>Store your files and folder from your mobile device, tablet, or computer.
        </p>
        {/* <div className='btn-group '> */}
        <button className='btn btn-primary btn-lg'>Try file preview for work</button>
        <button className='btn btn-light text-primary btn-lg border'>Go to Preview</button>
        {/* </div> */}
        <div className='box2 d-flex pt-4'>

          <p>Don't have an account?</p>
          <p className='para text-primary ms-3'><a href="http://localhost:3000/register" target='blank'>Sign up at no cost</a></p>
        </div>
      </div>
    </div>
  )
}

export default Overview;