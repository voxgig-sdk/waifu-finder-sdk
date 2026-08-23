package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "WaifuFinder",
			"slug": "waifu-finder",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://waifu-finder.vercel.app/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"image": map[string]any{},
			},
		},
		"entity": map[string]any{
			"image": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "artist",
						"short": "Artist who created the image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "height",
						"short": "Image height in pixels",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rating",
						"short": "Content rating of the image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source",
						"short": "Original source of the image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"short": "Tags associated with the image",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "thumbnail",
						"short": "Thumbnail image URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "Full-size image URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "width",
						"short": "Image width in pixels",
						"type": "`$INTEGER`",
					},
				},
				"name": "image",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "explicit",
											"kind": "query",
											"name": "rating",
											"orig": "rating",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/images/random",
								"parts": []any{
									"images",
									"random",
								},
								"select": map[string]any{
									"$action": "random",
									"exist": []any{
										"limit",
										"rating",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
