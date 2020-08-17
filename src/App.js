import React from 'react';
import './App.css';
import faker from 'faker';
import CommentDetail from './CommentDetail'


function App() {
  return (
    <div className="ui container comments">
      <CommentDetail 
        name="Alex" 
        timeAgo="Today at 3:45PM"
        content="Nice blog post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        name="Mike" 
        timeAgo="Today at 5:00PM "
        content="I like reading..."
        avatar={faker.image.avatar()} 
      />
      <CommentDetail 
        name="George" 
        timeAgo="Today at 2:00AM"
        content="The weather is really hot!!"
        avatar={faker.image.avatar()} 
      />
      <CommentDetail 
        name="Lucas" 
        timeAgo="Today at 11:35AM"
        content="Your coffee is getting cold"
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        name="Timothy" 
        timeAgo="Today at 8:00PM"
        content="What's wrong with you?"
        avatar={faker.image.avatar()} 
      />
    </div>
  );
}

export default App;
