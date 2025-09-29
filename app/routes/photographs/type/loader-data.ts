import { ServerResponseType } from "~/types/server-response-type";

export type PhotographsLoaderData = {
  photographsResponse: ServerResponseType<string[], string>;
};
