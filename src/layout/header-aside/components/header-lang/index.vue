<!--
 * @Description: file content
 * @Author: huqi
 * @GitHub: https://github.com/hu-qi
 * @Email: me@huqi.me
 * @Date: 2019-05-19 11:16:21
 * @LastEditors: huqi
 * @LastEditTime: 2019-05-19 11:17:32
 -->
<template>
  <el-dropdown size="small" @command="command => $i18n.locale = command">
    <el-button class="d2-ml-0 d2-mr btn-text can-hover" type="text">
      <d2-icon name="language" style="font-size: 16px"/>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(language, index) in $languages"
        :key="index"
        :command="language.value">
        {{ language.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('d2admin/user', [
      'info'
    ])
  },
  methods: {
    ...mapActions('d2admin/account', [
      'logout'
    ]),
    /**
     * @description 登出
     */
    logOff () {
      this.logout({
        confirm: true
      })
    }
  }
}
</script>
