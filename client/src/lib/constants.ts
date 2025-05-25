export enum CategoryEnum {
  Asian = "Asian",
  BubbleTea = "BubbleTea",
  Chinese = "Chinese",
  Dessert = "Dessert",
  FastFood = "FastFood",
  Greek = "Greek",
  Healthy = "Healthy",
  Indian = "Indian",
  Italian = "Italian",
  Japanese = "Japanese",
  Korean = "Korean",
  Mexican = "Mexican",
  Pizza = "Pizza",
  Sushi = "Sushi",
  Thai = "Thai",
  Vietnamese = "Vietnamese",
}

export const CategoryEnumImageFile: Record<CategoryEnum, string> = {
  [CategoryEnum.Asian]: "/foodCategory/Asian.png",
  [CategoryEnum.BubbleTea]: "/foodCategory/BubbleTea.png",
  [CategoryEnum.Chinese]: "/foodCategory/Chinese.png",
  [CategoryEnum.Dessert]: "/foodCategory/Dessert.png",
  [CategoryEnum.FastFood]: "/foodCategory/FastFood.png",
  [CategoryEnum.Greek]: "/foodCategory/Greek.png",
  [CategoryEnum.Healthy]: "/foodCategory/Healthy.png",
  [CategoryEnum.Indian]: "/foodCategory/Indian.png",
  [CategoryEnum.Italian]: "/foodCategory/Italian.png",
  [CategoryEnum.Japanese]: "/foodCategory/Japanese.png",
  [CategoryEnum.Korean]: "/foodCategory/Korean.png",
  [CategoryEnum.Mexican]: "/foodCategory/Mexican.png",
  [CategoryEnum.Pizza]: "/foodCategory/Pizza.png",
  [CategoryEnum.Sushi]: "/foodCategory/Sushi.png",
  [CategoryEnum.Thai]: "/foodCategory/Thai.png",
  [CategoryEnum.Vietnamese]: "/foodCategory/Vietnamese.png",
};

// Add this constant at the end of the file
export const NAVBAR_HEIGHT = 52; // in pixels
