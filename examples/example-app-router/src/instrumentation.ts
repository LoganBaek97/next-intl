// import {getMessageFallback} from 'next-intl';
// import {huhu} from './app/[locale]/test';
// import {onError, getMessageFallback} from 'next-intl';

// runs for middleware? (bloats middleware?)
// how to implement internally? one global store (ie subscribe once). or event listener? subscribe once is maybe easier and avoids leaks (we should document this)

export async function register() {
  // import here or on top?
  // see https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation#importing-files-with-side-effects
  console.log('Registering instrumentation', process.env.NEXT_RUNTIME);

  await import('./app/[locale]/test').then(({huhu}) => {
    console.log('huhu 1', huhu);
    huhu.test = 'jan2';
    console.log('huhu 2', huhu);
  });

  await import('next-intl').then(({getMessageFallback}) => {
    getMessageFallback(() => 'fallback?');
  });

  // huhu.test = 'jan2';

  // getMessageFallback(() => 'fallback?');

  // onError((error) => {
  //   console.log('Error:', error);
  // })

  // or get? no, sounds like a getter (ie has a return value)
  // getMessageFallback(({namespace, key, error}) => {
  //   return 'test';
  // })
  //
  // setMessageFallback(({namespace, key, error}) => {
  //   return 'test';
  // })
  //
  // configureMessageFallback?
}
