/*
 * @Descripttion: 
 * @Author: niezihao
 * @Date: 2023-12-05 11:12:34
 * @LastEditors: niezihao
 * @LastEditTime: 2023-12-28 18:03:03
 */
import * as components from './index';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    EaButton: typeof components.Button;
    EaIcon: typeof components.Icon;
    EaJson: typeof components.Json;
  }
}
export {};
