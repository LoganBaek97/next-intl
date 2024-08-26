import IntlError from './IntlError';

export type MessageFallbackInfo = {
  error: IntlError;
  key: string;
  namespace?: string;
};

type MessageFallbackHandler = (info: MessageFallbackInfo) => string;

export const errorHandlers: {
  getMessageFallback?: MessageFallbackHandler;
} = {};

/** Will be called when a message couldn't be resolved or formatting it led to
 * an error. This defaults to `${namespace}.${key}` You can use this to
 * customize what will be rendered in this case.
 *
 * Can be reset by being called with `undefined`.
 *  */
export function getMessageFallback(fn?: MessageFallbackHandler) {
  errorHandlers.getMessageFallback = fn;
}
