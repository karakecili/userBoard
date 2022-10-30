import { shallowMount } from '@vue/test-utils';
import Home from '@/pages/Home.vue';

describe('Home.vue', () => {
  it('let start to project', () => {
    const msg = 'Top Users';
    const wrapper = shallowMount(Home, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
