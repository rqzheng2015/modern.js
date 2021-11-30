import { TeaType, ConfigParam, InitParam } from './teaType';
// @ts-ignore
declare module '@modern-js/runtime' {
  export interface PluginsContext {
    Tea: TeaType;
  }
}
// @ts-ignore
declare module '@reduck/core' {
  export interface PluginsContext {
    Tea: TeaType;
  }
}

declare global {
  interface Window {
    Tea: TeaType;
  }
}


export type Config = {
  name?: string; // 实例名
  spa?: boolean; // default: true；针对 spa 应用，自动上报 pv 事件
  disableAutoStart?: boolean; // 是否禁止默认调用 Tea.start()
} & InitParam &
  ConfigParam;
