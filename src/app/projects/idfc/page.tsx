import { FC } from 'react';
import 'highlight.js/styles/github-dark.css';

import { H1, H2, P } from '@/components/UI/Typography';
import Slider from '@/components/UI/Slider';
import { Link } from 'react-feather';

interface Props {}

const Idfc: FC<Props> = async () => {
  return (
    <div className="mb-16">
      <div className="mb-8 md:mb-16">
        <div className="text-xs md:text-sm opacity-80 flex gap-4 mb-4">
          <span className="flex items-center gap-2">
            <Link size={14} />
            <a
              href="https://my.idfcfirstbank.com"
              target="_blank"
              className="text-sm text-primary font-light border-transparent border-b-2 border-dashed hover:border-primary"
            >
              https://my.idfcfirstbank.com
            </a>
          </span>
        </div>
        <H1 className="md:text-5xl text-3xl tracking-tight">IDFC</H1>
      </div>
      <article className="article">
        <P>
          The project is about net banking portal for IDFC bank. Users fulfill
          their banking needs via this portal. The net banking portal needs no
          explanation.
        </P>
        <P>
          I was working on a specific module called Demet. We were having a big
          team of people working on different module. A typical team assigned to
          a particular module include 2 QA, 3 web devs, 3 mobile devs, 1 scrum
          master, 1 project manager.
        </P>
        <P>
          We were using custom component made by IDFC&#39;s design team to have
          consistent design across the project.
        </P>
        <div className="my-8">
          <Slider
            images={[
              '/idfc/scr1.png',
              '/idfc/scr2.png',
              '/idfc/scr3.png',
              '/idfc/scr4.png',
              '/idfc/scr5.png',
            ]}
          />
        </div>
        <H2>My Role</H2>
        <P>
          In this project, I was responsible for creating new functionality,
          revamping old designs and writing test cases to improve test coverage,
          and I also assisted others in doing the same. This involvement in
          quality assurance contributed to the project&#39;s success by ensuring
          the reliability and robustness of our software. During my tenure, our
          specific module achieved its all-time high in revenue, which I
          consider a significant achievement and a testament to the
          effectiveness of our collaborative efforts.
        </P>
        <H2>What I learned</H2>
        <P>
          This was my first experience working in a big company and being a part
          of a large team. I had the opportunity to engage in cross-functional
          team communication, which significantly boosted my confidence in
          collaborating with individuals from various backgrounds and expertise
          levels. This experience helped me develop essential skills in teamwork
          and effective communication, especially when working within a large
          organization.
        </P>
      </article>
    </div>
  );
};

export default Idfc;
