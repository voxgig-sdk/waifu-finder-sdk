"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaifuFinderError = void 0;
class WaifuFinderError extends Error {
    isWaifuFinderError = true;
    sdk = 'WaifuFinder';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.WaifuFinderError = WaifuFinderError;
//# sourceMappingURL=WaifuFinderError.js.map