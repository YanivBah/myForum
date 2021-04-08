const options = {
  header: {
    logo: "myForum",
    links: [
      { name: "Home", icon: "home", link: "/" },
      { name: "Users", icon: "group", link: "/users" },
      // { name: "Report", icon: "report", link: "/report" },
    ],
    loggedIn: [
      { name: "Dashboard", icon: "manage_accounts", link: "/dashboard" },
    ],
    admin: [{ name: "Admin", icon: "admin_panel_settings", link: "/admin" }],
  },

  forms: {
    newTopic: {
      header: "Create New Topic",
      description: "Here you can create new topic for the forum",
      buttonText: "Create",
      elements: [
        {
          elementType: "input",
          name: "topic",
          type: "text",
          title: "Topic",
          placeholder: "",
          defaultValue: "",
        },
        {
          elementType: "input",
          name: "description",
          type: "text",
          title: "Description",
          placeholder: "",
          defaultValue: "",
        },
        {
          elementType: "input",
          name: "admin",
          type: "text",
          title: "Admin",
          placeholder: "",
          defaultValue: "",
        },
      ],
    },
    newThread: {
      header: "Create New Thread",
      description: "Here you can create new thread for the forum",
      buttonText: "Create",
      elements: [
        {
          elementType: "dropdown",
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
        {
          elementType: "input",
          name: "title",
          type: "text",
          title: "Title",
          placeholder: "",
          defaultValue: "",
        },
        {
          elementType: "richText",
        },
      ],
    },
    dashboard: {
      header: "Account Settings",
      description: "Change your account settings",
      buttonText: "Save",
      elements: [
        {
          elementType: "input",
          name: "username",
          type: "text",
          title: "Username",
          placeholder: "",
          defaultValue: "",
        },
        {
          elementType: "input",
          name: "avatar",
          type: "url",
          title: "Avatar Link",
          placeholder: "",
          defaultValue: "",
        },
        {
          elementType: "dropdown",
          name: "gender",
          title: "Gender",
          options: [
            { value: "male", title: "Male" },
            { value: "female", title: "Female" },
            { value: "other", title: "Other" },
          ],
        },
      ],
    },
    editTopic: {},
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