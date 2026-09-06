export type categoryFields = {
  title: string;
  description: string;
  icon: string;
  userId: string;
};

export type Category = categoryFields & {
  id: string;
};
