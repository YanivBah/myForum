import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./threadpage.css";

const ThreadPage = ({topics}) => {
  const {topicID, threadID} = useParams();

  const comments = () => {

  }
  console.log(topics.length);
  if (topics.length) {
    const topic = topics.find(topic => topic.id === topicID);
    console.log(topic.threads.find(thread => thread.id === threadID));
  }


  return null
}

export default ThreadPage;
