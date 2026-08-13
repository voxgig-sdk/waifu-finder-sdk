# WaifuFinder SDK feature factory

from waifufinder_sdk.feature.base_feature import WaifuFinderBaseFeature
from waifufinder_sdk.feature.test_feature import WaifuFinderTestFeature


def _make_feature(name):
    features = {
        "base": lambda: WaifuFinderBaseFeature(),
        "test": lambda: WaifuFinderTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
