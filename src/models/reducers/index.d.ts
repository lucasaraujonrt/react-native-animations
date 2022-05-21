export as namespace reducers;

export type WebState = {
  link: string | null;
  title: string | null;
};

export interface ReduxState {
  loading: number | boolean;
  web: WebState;
}
