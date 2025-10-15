export type ClientCaptcha = {
  ready: (callback: () => void) => void
  execute: (token: string, args: { action: 'contact' }) => Promise<string>
}

export type ServerCaptcha =
  | {
      success: true
      score: number
      action: string
      hostname: string
      challenge_ts: string
    }
  | {
      success: false
      'error-codes': string[]
    }
