import React from 'react'
import { MagnifierIcon } from '../../../assets/icons/MagnifierIcon'
import { Bars3BottomLeftIcon } from '../../../assets/icons/Bars3BottomLeftIcon'
import { BellIcon } from '../../../assets/icons/BellIcon'

interface HeaderProps {
  onOpenSidebar: () => void
}

const Header: React.FC<HeaderProps> = ({ onOpenSidebar }) => (
  <div className='sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white md:px-8'>
    <button
      type='button'
      className='border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
      onClick={onOpenSidebar}
    >
      <span className='sr-only'>Open sidebar</span>
      <Bars3BottomLeftIcon className='h-6 w-6' aria-hidden='true' />
    </button>
    <div className='flex flex-1 justify-between px-4 md:px-0'>
      <div className='flex flex-1'>
        <form className='flex w-full md:ml-0' action='#' method='GET'>
          <label htmlFor='search-field' className='sr-only'>
            Search
          </label>
          <div className='relative flex items-center w-full  text-gray-400 focus-within:text-gray-600'>
            <div className='pointer-events-none absolute inset-y-0 left-0 ml-3 flex items-center'>
              <MagnifierIcon className='h-5 w-5' aria-hidden='true' />
            </div>
            <input
              id='search-field'
              className='block w-full rounded-md border-transparent my-auto px-4 py-3 pl-10 pr-3 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm'
              placeholder='What are you looking for today?'
              type='search'
              name='search'
            />
          </div>
        </form>
      </div>
      <div className='ml-4 flex items-center md:ml-6'>
        <button
          type='button'
          className='rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        >
          <span className='sr-only'>View notifications</span>
          <BellIcon className='h-6 w-6' aria-hidden='true' />
        </button>

        <div className='relative ml-3'>
          <div className='flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
            <span className='sr-only'>Open user menu</span>
            <img
              className='h-8 w-8 rounded-full'
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Header
