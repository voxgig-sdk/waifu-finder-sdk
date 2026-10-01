import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "image",
    "accessor": "Image",
    "op": "list",
    "method": "GET",
    "path": "/images/random",
    "action": "random",
    "args": [],
    "select": {
      "limit": 10,
      "rating": "explicit"
    },
    "headers": [],
    "query": [
      "rating",
      "limit"
    ],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": "12345",
        "url": "https://example.com/images/waifu-12345.jpg",
        "thumbnail": "https://example.com/thumbnails/waifu-12345.jpg",
        "rating": "explicit",
        "tags": [
          "anime",
          "waifu",
          "art"
        ],
        "source": "https://example.com/source",
        "artist": "Artist Name",
        "width": 1920,
        "height": 1080
      }
    ],
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
