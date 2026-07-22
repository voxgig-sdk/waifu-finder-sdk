<?php
declare(strict_types=1);

// WaifuFinder SDK utility: prepare_body

class WaifuFinderPrepareBody
{
    public static function call(WaifuFinderContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
