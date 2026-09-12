"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'WaifuFinder',
        slug: "waifu-finder",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://waifu-finder.vercel.app/api",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            image: {},
        }
    };
    entity = {
        "image": {
            "fields": [
                {
                    "name": "artist",
                    "short": "Artist who created the image",
                    "type": "`$STRING`"
                },
                {
                    "name": "height",
                    "short": "Image height in pixels",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier for the image",
                    "type": "`$STRING`"
                },
                {
                    "name": "rating",
                    "short": "Content rating of the image",
                    "type": "`$STRING`"
                },
                {
                    "name": "source",
                    "short": "Original source of the image",
                    "type": "`$STRING`"
                },
                {
                    "name": "tags",
                    "short": "Tags associated with the image",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "uri",
                    "name": "thumbnail",
                    "short": "Thumbnail image URL",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "url",
                    "short": "Full-size image URL",
                    "type": "`$STRING`"
                },
                {
                    "name": "width",
                    "short": "Image width in pixels",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
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
                            "segments": [
                                {
                                    "lit": "images"
                                },
                                {
                                    "lit": "random"
                                }
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
                            },
                            "parts": [
                                "images",
                                "random"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map