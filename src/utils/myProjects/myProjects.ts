// My Projects

type Project = {
  name: string;
  description: string;
  previewImage: string;
  githubLink?: string;
  demoLink?: string;
};

const projects: Array<Project> = [
  {
    name: "Amazon Clone",
    description:
      "This is an amazing, fully functional responsive built with Next js, Tailwind CSS, Lottie Files and React Slick. Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. Lottie is an open-source animation file format that’s tiny, high quality, scriptable, interactive, and can be manipulated at runtime. The top 500 apps on the App store now use Lottie to engage users and enhance conversions. React Slick helps to create Responsive 'Carousels' for your React/Next project.",
    previewImage:
      "https://camo.githubusercontent.com/4514467b849a8e65cd57a4e04daedee1463b465cadb8226c3f43d31252255302/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f73637265656e2d746563686e6963616c732e61707073706f742e636f6d2f6f2f7265736f7572636573253246416d617a6f6e486f6d65506167652e706e673f616c743d6d6564696126746f6b656e3d37303037396433362d663639392d343039362d626639652d613433383161303237363534",
    githubLink: "https://github.com/ScreenTechnicals/Amazon-Clone",
    demoLink: "https://amazon-clone-1-0.vercel.app",
  },
  {
    name: "Telegram Clone",
    description:
      "This is an amazing, fully functional responsive built with Next js, Tailwind CSS, Lottie Files and React Slick. Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. Lottie is an open-source animation file format that’s tiny, high quality, scriptable, interactive, and can be manipulated at runtime. The top 500 apps on the App store now use Lottie to engage users and enhance conversions. React Slick helps to create Responsive 'Carousels' for your React/Next project.",
    previewImage:
      "https://camo.githubusercontent.com/4514467b849a8e65cd57a4e04daedee1463b465cadb8226c3f43d31252255302/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f73637265656e2d746563686e6963616c732e61707073706f742e636f6d2f6f2f7265736f7572636573253246416d617a6f6e486f6d65506167652e706e673f616c743d6d6564696126746f6b656e3d37303037396433362d663639392d343039362d626639652d613433383161303237363534",
    githubLink: "https://github.com/ScreenTechnicals/Amazon-Clone",
    demoLink: "https://amazon-clone-1-0.vercel.app",
  },
  {
    name: "Attendee",
    description:
      "This is a support page for an app named Attendee. This is built with Next js, Tailwind CSS, React Tilty and Particle Js.",
    previewImage:
      "https://camo.githubusercontent.com/4514467b849a8e65cd57a4e04daedee1463b465cadb8226c3f43d31252255302/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f73637265656e2d746563686e6963616c732e61707073706f742e636f6d2f6f2f7265736f7572636573253246416d617a6f6e486f6d65506167652e706e673f616c743d6d6564696126746f6b656e3d37303037396433362d663639392d343039362d626639652d613433383161303237363534",
  },
];

export default projects;
