export type {
  AccountId,
  ProfileId,
  DeviceId,
  ProfileRole,
  Account,
  Profile,
  FamilyCtxSession,
  FamilyCtxState,
} from "./core/types";

export {
  createInitialState,
  setAccount,
  setProfiles,
  addProfile,
  removeProfile,
  startSession,
  switchProfile,
  enableParentMode,
  disableParentMode,
  clearSession,
} from "./core/state";

export {
  getActiveProfile,
  getParentProfile,
  getChildProfiles,
  isParentMode,
  canSwitchToProfile,
} from "./core/selectors";

export { createStore } from "./core/store";
export type { Store, Listener } from "./core/store";
