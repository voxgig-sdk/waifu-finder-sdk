# WaifuFinder SDK utility: make_context

from waifufinder_sdk.core.context import WaifuFinderContext


def make_context_util(ctxmap, basectx):
    return WaifuFinderContext(ctxmap, basectx)
