import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { useCounterContext } from "../context/CounterContext";
import image1 from "../public/assets/images/01.jpg";
import image2 from "../public/assets/images/02.jpg";
import image3 from "../public/assets/images/03.jpg";
const BlogContent = () => {
  const { count, increment } = useCounterContext();
  const router: NextRouter = useRouter();
  const goHome = () => router.push("/");
  return (
    <div className="prose">
      <main>
        <h1>Mon blog</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          excepturi, ratione eveniet cum ullam autem assumenda modi. Qui iste
          nam laborum nesciunt et! Tempora deleniti unde eaque neque vel eum.
        </p>
        <p>Compteur: {count}</p>
        <button onClick={() => increment()}>Increment</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          excepturi, ratione eveniet cum ullam autem assumenda modi. Qui iste
          nam laborum nesciunt et! Tempora deleniti unde eaque neque vel eum.
        </p>
        <p>
          <Image
            src={image1}
            layout="responsive"
            placeholder="blur"
            width={2400}
            height={1600}
            alt="Image"
          />
          <Image
            src={image2}
            layout="responsive"
            width={4447}
            height={6670}
            alt="Image"
          />
          <Image
            src={image3}
            width={5064}
            layout="responsive"
            height={3376}
            alt="Image"
          />
        </p>
      </main>
      <footer>
        <p>my footer</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt non
          reiciendis modi temporibus nostrum quisquam facilis qui numquam natus
          aspernatur, earum expedita quidem. Iste nisi facilis aspernatur
          doloribus vel perferendis?
        </p>
        <Link href="/" onClick={goHome}>
          Home page
        </Link>
      </footer>
    </div>
  );
};

export default BlogContent;
