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
export const newThread = async (refs,{topicID},user) => {
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
    createdBy: user.id,
    editedAt: null,
    id: id,
    posts: [],
  };
  currTopic.threads.unshift(thread);
  updateTopic(currTopic);
  return `/topic/${topicID}/thread/${id}`;
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
export const addComment = async (topicID, threadID, content, loggedIn) => {
  const data = await fetchTopics();
  const currTopic = data.find((topic) => topic.id === topicID);
  const index = currTopic.threads.findIndex((thread) => thread.id === threadID);
  const post = {
    content: content,
    createdAt: new Date(),
    createdBy: loggedIn.id,
    editedAt: null,
    id: currTopic.threads[index].posts.length + 1,
  };
  currTopic.threads[index].posts.push(post);
  updateTopic(currTopic);
};

export const deleteComment = async(index, topicID, threadID) => {
  const data = await fetchTopics();
  const currTopic = data.find((topic) => topic.id === topicID);
  const threadIndex = currTopic.threads.findIndex(thread => thread.id === threadID);
  currTopic.threads[threadIndex].posts.splice(index,1);
  updateTopic(currTopic);
};

export const editComment = async(index, topicID, threadID, content) => {
  const data = await fetchTopics();
  const currTopic = data.find((topic) => topic.id === topicID);
  const threadIndex = currTopic.threads.findIndex(thread => thread.id === threadID);
  currTopic.threads[threadIndex].posts[index].content = content;
  updateTopic(currTopic);
};
/* Account Functions */
export const registerAccount = (profile) => {
  const user = {
    username: `${profile.name.replace(" ", "")}`,
    avatar: profile.imageUrl,
    email: profile.email,
    gender: null,
    moderator: [],
    settings: {
      hideEmail: false,
      hidePosts: false,
      hideThreads: false,
      admin: false,
    },
    googleId: profile.googleId,
    createdAt: new Date(),
  };
  api.post("users", user);
};

export const updateAccount = (refs, params, loggedIn) => {
  loggedIn.username = refs[0].value;
  loggedIn.avatar = refs[1].value;
  loggedIn.gender = refs[2].value;
  api.put(`users/${loggedIn.id}`, loggedIn);

  return '/users';
};