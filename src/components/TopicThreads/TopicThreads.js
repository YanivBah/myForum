import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const TopicThreads = ({topic}) => {
  return topic.threads.map(thread => {
    return (
      <div className="thread">
        {thread.title}
      </div>
    );
  });
}

export default TopicThreads;
