enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
}

const FILMS_COUNT = 8;

export {AppRoute, AuthorizationStatus, APIRoute, FILMS_COUNT};
