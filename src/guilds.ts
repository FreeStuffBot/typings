import { Long } from 'mongodb'


/**
 * The data that gets stored in the database
 * 
 * @database
 */
export interface DatabaseGuildData {
  _id: Long
  sharder: Long
  channel: Long | null
  role: Long | null
  settings: number
  filter: number
  tracker: number
}