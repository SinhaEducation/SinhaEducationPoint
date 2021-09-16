import Head from "next/head";
import { Fragment } from "react";
import AboutPage from "../components/homepage/about";
import ContactPage from "../components/homepage/contact";
import CoursesPage from "../components/homepage/courses";
import FacultyPage from "../components/homepage/faculties";
import HeroPage from "../components/homepage/home";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Sinha Education Point</title>
        <meta
          name="description"
          content="Sinha Education Point | Best coaching institute for all students wanting to learn any subjects."
        />
      </Head>
      <HeroPage />
      <AboutPage />
      <CoursesPage />
      <FacultyPage />
      <ContactPage />
    </Fragment>
  );
};

export default Home;
