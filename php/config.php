<?php
declare(strict_types=1);

// WaifuFinder SDK configuration

class WaifuFinderConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "WaifuFinder",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://waifu-finder.vercel.app/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "image" => [],
                ],
            ],
            "entity" => [
        'image' => [
          'fields' => [
            [
              'name' => 'artist',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'height',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rating',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'source',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'tags',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'thumbnail',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'width',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'image',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 'explicit',
                        'kind' => 'query',
                        'name' => 'rating',
                        'orig' => 'rating',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/images/random',
                  'parts' => [
                    'images',
                    'random',
                  ],
                  'select' => [
                    '$action' => 'random',
                    'exist' => [
                      'limit',
                      'rating',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return WaifuFinderFeatures::make_feature($name);
    }
}
