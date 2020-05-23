<template lang="pug">
  .admin
    .admin__header
      AdminHeader
    main.admin__maincontent
      router-view
      //About
      //Login
      //Works
      //Yells
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

//control-bar
.control-bar {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.control-bar__button {
  color: $text-color50;
  font-weight: 600;
  & .button__caption {
    margin-right: 10px;
  }
  & .button__icon_edit {
    color: $links-color;
  }
  & .button__icon_remove {
    color: $admin-error-color;
  }
}
</style>
