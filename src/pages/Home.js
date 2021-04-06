import React from 'react';
import TopicPreview from "../components/TopicPreview/TopicPreview";

const Home = ({topics}) => {
  return topics.map( (topic,index) => <TopicPreview topic={topic} index={index}/>)
}

export default Home;
