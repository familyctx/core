export type AccountId = string;
export type ProfileId = string;
export type DeviceId = string;

export type ProfileRole = "parent" | "child";

export type Account = {
  id: AccountId;
  createdAt: number;
};

export type Profile = {
  id: ProfileId;
  accountId: AccountId;
  role: ProfileRole;
  name: string;
  avatarUrl?: string | null;
  createdAt: number;
  metadata?: Record<string, unknown>;
};

export type FamilyCtxSession = {
  accountId: AccountId;
  activeProfileId: ProfileId | null;
  deviceId?: DeviceId;
  parentMode: boolean;
  updatedAt: number;
};

export type FamilyCtxState = {
  account: Account | null;
  profiles: Profile[];
  session: FamilyCtxSession | null;
};
