<template>
  <div>
    Footer
    <div class="footer">
      <ul class="footerMenu">
        <li>
          <router-link :to="'/salary/'" active-class="active"
            ><i class="icon money"></i
            ><span>{{ $t("TABS.SALARY") }}</span></router-link
          >
        </li>
        <li>
          <router-link :to="'/points/'" active-class="active"
            ><i class="icon wallet"></i
            ><span>{{ $t("TABS.BANK") }}</span></router-link
          >
        </li>
        <li>
          <router-link :to="'/lobby/'" active-class="active" exact="exact"
            ><i class="icon game"></i
            ><span>{{ $t("TABS.PLAY") }}</span></router-link
          >
        </li>
        <li>
          <router-link :to="'/memberCenter/'" active-class="active"
            ><i class="icon member"></i
            ><span>{{ $t("TABS.MEMBER") }}</span></router-link
          >
        </li>
        <li>
          <router-link :to="'/match/'" active-class="active"
            ><i class="icon star"></i
            ><span>{{ $t("TABS.MATCH") }}</span></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css">
@import "~@/styles/layouts/frameFooter.css";
</style>
