import Link from 'next/link';
import React from 'react';

function Nav() {
  return (
    <div className='flex gap-8 p-8'>
      <Link
        className='border border-gray-100 shadow-md rounded-md p-4 w-48 text-center hover:bg-slate-50'
        href='upload-action'
      >
        Server Action
      </Link>
      <Link
        className='border border-gray-100 shadow-md rounded-md p-4 w-48 text-center hover:bg-slate-50'
        href='upload-api'
      >
        API
      </Link>
      <Link
        className='border border-gray-100 shadow-md rounded-md p-4 w-48 text-center hover:bg-slate-50'
        href='upload-signed-url'
      >
        Signed URL
      </Link>
    </div>
  );
}

export default Nav;
