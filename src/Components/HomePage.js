import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../action/posts';
import Grid from '@material-ui/core/Grid';
import {renderHtml,dateFormatter} from '../Utils'
import { GoArrowLeft } from 'react-icons/go';import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { RiChatQuoteLine } from 'react-icons/ri';

import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.posts.postData);
  const [open, setOpen] = React.useState(false);
  const [detailId, setDetailId] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect( () => {
    dispatch(getPosts());
  }, []);
 
  const groupPosts =
    postData &&
    postData.posts.reduce((tempData, post) => {
      post['date-gmt'] = post['date-gmt'].split(' ')[0];
      tempData[post['date-gmt']] = [
        ...(tempData[post['date-gmt']] || []),
        post,
      ];
      return tempData;
    }, {});

  if (groupPosts === null) {
    return <div>Loading</div>;
  }
  

  const postDetail = postData.posts.find((post) => post.id === detailId);

  return (
    <>
    <Grid container>
      <Grid item md={12} className='header'>
        <h1>{postData.tumblelog.title}</h1>
        <span>RSS</span>
      </Grid>
      <Grid item md={9} lg={9}>
        <Grid container>
          {Object.keys(groupPosts).map((date, index) => (
            <Grid item md={12} className='post-item-main'>
              <div className='post-date-main'>
                {groupPosts[date].length > 0 && dateFormatter(groupPosts[date][0].date)      }
                
              </div>
              <div className='post-list-main'>
                {groupPosts[date].map((post) => (
                  <div   className='post-content-main'>{renderHtml(post)}
                  <span className="go-to-link">
                    
                    <Link target="_blank"  to={`post/${post.id}/${post.slug}`}> 
                    <GoArrowLeft />
                    </Link>  </span>
                    <span onClick={async () => {
await setDetailId(post.id)
                  await     handleClickOpen();
                    }} className="popup-detail">
                      < RiChatQuoteLine/> 
                    </span>
                  </div>
                ))}
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item md={3} lg={3}>
        <div className='search-div-main'>
          <input type='text' placeholder='Search' />
        </div>
        <div className="right-description-main">
          <span>
          {postData.tumblelog.description}
          </span>
        </div>
      </Grid>
    </Grid>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="detail-dialog-title"
        aria-describedby="detail-dialog-description"
        maxWidth={'md'}
      >
        <DialogTitle id="detail-dialog-title">{"Post Detail"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {
            postDetail !== undefined && 
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
          }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
      
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HomePage;
