import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import './topicpage.css';

const TopicPage = () => {
  const params = useParams();
  return <div className="topicpage">{params.topicName}</div>;
}

export default TopicPage;
