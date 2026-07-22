# WaifuFinder SDK exists test

require "minitest/autorun"
require_relative "../WaifuFinder_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = WaifuFinderSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
