<template>
  <div class="w-full h-full p-4 flex flex-col">
    <div class="">
      <div class="flex items-center justify-start">
        <img class="w-64 -ml-6" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Secret_Number_Logo_Black.png" alt="logo-sn">
        <span class="block text-6xl font-semibold font-serif">
          Galery
        </span>
      </div>
      <p class="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt sunt inventore praesentium ullam at error expedita corporis veniam natus vitae deserunt sapiente eos, odio, voluptates qui delectus, itaque explicabo.
      </p>
    </div>
    <filter-button />
  </div>
</template>

<script>
import FilterButton from '../FilterButton.vue'
export default {
  components: { FilterButton }

}
</script>
