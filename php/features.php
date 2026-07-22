<?php
declare(strict_types=1);

// WaifuFinder SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class WaifuFinderFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new WaifuFinderBaseFeature();
            case "test":
                return new WaifuFinderTestFeature();
            default:
                return new WaifuFinderBaseFeature();
        }
    }
}
