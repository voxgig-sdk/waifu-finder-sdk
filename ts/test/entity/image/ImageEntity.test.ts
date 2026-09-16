

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"artist","req":false,"short":"Artist who created the image","type":"`$STRING`","index$":0},{"active":true,"name":"height","req":false,"short":"Image height in pixels","type":"`$INTEGER`","index$":1},{"active":true,"name":"id","req":false,"short":"Unique identifier for the image","type":"`$STRING`","index$":2},{"active":true,"name":"rating","req":false,"short":"Content rating of the image","type":"`$STRING`","index$":3},{"active":true,"name":"source","req":false,"short":"Original source of the image","type":"`$STRING`","index$":4},{"active":true,"name":"tags","req":false,"short":"Tags associated with the image","type":"`$ARRAY`","index$":5},{"active":true,"format":"uri","name":"thumbnail","req":false,"short":"Thumbnail image URL","type":"`$STRING`","index$":6},{"active":true,"format":"uri","name":"url","req":false,"short":"Full-size image URL","type":"`$STRING`","index$":7},{"active":true,"name":"width","req":false,"short":"Image width in pixels","type":"`$INTEGER`","index$":8}],"id":{"field":"id","name":"id"},"name":"image","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":10,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":"explicit","kind":"query","name":"rating","orig":"rating","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /images/random","json":"{\"operationId\":\"getRandomImages\",\"parameters\":[{\"description\":\"Content rating filter for images (e.g., 'explicit', 'safe', 'questionable')\",\"example\":\"explicit\",\"in\":\"query\",\"name\":\"rating\",\"required\":false,\"schema\":{\"default\":\"explicit\",\"enum\":[\"explicit\",\"safe\",\"questionable\"],\"type\":\"string\"}},{\"description\":\"Maximum number of images to return\",\"example\":10,\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":[{\"artist\":\"Artist Name\",\"height\":1080,\"id\":\"12345\",\"rating\":\"explicit\",\"source\":\"https://example.com/source\",\"tags\":[\"anime\",\"waifu\",\"art\"],\"thumbnail\":\"https://example.com/thumbnails/waifu-12345.jpg\",\"url\":\"https://example.com/images/waifu-12345.jpg\",\"width\":1920}],\"schema\":{\"items\":{\"properties\":{\"artist\":{\"description\":\"Artist who created the image\",\"type\":\"string\"},\"height\":{\"description\":\"Image height in pixels\",\"type\":\"integer\"},\"id\":{\"description\":\"Unique identifier for the image\",\"type\":\"string\"},\"rating\":{\"description\":\"Content rating of the image\",\"enum\":[\"explicit\",\"safe\",\"questionable\"],\"type\":\"string\"},\"source\":{\"description\":\"Original source of the image\",\"type\":\"string\"},\"tags\":{\"description\":\"Tags associated with the image\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"thumbnail\":{\"description\":\"Thumbnail image URL\",\"format\":\"uri\",\"type\":\"string\"},\"url\":{\"description\":\"Full-size image URL\",\"format\":\"uri\",\"type\":\"string\"},\"width\":{\"description\":\"Image width in pixels\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with random anime-style images\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Invalid rating parameter\"},\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Internal server error occurred\"},\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/images/random","segments":[{"lit":"images"},{"lit":"random"}],"select":{"$action":"random","exist":["limit","rating"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"image","name__orig":"image","Name":"Image","name_":"image","name-":"image","NAME":"IMAGE","index$":0}, {"active":true,"entity":"image","key$":"BasicImageFlow","kind":"basic","name":"BasicImageFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"image_ref01"}}],"index$":0}]}, 'Image')
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
  
