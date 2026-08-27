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
                "slug" => "waifu-finder",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
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
              'short' => 'Artist who created the image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'height',
              'short' => 'Image height in pixels',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rating',
              'short' => 'Content rating of the image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'source',
              'short' => 'Original source of the image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'tags',
              'short' => 'Tags associated with the image',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'thumbnail',
              'short' => 'Thumbnail image URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'Full-size image URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'width',
              'short' => 'Image width in pixels',
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
