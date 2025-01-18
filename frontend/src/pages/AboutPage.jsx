import React from "react";
import { motion } from "framer-motion";

import Title from "../components/Title";
import Me from "../assets/me.png";
import Footer from "../components/layout/Footer";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title title="About" />
      <div className="px-2 py-4 mb-5">
        <p className="text-4xl font-semibold text-neutral-800 dark:text-neutral-200 mb-5">
          It's Me Kenneth
        </p>
        <p className="leading-7 text-neutral-600 dark:text-neutral-300">
          I'm Kenneth Solomon, a web developer based in the Philippines, and
          I've been immersed in the world of coding since 2020. Over time, I've
          gathered a toolkit that includes PHP, JavaScript, CSS, and
          HTML—essentials for my daily projects. While I'm no stranger to Django
          and Wordpress, my true passion lies with Laravel, Alpine JS, Inertia,
          Tailwind CSS, Vue, and Nuxt. These technologies have become my trusted
          companions, accompanying me on almost every coding journey.
        </p>
      </div>
      <div className="px-2 mb-10">
        <div className="justify-self-center bg-neutral-100 dark:bg-stone-700 rounded-lg p-4 shadow-lg shadow-neutral-stone-600">
          <img className=" bg-orange-200 rounded-lg max-h-[450px]" src={Me} />
        </div>
      </div>
      <div className="px-2 mb-10">
        <p className="text-4xl font-semibold text-neutral-800 dark:text-neutral-200 mb-5">
          More About Me
        </p>
        <p className="leading-7 mb-3 text-neutral-600 dark:text-neutral-300">
          One of the aspects of software development that excites me the most is
          the pursuit of the perfect architecture for a given task. There's
          nothing quite like that "eureka" moment after multiple refactors and
          countless cups of tea. It's the culmination of creativity and
          problem-solving skills that makes this field endlessly fascinating to
          me.
        </p>

        <p className="leading-7 text-neutral-600 dark:text-neutral-300">
          My favourite part of developing software is that feeling when, perhaps
          after several refactors and a few too many cups of tea, you find the
          perfect architecture for the task at hand. In addition to building web
          applications, I specialize in API integration. I have experience
          working with APIs from platforms such as HubSpot, Cin7, Dropbox, Xero,
          and more. Integrating these APIs seamlessly into web applications
          allows for enhanced functionality and streamlined workflows, providing
          users with a cohesive experience across multiple platforms.
        </p>
      </div>
      <div className="px-2 mb-5">
        <p className="text-4xl font-semibold text-neutral-800 dark:text-neutral-200 mb-5">
          Fun facts about me ☕
        </p>
        <p className="leading-7 mb-3 text-neutral-600 dark:text-neutral-300">
          Beyond coding, I have a few other interests that keep me busy. I love
          hosting podcasts, where I get to explore topics beyond the realm of
          programming. Occasionally, I also dabble in video editing, adding
          another creative dimension to my skill set. And when it's time to
          unwind, you'll often find me immersed in the world of mobile gaming,
          with Mobile Legends being a particular favorite.
        </p>
      </div>
      <Footer />
    </motion.div>
  );
};

export default AboutPage;
