import {Routes, Route } from 'react-router-dom';
import AboutMe from '../../pages/aboutMe';
import AboutUser from '../../pages/aboutUser';
import PostsList  from '../../pages/postsList';

const Layout = () => {
  return (
      <Routes>
          <Route path="/aboutMe" element={<AboutMe/>} />
          <Route path="/aboutUser" element={<AboutUser/>}/>
          <Route path="/postsList" element={<PostsList/>} />
          <Route path="/" element={<PostsList/>} />
        </Routes>
  );
};

export {Layout}