
const API_URL = "https://jsonplaceholder.typicode.com/posts";

const articles = [
  {
    title: "The Importance of Learning JavaScript",
    body: "JavaScript is one of the most popular programming languages in the world. It allows developers to create interactive websites and modern web applications. Learning JavaScript is an excellent first step toward becoming a professional web developer."
  },
  {
    title: "Getting Started with React",
    body: "React is a powerful JavaScript library used to build modern user interfaces. It allows developers to create reusable components and manage application data efficiently. React makes building interactive websites easier."
  },
  {
    title: "Understanding HTML and CSS",
    body: "HTML provides the structure of a website, while CSS controls its appearance and layout. Together, these technologies help developers create attractive, accessible, and responsive web pages."
  },
  {
    title: "Why Responsive Web Design Matters",
    body: "Responsive web design ensures that websites work properly on mobile phones, tablets, laptops, and desktop computers. Developers use flexible layouts, CSS Grid, and Flexbox to create better user experiences."
  },
  {
    title: "A Beginner's Guide to Node.js",
    body: "Node.js allows developers to run JavaScript outside the browser. It is commonly used to build backend applications, REST APIs, and server-side services."
  },
  {
    title: "Introduction to Tailwind CSS",
    body: "Tailwind CSS is a utility-first CSS framework that helps developers design websites quickly. It provides ready-to-use utility classes for spacing, colors, typography, layouts, and responsive design."
  },
  {
    title: "Understanding REST APIs",
    body: "REST APIs allow different applications to communicate with each other over the internet. Developers commonly use HTTP methods such as GET, POST, PUT, and DELETE to exchange information."
  },
  {
    title: "Why Every Developer Should Learn Git",
    body: "Git is a version control system that helps developers track code changes and manage projects. It makes collaboration easier and allows developers to work safely on different features."
  },
  {
    title: "Introduction to MongoDB",
    body: "MongoDB is a popular NoSQL database that stores information in flexible document formats. It is commonly used with Node.js and Express to build full-stack applications."
  },
  {
    title: "Tips for Becoming a Better Programmer",
    body: "Becoming a better programmer requires consistent practice, patience, and problem-solving skills. Start with small projects, understand programming fundamentals, and gradually build more complex applications."
  }
];

// Fetch all blog posts
export const getAllBlogs = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch blog posts.");
  }

  const data = await response.json();

  return data.map((post) => {
    const article = articles[(post.id - 1) % articles.length];

    return {
      ...post,
      title: article.title,
      body: article.body
    };
  });
};

// Fetch a single blog post
export const getBlogById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch blog details.");
  }

  const post = await response.json();

  if (!post.id) {
    throw new Error("Blog post not found.");
  }

  const article = articles[(post.id - 1) % articles.length];

  return {
    ...post,
    title: article.title,
    body: article.body
  };
};
