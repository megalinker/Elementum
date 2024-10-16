// utils/browserUtils.ts
export const isSafari = (): boolean => {
    const ua = navigator.userAgent.toLowerCase();
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};
