/** 数値を指定された範囲内に制限するclamp関数 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

/** 線形補間関数（慣性効果のため） */
export function lerp(start: number, end: number, factor: number): number {
    return start + (end - start) * factor;
}

/** 小数点以下3桁で切り捨てる */
export function trunc3(value: number): number {
    return Math.trunc(value * 1000) / 1000;
}