<template>
  <div class="home">
    <AddListingForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddListingForm from '@/components/AddListingForm.vue'
export default {
  name: 'AddListing',
  components: {
    AddListingForm
  }
}
</script>
