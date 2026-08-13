# WaifuFinder SDK exists test

import pytest
from waifufinder_sdk import WaifuFinderSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = WaifuFinderSDK.test(None, None)
        assert testsdk is not None
