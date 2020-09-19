import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

let App = () => {
  const data = [
    {
      label: 'Goint to learn React',
      important: true,
      id: 1,
    },
    {
      label: 'Still goint to learn React',
      important: false,
      id: 'mjhmvnhv',
    },
    {
      label: 'Yeap...',
      important: false,
      id: 'ertrjh67',
    },
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
