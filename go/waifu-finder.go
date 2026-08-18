package voxgigwaifufindersdk

import (
	"github.com/voxgig-sdk/waifu-finder-sdk/go/core"
	"github.com/voxgig-sdk/waifu-finder-sdk/go/entity"
	"github.com/voxgig-sdk/waifu-finder-sdk/go/feature"
	_ "github.com/voxgig-sdk/waifu-finder-sdk/go/utility"
)

// Type aliases preserve external API.
type WaifuFinderSDK = core.WaifuFinderSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type WaifuFinderEntity = core.WaifuFinderEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type WaifuFinderError = core.WaifuFinderError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewImageEntityFunc = func(client *core.WaifuFinderSDK, entopts map[string]any) core.WaifuFinderEntity {
		return entity.NewImageEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewWaifuFinderSDK = core.NewWaifuFinderSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewWaifuFinderSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *WaifuFinderSDK  { return NewWaifuFinderSDK(nil) }
func Test() *WaifuFinderSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
