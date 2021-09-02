import { mount } from "@vue/test-utils";
import Search from "@/views/Search.vue";
import Submit from "@/views/Submit.vue";
import Save from '@/views/Submit.vue'

describe("Search.vue", () => {
  it("renders Search view", () => {
    const wrapper = mount(Search);
    expect(wrapper.text()).toMatch("Search page");
  });
});

describe("Submit.vue", () => {
  it("renders Submit view", () => {
    const wrapper = mount(Submit);
    expect(wrapper.text()).toMatch("Submit page");
  });
});

describe("Save.vue", () => {
  it("renders Save view", () => {
    const wrapper = mount(Save);
    expect (wrapper.text()).toMatch("Save page")
})
