<?php
declare(strict_types=1);

// WaifuFinder SDK base feature

class WaifuFinderBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(WaifuFinderContext $ctx, array $options): void {}
    public function PostConstruct(WaifuFinderContext $ctx): void {}
    public function PostConstructEntity(WaifuFinderContext $ctx): void {}
    public function SetData(WaifuFinderContext $ctx): void {}
    public function GetData(WaifuFinderContext $ctx): void {}
    public function GetMatch(WaifuFinderContext $ctx): void {}
    public function SetMatch(WaifuFinderContext $ctx): void {}
    public function PrePoint(WaifuFinderContext $ctx): void {}
    public function PreSpec(WaifuFinderContext $ctx): void {}
    public function PreRequest(WaifuFinderContext $ctx): void {}
    public function PreResponse(WaifuFinderContext $ctx): void {}
    public function PreResult(WaifuFinderContext $ctx): void {}
    public function PreDone(WaifuFinderContext $ctx): void {}
    public function PreUnexpected(WaifuFinderContext $ctx): void {}
}
