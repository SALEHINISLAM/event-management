import React from "react";
import PropTypes from "prop-types";

const About = (props) => {
  return (
    <div className="flex flex-col p-4 lg:pt-16 gap-10">
      <iframe
        src="https://lottie.host/embed/d1039bc4-150e-410d-8d34-afd0f82f506f/iTr2ZvzU0O.json"
        width={"100%"}
        height={"100%"}
        className="w-full h-full"
      ></iframe>
      <h1 className="text-center font-bold text-5xl">About Us</h1>
      <p>
        Welcome to EduVenue, your trusted partner in educational event
        management. We specialize in organizing and managing a wide range of
        educational events, including conferences, seminars, workshops, and
        academic fairs, designed to inspire, educate, and connect learners,
        educators, and professionals from around the globe.
      </p>
      <p>
        At EduVenue, we understand the unique needs of educational institutions
        and organizations. Our team is dedicated to providing seamless event
        management solutions that cater to the specific requirements of the
        educational sector. Whether you're planning a small, focused workshop or
        a large-scale international conference, we offer end-to-end services to
        ensure your event is successful and impactful.
      </p>
      <p>
        Our mission is to foster learning and collaboration by bringing together
        the brightest minds in education. We handle all aspects of event
        planning, from venue selection and registration management to marketing,
        logistics, and on-site coordination. With our expertise and commitment
        to excellence, we help you create memorable events that leave a lasting
        impression.
      </p>
      <p>
        Join us at EduVenue, where education meets innovation, and let's create
        exceptional learning experiences together.
      </p>
    </div>
  );
};

About.propTypes = {};

export default About;
