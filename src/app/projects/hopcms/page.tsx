import { FC } from 'react';

import { H1, H2, P } from '@/components/UI/Typography';

interface Props {}

const Hopcms: FC<Props> = async () => {
  return (
    <div className="mb-16">
      <div className="mb-8 md:mb-16">
        <H1 className="md:text-5xl text-3xl tracking-tight">Hop CMS</H1>
      </div>
      <article className="article">
        <P>
          This project is all about building a custom CMS for our existing
          users. The project was using react with MUI. We used a custom template
          for us to get started quickly.
        </P>
        <P>
          We have scripts that will automatically create a user on our server
          and assign the new project created.
        </P>

        <P>
          This was my starting point of react career. I basically self-learned
          react in here due to this requirement. I learned so much about react
          particularly and react hooks were so hyped at that time so quickly
          switched from class component to functional component.
        </P>

        <P>
          I also learned some of the fundamentals of javascript through my
          mistakes that I was thinking the problem of react.
        </P>

        <P>
          I also did managed server. It was using nginx different from normal
          apache server so that also I learned from this. I was also the
          designer.
        </P>
        <H2>My Role</H2>
        <P>
          In this project, I played a multifaceted role, wearing several hats
          within the company. As a one-person army, I held responsibilities
          ranging from design to development and server management. I was tasked
          with designing the project using Figma, which involved creating
          visually appealing and user-friendly interfaces. Subsequently, I
          transformed these designs into functional front-end components using
          React with MUI, ensuring a seamless user experience.
        </P>
        <P>
          On the backend, I wrote the necessary code using Node.js, bridging the
          gap between the front-end and server-side functionality. Additionally,
          I took charge of managing the server, which utilized Nginx,
          demonstrating my versatility in both front-end and server-related
          tasks.
        </P>
        <P>
          This project was transformative, as it not only kickstarted my React
          career but also equipped me with a diverse skill set and the ability
          to handle a wide range of responsibilities within the company.
        </P>
        <H2>What I learned</H2>
        <P>
          During this project, I embarked on my journey into the world of React,
          serving as a starting point for my React career. This opportunity led
          me to self-learn React, as it was a fundamental requirement for the
          project. In the process, I gained a deep understanding of React,
          particularly as React Hooks gained prominence during that time. This
          prompted me to transition swiftly from class components to functional
          components, staying aligned with the latest trends and best practices
          in React development.
        </P>
        <P>
          Additionally, I honed my JavaScript skills by learning from my
          mistakes, especially in the context of React problem-solving. This
          hands-on experience helped me solidify my grasp of fundamental
          JavaScript concepts.
        </P>
        <P>
          Moreover, I ventured into server management, handling an Nginx server,
          which was different from the typical Apache servers. This experience
          broadened my knowledge in server configuration and management.
        </P>
      </article>
    </div>
  );
};

export default Hopcms;
