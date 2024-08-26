import IntlError from './IntlError';
import {MessageFallbackInfo} from './errorHandling';
import joinPath from './joinPath';

// what to do with this

/**
 * Contains defaults that are used for all entry points into the core.
 * See also `InitializedIntlConfiguration`.
 */

export function defaultGetMessageFallback(props: MessageFallbackInfo) {
  return joinPath(props.namespace, props.key);
}

export function defaultOnError(error: IntlError) {
  console.error(error);
}
