export interface User {
  id: string;
  username: string;
  nickname: string;
  email: string;
  profile_image?: FormDataEntryValue | null;
  description?: string;
  sfaclog_title?: string;
  interest?: Interest;
  proposal?: Proposal;
  sns?: Sns;
  following?: number;
  follower?: number;
}

export interface Interest {
  frontend?: boolean;
  backend?: boolean;
  machineLearning?: boolean;
  cloudComputing?: boolean;
  database?: boolean;
  container?: boolean;
  serverless?: boolean;
  mobile?: boolean;
}

export interface Proposal {
  project?: boolean;
  recruit?: boolean;
  opinion?: boolean;
}

export interface Sns {
  instagram?: string;
  github?: string;
  sfacfolio?: string;
  rocketpunch?: string;
  youtube?: string;
}

export interface Follow {
  id?: string;
  followee: string;
  follower: string;
}
