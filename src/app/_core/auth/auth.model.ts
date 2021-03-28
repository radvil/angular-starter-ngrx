export interface AuthUser {
  id: string;
  username: string;
  name: string;
  photo: string;
  isOnline: boolean;
}

export interface AuthState {
  user: AuthUser | null;
  isLoading: boolean;
  isLoaded: boolean;
  error: any;
}

export const iAuthState: AuthState = {
  isLoading: false,
  isLoaded: false,
  user: null,
  error: null,
};
