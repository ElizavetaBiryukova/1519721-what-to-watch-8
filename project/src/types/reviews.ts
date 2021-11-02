type User = {
  id: number;
  name: string;
}

type Review = {
  id: number;
  user: User;
  rating: number;
  comment: string;
  date: Date;
};

type Reviews = Review[];

export type {Review, Reviews};
