
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'WaifuFinder',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://waifu-finder.vercel.app/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      image: {
      },

    }
  }


  entity = {
    "image": {
      "fields": [
        {
          "name": "artist",
          "type": "`$STRING`"
        },
        {
          "name": "height",
          "type": "`$INTEGER`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "rating",
          "type": "`$STRING`"
        },
        {
          "name": "source",
          "type": "`$STRING`"
        },
        {
          "name": "tags",
          "type": "`$ARRAY`"
        },
        {
          "name": "thumbnail",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "type": "`$STRING`"
        },
        {
          "name": "width",
          "type": "`$INTEGER`"
        }
      ],
      "name": "image",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "explicit",
                    "kind": "query",
                    "name": "rating",
                    "orig": "rating",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/images/random",
              "parts": [
                "images",
                "random"
              ],
              "select": {
                "$action": "random",
                "exist": [
                  "limit",
                  "rating"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

