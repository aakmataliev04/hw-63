import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axiosApi from '../../axiosApi';
import Post from '../../components/Posts/Post/Post';
import {PostApi} from '../../types';
import './PostReview.css';
import Preloader from '../../components/Preloader/Preloader';

const PostReview = () => {
  const [post, setPost] = useState<Post | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const params = useParams();
  const id = params.postId;

  const fetchPost = useCallback(async () => {
    setIsLoading(true);
    let {data: post} = await axiosApi.get<PostApi | null>(`/posts/${id}.json`);

    if (post !== null) {
      post = {...post, id: id};
      setPost(post);
    }
    setIsLoading(false);
  }, [id]);
  useEffect(() => {
    void fetchPost();
  }, [fetchPost]);
  return (
    <div className={'alonePost-wrapper'}>
      {!isLoading ? post && <Post post={post} alonePost={true}/> : <div style={{padding: '105px 0'}}><Preloader/></div>}
    </div>
  );
};

export default PostReview;