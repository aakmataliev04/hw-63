import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {Post, PostApi} from '../../types';
import './Add.css';
import axiosApi from '../../axiosApi';
import {useNavigate} from 'react-router-dom';
import Preloader from '../../components/Preloader/Preloader';

interface Props {
  post?: Post
}
const Add: React.FC<Props> = ({post}) => {
  const [postMutation, setPostMutation] = useState<PostApi>({
    title: '',
    body: '',
    date: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  let id = null;
  if (post !== undefined){
    id = post.id;
  }

  useEffect(() => {
    if (post) {
      console.log(post);
      setPostMutation(() => {
        return {
          title: post.title,
          body: post.body,
          date: ''
        };
      });
    }
  }, [post]);

  const onFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setPostMutation((prevState) => {
      return { ...prevState, [name]: value };
    });

  };



  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const date = new Date();
    const time = `${date.toLocaleDateString()} ${date.toLocaleTimeString().slice(0, date.toLocaleTimeString().length-3)}`;
    const post = {...postMutation, date: time};

    try {
      if (id !== undefined) {
        await axiosApi.put(`/posts/${id}.json`, post);
      } else {
        await axiosApi.post('/posts.json', post);
      }
    } finally {
      setIsLoading(false);
      navigate('/');
    }
  };

  let form = (
    <form onSubmit={(e) => onFormSubmit(e)}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          onChange={(event) => onFieldChange(event)}
          value={postMutation.title}
          id="title"
          type="text"
          name="title"
          className="form-control"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="body">Description</label>
        <textarea
          onChange={(event) => onFieldChange(event)}
          value={postMutation.body}
          id="body"
          name="body"
          className="form-control"
          required
        />
      </div>

      <button type="submit" className="btn">
        Post
      </button>
    </form>
  );

  if (isLoading) {
    form = <div style={{display: 'flex', justifyContent: 'center', padding: '55px 0'}}><Preloader /></div>;
  }

  return (
    <div className={'container add-container'}>
      <h2>{post ? 'Edit Post' : 'Add New Post'}</h2>
      {
        form
      }

    </div>
  );
};

export default Add;