import React from 'react'
import dateFormat from 'dateformat'
import type { Event } from '../../types/Event'
import ClockSVG from '../../assets/icons/Clock.svg'
import LocationSVG from '../../assets/icons/Location.svg'
import { LiveIcon } from '../../assets/icons/LiveIcon'

interface EventCardProps {
  event: Event
}

const EventCard: React.FC<EventCardProps> = ({ event }) => (
  <div className='w-full border border-solid border-gray-200 rounded-lg p-4 bg-white flex flex-col gap-3'>
    <div className='relative'>
      <img
        className='w-full min-h-[140px] max-h-[140px] object-contain mx-auto'
        src={`http://discreedly-sandbox.eba-kanx27t6.eu-west-2.elasticbeanstalk.com/view-file/${event.image_ids[0]}`}
        alt={event.name}
      />
      {new Date(Date.now()) >= new Date(event.start_at) &&
      new Date(Date.now()) <= new Date(event.end_at) ? (
        <div className='absolute bg-white rounded-xl uppercase right-2 bottom-1 px-2 flex items-center text-gray-900 font-semibold'>
          <LiveIcon className='mr-1' />
          Live
        </div>
      ) : null}
    </div>
    <div>
      <p className='text-gray-700 text-base font-semibold'>{event.name}</p>
      <p className='mt-1 text-gray-600 text-xs font-medium truncate'>
        {event.description}
      </p>
    </div>
    <div>
      <div className='flex'>
        <img src={ClockSVG} alt='clock' className='mr-2 w-[20px]' />
        <div>
          <h1 className='text-gray-400 text-xs'>Time</h1>
          <h1 className='text-gray-700 text-xs'>
            {`${dateFormat(new Date(event.start_at), 'mmmm dS')} • ${dateFormat(
              new Date(event.start_at),
              'h:MM TT'
            )} - ${dateFormat(new Date(event.end_at), 'h:MM TT')}`}
          </h1>
        </div>
      </div>
      <div className='flex mt-2'>
        <img src={LocationSVG} alt='clock' className='mr-2 w-[20px]' />
        <div>
          <h1 className='text-gray-400 text-xs'>Location</h1>
          <h1 className='text-gray-700 text-xs'>{event.location}</h1>
        </div>
      </div>
    </div>
    <div>
      {event.associated_products.length ? (
        <>
          <div className='flex justify-between'>
            <h1 className='text-gray-400 text-xs'>Related product</h1>
            <h1 className='text-gray-500 text-xs'>
              +{event.associated_products.length} products
            </h1>
          </div>
          <div className='rounded-md border border-gray-200 p-2 h-[60px]'>
            <div className='flex'>
              <div
                className='[&>p>img]:h-[42px] [&>p>img]:w-[42px] [&>p>img]:rounded-md w-[42px] h-[42px] mr-2'
                dangerouslySetInnerHTML={{
                  __html: event.associated_products[0].media,
                }}
              />
              <div className='flex items-center'>
                <div>
                  <h1 className='text-gray-700 text-xs'>
                    {event.associated_products[0].name}
                  </h1>
                  <h1 className='text-gray-500 text-xs'>
                    {event.associated_products[0].pharma_company.name}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      <div
        className={`py-2 bg-indigo-100 mt-2 rounded-md ${
          !event.associated_products.length ? 'mt-[84px]' : ''
        }`}
      >
        <h1 className='text-center text-indigo-600 text-sm'>Join</h1>
      </div>
    </div>
  </div>
)

export default EventCard
