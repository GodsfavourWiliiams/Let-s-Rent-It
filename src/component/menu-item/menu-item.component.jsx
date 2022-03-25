import React from 'react';
// import withRouter from './withRouter';

const MenuItem = ({ title, history, linkUrl, match }) => (
  
    <div className='text-black cursor-pointer font-bold text-sm leading-3 rounded' onClick={() => history.push(`${match.url}${linkUrl}`)}>
           <h1 className="">{title.toUpperCase()}</h1>
    </div> 
)

export default MenuItem;