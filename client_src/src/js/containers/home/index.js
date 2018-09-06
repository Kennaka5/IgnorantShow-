import { connect } from 'react-redux';
import home from './home';

function MapStoreToProps(store) {
    return {
      articleList: store.home.articleList,
      
    };
  }

  export default connect(MapStoreToProps)(home);