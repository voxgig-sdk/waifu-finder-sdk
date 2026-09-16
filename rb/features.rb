# WaifuFinder SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module WaifuFinderFeatures
  def self.make_feature(name)
    case name
    when "base"
      WaifuFinderBaseFeature.new
    when "ratelimit"
      WaifuFinderRatelimitFeature.new
    when "retry"
      WaifuFinderRetryFeature.new
    when "test"
      WaifuFinderTestFeature.new
    when "timeout"
      WaifuFinderTimeoutFeature.new
    else
      WaifuFinderBaseFeature.new
    end
  end
end
