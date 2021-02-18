import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
// import PostsComponent from './components/posts/PostsComponent';
// import singlePostsComponent from './components/singlePost/singlePostComponent';
import BlogPost from './components/views/blogPost';
import DashboardView from './components/views/dashboardView';
import Projects from './components/views/projects';
import ViewPost from './components/views/viewPost';
import Games from './components/views/games';
import Settings from './components/views/settings';
import Mathquiz from './components/games/mathquiz/mathquiz';
import QuizComponent from './components/games/mathquiz/quizComponent';
import Todolist from './components/taskManager/todoList';

function App() {
  return (
      <Router>
        {/* <Route path='/' component={PostsComponent} exact />
        <Route path='/:slug' component={singlePostsComponent} /> */}
        <Route path="/" exact component={DashboardView} />

        {/* Blogs */}
        <Route path="/blogs" exact component={BlogPost} />
        <Route path="/blogs/:slug" exact component={ViewPost} />
        
        {/* Projects */}
        <Route path="/projects" exact component={Projects} />

        {/* Games */}
        <Route path="/games" exact component={Games} />
        <Route path="/games/mathquiz" exact component={Mathquiz} />
        <Route path="/games/mathquiz/:id" exact component={QuizComponent} />
        {/* <Route path="/games/millionairesgame" exact component={Millionairesgame} /> */}

        {/* Task Manager */}
        <Route path="/task-manager/todolist" exact component={Todolist} />


        {/* Settings */}
        <Route path="/settings" exact component={Settings} />
        {/* <Route path="/settings/mathquiz" exact component={Mathquizsetting} /> */}
        {/* <Route path="/projects/:slug" component={ViewPost} /> */}
      </Router>
  );
}

export default App;
