export type GetDataType<T, R> = {
  success: boolean;
  message: string | R;
  data: T | null;
};
