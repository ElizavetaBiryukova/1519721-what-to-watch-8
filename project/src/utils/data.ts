export const getRatingText = (rating: number): string => {
  switch (true) {
    case (rating < 3):
      return 'Bad';
    case (rating < 5):
      return 'Normal';
    case (rating < 8):
      return 'Good';
    case (rating < 10):
      return 'Very good';
    case (rating === 10):
      return 'Awesome';
  }
  return 'No rating';
};

export const formatRating = (rating: number): string =>
  rating.toFixed(1).replace('.', ',');
