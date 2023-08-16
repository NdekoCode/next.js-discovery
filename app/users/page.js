"use client";
import { useEffect, useState } from "react";
import UserItem from "../components/UserItem";
const users = () => {
  const [data, setData] = useState({
    users: [],
    isLoading: true,
  });
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const responseData = await response.json();
        if (response.ok) {
          setData((state) => ({
            ...state,
            users: responseData,
            isLoading: false,
          }));
        } else {
          setData((state) => ({ ...state, isLoading: false }));
        }
      } catch (error) {
        setData((state) => ({ ...state, isLoading: false }));
      }
    })();
  }, [data.isLoading]);
  return (
    <article>
      <div className="max-w-md p-4 mx-auto bg-white border rounded-lg shadow-md sm:p-8 ">
        {data.isLoading && <p>Loading...</p>}
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 ">
            {data.users.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};
export default users;
