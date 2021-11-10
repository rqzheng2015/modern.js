import {
  createContext,
  createWaterfall,
  createWorkflow,
  createManager,
} from '../../../../src';

// foo plugin
// eslint-disable-next-line @typescript-eslint/ban-types
export type Config = {};
const defaultConfig = {};
const ConfigContext = createContext<Config>(defaultConfig);
export const useConfig = (): Config => {
  const config = ConfigContext.use().value;

  if (!config) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-base-to-string
    throw new Error(`Expected modern config, but got: ${config}`);
  }

  return config;
};

// prepare
export const fooWaterfall = createWaterfall();
const fooWorflow = createWorkflow();

const fooMain = createManager({
  fooWaterfall,
  fooWorflow,
});

export const createFooPlugin = fooMain.createPlugin;

export const isFooPlugin = fooMain.isPlugin;

export const useFooPlugin = fooMain.usePlugin;

export const initFooPlugins = fooMain.init;

type Paramter<F extends (i: any) => any> = F extends (i: infer P) => any
  ? P
  : never;

export const register = (initializer: Paramter<typeof fooMain.createPlugin>) =>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useFooPlugin(createFooPlugin(initializer));
