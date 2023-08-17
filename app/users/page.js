"use client";
import UserItem from "../components/UserItem";
import useAppContext from "../context/theme";
const users = () => {
  const { users, isLoading } = useAppContext();
  return (
    <article>
      <div className="max-w-md p-4 mx-auto bg-white border rounded-lg shadow-md sm:p-8 ">
        {isLoading && <p>Loading...</p>}
        <div className="flow-root">
          {}
          <ul role="list" className="divide-y divide-gray-200 ">
            {users?.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};
export default users;
