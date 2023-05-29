import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Row, Spinner } from 'react-bootstrap';

import { getPosts } from '../../store/postsReducer';
import Post from '../../components/Post';
import Pagination from '../../components/Pagination';
import { Search } from '../../components/Search';
import { Sort } from '../../components/Sort';

const PostsList = () => {
  const posts = useSelector(store => store?.postsReducer?.posts);
  const status = useSelector(store => store?.postsReducer?.status);
  const postsError = useSelector(store => store?.errorReducer?.postsError);
  const dispatch = useDispatch();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [value, setValue] = useState('');
  const [sort, setSort] = useState(false);
  
  const [userId, setUserId] = useState('');
  
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  
  if (sort) {
    posts.sort(function (a, b) {
      const titleFirst = a.title.toLowerCase();
      const titleNext = b.title.toLowerCase();
      if (titleFirst < titleNext)
        return -1;
      if (titleFirst > titleNext)
        return 1;
      return 0;
    });
  } else {
    posts.sort(function (a, b) {
      const titleFirst = a.title.toLowerCase();
      const titleNext = b.title.toLowerCase();
      if (titleFirst < titleNext)
        return 1;
      if (titleFirst > titleNext)
        return -1;
      return 0;
    });
  }
  
  const filteredPosts = posts.filter(item => {
    return item.title.toLowerCase().includes(value.toLowerCase());
  });
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  const searchHandler = (value) => setValue(value);
  const sortHandler = (value) => setSort(value);
  
  const userIdHandle = (id) => setUserId(id);
  
  if (status === null && postsError === '') {
    return (
      <Container>
        <div>
          <Search value={searchHandler}/>
          <Sort value={sortHandler}/>
        </div>
        <Spinner animation="border" role="status" className="mx-auto d-block" size="xl">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }
  
  return (
    <Container>
    
    <h1>Posts</h1>
      <div>
        <Search value={searchHandler}/>
        <Sort value={sortHandler}/>
      </div>
      {
        !posts || posts.length === 0
          ? postsError ? <h2>{postsError}</h2> : null
          : <>
            <Row className="posts my-4 mx-0">
              {
                currentPosts.map((item, index) => (
                  <Post post={item} key={index} userId={userIdHandle} link={true} error={postsError}/>
                ))
              }
            </Row>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={filteredPosts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </>
      }
    </Container>
  )
}

export default PostsList

