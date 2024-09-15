import { getComponentMap, getPropsMap } from './mapping'

export function antDesignVue1() {
  return {
    uiName: 'ant-design-vue1',
    map: getPropsMap(),
    lib: 'ant-design-vue',
    prefix: 'a',
  }
}

export function antDesignVue1Components(isZh: boolean) {
  return {
    map: getComponentMap(isZh),
    isSeperatorByHyphen: true,
    prefix: 'a',
    lib: 'ant-design-vue',
    isReact: false,
  }
}
