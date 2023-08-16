"use client";
import { useEffect, useState } from "react";
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
              <li key={user.id} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate ">
                      {user.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate ">
                      {user.email}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};
export default users;
