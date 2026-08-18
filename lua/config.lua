-- WaifuFinder SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "WaifuFinder",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
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
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "height",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rating",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "source",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tags",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "thumbnail",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "width",
            ["type"] = "`$INTEGER`",
          },
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
                ["parts"] = {
                  "images",
                  "random",
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
