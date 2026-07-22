# WaifuFinder SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

WaifuFinderUtility.registrar = ->(u) {
  u.clean = WaifuFinderUtilities::Clean
  u.done = WaifuFinderUtilities::Done
  u.make_error = WaifuFinderUtilities::MakeError
  u.feature_add = WaifuFinderUtilities::FeatureAdd
  u.feature_hook = WaifuFinderUtilities::FeatureHook
  u.feature_init = WaifuFinderUtilities::FeatureInit
  u.fetcher = WaifuFinderUtilities::Fetcher
  u.make_fetch_def = WaifuFinderUtilities::MakeFetchDef
  u.make_context = WaifuFinderUtilities::MakeContext
  u.make_options = WaifuFinderUtilities::MakeOptions
  u.make_request = WaifuFinderUtilities::MakeRequest
  u.make_response = WaifuFinderUtilities::MakeResponse
  u.make_result = WaifuFinderUtilities::MakeResult
  u.make_point = WaifuFinderUtilities::MakePoint
  u.make_spec = WaifuFinderUtilities::MakeSpec
  u.make_url = WaifuFinderUtilities::MakeUrl
  u.param = WaifuFinderUtilities::Param
  u.prepare_auth = WaifuFinderUtilities::PrepareAuth
  u.prepare_body = WaifuFinderUtilities::PrepareBody
  u.prepare_headers = WaifuFinderUtilities::PrepareHeaders
  u.prepare_method = WaifuFinderUtilities::PrepareMethod
  u.prepare_params = WaifuFinderUtilities::PrepareParams
  u.prepare_path = WaifuFinderUtilities::PreparePath
  u.prepare_query = WaifuFinderUtilities::PrepareQuery
  u.result_basic = WaifuFinderUtilities::ResultBasic
  u.result_body = WaifuFinderUtilities::ResultBody
  u.result_headers = WaifuFinderUtilities::ResultHeaders
  u.transform_request = WaifuFinderUtilities::TransformRequest
  u.transform_response = WaifuFinderUtilities::TransformResponse
}
