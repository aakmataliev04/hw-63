import './App.css';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import Add from './containers/Add/Add';
import About from './containers/About/About';
import Contacts from './containers/Contacs/Contacts';
import Footer from './components/Footer/Footer';
import PostReview from './containers/PostReview/PostReview';
import EditPost from './containers/EditPost/EditPost';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/posts'} element={<Home/>}/>
          <Route path={'/posts/:postId'} element={<PostReview/>}/>
          <Route path={'/posts/:postId/edit'} element={<EditPost/>}/>
          <Route path={'/posts/add'} element={<Add/>}/>
          <Route path={'/about'} element={<About/>}/>
          <Route path={'/contacts'} element={<Contacts/>}/>
          <Route path="*" element={<h1>Not found!</h1>}/>
        </Routes>
      </main>
      <Footer/>

    </>
  );
}

export default App;
