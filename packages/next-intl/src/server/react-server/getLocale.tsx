import {cache} from 'react';
import getConfig from './getConfig.tsx';

async function getLocaleCachedImpl() {
  const config = await getConfig();
  return config.locale;
}
const getLocaleCached = cache(getLocaleCachedImpl);

export default getLocaleCached;
