<?php
declare(strict_types=1);

// WaifuFinder SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/RatelimitFeature.php';
require_once __DIR__ . '/feature/RetryFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';
require_once __DIR__ . '/feature/TimeoutFeature.php';


class WaifuFinderFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new WaifuFinderBaseFeature();
            case "ratelimit":
                return new WaifuFinderRatelimitFeature();
            case "retry":
                return new WaifuFinderRetryFeature();
            case "test":
                return new WaifuFinderTestFeature();
            case "timeout":
                return new WaifuFinderTimeoutFeature();
            default:
                return new WaifuFinderBaseFeature();
        }
    }

    /**
     * Does a generated feature class back this name? False for a name only
     * an options extend instance can supply (the station adopt path) - the
     * constructor uses this to skip make_feature for such names instead of
     * adding a stray BaseFeature.
     */
    public static function has_feature(string $name): bool
    {
        switch ($name) {
            case "base":
            case "ratelimit":
            case "retry":
            case "test":
            case "timeout":
                return true;
            default:
                return false;
        }
    }
}
