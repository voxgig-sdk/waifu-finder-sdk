# WaifuFinder SDK utility: make_context
require_relative '../core/context'
module WaifuFinderUtilities
  MakeContext = ->(ctxmap, basectx) {
    WaifuFinderContext.new(ctxmap, basectx)
  }
end
