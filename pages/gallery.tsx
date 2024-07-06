import Head from 'next/head';
import Image from 'next/image';

import img2 from '../public/assets/images/02.jpg';
import img3 from '../public/assets/images/03.jpg';
import img4 from '../public/assets/images/04.jpg';
import img5 from '../public/assets/images/05.jpg';

const gallery = () => {
  return (
    <>
      <Head>
        <title>My gallery image</title>
      </Head>
      <div>
        <Image
          layout="responsive"
          src="/assets/images/01.jpg"
          blurDataURL="_n"
          width={2671}
          height={4000}
          alt="Image 1"
        />
        <Image
          layout="responsive"
          placeholder="blur"
          src={img2}
          width={2671}
          height={4000}
          alt="Image 2"
        />
        <Image
          layout="responsive"
          placeholder="blur"
          src={img3}
          width={2671}
          height={4000}
          alt="Image 3"
        />
        <Image
          layout="responsive"
          placeholder="blur"
          src={img4}
          width={2671}
          height={4000}
          alt="Image 4"
        />
        <Image
          layout="responsive"
          placeholder="blur"
          src={img5}
          width={2671}
          height={4000}
          alt="Image 5"
        />
      </div>
      {/* 
      //457 KB
      // 1.2 MB
      // 1.1 MB
      // 2.3 MB
      // 2.5 MB
      
      */}
    </>
  );
};

export default gallery;
