<?php
declare(strict_types=1);

// WaifuFinder SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class WaifuFinderMakeContext
{
    public static function call(array $ctxmap, ?WaifuFinderContext $basectx): WaifuFinderContext
    {
        return new WaifuFinderContext($ctxmap, $basectx);
    }
}
