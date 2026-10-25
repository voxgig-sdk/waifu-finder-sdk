# WaifuFinder SDK utility: prepare_body
require_relative 'media'
module WaifuFinderUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return WaifuFinderUtilities.raw_body(ctx.reqdata) if WaifuFinderUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
