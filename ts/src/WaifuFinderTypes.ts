// Typed models for the WaifuFinder SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Image {
  artist?: string
  height?: number
  id?: string
  rating?: string
  source?: string
  tags?: any[]
  thumbnail?: string
  url?: string
  width?: number
}

export interface ImageListMatch {
  limit?: number
  rating?: string

  // Selects a custom action instead of the plain list:
  //   'random'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

