
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WaifuFinderSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = WaifuFinderSDK.test()
    equal(testsdk instanceof WaifuFinderSDK, true,
      'WaifuFinderSDK.test() must return a client synchronously')
  })

})
