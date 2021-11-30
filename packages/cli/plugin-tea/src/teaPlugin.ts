/* eslint-disable filenames/match-exported */
import {
  createPlugin,
  useResolvedConfigContext,
} from '@modern-js/core';
import { isBrowser, PLUGIN_SCHEMAS } from '@modern-js/utils';
import { ConfigParam, InitParam, TeaType } from './teaType';

const defaultConfig = {
  name: 'default',
  channel: 'cn',
  log: process.env.NODE_ENV !== 'production',
  _staging_flag: 0,
  disable_auto_pv: false,
};

const pickParams = (config: any) => {
  const initParams: Record<string, unknown> = {};
  const configParams: Record<string, unknown> = {};

  const initParamsKeys = [
    'app_id',
    'channel',
    'channel_domain',
    'app_key',
    'log',
    'disable_ssid',
    'disable_webid',
    'disable_sdk_monitor',
    'checkExp',
    'disable_storage',
    'autotrack',
    'enable_stay_duration',
    'auto_profile',
    'disable_session',
    'event_verify_url',
    'enable_et_test',
    'enable_ab_test',
    'max_storage_num',
    'enable_storage',
    'enable_cookie',
    'enable_ab_visual',
    'cross_subdomain',
    'cookie_domain',
    'enable_multilink',
    'multilink_timeout_ms',
    'reportTime',
    'timeout',
    'max_report',
    'report_url',
    'maxDuration',
    'ab_channel_domain',
    'configPersist',
  ];

  Object.keys(config).forEach(key => {
    if (initParamsKeys.includes(key)) {
      initParams[key] = config[key];
    } else {
      configParams[key] = config[key];
    }
  });

  return {
    initParams: initParams as any as InitParam,
    configParams: configParams as any as ConfigParam,
  };
};

export default function runtimeTeaWrapper(Collector?: any) {
  return createPlugin(async () => {
      const modernConfig = useResolvedConfigContext();
      const { runtime = {} } = modernConfig;
      const { tea } = runtime;
      if (!tea) return;
      // 获取tea配置
      const teaConfig = { ...defaultConfig, ...tea };
      const { name, ...params } = teaConfig;
      const { initParams, configParams } = pickParams(params);
      let tracker: TeaType;
      let teaInstance: object;
      // 如果在浏览器下，挂载Tea到windows下
      if (isBrowser()) {
        tracker = new Collector(name);
        tracker.init(initParams);
        tracker.config(configParams);
        if (!teaConfig.disableAutoStart) {
          tracker.start();
        }
        window.Tea = tracker;
        teaInstance = tracker;
      } else {
        const noop = () => 'fake tea on node';
        const fakeTea = noop as any;
        ['init', 'config', 'start', 'send', 'predefinePageView'].forEach(
          key => {
            fakeTea[key] = noop;
          },
        );
        teaInstance = fakeTea;
      }
      return {
        // @ts-ignore
        pickContext({ context, pickedContext }, next) {
          return next({
            context,
            pickedContext: {
              ...pickedContext,
              Plugins: { tea: teaInstance },
            },
          });
        },
        validateSchema() {
          return PLUGIN_SCHEMAS['@jupiter/plugin-tea'];
        },
      };
    },
    {
      name: '@jupiter/plugin-tea',
    },
  );
}
