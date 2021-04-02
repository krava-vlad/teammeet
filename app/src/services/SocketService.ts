import { Client } from 'faye'

export default class SocketService {
  protected static client: Client

  static connect (): void {
    const endpoint = process.env.NODE_ENV === 'development' ? 'http://localhost:4000/socket' : `https://${process.env.REACT_APP_API_HOST}/socket`
    SocketService.client = new Client(endpoint)
  }

  static subscribe (channel: string, callback: (payload: any) => void): void {
    SocketService.client.subscribe(channel, payload => callback(payload))
  }

  static unsubscribe (channel: string): void {
    SocketService.client.unsubscribe(channel)
  }

  static publish (channel: string, payload: any): void {
    SocketService.client.publish(channel, payload)
  }
}
