<?php
declare(strict_types=1);

// WaifuFinder SDK utility: result_headers

class WaifuFinderResultHeaders
{
    public static function call(WaifuFinderContext $ctx): ?WaifuFinderResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
