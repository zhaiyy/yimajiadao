<template>
  <div @touchstart="touchStart" @touchmove="touchEnd" class="dib el-picker-panel el-date-picker el-popper"
       x-placement="bottom-start">
    <div class="el-picker-panel__body-wrapper">
      <div class="el-picker-panel__body">
        <div class="el-date-picker__header flex-warp">
          <button type="button" v-if="!isCurrentMonth"
                  class="el-picker-panel__icon-btn back-today-btn"
                  @click="backToday">回今天</button>
          <span class="el-date-picker__header-label flex-item" >
             <picker mode="date" :value="currentDate" start="1990-01-01" @change="bindDateChange">
              {{currentYear}} 年{{currentMonth}} 月
          </picker>
          </span>
        </div>
        <div class="el-picker-panel__content ">
          <table cellspacing="0" cellpadding="0" class="el-date-table">
            <tbody>
            <tr class="flex-warp" style="flex-direction:row;">
              <th class="flex-item" v-for="(week,index) in weekList" :key="index">{{week}}</th>
            </tr>
            <tr class="el-date-table__row flex-warp" v-for="(cur,curIndex) in currentMonthList" :key="curIndex">
              <td class="flex-item" v-for="(key,keyIndex) in cur"
                  @click="dayClick(key)" :key="keyIndex"
              >
                <div>
                  <span :class="{'date-current': key.type =='0' && key.value == currentDay }">{{key.value}}</span>
                  <span class="today" v-if="isCurrentMonth && key.value === nowDay">今天</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div x-arrow="" class="popper__arrow" style="left: 102.5px;"></div>
  </div>
