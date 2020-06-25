import {MutableRefObject, RefObject} from 'react';
import {
  NavigationContainerRef,
  NavigationState,
  Route,
  InitialState,
  useLinking,
} from '@react-navigation/native';

export {NoSessionNavigator} from './NoSessionNavigator';
export {AppNavigator} from './AppNavigator';

export default (
  containerRef: MutableRefObject<NavigationContainerRef | null | undefined>,
) => {
  let linking: {
    getInitialState: () => PromiseLike<
      | (Partial<Pick<NavigationState, 'index' | 'history'>> & {
          stale?: true | undefined;
          type?: string | undefined;
          routes: (Pick<Route<string>, 'name' | 'params'> & {
            state?: InitialState | undefined;
          })[];
        })
      | undefined
    >;
  } = {
    getInitialState: async () => ({routes: []}),
  };

  try {
    linking = useLinking(containerRef as RefObject<NavigationContainerRef>, {
      prefixes: ['http://neuraloutput.local:8080', 'app://'],
    });
  } catch (e) {
    console.log('NoNavRef:', e);
  }

  return linking;
};
