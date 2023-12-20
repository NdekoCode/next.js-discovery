import { FC, FormEvent, useRef } from 'react';

import { Button } from '../ui';

type SearchProsp = {
    onSearch:(selectedYear:string,selectedMonth:string)=>void;
}
export const EventSearch: FC<SearchProsp> = ({onSearch}) => {

    const yearInputRef = useRef<HTMLSelectElement>(null);
    const monthInputRef = useRef<HTMLSelectElement>(null);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const selectedYear = yearInputRef.current?.value;
        const selectedMonth = monthInputRef.current?.value;
        onSearch(selectedYear!, selectedMonth!);
    }
    return (
        <form className='flex w-full gap-4' onSubmit={handleSubmit}>
            <div >
                <div className='flex items-center w-full gap-4'>
                    <div className="relative">
                        <select
                            ref={yearInputRef}
                            className="peer p-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600
  focus:pt-6
  focus:pb-2
  [&:not(:placeholder-shown)]:pt-6
  [&:not(:placeholder-shown)]:pb-2
  autofill:pt-6
  autofill:pb-2"
                        >
                            <option value="">Selected a year</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </select>
                        <label htmlFor="year"
                            className="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
    peer-focus:text-xs
    peer-focus:-translate-y-1.5
    peer-focus:text-gray-500
    peer-[:not(:placeholder-shown)]:text-xs
    peer-[:not(:placeholder-shown)]:-translate-y-1.5
    peer-[:not(:placeholder-shown)]:text-gray-500"
                        >
                            Year
                        </label>
                    </div>
                    <div className="relative">
                        <select
                            ref={monthInputRef}
                            className="peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6
  [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2">
                            <option value="">Select a month</option>

                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                        <label
                            htmlFor="month"
                            className="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5  peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5  peer-[:not(:placeholder-shown)]:text-gray-500">Month
                        </label>

                    </div>
                </div>
            </div>
            <Button type="submit" className="flex items-center px-4 py-2 text-white transition-colors bg-green-700 rounded-md hover:bg-green-800 gap-x-2">Find Events</Button>
        </form>
    )
}
