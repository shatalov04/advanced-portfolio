<template lang="pug">
  .admin
    .admin__header
      router-view(name="header")
    main.admin__maincontent
      router-view
</template>

<script>
export default {
  components: {
    AdminHeader: () => import('./components/admin-header'),
  },
};
</script>

<style lang="postcss">
:root {
  --bg-gradient: linear-gradient(90deg, $links-color 0%, $main-color 100%);
  --bg-reversed-gradient: linear-gradient(
    90deg,
    $main-color 0%,
    $links-color 100%
  );
  --form-boxshadow: 4px 3px 10px rgba(0, 0, 0, 0.07);
}
</style>
