export interface responsivePattern {
    bootstrap?: string | string[];
    browser?: string | string[];
    device?: string | string[];
    pixelratio?: string | string[];
    orientation?: string | string[];
    standard?: string | string[];
    ie?: string | string[];
    sizes?: number;
}

export interface responsiveSubscriptions {
    bootstrap?: boolean;
    browser?: boolean;
    device?: boolean;
    pixelratio?: boolean;
    orientation?: boolean;
    standard?: boolean;
    ie?: boolean;
    sizes?: boolean;
}
