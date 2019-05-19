<!--
 * @Description: file content
 * @Author: huqi
 * @GitHub: https://github.com/hu-qi
 * @Email: me@huqi.me
 * @Date: 2019-04-29 16:58:49
 * @LastEditors: huqi
 * @LastEditTime: 2019-05-19 12:00:09
 -->
<template>
  <div>
    <el-tooltip
      effect="dark"
      :content="$t('layout.tooltip.theme')"
      placement="bottom">
      <el-button
        class="d2-ml-0 d2-mr btn-text can-hover"
        type="text"
        @click="dialogVisible = true">
        <d2-icon
          name="diamond"
          style="font-size: 16px"/>
      </el-button>
    </el-tooltip>
    <el-dialog
      :title="$t('layout.tooltip.theme')"
      width="600px"
      :visible.sync="dialogVisible"
      :append-to-body="true">
      <d2-theme-list style="margin-top: -25px;"/>
    </el-dialog>
  </div>
</template>

<script>
import themeList from './components/d2-theme-list'
export default {
  components: {
    'd2-theme-list': themeList
  },
  data () {
    return {
      dialogVisible: false
    }
  }
}
</script>
