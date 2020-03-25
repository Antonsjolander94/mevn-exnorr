<template>
  <b-container class="pt-5">
    <b-row class="pt-5">
      <b-col cols="12">
        <PersonList />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PersonList from "@/components/Admin/PersonList";
export default {
  components: {
    PersonList
  }
};
</script>

