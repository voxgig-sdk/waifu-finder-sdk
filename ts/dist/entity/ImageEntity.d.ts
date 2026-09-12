import { WaifuFinderEntityBase } from '../WaifuFinderEntityBase';
import type { WaifuFinderSDK } from '../WaifuFinderSDK';
import type { Control } from '../types';
import type { Image, ImageListMatch } from '../WaifuFinderTypes';
declare class ImageEntity extends WaifuFinderEntityBase<Image> {
    constructor(client: WaifuFinderSDK, entopts: any);
    make(this: ImageEntity): ImageEntity;
    list(this: any, reqmatch?: ImageListMatch, ctrl?: Control): Promise<ImageEntity[]>;
}
export { ImageEntity };
