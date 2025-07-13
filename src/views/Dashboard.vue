<template>
  <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f8fafc;">
    <div>
      <button @click="checkHealth"
        style="padding: 8px 16px; background: #2563eb; color: #fff; border: none; border-radius: 4px; margin-bottom: 24px; cursor: pointer;">
        Kiểm tra hệ thống
      </button>
      <div v-if="status === 'ok'" style="color: #16a34a; font-size: 1.5rem; font-weight: bold; text-align: center;">
        Hệ thống hoạt động bình thường
      </div>
      <div v-else-if="status === 'fail'"
        style="color: #dc2626; font-size: 1.5rem; font-weight: bold; text-align: center;">
        Hệ thống lỗi
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { healthcheckApi } from '@/services/api-common/commonApi'

const status = ref('init')

const checkHealth = async () => {
  status.value = 'init'
  try {
    const res = await healthcheckApi.healthcheck()
    status.value = res.data ? 'ok' : 'fail'
  } catch (e) {
    status.value = 'fail'
  }
}
</script>