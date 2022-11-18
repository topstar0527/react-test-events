import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { BeatLoader } from 'react-spinners'
import { MainLayout } from '../layouts'
import { EventCard } from '../../components/home'
import { useGetEvents } from '../../hooks/events'
import ToggleSwitch from '../../components/home/ToggleSwitch'

interface QueryData {
  pagination?: {
    has_more_pages: boolean
    page: number
  }
  events: []
}

const Home: React.FC = () => {
  const [liveOnly, setLiveOnly] = useState<boolean>(false)
  const { isLoading, data, fetchNextPage, hasNextPage } = useGetEvents(
    ['events', liveOnly],
    'GET',
    '/hcp/events/targeted?sort=start_at',
    null,
    {
      getNextPageParam: (lastPage: QueryData) =>
        lastPage?.pagination?.has_more_pages
          ? lastPage.pagination.page + 1
          : undefined,
      select: (d: any) => ({
        pages: d.pages.map((page: any) => page.events).flat(),
      }),
    }
  )
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <MainLayout>
      <div className='py-6'>
        <div className='px-4 sm:px-6 md:px-0 mb-6 flex justify-between'>
          <h1 className='text-3xl font-bold text-gray-700'>Happening Now</h1>
          <ToggleSwitch
            onChange={(e: boolean) => setLiveOnly(e)}
            label='Live only'
          />
        </div>
        <div className='px-4 sm:px-6 md:px-0'>
          {isLoading ? (
            <div className='w-full z-50 overflow-hidden flex flex-col items-center justify-center mt-8'>
              <BeatLoader color='#d1d5db' />
              <h2 className='text-center text-gray-600 text-lg font-light'>
                Loading...
              </h2>
            </div>
          ) : null}
          <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {data &&
              data.pages &&
              data.pages.map((event) => (
                <li
                  key={event.id}
                  className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow'
                >
                  <EventCard event={event} />
                </li>
              ))}
          </ul>
          {hasNextPage ? (
            <div className='w-full flex justify-center mt-2'>
              <div
                className='w-full z-50 overflow-hidden flex flex-col items-center justify-center mt-8'
                ref={ref}
              >
                <BeatLoader color='#d1d5db' />
                <h2 className='text-center text-gray-600 text-lg font-light'>
                  Loading more...
                </h2>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </MainLayout>
  )
}

export default Home as React.ComponentType
