import { getComponentMap, getPropsMap } from './mapping'

export function antDesignVue4() {
  return {
    uiName: 'ant-design-vue4',
    map: getPropsMap(),
    lib: 'ant-design-vue',
    prefix: 'a',
  }
}

export function antDesignVue4Components() {
  return {
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'a',
    lib: 'ant-design-vue',
    isReact: false,
  }
}
