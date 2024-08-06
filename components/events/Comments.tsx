import { FC } from 'react';

import { IComment } from '../../utils/types';

const Comments: FC<{ comments: IComment[] }> = ({ comments }) => {
  return comments && comments.length > 0 ? (
    <div className="flex flex-col gap-y-5">
      {comments.map((comment, index) => (
        <div className="flex mt-4" key={index}>
          <div className="flex items-center justify-center flex-shrink-0 object-cover w-12 h-12 rounded-full bg-purple-400/50">
            <span className="font-medium text-white">
              {comment.name[1].toUpperCase()}
            </span>
          </div>
          <div className="ml-3">
            <div className="font-medium text-purple-800">{comment.name}</div>
            <div className="text-gray-600">{comment.email}</div>
            <div className="mt-2 text-purple-800">{comment.body}</div>
          </div>
        </div>
      ))}
    </div>
  ) : null;
};

export default Comments;
