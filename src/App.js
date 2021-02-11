import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
// import PostsComponent from './components/posts/PostsComponent';
// import singlePostsComponent from './components/singlePost/singlePostComponent';
import BlogPost from './components/views/blogPost';
import DashboardView from './components/views/dashboardView';
import Projects from './components/views/projects';
import ViewPost from './components/views/viewPost';

function App() {
  return (
      <Router>
        {/* <Route path='/' component={PostsComponent} exact />
        <Route path='/:slug' component={singlePostsComponent} /> */}
        <Route path="/" exact component={DashboardView} />
        <Route path="/blogs" exact component={BlogPost} />
        <Route path="/blogs/:slug" exact component={ViewPost} />
        <Route path="/projects" component={Projects} />
        {/* <Route path="/projects/:slug" component={ViewPost} /> */}
      </Router>
  );
}

export default App;
