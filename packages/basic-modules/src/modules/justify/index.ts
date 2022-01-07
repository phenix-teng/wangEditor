/**
 * @description justify module entry
 * @author wangfupeng
 */

import { IModuleConf } from '@wangeditor/core'
import { renderStyle } from './render-style'
import { textStyleToHtml } from './text-style-to-html'
import {
  justifyLeftMenuConf,
  justifyRightMenuConf,
  justifyCenterMenuConf,
  justifyJustifyMenuConf,
} from './menu/index'

const justify: Partial<IModuleConf> = {
  renderStyle,
  textStyleToHtml,
  menus: [justifyLeftMenuConf, justifyRightMenuConf, justifyCenterMenuConf, justifyJustifyMenuConf],
}

export default justify
