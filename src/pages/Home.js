import React from 'react';
import TopicPreview from "../components/TopicPreview/TopicPreview";

const Home = ({topics, users}) => {
  return topics.map( (topic,index) => <TopicPreview key={`topic${index}`} topic={topic} index={index} users={users}/>)
}

export default Home;