</template>
<script>
  /* eslint-disable no-unused-expressions,prefer-destructuring,prefer-const,one-var */

  import moment from 'moment';
  import './index.css';
  import './date-picker.css';
  import './calendar.scss';

  const nowDate = new Date();
  export default {
    name: 'c-calendar',
    props: {
      value: {
        type: String,
      },
    },
    data() {
      return {
        weekList: ['日', '一', '二', '三', '四', '五', '六'],
        currentYear: nowDate.getFullYear(),
        currentMonth: nowDate.getMonth() + 1,
        currentDay: nowDate.getDate(),
        prevMonthList: [],
        nextMonthList: [],
        touchDotX: 0,
        touchDotY: 0,
        interval: 0,
        time: 0,
      };
    },
    created() {
    },
    computed: {
      currentMonthList() {
        const date = new Date(this.currentYear, this.currentMonth - 1, 1);
        const endDate = new Date(this.currentYear, this.currentMonth - 1, this.getMonthDays(date));
        const prevDate = new Date(this.currentYear, this.currentMonth - 2, 1);
        let lists = [],
          weekObj = [];
        const week = date.getDay();
        for (let j = 0; j < week; j++) {
          weekObj.unshift({ value: this.getMonthDays(prevDate) - j, class: 'prev-month', type: '-1' });
          this.prevMonthList.unshift(this.getMonthDays(prevDate) - j);
        }
        for (let i = 1; i <= this.getMonthDays(date); i++) {
          weekObj.push({ value: i, class: 'available', type: '0' });
          if (weekObj.length === 7) {
            lists.push(weekObj);
            weekObj = [];
          } else if (i === this.getMonthDays(date)) {
            for (let j = endDate.getDay() + 1; j < 7; j++) {
              weekObj.push({ value: j - endDate.getDay(), class: 'next-month', type: '1' });
            }
            lists.push(weekObj);
            weekObj = [];
          }
        }
        return lists;
      },
      currentDate() {
        return `${this.currentYear}-${this.currentMonth}-${this.currentDay}`;
      },
      nowDay() {
        return new Date().getDate();
      },
      isCurrentMonth() {
        const isYear = this.currentYear === new Date().getFullYear();
        if (!isYear) {
          return false;
        }
        const isMonth = this.currentMonth === new Date().getMonth() + 1;
        if (!isMonth) {
          return false;
        }
        return true;
      },

    },
    methods: {
      bindDateChange(e) {
        const date = new Date(e.target.value);
        this.currentYear = date.getFullYear();
        this.currentMonth = date.getMonth() + 1;
        this.currentDay = date.getDate();
      },
      animation() {
        let animation = wx.createAnimation({
          duration: 3000,
          timingFunction: 'ease',
        });
        animation.translate(30).step();
        return animation;
      },
      classList(key) {
        const obj = {
          'prev-month': key.type === -1,
          available: key.type === 0,
          'next-month': key.type === 1,
          current: this.isCurrent(key.value) && key.type === 0,
        };
        const classObj = Object.assign(obj);
        return classObj;
      },
      fGetDate(obj) {
        const type = Number(obj.type);
        let currentYear = this.currentYear;
        let currentMonth = this.currentMonth;
        if (type === -1) {
          if (currentMonth === 1) {
            currentMonth = 12;
            currentYear--;
          } else {
            currentMonth--;
          }
        } else if (type === 1) {
          if (currentMonth === 12) {
            currentMonth = 1;
            currentYear++;
          } else {
            currentMonth++;
          }
        }
        return new Date(`${currentYear}/${currentMonth}/${obj.value}`);
      },
      isCurrent(day) {
        return day === this.currentDay;
      },
      dayClick(key) {
        const { type, value } = key;
        this.currentDay = value;
        if (type === '-1') {
          this.prevMonth();
        } else if (type === '1') {
          this.nextMonth();
        }
        this.$emit('input', `${this.currentYear}-${this.currentMonth}-${this.currentDay}`);
      },
      backToday() {
        const date = new Date();
        this.currentYear = date.getFullYear();
        this.currentMonth = date.getMonth() + 1;
        this.currentDay = date.getDate();
      },
      isToday(val) {
        const currentMonth = this.currentMonth + Number(val.type);
        const day = moment(new Date(this.currentYear, currentMonth - 1, val.value)).format('YYYY/MM/DD');
        const now = moment(new Date()).format('YYYY/MM/DD');
        const dayTimes = new Date(day).getTime();
        const nowTimes = new Date(now).getTime();
        console.log(dayTimes === nowTimes);
        return dayTimes === nowTimes;
      },
      prevMonth() {
        if (this.currentMonth === 1) {
          this.currentMonth = 12;
          this.currentYear--;
          return;
        }
        this.currentMonth--;
      },
      nextMonth() {
        if (this.currentMonth === 12) {
          this.currentMonth = 1;
          this.currentYear++;
          return;
        }
        this.currentMonth++;
      },
      prevYear() {
        this.currentYear--;
      },
      nextYear() {
        this.currentYear++;
      },
      getMonthDays(day) {
        const curMonthDays = new Date(day.getFullYear(), (day.getMonth() + 1), 0).getDate();
        return curMonthDays;
      },
      touchStart(e) {
        e.preventDefault();
        this.touchDotX = e.touches[0].pageX; // 获取触摸时的原点
        this.touchDotY = e.touches[0].pageY;
        // 使用js计时器记录时间
        this.interval = setInterval(() => {
          this.time++;
        }, 200);
      },
      // 触摸结束事件
      touchEnd(e) {
        if (this.time === 0) {
          return;
        }
        let touchMoveX = e.touches[0].pageX;
        let touchMoveY = e.touches[0].pageY;
        let tmX = touchMoveX - this.touchDotX;
        let tmY = touchMoveY - this.touchDotY;
        if (this.time < 50) {
          let absX = Math.abs(tmX);
          let absY = Math.abs(tmY);
          if (absX > 2 * absY) {
            if (tmX < 0) {
              this.nextMonth();
            } else {
              this.prevMonth();
            }
          }
          if (absY > absX * 2 && tmY < 0) {
            console.log('上滑动=====');
          }
        }
        clearInterval(this.interval); // 清除setInterval
        this.time = 0;
      },
    },
    watch: {
      currentDate(val) {
        this.$emit('input', val);
      },
    },
  };
</script>
