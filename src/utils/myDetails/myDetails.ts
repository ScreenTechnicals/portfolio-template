// Author Details

type SocialMediaLinks = {
  github: "";
  instagram?: "";
  facebook?: "";
  x?: "";
};

type MyDetails = {
  myName: string;
  firstName: string;
  lastName: string;
  aboutMe: string;
  profession: string;
  experience: number;
  socialMediaLinks?: SocialMediaLinks;
};

const myName: string = "Chinmaya Sa";
const firstName: string = myName?.split(" ")?.[0];
const lastName: string = myName?.split(" ")?.[1];
const aboutMe: string =
  "Hi there! I'm a Fullstack developer and YouTuber with 4 years of experience in creating stunning websites with crazy UIs and robust server backends. My passion for web development began at the age of 17, and I've been honing my skills ever since. As a full-stack developer, I have experience working on both the frontend and backend of websites. One of my specialties is creating stunning and user-friendly UIs for websites. I understand the importance of good design, and I'm skilled in using various design tools, such as Figma to create beautiful UIs that are both aesthetically pleasing and intuitive to use. I'm also able to implement responsive design principles to ensure that websites look great on any device. I create educational content on web development topics. Thanks for taking the time to get to know me. If you're interested in web development or have any questions, feel free to reach out!.";

const profession = "fullstack developer";
const experience: number = 4;
const socialMediaLinks: SocialMediaLinks = {
  github: "",
  instagram: "",
  facebook: "",
  x: "",
};

const myDetails: MyDetails = {
  myName,
  firstName,
  lastName,
  aboutMe,
  profession,
  experience,
  socialMediaLinks,
};

export default myDetails;
