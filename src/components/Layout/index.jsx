import {Routes, Route } from 'react-router-dom'
import AboutMe from '../../pages/aboutMe'
import AboutUser from '../../pages/aboutUser'
import { ABOUT_ME_ROUTE, USER_ROUTE, POSTS_LIST_ROUTE } from '../../routes'
import Header from '../Header'
import PostsList from '../../pages/postsList'

const Layout = () => {
  
  return (
    <>
      <Header/>
      <Routes>
          <Route path={ABOUT_ME_ROUTE} element={<AboutMe/>} />
          <Route path={`${USER_ROUTE}/:id`} element={<AboutUser/>}/>
          <Route path={POSTS_LIST_ROUTE} element={<PostsList/>} />
          <Route path="/" element={<PostsList/>} />
      </Routes>
    </>
  );
};

export default Layout