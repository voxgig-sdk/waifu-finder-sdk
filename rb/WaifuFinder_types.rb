# frozen_string_literal: true

# Typed models for the WaifuFinder SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Image entity data model.
#
# @!attribute [rw] artist
#   @return [String, nil]
#
# @!attribute [rw] height
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] rating
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] thumbnail
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Integer, nil]
Image = Struct.new(
  :artist,
  :height,
  :id,
  :rating,
  :source,
  :tags,
  :thumbnail,
  :url,
  :width,
  keyword_init: true
)

# Request payload for Image#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] rating
#   @return [String, nil]
ImageListMatch = Struct.new(
  :limit,
  :rating,
  keyword_init: true
)

