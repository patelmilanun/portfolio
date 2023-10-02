import { FC } from 'react';

import { H1, H2, P } from '@/components/UI/Typography';
import Slider from '@/components/UI/Slider';
import { Link } from 'react-feather';

interface Props {}

const Ylanes: FC<Props> = async () => {
  return (
    <div className="mb-16">
      <div className="mb-8 md:mb-16">
        <div className="text-xs md:text-sm opacity-80 flex gap-4 mb-4">
          <span className="flex items-center gap-2">
            <Link size={14} />
            <a
              href="https://www.ylanes.com"
              target="_blank"
              className="text-sm text-primary font-light border-transparent border-b-2 border-dashed hover:border-primary"
            >
              https://www.ylanes.com
            </a>
          </span>
        </div>
        <H1 className="md:text-5xl text-3xl tracking-tight">YLanes</H1>
      </div>
      <article className="article">
        <P>
          YLanes is a space where curated strangers come together in virtual
          rooms to have conversations that matter. Basically, user can create a
          room on various topics available from the platform. Other users can
          pay for the room and can join the room.
        </P>
        <P>
          The rooms will have audio and video capability with the chat support.
          User can give feedback after attending the call.
        </P>
        <P>
          The creator of room can also mark the room as a local so that it
          can&#39;t be accessed to outsiders of the country of creator.
        </P>
        <div className="my-8">
          <Slider
            images={[
              '/ylanes/scr1.png',
              '/ylanes/scr2.png',
              '/ylanes/scr3.png',
            ]}
          />
        </div>
        <H2>My Role</H2>
        <P>
          In this project, my primary responsibility revolved around optimizing
          the page loading speed. To achieve this, we implemented various
          strategies, including caching and lazy loading. These efforts were
          aimed at enhancing the overall user experience by ensuring that web
          pages loaded swiftly and efficiently. This role not only contributed
          to the project&#39;s success but also enriched my skill set in web
          development and performance optimization.
        </P>
        <H2>What I learned</H2>
        <P>
          I learned to work on React class components. The project is using a
          little bit older version of React, and the project has its own custom
          structure. This meant that we had to familiarize ourselves with their
          framework and adapt our code to fit within their system. Additionally,
          we made use of functional components for certain tasks and seamlessly
          integrated them with class components. We also incorporated
          Material-UI (MUI) with customizations, ensuring that all the designs
          remained responsive throughout the development process.
        </P>
        <P>
          Moreover, this project provided valuable insights into teamwork, as I
          collaborated with individuals possessing varying levels of knowledge.
          Despite the challenges, it helped me improve my collaborative skills,
          enabling effective cooperation among team members. Notably, the entire
          team worked remotely from home, and this experience allowed me to
          adapt to the new norm of remote work, ultimately making me more
          comfortable with this setup.
        </P>
      </article>
    </div>
  );
};

export default Ylanes;
