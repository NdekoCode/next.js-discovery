import React, { FC, PropsWithChildren } from 'react';

type AlertProps = {
    title?: string
    description?: string;
}
export const AlertData: FC<PropsWithChildren<AlertProps>> = ({title,description}) => {
    
  return (
      <div
          className="bg-blue-100 border border-blue-200 text-gray-800 rounded-lg p-4 dark:bg-blue-800/10 dark:border-blue-900 dark:text-white"
          role="alert"
      >
          <div className="flex">
              <div className="flex-shrink-0">
                  <svg
                      className="flex-shrink-0 h-4 w-4 mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  >
                      <circle cx={12} cy={12} r={10} />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                  </svg>
              </div>
              <div className="ms-3">
                  <h3 className="font-semibold">
                      {title}
                  </h3>
                  {description &&
                      <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          {description}
                      </div> }
              </div>
          </div>
      </div>

  )
}
