<template>
  <div class="">
    <Header />
    <StudentProfile v-if="role === 'student'" />
    <HrProfile v-else :fixed.sync="fixed" />
    <Footer :fixed="fixed" />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import StudentProfile from '@/components/studentProfile'
import HrProfile from '@/components/hrProfile'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      fixed: false
    }
  },
  components: {
    Header,
    Footer,
    StudentProfile,
    HrProfile
  },
  computed: {
    ...mapState('authorization', ['role'])
  }
}
</script>
