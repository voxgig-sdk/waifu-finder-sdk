# WaifuFinder SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "WaifuFinder",
            "slug": "waifu-finder",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://waifu-finder.vercel.app/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "image": {},
            },
        },
        "entity": {
      "image": {
        "fields": [
          {
            "name": "artist",
            "short": "Artist who created the image",
            "type": "`$STRING`",
          },
          {
            "name": "height",
            "short": "Image height in pixels",
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the image",
            "type": "`$STRING`",
          },
          {
            "name": "rating",
            "short": "Content rating of the image",
            "type": "`$STRING`",
          },
          {
            "name": "source",
            "short": "Original source of the image",
            "type": "`$STRING`",
          },
          {
            "name": "tags",
            "short": "Tags associated with the image",
            "type": "`$ARRAY`",
          },
          {
            "name": "thumbnail",
            "short": "Thumbnail image URL",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "short": "Full-size image URL",
            "type": "`$STRING`",
          },
          {
            "name": "width",
            "short": "Image width in pixels",
            "type": "`$INTEGER`",
          },
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
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "explicit",
                      "kind": "query",
                      "name": "rating",
                      "orig": "rating",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/images/random",
                "parts": [
                  "images",
                  "random",
                ],
                "select": {
                  "$action": "random",
                  "exist": [
                    "limit",
                    "rating",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
