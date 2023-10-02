import { FC } from 'react';

import { H1, H2, P } from '@/components/UI/Typography';
import Slider from '@/components/UI/Slider';
import { GitHub, Link } from 'react-feather';

interface Props {}

const UnicornAdmin: FC<Props> = async () => {
  return (
    <div className="mb-16">
      <div className="mb-8 md:mb-16">
        <div className="text-xs md:text-sm opacity-80 flex gap-4 mb-4">
          <span className="flex items-center gap-2">
            <Link size={14} />
            <a
              href="https://next-unicorn-ecom-admin.vercel.app"
              target="_blank"
              className="text-sm text-primary font-light border-transparent border-b-2 border-dashed hover:border-primary"
            >
              View Live
            </a>
          </span>
          <span>|</span>
          <span className="flex items-center gap-2">
            <GitHub size={14} />
            <a
              href="https://github.com/patelmilanun/next-unicorn-ecom-admin"
              target="_blank"
              className="text-sm text-primary font-light border-transparent border-b-2 border-dashed hover:border-primary"
            >
              View Code
            </a>
          </span>
        </div>
        <H1 className="md:text-5xl text-3xl tracking-tight">Unicorn Store</H1>
      </div>
      <article className="article">
        <P>
          The admin panel is the backbone of this e-commerce project, serving as
          the content management system (CMS) and dashboard for managing the
          online store. It is divided into two main functions: enabling CRUD
          (Create, Read, Update, Delete) operations for categories, products,
          colors, and sizes, and providing a set of exposed APIs to facilitate
          seamless integration with the storefront.
        </P>
        <P>
          The admin panel presents data in an organized manner, displayed in
          tables that allow users to easily copy specific item IDs. It also
          offers the capability to create multiple stores and manage them
          effectively.
        </P>
        <div className="my-8">
          <Slider
            images={[
              '/unicorn-admin/scr1.png',
              '/unicorn-admin/scr2.png',
              '/unicorn-admin/scr3.png',
              '/unicorn-admin/scr4.png',
              '/unicorn-admin/scr5.png',
              '/unicorn-admin/scr6.png',
            ]}
          />
        </div>
        <H2>My Role</H2>
        <P>
          In the admin panel development, my role was multifaceted. I was
          responsible for creating the user interface and functionality that
          allowed users to perform CRUD operations on categories, products,
          colors, and sizes.
        </P>
        <P>
          Additionally, I implemented the necessary APIs to facilitate data
          communication with the storefront. My responsibilities ensured that
          the admin panel was a powerful tool for managing the e-commerce
          platform, enabling efficient content and store management.
        </P>
        <H2>What I learned</H2>
        <P>
          My involvement in the admin panel development exposed me to the
          intricacies of building a robust content management system. I learned
          how to implement CRUD operations for various entities, a fundamental
          aspect of managing an e-commerce platform.
        </P>
        <P>
          Additionally, I gained experience in designing and exposing APIs,
          making it easier to integrate the admin panel with the storefront.
          Understanding how to structure and organize data for efficient
          management and retrieval was a key takeaway from this part of the
          project.
        </P>
      </article>
    </div>
  );
};

export default UnicornAdmin;
