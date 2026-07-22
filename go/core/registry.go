package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewImageEntityFunc func(client *WaifuFinderSDK, entopts map[string]any) WaifuFinderEntity

