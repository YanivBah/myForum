const options = {
  header: {},

  forms: {
    newTopic: {
      header: "Create New Topic",
      description: "Here you can create new topic for the forum",
      buttonText: "Create",
      onClick: "function h-e-r-e",
      inputs: [
        {
          name: "topic",
          type: "text",
          title: "Topic",
          placeholder: "",
          defaultValue: "",
        },
        {
          name: "description",
          type: "text",
          title: "Description",
          placeholder: "",
          defaultValue: "",
        },
        {
          name: "admin",
          type: "text",
          title: "Admin",
          placeholder: "",
          defaultValue: "",
        },
      ],
      dropdowns: [],
    },
    newThread: {
      header: "Create New Thread",
      description: "Here you can create new thread for the forum",
      buttonText: "Create",
      onClick: "function h-e-r-e",
      inputs: [
        {
          name: "title",
          type: "text",
          title: "Title",
          placeholder: "",
          defaultValue: "",
        },
      ],
      dropdowns: [
        {
          name: "tag",
          title: "Tag",
          options: [
            { value: "NoTag", title: "No Tag" },
            { value: "Discussion", title: "Discussion" },
            { value: "Help", title: "Help" },
            { value: "Question", title: "Question" },
            { value: "Guide", title: "Guide" },
            { value: "Suggestion", title: "Suggestion" },
            { value: "Request", title: "Request" },
            { value: "Announcement", title: "Announcement" },
          ],
        },
      ],
    },
    editTopic: {},
    login: {},
    register: {},
  },
};

export default options;

// {
//   id: "1",
//   createdAt: "",
//   username: "",
//   avatar: "",
//   email: "",
//   settings: {
//     hideEmail: false,
//     hidePosts: false,
//     hideThreads: false,
//   },
// }

//     {
//         "id": "1",
//         "title": "General",
//         "description": "Here you can talk about everything.",
//         "threads": [],
//         "moderators": []
//     },

// [
//   {
//     type: "",
//     title: "",
//     content: "",
//     createdBy: "",
//     posts: [],
//   }
// ]