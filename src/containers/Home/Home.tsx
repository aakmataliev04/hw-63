import React, {useCallback, useEffect, useState} from 'react';
import {Post, PostsApi} from '../../types';
import axiosApi from '../../axiosApi';
import Posts from '../../components/Posts/Posts';
import Preloader from '../../components/Preloader/Preloader';

const Home = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchPost = useCallback(async () => {
    setIsLoading(true);
    try {
      const {data: posts} = await axiosApi.get<PostsApi | null>('/posts.json');

      if (posts !== null) {
        const formattedPosts: Post[] = Object.keys(posts).map((id: string) => {
          return {
            ...posts[id],
            id
          };
        });

        setPosts(formattedPosts);
      }
    } finally {
      setIsLoading(false);
    }



  }, []);

  useEffect(() => {
    void fetchPost();
  }, [fetchPost]);
  let content = <Posts posts={posts}/>;
  if (isLoading) {
    content = <div style={{display: 'flex', justifyContent: 'center', padding: '40vh 0'}}><Preloader /></div>;
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default Home;