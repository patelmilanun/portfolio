'use client';

import { FC } from 'react';
import { ArrowRight } from 'react-feather';

import { H1, H2, H3, P } from '@/components/UI/Typography';
import { projects } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

interface Props {}

const WorkPage: FC<Props> = () => {
  return (
    <div>
      <section className="mb-14">
        <H1>Projects</H1>
        <P>
          I have experience working on projects of various sizes, including
          large-scale involving distributed and cross-functional teams. I have
          also made contributions to open-source projects. One notable instance
          is my involvement with the Parse project, where my contributions led
          to my recognition as a community member of the Parse team.
          Additionally, I have a flair for creating Figma designs, which is a
          source of excitement for me.
        </P>
        <P>
          In the early stages of my career, I assumed multiple roles, overseeing
          the entire development process. This encompassed tasks such as
          crafting Figma designs, implementing them using React, writing backend
          code in Node.js, and ultimately deploying to servers. Below, I provide
          an overview of some of the projects I have been involved in. While
          most of these projects were undertaken professionally for clients,
          some of them I created, while others I actively contributed to.
        </P>
      </section>
      <section className="mb-8">
        <H2>Gallery</H2>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-bg border border-line rounded-lg"
            >
              <div className="p-4">
                <Image
                  src={project.screenshot}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="mb-6 w-full rounded-lg object-cover object-top custom-transition"
                  onLoadingComplete={(img) => {
                    img.style.height =
                      img.offsetHeight < 500
                        ? `${img.offsetHeight}px`
                        : '500px';
                    img.style.transitionDuration =
                      (img.offsetHeight / 430) * 2 + 's';
                  }}
                  alt={`${project.title} screenshot`}
                />
                <H3>{project.title}</H3>
                <P>{project.description}</P>
              </div>
              <div className="border-t border-line">
                <p className="flex justify-between items-center px-4 py-2">
                  <Link href={project.detailPageLink}>
                    <span className="group pr-1 flex items-center gap-1 cursor-pointer">
                      <span className="text-sm text-primary font-light border-transparent border-b-2 border-dashed group-hover:border-primary">
                        Details
                      </span>
                      <ArrowRight
                        size={16}
                        className="text-primary cursor-pointer transition-all group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                  <span className="text-sm font-light italic opacity-60">
                    {project.projectType}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
