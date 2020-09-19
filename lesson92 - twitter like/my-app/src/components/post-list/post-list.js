import React from 'react';
import './post-list.css';

import PostListItem from '../post-list-item';

const PostList = ({ posts }) => {
  let elements = posts.map((item, i) => {
    let { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        {/* <PostListItem label={el.label} important={el.important} /> */}
        <PostListItem {...itemProps} />
        {/* развернули объект */}
      </li>
    );
  });

  return (
    <ul className="app-list list-group">
      {elements}
      {/* <PostListItem label={posts[0].label} important={posts[0].important} /> */}

      {/* <PostListItem label="Still goint to learn React" />
      <PostListItem label="Yeap..." /> */}
    </ul>
  );
};

export default PostList;
