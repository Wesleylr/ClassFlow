import { TEXT_STYLE } from "./index.style";
import { datalist2 } from "./index.page2";
import { time } from "./index.page2";
const logger = DeviceRuntimeCore.HmLogger.getLogger("helloworld");

Page({
  build() {
    logger.debug("page build invoked");
    const coursetime = [
      [8,0],
      [8,55],
      [10,0],
      [10,55],
      [12,0],
      [12,55],
      [14,0],
      [14,55],
      [16,0],
      [16,55],
      [18,0],
    ]
    const course_Mon = datalist2.map(item => item.course);

    const now = 11*60+1//time.hour*60+ time.minute
    function hhmmtom(a,b) {
      return 60*a + b;
    }
    let currentcourseindex = 999
    for (let i = 0; i < 11; i++) {
      const courseinterval=hhmmtom(coursetime[i][0],coursetime[i][1]);
      if(now>=courseinterval&&now<=courseinterval+45){
        currentcourseindex = i;
      }
    }
    let var_thiscourse = course_Mon[currentcourseindex];
    if(course_Mon[currentcourseindex]=='N/A'){
      var_thiscourse = '当前无课程';
    }
    let var_nextcourse = course_Mon[currentcourseindex+1];

    let nextcourseindex = 0;
    for (let i = currentcourseindex + 1; i < 11; i++) {
      var_nextcourse = course_Mon[i];
      if (var_nextcourse != 'N/A'){
        nextcourseindex = i;
        break;
      }
    }
    if (var_nextcourse == 'N/A'){
      var_nextcourse = '无剩余课程'
    }
    let this_course_time_remained = coursetime[currentcourseindex][0]*60+coursetime[currentcourseindex][1]+45-now;
    let var_next_course_start = coursetime[nextcourseindex][0]*60+coursetime[currentcourseindex][1]-now;
    const strokeRect1 = hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 30,
      y: 124,
      w: 330,
      h: 110,
      radius: 28,
      //line_width: 2,
      color: 0x2f2f2f
    })
    const strokeRect2 = hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 30,
      y: 305,
      w: 330,
      h: 110,
      radius: 28,
      //line_width: 2,
      color: 0x2f2f2f
    })
    const text1 = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 30,
      y: 60,
      w: 52*2,
      h: 52,
      color: 0xffffff,
      text_size: 52,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: '当前'
    })
    const text2 = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 30,
      y: 241,
      w: 52*3,
      h: 52,
      color: 0xffffff,
      text_size: 52,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: '下节课'
    })

    const thiscourse = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 50,
      y: 128,
      w: 44*8,
      h: 64,
      color: 0xffffff,
      text_size: 44,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: var_thiscourse+' ('+coursetime[currentcourseindex][0]+':'+coursetime[currentcourseindex][1]+')'
    })
    const nextcourse = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 50,
      y: 309,
      w: 44*7,
      h: 64,
      color: 0xffffff,
      text_size: 44,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: var_nextcourse+' ('+coursetime[nextcourseindex][0]+':'+coursetime[nextcourseindex][1]+'0'+')'
    })
    const   thiscourse_timer = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 114,
      y: 194,
      w: 155,
      h: 24,
      color: 0xffffff,
      text_size: 24,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: this_course_time_remained+'分钟后结束'
    })
    const   nextcourse_timer = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 114,
      y: 375,
      w: 180,
      h: 24,
      color: 0xffffff,
      text_size: 24,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: var_next_course_start+'分钟后开始'
    })
    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 300,
      y: 66,
      w: 52,
      h: 52,
      radius: 28,
      normal_color: 0xfc6950,
      press_color: 0xfeb4a8,

      click_func: (button_widget) => {
        hmApp.gotoPage({ url: 'page/gts3/home/index.page2', param: '...' })
      }
    })

  },
  onInit() {
    logger.debug("page onInit invoked");
  },

  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
