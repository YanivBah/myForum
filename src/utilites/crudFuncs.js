import api from '../api';

// API
const fetchTopics = async () => {
  const { data } = await api.get("topics");
  return data;
}

const updateTopic = async topic => api.put(`topics/${topic.id}`, topic);

/* Topics Functions */
export const functionName = (params) => {

}

/* Threads Functions */
export const newThread = async (refs,{topicID}) => {
  const data = await fetchTopics();
  const currTopic = data.find(topic => topic.id === topicID);
  const id =
    currTopic.threads.length === 0
      ? "1"
      : `${parseInt(currTopic.threads[0].id) + 1}`;
  const thread = {
    tag: refs[0].value,
    title: refs[1].value,
    content: refs[2].currentContent,
    createdAt: new Date(),
    createdBy: "1",
    editedAt: null,
    id: id,
    posts: [],
  };
  currTopic.threads.unshift(thread);
  updateTopic(currTopic);
}

export const deleteThread = async (topicID, threadID) => {
  const data = await fetchTopics();
  const currTopic = data.find(topic => topic.id === topicID);
  const index = currTopic.threads.findIndex(
    (thread) => thread.id === threadID
  );
  currTopic.threads.splice(index, 1);
  updateTopic(currTopic);
}

export const editThread = async (topicID, threadID, content) => {
  const data = await fetchTopics();
  const currTopic = data.find((topic) => topic.id === topicID);
  const index1 = currTopic.threads.findIndex(
    (thread) => thread.id === threadID
  );
  currTopic.threads[index1].content = content;
  updateTopic(currTopic);
};

/* Comments Functions */
export const commentThread = async (topicID, threadID, content) => {
  const data = await fetchTopics();
  const currTopic = data.find((topic) => topic.id === topicID);
};