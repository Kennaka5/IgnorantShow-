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
          <h1>The feed</h1>
          <hr/>
          <div className='articleList'>
          {!!articleList ? articleList.map(s =>{
            return (
              <div className='article' key={s.id}>
                <Link to={`/article/${s.id}`}>
                  <img className='articleImg'
                    src={s.media} alt="whatever"
                  />
                </Link>  
                  <div className='articleInfo'>
                    <h2 className='articleTitle'>{s.title}</h2>
                    <p className='articleBody'>{s.body}</p>
                  </div>
              </div>);
          })
          : <div className="loading">Loading...</div>}
          </div>
      </div>
    )    
  }
}

