import { FC } from 'react';

const Comments: FC<{ comments: any }> = ({ comments }) => {
  return (
    <div>
      <div className="flex mt-4">
        <div className="flex items-center justify-center flex-shrink-0 object-cover w-12 h-12 rounded-full bg-purple-400/50">
          <span className="font-medium text-white">A</span>
        </div>
        <div className="ml-3">
          <div className="font-medium text-purple-800">John Doe</div>
          <div className="text-gray-600">Posted on 2023-10-02 14:30</div>
          <div className="mt-2 text-purple-800">
            This is a sample comment. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
