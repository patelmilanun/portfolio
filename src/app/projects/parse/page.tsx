import { FC } from 'react';

import { H1, H2, P } from '@/components/UI/Typography';
import { GitHub, Link } from 'react-feather';

interface Props {}

const Parse: FC<Props> = async () => {
  return (
    <div className="mb-16">
      <div className="mb-8 md:mb-16">
        <div className="text-xs md:text-sm opacity-80 flex gap-4 mb-4">
          <span className="flex items-center gap-2">
            <Link size={14} />
            <a
              href="https://parseplatform.org"
              target="_blank"
              className="text-sm text-primary font-light border-transparent border-b-2 border-dashed hover:border-primary"
            >
              Official Site
            </a>
          </span>
          <span>|</span>
          <span className="flex items-center gap-2">
            <GitHub size={14} />
            <a
              href="https://github.com/parse-community/parse-dashboard"
              target="_blank"
              className="text-sm text-primary font-light border-transparent border-b-2 border-dashed hover:border-primary"
            >
              View on Github
            </a>
          </span>
        </div>
        <H1 className="md:text-5xl text-3xl tracking-tight">Parse Dashboard</H1>
      </div>
      <article className="article">
        <P>
          The Parse Dashboard is a powerful and versatile tool designed for
          managing Parse Server applications. Parse Server, itself an
          open-source backend solution, can be deployed on virtually any
          infrastructure capable of running Node.js. It is designed to work
          seamlessly with the Express web application framework, providing
          developers with flexibility in integrating it into existing web
          applications or running it as a standalone solution.
        </P>
        <P>
          The Parse Dashboard serves as a standalone management interface for
          Parse Server applications. It empowers developers and administrators
          with a user-friendly dashboard to oversee and control various aspects
          of their Parse Server-based applications. This includes
          functionalities such as managing user data, configuring server
          settings, monitoring app performance, and more.
        </P>
        <P>
          As an open-source project, the Parse Dashboard benefits from
          contributions from developers worldwide. Contributors like you play a
          vital role in improving the dashboard by resolving bugs, implementing
          new features, and enhancing its overall functionality. Your
          contributions demonstrate the collaborative and community-driven
          nature of open-source software development.
        </P>
        <H2>My Role</H2>
        <P>
          My role as a contributor to the Parse Dashboard project centered on
          actively engaging in the development and enhancement of the dashboard.
          This included identifying and resolving bugs to ensure a stable and
          error-free experience for users. Additionally, I participated in
          implementing new features, contributing to the project&#39;s growth
          and functionality.
        </P>
        <P>
          Furthermore, my dedication and contributions to the project led to me
          being recognized and invited to join the organization of the Parse
          community. This elevated role allowed me to have a more substantial
          impact on the project&#39;s direction and development, highlighting my
          commitment to the Parse Dashboard&#39;s success and my role as a
          valued member of the open-source community.
        </P>
        <H2>What I learned</H2>
        <P>
          As a contributor to the Parse Dashboard project, I gained invaluable
          experience in open-source software development. My role involved
          addressing bugs and introducing new features, which allowed me to
          sharpen my problem-solving and coding skills. This experience provided
          insights into the complexities of maintaining a widely-used project,
          including the importance of maintaining code quality, handling issues,
          and managing version control.
        </P>
        <P>
          One of the notable achievements from my contributions was becoming a
          member of the Parse community organization. This recognition
          demonstrates the impact of my work on the project and signifies my
          commitment to the Parse Dashboard&#39;s ongoing improvement.
        </P>
      </article>
    </div>
  );
};

export default Parse;
