import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { classNames } from '../../../utils'
import logo from '../../../assets/images/logo.png'
import { FeedIcon } from '../../../assets/icons/FeedIcon'
import { MagnifierIcon } from '../../../assets/icons/MagnifierIcon'
import { FireIcon } from '../../../assets/icons/FireIcon'
import { BeakerIcon } from '../../../assets/icons/BeakerIcon'
import { MailIcon } from '../../../assets/icons/MailIcon'
import { CalendarIcon } from '../../../assets/icons/CalendarIcon'
import { PhoneIcon } from '../../../assets/icons/PhoneIcon'

interface SideBarProps {
  sidebarOpen: boolean
  onCloseSidebar: () => void
}

const SideBar: React.FC<SideBarProps> = ({ sidebarOpen, onCloseSidebar }) => {
  const navigations = {
    dashboard: [
      {
        icon: (
          <FeedIcon
            className={classNames(
              ' group-hover:text-gray-500',
              'mr-4 flex-shrink-0 h-6 w-6'
            )}
            aria-hidden='true'
          />
        ),
        text: 'Feed',
        link: '/',
        notify: 0,
      },
      {
        icon: (
          <MagnifierIcon
            className={classNames(
              ' group-hover:text-gray-500',
              'mr-4 flex-shrink-0 h-6 w-6'
            )}
            aria-hidden='true'
          />
        ),
        text: 'Search Drugs',
        link: '/',
      },
      {
        icon: (
          <FireIcon
            className={classNames(
              ' group-hover:text-gray-500',
              'mr-4 flex-shrink-0 h-6 w-6'
            )}
            aria-hidden='true'
          />
        ),
        text: 'Happening Now',
        link: '/',
        selected: true,
      },
      {
        icon: (
          <BeakerIcon
            className={classNames(
              ' group-hover:text-gray-500',
              'mr-4 flex-shrink-0 h-6 w-6'
            )}
            aria-hidden='true'
          />
        ),
        text: 'Therapy area products',
        link: '/',
      },
    ],
    connect: [
      {
        icon: (
          <MailIcon
            className={classNames(
              ' group-hover:text-gray-500',
              'mr-4 flex-shrink-0 h-6 w-6'
            )}
            aria-hidden='true'
          />
        ),
        text: 'Messaging',
        link: '/',
        notify: 5,
      },
      {
        icon: (
          <CalendarIcon
            className={classNames(
              ' group-hover:text-gray-500',
              'mr-4 flex-shrink-0 h-6 w-6'
            )}
            aria-hidden='true'
          />
        ),
        text: 'Meetings',
        link: '/',
        selected: false,
      },
      {
        icon: (
          <PhoneIcon
            className={classNames(
              ' group-hover:text-gray-500',
              'mr-4 flex-shrink-0 h-6 w-6'
            )}
            aria-hidden='true'
          />
        ),
        text: 'Call history',
        link: '/',
        notify: 2,
      },
    ],
  }

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={React.Fragment}>
        <Dialog
          as='div'
          className='relative z-40 md:hidden'
          onClose={onCloseSidebar}
        >
          <Transition.Child
            as={React.Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={React.Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4'>
                <div className='flex flex-shrink-0 justify-center items-center px-4'>
                  <img className='h-[45px] w-auto' src={logo} alt='Discreedy' />
                </div>
                <div className='mt-5 h-0 flex-1 overflow-y-auto'>
                  {Object.entries(navigations).map((category, key) => (
                    <nav className='mt-5 space-y-1 bg-white px-2' key={key}>
                      <span className='py-4 px-2 uppercase text-gray-400 text-sm font-semibold'>
                        {category[0]}
                      </span>

                      {category[1].map((item, k) => (
                        <div key={k} className='flex items-center'>
                          <a
                            href='/'
                            className={classNames(
                              item?.selected
                                ? 'text-gray-700 navbar-item-selected'
                                : 'text-gray-500 hover:text-gray-700 navbar-item',
                              'group flex flex-1 items-center px-2 py-2 text-base font-medium rounded-md'
                            )}
                          >
                            {item.icon}
                            {item.text}
                          </a>
                          {item?.notify ? (
                            <span className='text-white text-center bg-red-400 rounded-2xl w-[36px] h-[24px] mr-7'>
                              {item.notify}
                            </span>
                          ) : null}
                        </div>
                      ))}
                    </nav>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className='hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col'>
        <div className='flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white'>
          <div className='flex flex-1 flex-col overflow-y-auto pt-5 pb-4'>
            <div className='flex flex-shrink-0 justify-center items-center px-4'>
              <img className='h-[45px] w-auto' src={logo} alt='Discreedy' />
            </div>
            {Object.entries(navigations).map((category, key) => (
              <nav className='mt-5 space-y-1 bg-white px-2' key={key}>
                <span className='py-4 px-2 uppercase text-gray-400 text-sm font-semibold'>
                  {category[0]}
                </span>

                {category[1].map((item, k) => (
                  <div key={k} className='flex items-center'>
                    <a
                      href='/'
                      className={classNames(
                        item?.selected
                          ? 'text-gray-700 navbar-item-selected'
                          : 'text-gray-500 hover:text-gray-700 navbar-item',
                        'group flex flex-1 items-center px-2 py-2 text-base font-medium rounded-md'
                      )}
                    >
                      {item.icon}
                      {item.text}
                    </a>
                    {item?.notify ? (
                      <span className='text-white text-center bg-red-400 rounded-2xl w-[36px] h-[24px] mr-7'>
                        {item.notify}
                      </span>
                    ) : null}
                  </div>
                ))}
              </nav>
            ))}
          </div>
          <div className='flex flex-shrink-0 border-t border-gray-200 p-4' />
        </div>
      </div>
    </div>
  )
}

export default SideBar
