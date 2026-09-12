export interface Image {
    artist?: string;
    height?: number;
    id?: string;
    rating?: string;
    source?: string;
    tags?: any[];
    thumbnail?: string;
    url?: string;
    width?: number;
}
export interface ImageListMatch {
    limit?: number;
    rating?: string;
    $action?: string;
    [action: string]: any;
}
