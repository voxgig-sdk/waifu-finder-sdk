-- WaifuFinder SDK error

local WaifuFinderError = {}
WaifuFinderError.__index = WaifuFinderError


function WaifuFinderError.new(code, msg, ctx)
  local self = setmetatable({}, WaifuFinderError)
  self.is_sdk_error = true
  self.sdk = "WaifuFinder"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function WaifuFinderError:error()
  return self.msg
end


function WaifuFinderError:__tostring()
  return self.msg
end


return WaifuFinderError
