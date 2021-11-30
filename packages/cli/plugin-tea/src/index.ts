// 完整版 enrty
import Collector from 'byted-tea-sdk/es/CollectorClient.min';
import runtimeTeaWrapper from './teaPlugin';

export { Config } from './typings';
export { InitParam, ConfigParam } from './teaType';
const RuntimePlugin = runtimeTeaWrapper(Collector);
export default RuntimePlugin;
