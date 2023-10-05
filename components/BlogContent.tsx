import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { useCounterContext } from "../context/CounterContext";

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          excepturi, ratione eveniet cum ullam autem assumenda modi. Qui iste
          nam laborum nesciunt et! Tempora deleniti unde eaque neque vel eum.
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
