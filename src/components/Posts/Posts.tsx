import React, {ReactNode} from 'react';
import {Post} from '../../types';
import PostItem from './Post/Post';
import './Posts.css';


interface Props {
  posts: Post[] | undefined
}


const Posts: React.FC<Props> = ({posts}) => {
  let postElements: ReactNode = null;

  if (posts) {
    postElements = posts.map((post) => {
      return (
          <PostItem key={post.id} post={post} />
      );
    });
  }
  return (
    <div className={'posts'}>
      {
        postElements
      }
    </div>
  );

};

export default Posts;