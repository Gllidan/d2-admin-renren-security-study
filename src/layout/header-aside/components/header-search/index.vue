<!--
 * @Description: file content
 * @Author: huqi
 * @GitHub: https://github.com/hu-qi
 * @Email: me@huqi.me
 * @Date: 2019-04-29 16:58:49
 * @LastEditors: huqi
 * @LastEditTime: 2019-05-19 12:05:06
 -->
<template>
  <el-tooltip
    effect="dark"
    :content="$t('layout.tooltip.search')"
    placement="bottom">
    <el-button class="d2-mr btn-text can-hover" type="text" @click="handleClick">
      <d2-icon name="search" style="font-size: 18px;"/>
    </el-button>
  </el-tooltip>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>
