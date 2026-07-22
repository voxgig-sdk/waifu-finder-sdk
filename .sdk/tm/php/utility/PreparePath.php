<?php
declare(strict_types=1);

// WaifuFinder SDK utility: prepare_path

class WaifuFinderPreparePath
{
    public static function call(WaifuFinderContext $ctx): string
    {
        $point = $ctx->point;
        $parts = [];
        if ($point) {
            $p = \Voxgig\Struct\Struct::getprop($point, 'parts');
            if (is_array($p)) {
                $parts = $p;
            }
        }
        return \Voxgig\Struct\Struct::join($parts, '/', true);
    }
}
