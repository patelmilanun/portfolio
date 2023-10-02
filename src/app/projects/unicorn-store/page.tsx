import { FC } from 'react';

import { H1, H2, P } from '@/components/UI/Typography';
import Slider from '@/components/UI/Slider';
import { GitHub, Link } from 'react-feather';

interface Props {}

const UnicornStore: FC<Props> = async () => {
  return (
    <div className="mb-16">
      <div className="mb-8 md:mb-16">
        <div className="text-xs md:text-sm opacity-80 flex gap-4 mb-4">
          <span className="flex items-center gap-2">
            <Link size={14} />
            <a
              href="https://next-unicorn-ecom-store.vercel.app"
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
              href="https://github.com/patelmilanun/next-unicorn-ecom-store"
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
          The storefront component of this project serves as the customer-facing
          aspect of the e-commerce website. It is designed to provide a seamless
          shopping experience for users. Users can browse through a wide array
          of products, including various categories, colors, and sizes.
        </P>
        <P>
          The storefront offers the functionality to add items to the shopping
          cart and proceed to purchase through the Stripe checkout.
        </P>
        <P>
          Furthermore, users can apply filters to sort products by color and
          size, ensuring a tailored shopping experience. Individual product
          categories are also accessible for users to explore.
        </P>
        <div className="my-8">
          <Slider
            images={[
              '/unicorn-store/scr1.png',
              '/unicorn-store/scr2.png',
              '/unicorn-store/scr3.png',
              '/unicorn-store/scr4.png',
            ]}
          />
        </div>
        <H2>My Role</H2>
        <P>
          My role in the storefront development encompassed creating the user
          interface and functionality for the customer-facing part of the
          website. I designed and implemented features like product listing,
          filtering, adding items to the shopping cart, and integrating Stripe
          for payments. My responsibilities were crucial in ensuring a smooth
          and intuitive shopping experience for users.
        </P>
        <H2>What I learned</H2>
        <P>
          During my involvement in the storefront development, I gained valuable
          insights into building a user-friendly e-commerce platform.
          Specifically, I learned how to implement features like product
          filtering by color and size, which enhances the shopping experience by
          allowing users to easily find what they&#39;re looking for.
        </P>
        <P>
          Additionally, I gained experience in integrating Stripe for seamless
          and secure payment processing, a crucial component of any e-commerce
          site. This project deepened my understanding of building a responsive
          and engaging front-end for an online store.
        </P>
      </article>
    </div>
  );
};

export default UnicornStore;
