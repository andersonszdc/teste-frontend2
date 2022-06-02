export const telephoneMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{0,2})(\d?)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
};

export const RGMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\.\d{3})(\d)/, "$1.$2")
    .replace(/(\.\d{3})(\d)/, "$1-$2")
    .replace(/(-\d{1})\d+?$/, "$1");
};

export const CPFMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\.\d{3})(\d)/, "$1.$2")
    .replace(/(\.\d{3})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const birthMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\/\d{2})(\d)/, "$1/$2")
    .replace(/(\/\d{4})\d+?$/, "$1");
};
