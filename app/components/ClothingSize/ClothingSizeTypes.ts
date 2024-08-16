const SIZES = ["XS", "S", "M", "L", "XL"] as const;

export interface ClothingSizeProps {
  defaultValue?: (typeof SIZES)[number];
  disabled?: Array<(typeof SIZES)[number]>;
}
