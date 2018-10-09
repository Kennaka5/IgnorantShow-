import React from 'react';
import { Link } from 'react-router-dom';
import { 
  displayArticleList
 } from './homeActions';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
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
      <Navbar />
          <div className='homepageLayout'>
            <div className='articleList'>
              <div className='articleListBody'>
                  <p className='feedName'>Latest News....</p>
                  <hr className='aboutHr'/>
                  {!!articleList ? articleList.map(s =>{
                    return (
                    <div className='article' key={s.id}>
                <Link to={`/article/${s.id}`} className='link'>
                  <img className='articleImg'
                    src={s.media} alt="whatever"
                  />
                  <div className='articleInfo'>
                    <p className='articleTitle'>{s.title}</p>
                    <p className='articleHeadline'>{s.headline}</p>
                    <p className='articleDate'>{s.date.match(/\d{4}\-\d{2}-\d{2}/g).toString()}</p>
                  </div>
                  </Link>
              </div>);
                    })
                    : <div className="loading">Loading...</div>}
                </div>
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
          <Footer />
      </div>
    )    
  }
}

