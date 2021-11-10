type AuthInfo = {
  avatarUrl: string,
  email: string,
  id: number,
  name: string,
  token: string,
};

type TypesAuthInfoFromServer = {
  'avatar_url': string,
  'email': string,
  'id': number,
  'name': string,
  'token': string,
};

export type {AuthInfo, TypesAuthInfoFromServer};
