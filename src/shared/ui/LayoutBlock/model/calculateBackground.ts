export const calculateBackground = (image: string | null) => {
  return image
    ? {
        background: `url(${image}) no-repeat center center / cover`,
      }
    : {
        background: `linear-gradient(135deg, rgba(255, 0, 150, 0.4), rgba(0, 204, 255, 0.4))`,
      };
};
