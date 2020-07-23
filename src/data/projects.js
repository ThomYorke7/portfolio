const projects = [
  {
    title: 'Boardgames Inventory',
    description:
      'This is a basic CRUD application I built for the Odin Project using the MERN stack and Bootstrap. This project helped me learning how to create dynamic pages, build a server and connect the frontend with the backend. I also learnt to upload files through forms using Multer, to redirect using react-router-dom and to deploy on Heroku.',
    sourceLink: 'https://github.com/ThomYorke7/inventory',
    webLink: 'https://boardgamenerd.herokuapp.com/',
  },
  {
    title: 'Personal Library',
    description:
      'This library project allows users to store information and visualize stats on their books. It also uses localStorage to keep in memory data entries.',
    sourceLink: 'https://github.com/ThomYorke7/library',
    webLink: 'https://thomyorke7.github.io/library/',
  },
  {
    title: 'Members Only',
    description:
      'I built this CRUD application with Express, using Pug as a view engine and MongoDB Atlas as a cloud database. The focus of this project was user authentication and permissions. Unregistered users can visit the page, but they cannot interact with the posts, neither they can see their authors. Registered users can see more details, but they lack the permissions to delete the posts. Finally, admins have the full CRUD operations at hand.',
    sourceLink: 'https://github.com/ThomYorke7/members-only',
    webLink: 'https://privateclub.herokuapp.com/',
  },
  {
    title: 'ToDo List',
    description:
      'A simple To Do application, where users can group their tasks in project folders, delete them and filter them by due date. Localstorage support is implemented, so that the tasks are memorized even after a page refresh.',
    sourceLink: 'https://github.com/ThomYorke7/todolist',
    webLink: 'https://thomyorke7.github.io/todolist/',
  },
  {
    title: 'Weather App',
    description:
      'This simple app uses the API from OpenWeatherMap to visualize information about weather from all over the world.',
    sourceLink: 'https://github.com/ThomYorke7/weather-app',
    webLink: 'https://thomyorke7.github.io/weather-app/',
  },
  {
    title: 'Frontend Blog',
    description:
      "This project was bootstrapped with Create React App. It's the frontend part of a Blog API created for the Odin Project. Users can read articles written by the admin and add their comments. Visit the source code below to check the backend and the admin parts of the project.",
    sourceLink: 'https://github.com/ThomYorke7/blog-frontend',
    webLink: 'https://thomyorke7.github.io/blog-frontend/',
  },
];

export default projects;
