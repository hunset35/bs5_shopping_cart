<template>
  <div class="beginnerTeaching">
    <div class="titleWrap">{{ $t("MEMBER_ACTIVITY_VALUE") }}</div>
    <div class="beginnerTable mainWrap">
      <div class="resultArea table-wrap">
        <table class="recordTable">
          <thead>
            <tr class="color-purple text-center">
              <th class="activeValue">{{ $t("ACTIVITY_VALUE") }}</th>
              <th class="timesPerDay" v-html="$t('TIMES_PER_DAY')"></th>
              <th class="memberStatus">{{ $t("MEMBER_STATUS") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="color-gray text-center"
              v-for="(row, index) in activityList"
              :key="index"
            >
              <td>{{ row.activity }}</td>
              <td>{{ row.timesPerDay }}</td>
              <td>{{ row.memberStatus }}</td>
            </tr>
            <tr
              class="color-gray text-center"
              v-if="activityList.length &lt;= 0"
            >
              <td class="no-data" colspan="3">{{ $t("EMPTY_DATA") }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activityList: [
        {
          activity: "90以上",
          timesPerDay: "無限制",
          memberStatus: "良好互動，信任度極高的玩家。"
        },
        {
          activity: "80-89",
          timesPerDay: "50次",
          memberStatus: "良好互動，信任度較高的玩家。"
        },
        {
          activity: "70-79",
          timesPerDay: "20次",
          memberStatus: "時常互動，或較常參與官方活動的玩家。"
        },
        {
          activity: "60-69",
          timesPerDay: "10次",
          memberStatus: "時常互動，或較少參與官方活動的玩家。"
        },
        {
          activity: "50-59",
          timesPerDay: "5次",
          memberStatus: "剛開始遊戲的玩家。"
        },
        {
          activity: "30-49",
          timesPerDay: "3次",
          memberStatus: "違反【遊戲管理規章】"
        },
        {
          activity: "10-29",
          timesPerDay: "1次",
          memberStatus: "不當詐騙行為遭玩家檢舉"
        },
        {
          activity: "1-9",
          timesPerDay: "0次",
          memberStatus: "主管機關來函要求鎖定"
        },
        { activity: "0", timesPerDay: "0次", memberStatus: "新註冊玩家" }
      ]
    };
  }
};
</script>

<style>
@import "~@/styles/layouts/beginner.css";
</style>
