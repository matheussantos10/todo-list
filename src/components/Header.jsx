import * as React from 'react';
import 'moment/locale/pt-br';
import moment from 'moment/moment';

export const Header = () => {

    const dateNow = moment().format("dddd, DD MMM");

    return (
        <div className='flex relative justify-center mt-5 text-white'>

            <span className='absolute right-5 text-[#e2e2e29a]'>
                {dateNow}
            </span>

            <h1 className="flex  text-4xl font-bold">
                ToDo List
            </h1>
        </div>
    )
}