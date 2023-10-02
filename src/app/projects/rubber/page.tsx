import { FC } from 'react';

import { H1, H2, P } from '@/components/UI/Typography';
import Slider from '@/components/UI/Slider';

interface Props {}

const Rubber: FC<Props> = async () => {
  return (
    <div className="mb-16">
      <div className="mb-8 md:mb-16">
        <H1 className="md:text-5xl text-3xl tracking-tight">Rubber Event</H1>
      </div>
      <article className="article">
        <P>
          This was project about an event management system. It was focused on a
          specific event. We were given some old code which was similar to this
          and also Figma designs. We made customization on some module and also
          added some new modules. It was built using next js.
        </P>
        <P>
          The project basically will be used by admin of the event to manage
          different things like event info, security persons, sponsors,
          attendee, feedback etc.
        </P>
        <div className="my-8">
          <Slider
            images={[
              '/rubber/scr1.jpg',
              '/rubber/scr2.jpg',
              '/rubber/scr3.jpg',
              '/rubber/scr4.jpg',
              '/rubber/scr5.jpg',
              '/rubber/scr6.jpg',
            ]}
          />
        </div>
        <H2>My Role</H2>
        <P>
          My role in this project was to build the app with some existing
          template like code. I was also improving the existing code for more
          readability and adding a better library to make our work efficient.
        </P>
        <H2>What I learned</H2>
        <P>
          This project primarily involved applying my existing knowledge rather
          than learning entirely new concepts. However, I made sure not to miss
          any opportunities for learning. During the course of the project, we
          encountered a caching issue that needed resolution. This challenge
          provided me with an opportunity to delve into new areas and acquire
          additional skills. It was a valuable experience in problem-solving and
          expanding my knowledge base.
        </P>
        <P>
          Furthermore, I had the chance to share my expertise and knowledge with
          my fellow project members. Teaching others within the team became part
          of my role, and this experience helped me solidify my own
          understanding of the project&#39;s intricacies. Collaborating in this
          manner fostered a supportive and knowledge-sharing environment,
          enhancing the overall effectiveness of the team&#39;s efforts.
        </P>
      </article>
    </div>
  );
};

export default Rubber;
