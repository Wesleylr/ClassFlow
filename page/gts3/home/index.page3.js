import { TEXT_STYLE } from "./index.style";

const logger = DeviceRuntimeCore.HmLogger.getLogger("helloworld");
Page({
  build() {
    logger.debug("page build invoked");
    const strokeRect1 = hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 26,
      y: 64,
      w: 338,
      h: 132,
      radius: 28,
      //line_width: 2,
      color: 0x2f2f2f
    })
    const nextcourse = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 44,
      y: 64,
      w: 44*3,
      h: 64,
      color: 0xffffff,
      text_size: 44,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.TOP,
      text_style: hmUI.text_style.NONE,
      text: '第一节'
    })
    const nextcourse1 = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 56,
      y: 106,
      w: 44*7,
      h: 64,
      color: 0xffffff,
      text_size: 28,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: '·8:30'
    })
    const nextcourse2 = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 56,
      y: 136,
      w: 44*7,
      h: 64,
      color: 0x8f8f8f,
      text_size: 28,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: '·12:30'
    })
    const nextcourse3 = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 212,
      y: 64,
      w: 56*7,
      h: 70,
      color: 0xffffff,
      text_size: 56,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.TOP,
      text_style: hmUI.text_style.NONE,
      text: '语文'
    })
    const nextcourse4 = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 180,
      y: 126,
      w: 56*7,
      h: 70,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: '（东上院）'
    })



  },
  onInit() {
    logger.debug("page onInit invoked");
  },

  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
