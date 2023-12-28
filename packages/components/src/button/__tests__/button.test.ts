/*
 * @Descripttion: 
 * @Author: niezihao
 * @Date: 2023-12-05 11:12:34
 * @LastEditors: niezihao
 * @LastEditTime: 2023-12-28 16:53:56
 */
import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import button from '../button.vue';
// The component to test
describe('test button', () => {
  it('should render slot', () => {
    const wrapper = mount(button, {
      slots: {
        default: 'earnie'
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('earnie');
  });
  it('should have class', () => {
    const wrapper = mount(button, {
      props: {
        type: 'primary'
      }
    });
    expect(wrapper.classes()).toContain('ea-button--primary');
  });
});
