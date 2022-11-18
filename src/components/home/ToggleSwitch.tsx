/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { classNames } from '../../utils'

interface ToggleSwitchProps {
  onChange: (enabled: boolean) => void
  label: string
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, onChange }) => {
  const [enabled, setEnabled] = useState<boolean>(false)

  useEffect(() => {
    onChange(enabled)
  }, [enabled])

  return (
    <Switch.Group as='div' className='flex items-center'>
      <Switch.Label as='span' className='mr-3'>
        <span className='text-sm font-medium text-gray-900'>{label}</span>
      </Switch.Label>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        )}
      >
        <span
          aria-hidden='true'
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
    </Switch.Group>
  )
}

export default ToggleSwitch
