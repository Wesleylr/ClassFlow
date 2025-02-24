import { TEXT_STYLE } from "./index.style";
export const table_Mon= [
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
]
export const table_Tue= [
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
]
export const table_Wed= [
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
]
export const table_Thu= [
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
]
export const table_Fri= [
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
]
export const table_Sat= [
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
]
export const table_Sun= [
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
  {course: '数学', location:'中院'},
  {course: '语文', location:'上院'},
]
const test_buf = new Uint8Array(10)
const test_buf2 = new Uint8Array(test_buf.length)

const file = hmFS.open_asset('1.txt', hmFS.O_RDONLY)
hmFS.read(file, test_buf2.buffer, 0, test_buf2.length)
export const time = hmSensor.createSensor(hmSensor.id.TIME)
const week = time.week;
const logger = DeviceRuntimeCore.HmLogger.getLogger("helloworld");
export let datalist2;
if (week == 2){
  datalist2 = table_Tue;
}
Page({
  build() {
    logger.debug("page build invoked");


    function transformArray(datalist2) {
      const startTimes = ['·8:00', '·8:55','·10:00','·10:55','·12:00','·12:55','·14:00','14,55','16:00','16:55','18:00']; // 开始时间数组
      const endTimes = ['·8:45', '·9:40','·10:45','·11:40','·12:45','·13:40','·14:45','15,40','16:45','17:40','18:45'];   // 结束时间数组

      // 遍历 datalist2，将其转换为目标格式
      return datalist2.map((item, index) => {
        return {
          sequence: `第${index + 1}节`,
          course: item.course,
          start_time: startTimes[index],
          end_time: endTimes[index],
          location: `（${item.location}）`
        };
      });
    }
    const dataList = transformArray(datalist2);
    hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
      x: 26,
      y: 64,
      h: 386,
      w: 338,
      item_space: 10,
      item_config: [
        {
          type_id: 1,
          item_bg_color: 0x2f2f2f,
          item_bg_radius: 28,
          text_view: [
            { x: 12, y: 5, w: 148, h: 44, key: 'sequence', color: 0xffffff, text_size: 44 },
            { x: 38, y: 5+44, w: 28*3, h: 28, key: 'start_time', color: 0xffffff, text_size: 28 },
            { x: 38, y: 5+74, w: 28*3, h: 28, key: 'end_time', color: 0x8f8f8f, text_size: 28 },
            { x: 155, y: 7, w: 56*3, h: 56, key: 'course', color: 0xffffff, text_size: 56 },
            { x: 151, y: 7+62, w: 36*5, h: 36, key: 'location', color: 0x8f8f8f, text_size: 36 }
          ],

          text_view_count: 5,
          item_height: 120
        },

      ],
      item_config_count: 1,
      data_array: dataList,
      data_count: dataList.length,
      item_click_func: (item, index) => {
        console.log(`scrollListItemClick index=${index}`)
        updateConfig()
      },
      data_type_config: [
        {
          start: 0,
          end: 1,
          type_id: 1
        },
        {
          start: 1,
          end: 2,
          type_id: 2
        }
      ],
      data_type_config_count: 2
    })

    function updateConfig() {
      scroll_list.setProperty(hmUI.prop.UPDATE_DATA, {
        data_type_config: [
          {
            start: 0,
            end: 2,
            type_id: 1
          },
        ],
        data_type_config_count: 1,
        data_array: dataList,
        data_count: dataList.length,
        on_page: 1
      })
    }
  },
  onInit() {
    logger.debug("page onInit invoked");
  },

  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
