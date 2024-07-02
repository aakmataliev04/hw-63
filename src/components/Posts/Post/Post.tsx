import React from 'react';
import {Post} from '../../../types';
import {Link, useNavigate} from 'react-router-dom';
import './Post.css';
import axiosApi from '../../../axiosApi';

interface Props {
  post: Post;
  alonePost?: boolean;
}

const Post: React.FC<Props> = ({post, alonePost}) => {
  const navigate = useNavigate();
  const deletePost = async () => {
    try {
      await axiosApi.delete(`/posts/${post.id}.json`);
    } finally {
      alert('post deleted');
      navigate('/');
    }

  };
  return (
    <div className="post">
      <div className="post-content">
        <p className={'post-text'}>Created on: {post.date}</p>
        <h3 className={'post-title'}> {post.title}</h3>
        <p className={'post-text'}>{post.body}</p>
      </div>
      <div className="post-button-wrapper">
        {alonePost ? (
          <>
            <button onClick={deletePost} className="post-btn outline">Delete</button>
            <Link to={`/posts/${post.id}/edit`} className="post-btn fill">Edit &gt;&gt;</Link></>
        ) : (
          <Link to={`/posts/${post.id}`} className="post-btn fill">Read More &gt;&gt;</Link>
        )}
      </div>
    </div>
  );
};

export default Post;