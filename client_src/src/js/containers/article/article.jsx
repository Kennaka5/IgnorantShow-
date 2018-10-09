import React from 'react';
import Navbar from '../navbar/navbar';
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
            <Navbar />
              <div className='choosenArticle'>
                <p className='choosenTitle'>{!!choosenArticle && choosenArticle.title}</p>
                  <img className='choosenImg'
                    src={!!choosenArticle && choosenArticle.media} alt="whatever"
                  /> 
                  <div className='choosenInfo'>
                    <p className='choosenBody'>{!!choosenArticle && choosenArticle.headline}</p>
                  </div>
                  <div className='infoBody'>
                  {!!choosenTopics ? choosenTopics.map(s =>{
            return (
                  <div className='topicInfo'>
                    <p className='topicTitle'>{s.title}</p>
                    <hr className='topicSelector'/>
                    <p className='topicBody'>{s.body}</p>
                  </div>);
          })
          : <div className="loading">Loading...</div>}
              </div>
            </div>
      </div>
    )    
  }
}