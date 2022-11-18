import { useInfiniteQuery } from 'react-query'
import { Method } from 'axios'
import request from '../api/request'
import { Event } from '../types/Event'

export const useGetEvents = (
  query: any[],
  method: Method,
  uri: string,
  params: any,
  options: any
) =>
  useInfiniteQuery<Event>(
    query,
    async ({ pageParam = 1 }) => {
      const response = await request(
        method,
        `${uri}&page=${pageParam}${query[1] ? '&filter[status]=live' : ''}`,
        params
      )
      const { data } = response.data as any
      return data
    },
    options
  )
