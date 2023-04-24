export interface GetProfileInDto {
  profile: Profile;
}

export interface Profile {
  username: string;
  bio: string;
  image: string;
  following: string;
}
