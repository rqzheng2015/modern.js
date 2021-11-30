// 精简版 enrty
import Collector from 'byted-tea-sdk/es/CollectorBaseClient.min';
import runtimeTeaWrapper from './teaPlugin';

const RuntimePlugin = runtimeTeaWrapper(Collector);
export default RuntimePlugin;
