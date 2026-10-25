"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
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
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "rating",
            "limit"
        ],
        "queryArgs": [
            {
                "name": "limit",
                "wire": "limit"
            },
            {
                "name": "rating",
                "wire": "rating"
            }
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
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map