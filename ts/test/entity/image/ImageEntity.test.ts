

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { WaifuFinderSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ImageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WAIFU_FINDER_TEST_LIVE=TRUE.
  afterEach(liveDelay('WAIFU_FINDER_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WaifuFinderSDK.test()
    const ent = testsdk.Image()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WAIFU_FINDER_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'image.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"image","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /images/random","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":"explicit","k":"query","n":"rating","or":"rating","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/images/random","q":{"$action":"random","exist":["limit","rating"]},"r":{},"s":[{"lit":"images"},{"lit":"random"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"image","name__orig":"image","Name":"Image","name_":"image","name-":"image","NAME":"IMAGE","index$":0}, {"active":true,"entity":"image","key$":"BasicImageFlow","kind":"basic","name":"BasicImageFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"image_ref01"}}],"index$":0}]}, 'Image', {"GET /images/random":{"protocol":"http","operationId":"getRandomImages","responses":{"200":{"description":"Successful response with random anime-style images","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","description":"Unique identifier for the image"},"url":{"type":"string","format":"uri","description":"Full-size image URL"},"thumbnail":{"type":"string","format":"uri","description":"Thumbnail image URL"},"rating":{"type":"string","description":"Content rating of the image","enum":["explicit","safe","questionable"]},"tags":{"type":"array","items":{"type":"string"},"description":"Tags associated with the image"},"source":{"type":"string","description":"Original source of the image"},"artist":{"type":"string","description":"Artist who created the image"},"width":{"type":"integer","description":"Image width in pixels"},"height":{"type":"integer","description":"Image height in pixels"}}}},"example":[{"id":"12345","url":"https://example.com/images/waifu-12345.jpg","thumbnail":"https://example.com/thumbnails/waifu-12345.jpg","rating":"explicit","tags":["anime","waifu","art"],"source":"https://example.com/source","artist":"Artist Name","width":1920,"height":1080}]}}},"400":{"description":"Bad request - Invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}}},"example":{"error":"Invalid rating parameter"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}}},"example":{"error":"Internal server error occurred"}}}}},"parameters":[{"name":"rating","in":"query","description":"Content rating filter for images (e.g., 'explicit', 'safe', 'questionable')","required":false,"schema":{"type":"string","enum":["explicit","safe","questionable"],"default":"explicit"},"example":"explicit","index$":0},{"name":"limit","in":"query","description":"Maximum number of images to return","required":false,"schema":{"type":"integer","minimum":1,"maximum":100,"default":10},"example":10,"index$":1}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let image_ref01_data = Object.values(setup.data.existing.image)[0] as any

    // LIST
    const image_ref01_ent = client.Image()
    const image_ref01_match: any = {}

    const image_ref01_list = (await image_ref01_ent.list(image_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/image/ImageTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = WaifuFinderSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['image01','image02','image03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WAIFU_FINDER_TEST_IMAGE_ENTID': idmap,
    'WAIFU_FINDER_TEST_LIVE': 'FALSE',
    'WAIFU_FINDER_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WAIFU_FINDER_TEST_IMAGE_ENTID']

  const live = 'TRUE' === env.WAIFU_FINDER_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WAIFU_FINDER_TEST_IMAGE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new WaifuFinderSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.WAIFU_FINDER_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
