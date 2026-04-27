import type {
  Account,
  AccountId,
  DeviceId,
  FamilyCtxSession,
  FamilyCtxState,
  Profile,
  ProfileId,
} from "./types";

export function createInitialState(): FamilyCtxState {
  return {
    account: null,
    profiles: [],
    session: null,
  };
}

export function setAccount(
  state: FamilyCtxState,
  account: Account,
): FamilyCtxState {
  return { ...state, account };
}

export function setProfiles(
  state: FamilyCtxState,
  profiles: Profile[],
): FamilyCtxState {
  return { ...state, profiles };
}

export function addProfile(
  state: FamilyCtxState,
  profile: Profile,
): FamilyCtxState {
  return { ...state, profiles: [...state.profiles, profile] };
}

export function removeProfile(
  state: FamilyCtxState,
  profileId: ProfileId,
): FamilyCtxState {
  return {
    ...state,
    profiles: state.profiles.filter((p) => p.id !== profileId),
  };
}

export function startSession(
  state: FamilyCtxState,
  accountId: AccountId,
  deviceId?: DeviceId,
): FamilyCtxState {
  const session: FamilyCtxSession = {
    accountId,
    activeProfileId: null,
    deviceId,
    parentMode: false,
    updatedAt: Date.now(),
  };
  return { ...state, session };
}

export function switchProfile(
  state: FamilyCtxState,
  profileId: ProfileId,
): FamilyCtxState {
  if (!state.session) return state;
  if (!state.profiles.some((p) => p.id === profileId)) return state;

  const profile = state.profiles.find((p) => p.id === profileId)!;

  return {
    ...state,
    session: {
      ...state.session,
      activeProfileId: profileId,
      parentMode: profile.role === "parent" ? state.session.parentMode : false,
      updatedAt: Date.now(),
    },
  };
}

export function enableParentMode(state: FamilyCtxState): FamilyCtxState {
  if (!state.session) return state;
  return {
    ...state,
    session: { ...state.session, parentMode: true, updatedAt: Date.now() },
  };
}

export function disableParentMode(state: FamilyCtxState): FamilyCtxState {
  if (!state.session) return state;
  return {
    ...state,
    session: { ...state.session, parentMode: false, updatedAt: Date.now() },
  };
}

export function clearSession(state: FamilyCtxState): FamilyCtxState {
  return { ...state, session: null };
}
