import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
// import PostsComponent from './components/posts/PostsComponent';
// import singlePostsComponent from './components/singlePost/singlePostComponent';
import BlogPost from './components/views/blogPost';
import DashboardView from './components/views/dashboardView';
import Projects from './components/views/projects';
import ViewPost from './components/views/viewPost';
import Games from './components/views/games';
import Mathquiz from './components/views/mathquiz';
import Quiz from './components/games/mathquiz/quiz/quiz';

function App() {
  return (
      <Router>
        {/* <Route path='/' component={PostsComponent} exact />
        <Route path='/:slug' component={singlePostsComponent} /> */}
        <Route path="/" exact component={DashboardView} />
        <Route path="/blogs" exact component={BlogPost} />
        <Route path="/blogs/:slug" exact component={ViewPost} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/games" exact component={Games} />
        <Route path="/games/mathquiz" exact component={Mathquiz} />
        <Route path="/games/mathquiz/:id" exact component={Quiz} />
        {/* <Route path="/projects/:slug" component={ViewPost} /> */}
      </Router>
  );
}

export default App;
