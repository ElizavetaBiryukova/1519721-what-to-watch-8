type User = {
  id: number;
  name: string;
}

export type Review = {
  id: number;
  user: User;
  rating: number;
  comment: string;
  date: Date;
};

export type Reviews = Review[];
