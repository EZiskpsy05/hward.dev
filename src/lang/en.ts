import moment from "moment";

const en = {
  lang:[
    { value: "en", label: "Eng" },
    { value: "vi", label: "Vie" },
  ],
  header: {
    open_navigation : "Open Navigation",
    close_navigation : "Close Navigation",
    theme_switcher: "Theme Switcher",
  },
  footer: {
    about_me: "About me",
    links: [
      // // Format link in Footer
      // {
      //   title: "Example #1",
      //   link: "#",
      // },
    ],
    social_networks: [
      {
        title: "Mail",
        icon: "SiGmail",
        link: "mailto:anhkhoat030207+work@gmail.com",
      },
      {
        title: "Linkedin",
        icon: "SiLinkedin",
        link: "https://www.linkedin.com/in/howardca/",
      },
      {
        title: "Github",
        icon: "SiGithub",
        link: "https://github.com/EZiskpsy05",
      },
      {
        title: "Gitlab",
        icon: "SiGitlab",
        link: "https://gitlab.com/EZiskpsy05",
      },
      {
        title: "Facebook",
        icon: "SiFacebook",
        link: "https://www.facebook.com/Bauawakka292",
      },
      
    ],
    develop_by: "Developed by ",
    build_with: "Built with ",
    with: " with ",
  },
  home: {
    intro: {
      header: "Hi, I'm Howard Tran",
      description:
        "I am currently a Fullstack Developer. This is a website I created with the desire to share my knowledge to everyone. Thank you to everyone who visited. ❤️",
      image: "/assets/images/orion-nebula.jpg",
      links: [
        {
          icon: "HiOutlineNewspaper",
          title: "Resume",
          link: "https://github.com/EZiskpsy05/resume/blob/main/resume.pdf",
        },
        {
          icon: "FaFacebook",
          title: "Raw Head Red Hawk",
          link: "https://facebook.com/Bauawakka292/",
        },
        {
          icon: "FaGithub",
          title: "Olkkaesi",
          link: "https://github.com/EZiskpsy05",
        },
      ],
    },
    featured_posts: "Featured Posts",
    read_more: "Read more",
    categories: [
      {
        name: "Knowledge",
        description:
          "Related posts about programming knowledge and algorithms.",
        value: ["code", "algorithm"],
      },
      {
        name: "Tutorial & Tips",
        description: "Tutorials or tips about programming and technology.",
        value: ["tutorial", "tip"],
      },
      {
        name: "Notion",
        description:
          "Articles with content about Notion and utilities around Notion.",
        value: ["notion"],
      },
      {
        name: "Other",
        description: "The posts are not related to technology topics.",
        value: ["other"],
      },
    ],
  },
  post: {
    published_at_by: (datetime: any, author: any, locale: string) => {
      moment.locale(locale);
      const days = 5;
      let raw = moment(datetime);
      let duration = moment.duration(moment().diff(datetime));
      const _datetime = (duration.asHours() > 24 * days) ? raw.format('DD/MM/YYYY HH:mm') : raw.fromNow();
      return `Published at ${_datetime} by ${author}.`;
    },
    reading_time: (min: any) => {
      return `${min} min read`;
    },
    views: (views: any) => {
      return `${views} views`;
    },
    tags: "Tags",
    relate_post: "Realted Posts:",
    table_of_contents: "Table of Contents"
  },
  blog: {
    blog: "Blog",
    description: "Here you can find all my posts",
    intro: "Here you can find all my posts",
    find_posts: "Posts search...",
    not_found_post: "There are no posts yet",
  },
  tag: {
    tag: "Tag",
    tags: "Tags",
    intro: "You can find articles under the tags below:",
    not_found_post: "There are no posts yet",
    post_by_tag: "Posts by tag:",
  },
  error_page: {
    404 : {
      title: "Page Not Found",
      head: "Sorry, I can't find this page.",
      desc: "But don't worry, you can find many more on your homepage.",
      home_button: "Home"
    }
  },
  common: {
    error: "Error",
    is_loading: "Loading...",
    process_take_few_second: "This process may take a few seconds, please do not close this page.",
  }
};

export default en;
