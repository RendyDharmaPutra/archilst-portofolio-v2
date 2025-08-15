export type ServerResponseType<T, R> = {
  success: boolean;
  message: string | R;
  data: T | null;
};
