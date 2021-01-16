import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../action/posts';
import Grid from '@material-ui/core/Grid';
import { renderHtml, dateFormatter } from '../Utils';
import { GoArrowLeft } from 'react-icons/go';
import {} from 'react-router';
import { Link } from 'react-router-dom';

const PostDetail = ({ match }) => {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.posts.postData);
  React.useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (postData === null) {
    return <div>Loading</div>;
  }

  const postDetail = postData.posts.find((post) => post.id === match.params.id);

  return (
    <Grid container>
      <Grid item md={12} className='header'>
        <h1>{postData.tumblelog.title}</h1>
        <span>RSS</span>
      </Grid>
      <Grid item md={9} lg={9}>
        <Grid container>
          <Grid item md={12} className='post-item-main'>
            <div className='post-date-main'>
              {dateFormatter(postDetail.date)}
            </div>
            <div className='post-list-main'>
              <div className='post-content-main'>
                {renderHtml(postDetail)}
                {/* <span className='go-to-link'>
                      <Link target='_blank' to={`post/${post.id}/${post.slug}`}>
                        <GoArrowLeft />
                      </Link>{' '}
                    </span> */}
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3} lg={3}>
        <div className='search-div-main'>
          <input type='text' placeholder='Search' />
        </div>
        <div className='right-description-main'>
          <span>{postData.tumblelog.description}</span>
        </div>
      </Grid>
    </Grid>
  );
};

export default PostDetail;
