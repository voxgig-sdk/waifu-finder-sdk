-- WaifuFinder SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "WaifuFinder",
      slug = "waifu-finder",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://waifu-finder.vercel.app/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["image"] = {},
      },
    },
    entity = {
      ["image"] = {
        ["fields"] = {
          {
            ["name"] = "artist",
            ["short"] = "Artist who created the image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "height",
            ["short"] = "Image height in pixels",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rating",
            ["short"] = "Content rating of the image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "source",
            ["short"] = "Original source of the image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tags",
            ["short"] = "Tags associated with the image",
            ["type"] = "`$ARRAY`",
          },
          {
            ["format"] = "uri",
            ["name"] = "thumbnail",
            ["short"] = "Thumbnail image URL",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["short"] = "Full-size image URL",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "width",
            ["short"] = "Image width in pixels",
            ["type"] = "`$INTEGER`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "image",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "explicit",
                      ["kind"] = "query",
                      ["name"] = "rating",
                      ["orig"] = "rating",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/images/random",
                ["segments"] = {
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "random",
                  },
                },
                ["select"] = {
                  ["$action"] = "random",
                  ["exist"] = {
                    "limit",
                    "rating",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "images",
                  "random",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
