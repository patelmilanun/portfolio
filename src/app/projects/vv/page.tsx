import { FC } from 'react';
import 'highlight.js/styles/github-dark.css';

import { H1, H2, P } from '@/components/UI/Typography';
import Slider from '@/components/UI/Slider';

interface Props {}

const Vv: FC<Props> = async () => {
  return (
    <div className="mb-16">
      <div className="mb-8 md:mb-16">
        <H1 className="md:text-5xl text-3xl tracking-tight">Virtual Village</H1>
      </div>
      <article className="article">
        <P>
          The project was about connecting tutor and students through this
          platform. Tutor can schedule a session; students can join the session
          by paying for it. There are few different types of sessions like one
          on one, premium etc.
        </P>
        <div className="my-8">
          <Slider
            images={[
              '/vv/scr1.png',
              '/vv/scr2.png',
              '/vv/scr3.png',
              '/vv/scr4.png',
              '/vv/scr5.png',
              '/vv/scr6.png',
              '/vv/scr7.png',
            ]}
          />
        </div>
        <H2>My Role</H2>
        <P>
          In this project, my role encompassed various responsibilities. I was
          responsible for developing the landing page, as well as creating
          front-end interfaces for both tutors and students. This front-end work
          was essential in providing an intuitive and user-friendly experience
          for the application&#39;s users. Furthermore, I played a role in the
          backend development by implementing Stripe payment processing,
          ensuring a secure and smooth payment experience.
        </P>
        <P>
          Additionally, I took on the task of integrating WebRTC and WebRTM
          using Agora, which facilitated real-time communication within the
          application. This was a significant milestone in the project, and
          although it was my first experience with such a service, I
          successfully executed the integration, contributing to the
          project&#39;s overall functionality and user experience.
        </P>
        <H2>What I learned</H2>
        <P>
          Throughout this project, I acquired several valuable skills and
          insights. Firstly, I learned how to effectively develop landing pages,
          as well as create front-end interfaces for both tutors and students.
          This experience enhanced my proficiency in web development and user
          interface design. I also gained a better understanding of project
          organization, discovering how to structure a project for improved
          manageability in the long run.
        </P>
        <P>
          Additionally, I delved into the world of backend development by
          assisting in implementing Stripe payment integration. This introduced
          me to the intricacies of online payment processing systems. Moreover,
          I had the opportunity to work on the integration of WebRTC and WebRTM
          using Agora, which was a first-time experience for me. This task
          provided me with valuable insights into real-time communication
          services and technologies.
        </P>
      </article>
    </div>
  );
};

export default Vv;
