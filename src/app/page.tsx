import { H1, P } from '@/components/UI/Typography';
import { socialLinks } from '@/constants';

export default async function Home() {
  return (
    <div>
      <section className="mb-14">
        <H1>Milan Patel</H1>
        <P>
          Hello there! I am Milan, a strong problem solver who delivers
          high-quality products. Committed to utilizing my expertise to code
          best-practice solutions and drive revenue for companies.
        </P>
        <P>
          I have over 4 years of experience in ReactJS, Typescript, NextJS, and
          Javascript. I have worked in different type of industries but from
          those fintech and edtech are my favorite ones. I have made significant
          contributions to large scale projects like the IDFC bank, covid
          tracker. I have experience working in both large and small teams,
          collaborating with cross-functional teams.
        </P>
        <P>
          I have also gained expertise in working remotely and managing people
          under me. My remarkable work includes improving code for performance,
          optimizing for speed, streamlining processes, and delivering efficient
          user experiences.
        </P>
        <div className="flex items-center gap-1">
          <span>Social Links:</span>
          <div role="group" className="flex gap-1">
            {socialLinks.map((link, i) => (
              <a
                className="relative h-10 w-10 flex items-center justify-center group transition-all hover:rotate-6"
                key={link.name}
                href={link.href}
                target="_blank"
              >
                <link.Icon
                  className="text-white transition-all duration-300 group-hover:text-primary"
                  size={20}
                />
                <span className="absolute h-full w-full rounded-full border border-transparent transition-all duration-300 group-hover:border-dashed group-hover:border-primary"></span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
