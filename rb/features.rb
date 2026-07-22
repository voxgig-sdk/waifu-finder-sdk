# WaifuFinder SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module WaifuFinderFeatures
  def self.make_feature(name)
    case name
    when "base"
      WaifuFinderBaseFeature.new
    when "test"
      WaifuFinderTestFeature.new
    else
      WaifuFinderBaseFeature.new
    end
  end
end
