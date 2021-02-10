import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
// import PostsComponent from './components/posts/PostsComponent';
// import singlePostsComponent from './components/singlePost/singlePostComponent';
import BlogPost from './components/views/blogPost';
import ViewPost from './components/views/viewPost';

function App() {
  return (
      <Router>
        {/* <Route path='/' component={PostsComponent} exact />
        <Route path='/:slug' component={singlePostsComponent} /> */}
        <Route path="/" exact component={BlogPost} />
        <Route path="/:slug" exact component={ViewPost} />
      </Router>
  );
}

export default App;
