
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WaifuFinderSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await WaifuFinderSDK.test()
    equal(null !== testsdk, true)
  })

})
