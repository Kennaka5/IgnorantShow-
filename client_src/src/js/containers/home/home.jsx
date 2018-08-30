import React from 'react';
// import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  
  render() {
    return (
      <div className='body'>
          <ul>
            <li className='navTitle'>Ignorant News</li>
            <li className='links'>button links</li>
          </ul>
          <h1>The feed</h1>
          <hr/>
        <div className='articalList'>
          <div className='artical'>
          <img className='pOne'
              src="http://i1043.photobucket.com/albums/b439/kennaka5/example_Shining_zpscqnf6tyg.jpeg" border="0" alt=" photo example_Shining_zpscqnf6tyg.jpeg"
          />
          <h2 className='articalTitle'>The Shining</h2>
          </div>
        </div>
      </div>
    )    
  }
}
