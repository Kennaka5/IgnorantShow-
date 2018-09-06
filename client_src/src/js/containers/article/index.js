import { connect } from 'react-redux';
import article from './article';

function MapStoreToProps(store) {
    return {
      //Article information
      choosenArticle: store.article.choosenArticle,
      choosenTopics: store.article.choosenTopics,
      //other Stores
      articleList: store.home.articleList,
    };
  }

  export default connect(MapStoreToProps)(article);