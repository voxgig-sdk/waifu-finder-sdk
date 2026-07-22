<?php
declare(strict_types=1);

// WaifuFinder SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

WaifuFinderUtility::setRegistrar(function (WaifuFinderUtility $u): void {
    $u->clean = [WaifuFinderClean::class, 'call'];
    $u->done = [WaifuFinderDone::class, 'call'];
    $u->make_error = [WaifuFinderMakeError::class, 'call'];
    $u->feature_add = [WaifuFinderFeatureAdd::class, 'call'];
    $u->feature_hook = [WaifuFinderFeatureHook::class, 'call'];
    $u->feature_init = [WaifuFinderFeatureInit::class, 'call'];
    $u->fetcher = [WaifuFinderFetcher::class, 'call'];
    $u->make_fetch_def = [WaifuFinderMakeFetchDef::class, 'call'];
    $u->make_context = [WaifuFinderMakeContext::class, 'call'];
    $u->make_options = [WaifuFinderMakeOptions::class, 'call'];
    $u->make_request = [WaifuFinderMakeRequest::class, 'call'];
    $u->make_response = [WaifuFinderMakeResponse::class, 'call'];
    $u->make_result = [WaifuFinderMakeResult::class, 'call'];
    $u->make_point = [WaifuFinderMakePoint::class, 'call'];
    $u->make_spec = [WaifuFinderMakeSpec::class, 'call'];
    $u->make_url = [WaifuFinderMakeUrl::class, 'call'];
    $u->param = [WaifuFinderParam::class, 'call'];
    $u->prepare_auth = [WaifuFinderPrepareAuth::class, 'call'];
    $u->prepare_body = [WaifuFinderPrepareBody::class, 'call'];
    $u->prepare_headers = [WaifuFinderPrepareHeaders::class, 'call'];
    $u->prepare_method = [WaifuFinderPrepareMethod::class, 'call'];
    $u->prepare_params = [WaifuFinderPrepareParams::class, 'call'];
    $u->prepare_path = [WaifuFinderPreparePath::class, 'call'];
    $u->prepare_query = [WaifuFinderPrepareQuery::class, 'call'];
    $u->result_basic = [WaifuFinderResultBasic::class, 'call'];
    $u->result_body = [WaifuFinderResultBody::class, 'call'];
    $u->result_headers = [WaifuFinderResultHeaders::class, 'call'];
    $u->transform_request = [WaifuFinderTransformRequest::class, 'call'];
    $u->transform_response = [WaifuFinderTransformResponse::class, 'call'];
});
