import React from 'react';
import { Link } from 'react-router-dom';
import { 
    displayChoosenArticle,
    displayChoosenArticleTopics,
   } from './articleActions';


export default class Article extends React.Component {
  constructor(props) {
    super(props)
}

componentWillMount() {
    const {dispatch} = this.props;
    dispatch(displayChoosenArticle(`${this.props.match.params.id}`))
    dispatch(displayChoosenArticleTopics(`${this.props.match.params.id}`))
    console.log('got article', `${this.props.match.params.id}`)
}

  render() {
      const {choosenArticle, choosenTopics} = this.props;
      console.log('this.props delivered', choosenArticle)
    return (
      <div className='articleBody'>
        <ul>
            <Link to='/'>
            <li className='navTitle'>Ignorant News</li>
            </Link>
            <li className='links'>button links</li>
        </ul>
              <div className='choosenArticle'>
                <h2 className='choosenTitle'>{!!choosenArticle && choosenArticle.title}</h2>
                  <img className='choosenImg'
                    src={!!choosenArticle && choosenArticle.media} alt="whatever"
                  /> 
                  <div className='choosenInfo'>
                    <p className='choosenBody'>{!!choosenArticle && choosenArticle.headline}</p>
                  </div>
                  {!!choosenTopics ? choosenTopics.map(s =>{
            return (
                  <div className='topicInfo'>
                    <h2 className='topicTitle'>{s.title}</h2>
                    <p className='topicBody'>{s.body}</p>
                  </div>);
          })
          : <div className="loading">Loading...</div>}
              </div>
      </div>
    )    
  }
}