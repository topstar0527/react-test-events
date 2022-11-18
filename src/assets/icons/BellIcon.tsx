import React from 'react'

export const BellIcon = (props: React.ComponentProps<'svg'>) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9'
      stroke='#9CA3AF'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <g filter='url(#filter0_d_0_1)'>
      <rect x='14' y='2' width='8' height='8' rx='4' fill='#FF4D4D' />
    </g>
    <defs>
      <filter
        id='filter0_d_0_1'
        x='12'
        y='0'
        width='12'
        height='12'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius='2'
          operator='dilate'
          in='SourceAlpha'
          result='effect1_dropShadow_0_1'
        />
        <feOffset />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_0_1'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_0_1'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
)
