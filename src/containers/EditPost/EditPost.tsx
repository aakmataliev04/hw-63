import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from '../../axiosApi';
import {Post, PostApi} from '../../types';
import {useParams} from 'react-router-dom';
import Add from '../Add/Add';
import Preloader from '../../components/Preloader/Preloader';

const EditPost = () => {
  const [post, setPost] = useState<Post>();
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const id = params.postId;

  const fetchPost = useCallback(async () => {
    setIsLoading(true);
    let {data: loadedPost} = await axiosApi.get<PostApi>(`/posts/${id}.json`);

    if (loadedPost !== null) {
      loadedPost = {
        ...loadedPost, id: id
      };
      setIsLoading(false);
    }
    setPost(loadedPost);
    }, [id]);

  useEffect( () => {
    void fetchPost();
  },[fetchPost]);

  return (
    <div>
      {post?.id}
      {isLoading ? <div style={{display: 'flex', justifyContent: 'center', padding: '125px 0'}}><Preloader /></div>: <Add post={post} />}
    </div>
  );
};

export default EditPost;