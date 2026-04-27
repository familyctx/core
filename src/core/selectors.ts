import type { FamilyCtxState, Profile, ProfileId } from "./types";

export function getActiveProfile(state: FamilyCtxState): Profile | null {
  if (!state.session?.activeProfileId) return null;
  return (
    state.profiles.find((p) => p.id === state.session!.activeProfileId) ?? null
  );
}

export function getParentProfile(state: FamilyCtxState): Profile | null {
  return state.profiles.find((p) => p.role === "parent") ?? null;
}

export function getChildProfiles(state: FamilyCtxState): Profile[] {
  return state.profiles.filter((p) => p.role === "child");
}

export function isParentMode(state: FamilyCtxState): boolean {
  return state.session?.parentMode ?? false;
}

export function canSwitchToProfile(
  state: FamilyCtxState,
  profileId: ProfileId,
): boolean {
  if (!state.session) return false;
  const profile = state.profiles.find((p) => p.id === profileId);
  if (!profile) return false;
  if (profile.role === "parent") return state.session.parentMode;
  return true;
}
