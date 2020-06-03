<template lang="pug">
.user-component
  .avatar.user__avatar
    img.avatar__img(:src="image")
  .user__desc
    .user__name {{this.name}}
    .user__caption(v-if="hasOccupation") {{this.occupation}}
</template>

<script>
export default {
  data() {
    return {
      imagePath: String,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      default: '',
    },
  },
  computed: {
    hasOccupation() {
      return this.occupation !== undefined && this.occupation !== '';
    },
  },
  created() {},
};
</script>

<style lang="postcss" scoped>
.avatar {
  overflow: hidden;
  border-radius: 50%;
}
.avatar__img {
  display: block;
  min-width: 100%;
}

.user-component {
  display: flex;
  align-items: center;
}
.user__avatar {
  width: 46px;
  margin-right: 20px;
}
.user__desc {
  display: flex;
  flex-direction: column;
}
.user__name {
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 2px;
}
.user__caption {
}
</style>
