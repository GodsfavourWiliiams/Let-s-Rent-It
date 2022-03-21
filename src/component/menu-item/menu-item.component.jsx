import React from 'react';
import './menu-item.css';
// import withRouter from './withRouter';

const MenuItem = ({ title, history, linkUrl, match }) => (
  
    <div className="menu-item" onClick={() => history.push(`${match.url}${linkUrl}`)}>
         <div className="content">
           <h1 className="title">{title.toUpperCase()}</h1>
             <span className="suntitle">Shop Now</span>
         </div>
    </div> 
)

export default MenuItem;