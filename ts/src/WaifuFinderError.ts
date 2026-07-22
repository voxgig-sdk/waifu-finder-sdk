
import { Context } from './Context'


class WaifuFinderError extends Error {

  isWaifuFinderError = true

  sdk = 'WaifuFinder'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  WaifuFinderError
}

