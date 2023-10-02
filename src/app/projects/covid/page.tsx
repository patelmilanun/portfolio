import { FC } from 'react';
import 'highlight.js/styles/github-dark.css';

import { H1, H2, P } from '@/components/UI/Typography';
import Slider from '@/components/UI/Slider';

interface Props {}

const Covid: FC<Props> = async () => {
  return (
    <div className="mb-16">
      <div className="mb-8 md:mb-16">
        <H1 className="md:text-5xl text-3xl tracking-tight">Covid Tracker</H1>
      </div>
      <article className="article">
        <P>
          A management system for covid patient. This project was build for a
          municipality corporation to track the covid patients.
        </P>
        <P>
          The application contains login with different types of role,
          transferring patients from one&#39;s observation to other as well as
          the upper level can manage their lower level.
        </P>

        <div className="my-8">
          <Slider
            images={[
              '/covid/scr1.jpeg',
              '/covid/scr2.jpeg',
              '/covid/scr3.jpeg',
            ]}
          />
        </div>
        <H2>My Role</H2>
        <P>
          In this project, my role was multifaceted. I was responsible for the
          development of the entire application, covering both the front-end and
          back-end aspects. The utilization of Strapi as our CMS involved
          setting up and managing content, ensuring its smooth integration with
          the app. My expertise was crucial in implementing custom optimization
          measures to optimize query search speed for our extensive patient
          database. This contribution significantly improved the overall
          performance and user experience of the application.
        </P>
        <P>
          Additionally, I took the initiative to learn and incorporate data
          visualization techniques using charts, further enhancing the app&#39;s
          capabilities.
        </P>
        <H2>What I learned</H2>
        <P>
          I gained valuable experience in various aspects of app development,
          spanning from front-end to back-end. This comprehensive involvement
          allowed me to expand my skill set significantly. Specifically, I
          learned how to work with Strapi as our Content Management System
          (CMS). Additionally, I acquired knowledge in custom optimization
          techniques, which I applied on top of the CMS to enhance query search
          performance. This was particularly important as we were managing a
          substantial database with over 150,000 patients.
        </P>
        <P>
          Furthermore, I delved into data visualization, learning how to use
          charts to represent data more effectively, which is a crucial skill in
          conveying information to users.
        </P>
      </article>
    </div>
  );
};

export default Covid;
