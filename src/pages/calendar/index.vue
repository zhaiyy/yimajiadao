<template>
  <div>
   <div class="header">经期日历</div>
    <calendar></calendar>
  </div>
</template>

<script>
import Calendar from '@/components/calendar/calendar';

export default {
  components: {
    Calendar,
  },

  data() {
    return {
      logs: [],
    };
  },

  created() {

  },
};
</script>

<style>
.header {
  height: 120rpx;
  line-height: 120rpx;
  text-align: center;
  border-radius: unset;
}

</style>
