import type { Account, FamilyCtxState, Profile, ProfileId } from "./types";

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
