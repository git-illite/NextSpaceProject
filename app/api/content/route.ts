const posts = [
  {
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    content:
      "Next.js is a popular React framework for building server-side rendered and statically exported applications.",
  },
  {
    title: "Introduction to React Hooks",
    slug: "introduction-to-react-hooks",
    content:
      "React Hooks allow you to use state and other React features without writing a class component.",
  },
  {
    title: "How to Use Redux in Your App",
    slug: "how-to-use-redux",
    content:
      "Redux is a predictable state container for JavaScript apps that helps manage global state effectively.",
  },
  {
    title: "CSS-in-JS: Styled Components",
    slug: "css-in-js-styled-components",
    content:
      "Styled Components is a library for styling React components using tagged template literals in JavaScript.",
  },
  {
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    content:
      "Next.js is a popular React framework for building server-side rendered and statically exported applications.",
  },
  {
    title: "Introduction to React Hooks",
    slug: "introduction-to-react-hooks",
    content:
      "React Hooks allow you to use state and other React features without writing a class component.",
  },
  {
    title: "How to Use Redux in Your App",
    slug: "how-to-use-redux",
    content:
      "Redux is a predictable state container for JavaScript apps that helps manage global state effectively.",
  },
  {
    title: "CSS-in-JS: Styled Components",
    slug: "css-in-js-styled-components",
    content:
      "Styled Components is a library for styling React components using tagged template literals in JavaScript.",
  },
  {
    title: "The Power of Artificial Intelligence",
    slug: "power-of-artificial-intelligence",
    content:
      "Artificial Intelligence (AI) is transforming various industries, enabling automation and smart decision-making.",
  },
  {
    title: "Creating Engaging User Interfaces",
    slug: "creating-engaging-user-interfaces",
    content:
      "Tips and techniques for designing user interfaces that captivate users and enhance user experience.",
  },
  {
    title: "JavaScript Best Practices",
    slug: "javascript-best-practices",
    content:
      "Explore the best practices to write clean, efficient, and maintainable JavaScript code.",
  },
  {
    title: "Introduction to Node.js",
    slug: "introduction-to-nodejs",
    content:
      "Node.js is a powerful JavaScript runtime that allows building scalable and high-performance applications.",
  },
  {
    title: "The Future of Virtual Reality",
    slug: "future-of-virtual-reality",
    content:
      "Virtual Reality (VR) technology is evolving rapidly and promises exciting possibilities in various fields.",
  },
  {
    title: "Mastering Data Structures and Algorithms",
    slug: "mastering-data-structures-and-algorithms",
    content:
      "Learn essential data structures and algorithms to become a proficient programmer.",
  },
  {
    title: "Building RESTful APIs with Express",
    slug: "building-restful-apis-with-express",
    content:
      "Express is a popular Node.js framework for creating robust and scalable RESTful APIs.",
  },
  {
    title: "The Basics of Web Accessibility",
    slug: "basics-of-web-accessibility",
    content:
      "Understanding the principles of web accessibility to make the web more inclusive for all users.",
  },
  {
    title: "GraphQL: The Modern API Approach",
    slug: "graphql-the-modern-api-approach",
    content:
      "GraphQL is a query language for APIs that empowers clients to request the data they need.",
  },
  {
    title: "Responsive Web Design Fundamentals",
    slug: "responsive-web-design-fundamentals",
    content:
      "Key concepts and techniques to create websites that adapt to different screen sizes and devices.",
  },
  {
    title: "Python for Data Science",
    slug: "python-for-data-science",
    content:
      "Using Python's data science libraries to analyze and visualize data effectively.",
  },
  {
    title: "Diving into Docker Containers",
    slug: "diving-into-docker-containers",
    content:
      "Understanding Docker and containerization to simplify application deployment and management.",
  },
  {
    title: "Introduction to TypeScript",
    slug: "introduction-to-typescript",
    content:
      "TypeScript is a statically typed superset of JavaScript, bringing additional safety and tooling.",
  },
  {
    title: "The World of Cybersecurity",
    slug: "world-of-cybersecurity",
    content:
      "Exploring the challenges and solutions in the ever-evolving landscape of cybersecurity.",
  },
  {
    title: "Machine Learning Fundamentals",
    slug: "machine-learning-fundamentals",
    content:
      "An introduction to machine learning concepts and algorithms used for predictive analysis.",
  },
  {
    title: "Securing Web Applications",
    slug: "securing-web-applications",
    content:
      "Best practices and techniques for enhancing the security of web applications against common threats.",
  },
  {
    title: "Introduction to Cloud Computing",
    slug: "introduction-to-cloud-computing",
    content:
      "Understanding the cloud computing paradigm and its advantages for modern businesses.",
  },
  {
    title: "Creating Stunning Visual Effects in CSS",
    slug: "stunning-visual-effects-in-css",
    content:
      "Advanced CSS techniques to add stunning visual effects and animations to web elements.",
  },
  {
    title: "The Art of Code Refactoring",
    slug: "art-of-code-refactoring",
    content:
      "Refactoring code to improve its structure, readability, and maintainability without changing its behavior.",
  },
  {
    title: "A Journey into Quantum Computing",
    slug: "journey-into-quantum-computing",
    content:
      "Exploring the principles and potential of quantum computing for solving complex problems.",
  },
];

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();
  return NextResponse.json(posts);
}
