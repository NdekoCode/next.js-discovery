const UserItem = ({ user }) => {
  return (
    <li className="py-3 sm:py-4">
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
          <p className="text-sm text-gray-500 truncate ">{user.email}</p>
        </div>
      </div>
    </li>
  );
};
export default UserItem;
