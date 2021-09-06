import axios from 'axios'

export interface TournamentData {
  title: string
  description: string
  endDate: string
  startDate: string
  prizePool: string
  backgroundImage: string
  players: number
  prizeList: { title: string; total: string }[]
  games: { title: string; src: 'string' }[]
  terms: string[]
}

const tournamentApi = axios.create({
  baseURL: 'https://run.mocky.io/v3'
})

const fetchTournamentData = async (): Promise<TournamentData> => {
  const response = await tournamentApi.get<TournamentData>(
    '/5ab803b0-5f91-4855-9d2c-ef5c44d69bff'
  )

  return response.data
}

export default fetchTournamentData
