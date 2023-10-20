import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { FC } from "react";
import { useCounterContext } from "../context/CounterContext";
import image1 from "../public/assets/images/01.jpg";
import image2 from "../public/assets/images/02.jpg";
import image3 from "../public/assets/images/03.jpg";
import { Post } from "../utils/types/types";
type BlogContentProps = {
  posts: Post[];
};
const BlogContent: FC<BlogContentProps> = ({ posts }) => {
  console.log(posts);
  const { count, increment } = useCounterContext();
  const router: NextRouter = useRouter();
  const goHome = () => router.push("/");
  return (
    <div className="prose">
      <main>
        <h1>Mon blog</h1>
        <p>Compteur: {count}</p>
        <button onClick={() => increment()}>Increment</button>
        <div className="container px-3 mx-auto max-w-7xl lg:px-0">
          {posts ? (
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {posts.map((post) => (
                <li
                  key={post.id}
                  className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] h-full p-4 md:p-7"
                >
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-gray-800 dark:text-gray-400">
                      {post.body.length > 100
                        ? post.body.slice(0, 100) + "..."
                        : post.body}
                    </p>
                    <Link
                      className="inline-flex items-center gap-2 mt-auto text-sm font-medium text-blue-500 hover:text-blue-700"
                      href={`/blog/${post.id}`}
                    >
                      lire plus
                      <svg
                        className="w-2.5 h-auto"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </Link>
                </li>
              ))}
            </ul>
          ) : <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex flex-col items-center justify-center flex-auto p-4 md:p-5">
            <svg
              className="max-w-[5rem]"
              viewBox="0 0 375 428"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M254.509 253.872L226.509 226.872"
                className="stroke-gray-400 dark:stroke-white"
                stroke="currentColor"
                strokeWidth={7}
                strokeLinecap="round"
              />
              <path
                d="M237.219 54.3721C254.387 76.4666 264.609 104.226 264.609 134.372C264.609 206.445 206.182 264.872 134.109 264.872C62.0355 264.872 3.60864 206.445 3.60864 134.372C3.60864 62.2989 62.0355 3.87207 134.109 3.87207C160.463 3.87207 184.993 11.6844 205.509 25.1196"
                className="stroke-gray-400 dark:stroke-white"
                stroke="currentColor"
                strokeWidth={7}
                strokeLinecap="round"
              />
              <rect
                x="270.524"
                y="221.872"
                width="137.404"
                height="73.2425"
                rx="36.6212"
                transform="rotate(40.8596 270.524 221.872)"
                className="fill-gray-400 dark:fill-white"
                fill="currentColor"
              />
              <ellipse
                cx="133.109"
                cy="404.372"
                rx="121.5"
                ry="23.5"
                className="fill-gray-400 dark:fill-white"
                fill="currentColor"
              />
              <path
                d="M111.608 188.872C120.959 177.043 141.18 171.616 156.608 188.872"
                className="stroke-gray-400 dark:stroke-white"
                stroke="currentColor"
                strokeWidth={7}
                strokeLinecap="round"
              />
              <ellipse
                cx="96.6084"
                cy="116.872"
                rx={9}
                ry={12}
                className="fill-gray-400 dark:fill-white"
                fill="currentColor"
              />
              <ellipse
                cx="172.608"
                cy="117.872"
                rx={9}
                ry={12}
                className="fill-gray-400 dark:fill-white"
                fill="currentColor"
              />
              <path
                d="M194.339 147.588C189.547 148.866 189.114 142.999 189.728 138.038C189.918 136.501 191.738 135.958 192.749 137.131C196.12 141.047 199.165 146.301 194.339 147.588Z"
                className="fill-gray-400 dark:fill-white"
                fill="currentColor"
              />
            </svg>
            <p className="mt-5 text-sm text-gray-500 dark:text-gray-500">
              No data to show
            </p>
          </div>
        </div>
        }
        </div>
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
