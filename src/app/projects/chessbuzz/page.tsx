import { FC } from 'react';

import { H1, H2, P } from '@/components/UI/Typography';
import Slider from '@/components/UI/Slider';

interface Props {}

const Chessbuzz: FC<Props> = async () => {
  return (
    <div className="mb-16">
      <div className="mb-8 md:mb-16">
        <H1 className="md:text-5xl text-3xl tracking-tight">Chessbuzz</H1>
      </div>
      <article className="article">
        <P>
          This project was made for a charity for publishing chess related
          articles. There are 3 parts of the project.
          <span className="block">1. Android app</span>
          <span className="block">
            2. Custom backend which act as a mini CMS
          </span>
          <span className="block">3. Admin Dashboard</span>
        </P>
        <P>
          Android app was connected to backed with rest API. Admin can edit,
          create or delete the post. Post contain title, description and image.
          The dashboard was created using react.
        </P>
        <P>
          Images are stored in Cloudinary. Only authorized users can view the
          app so need to login before doing anything.
        </P>
        <P>The backend was made from nodejs with mongodb as our database.</P>
        <div className="my-8">
          <Slider
            images={[
              '/chessbuzz/scr1.jpeg',
              '/chessbuzz/scr2.jpeg',
              '/chessbuzz/scr3.jpg',
              '/chessbuzz/scr4.jpeg',
              '/chessbuzz/scr5.jpeg',
            ]}
          />
        </div>
        <H2>My Role</H2>
        <P>
          In this project, my primary role revolved around the development of
          the backend and the creation of the admin panel. As part of this
          responsibility, I familiarized myself with MongoDB and successfully
          implemented it to handle data storage and management. This was pivotal
          in ensuring the seamless functioning of the application.
        </P>
        <P>
          Furthermore, I took on the task of integrating the notification module
          using FCM, which played a crucial role in enhancing user engagement
          and communication within the app. My role contributed to the
          successful development of the project.
        </P>
        <H2>What I learned</H2>
        <P>
          During this project, I gained valuable knowledge in several areas.
          First and foremost, I learned the fundamentals of MongoDB, which was a
          bit new to me at that time. This experience expanded my expertise in
          database management and allowed me to work with a different database
          system, broadening my skill set.
        </P>
        <P>
          Additionally, I had the opportunity to implement the notification
          module using Firebase Cloud Messaging (FCM). This was a new and
          enriching experience that allowed me to delve into the world of
          real-time notifications and messaging, providing me with valuable
          insights and practical skills in this domain.
        </P>
      </article>
    </div>
  );
};

export default Chessbuzz;
