import { gettext } from "i18n";

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } =
  hmSetting.getDeviceInfo();

export const TEXT_STYLE = {
  text: "appName",
  x: 42,
  y: 200,
  w: DEVICE_WIDTH - 42 * 2,
  h: 100,
  color: 0xffffff,
  text_size: 36,
  align_h: hmUI.align.CENTER_H,
  text_style: hmUI.text_style.WRAP,
};
export const SCROLL_LIST = {
  item_height: px(80),
  item_space: px(6),
  item_config: [
    {
      type_id: 1,
      item_bg_color: 0x333333,
      item_bg_radius: px(10),
      text_view: [
        {
          x: px(80),
          y: px(0),
          w: px(360),
          h: px(80),
          key: 'name',
          color: 0xffff00,
          text_size: px(36),
          align_h: hmUI.align.LEFT
        }
      ],
      text_view_count: 1,
      item_height: px(80)
    },
    {
      type_id: 2,
      item_bg_color: 0x333333,
      item_bg_radius: px(10),
      text_view: [
        {
          x: px(80),
          y: px(0),
          w: px(360),
          h: px(80),
          key: 'name',
          color: 0xff0000,
          text_size: px(36),
          align_h: hmUI.align.LEFT
        }
      ],
      text_view_count: 1,
      item_height: px(80)
    }
  ],
  item_config_count: 2,
  x: px(30),
  y: px(120),
  h: DEVICE_HEIGHT - px(180),
  w: DEVICE_WIDTH - px(30) * 2
}