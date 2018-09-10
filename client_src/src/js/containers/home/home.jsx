import React from 'react';
import { Link } from 'react-router-dom';
import { 
  displayArticleList
 } from './homeActions';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
}


componentWillMount() {
  const {dispatch, articleList} = this.props;
  dispatch(displayArticleList())
  console.log('mounted Object', articleList)
}


  
  render() {
    const { articleList } = this.props
    console.log('render dom:', articleList)
    return (
      <div className='body'>
          <ul>
            <Link to='/'>
            <li className='navTitle'>Ignorant News</li>
            </Link>
            <li className='links'>button links</li>
          </ul>
          <div className='homepageLayout'>
          <div className='articleList'>
          <p className='feedName'>The feed</p>
          <hr/>
          {!!articleList ? articleList.map(s =>{
            return (
              <div className='article' key={s.id}>
                <Link to={`/article/${s.id}`} className='link'>
                  <img className='articleImg'
                    src={s.media} alt="whatever"
                  />
                  <div className='articleInfo'>
                    <h2 className='articleTitle'>{s.title}</h2>
                    <p className='articleHeadline'>{s.headline}</p>
                  </div>
                  </Link>
              </div>);
          })
          : <div className="loading">Loading...</div>}
          </div>
          <div className='about'>
            <div className='aboutBody'>
            <p className='aboutTitle'>About Me</p>
            <hr className= 'aboutHr'/>
            <p className='aboutMe'>
            This is currently a developing site with the intent to give readers another angle to look at the entertainment industry.  So much goes into what we see in the media that affects the the end product viewers like us get to see.
            </p>
            </div>
            </div>
            </div>
      </div>
    )    
  }
}

