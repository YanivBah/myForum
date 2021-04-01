const options = {
  header: {},

  forms: {
    newTopic: {
      header: "Create New Topic",
      description: "Here you can create new topic for the forum",
      buttonText: "Create",
      onclick: "function h-e-r-e",
      inputs: [
        { name: "topic",
          type: "text",
          title: "Topic",
          placeholder: "",
          defaultValue: "" },
        {
          name: "description",
          type: "text",
          title: "Description",
          placeholder: "",
          defaultValue: "",
        },
        {
          name: "image",
          title: "Image Location",
          placeholder: "",
          defaultValue: "",
        },
        {
          name: "admin",
          title: "Admin",
          placeholder: "",
          defaultValue: "",
        },
      ],
    },
    editTopic: {},
    login: {},
    register: {},
  },
};