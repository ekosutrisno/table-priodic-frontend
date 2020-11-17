<template>
  <div
    class="w-72 h-auto flex flex-col m-4 cursor-pointer text-gray-800 font-semibold bg-gray-100 shadow overflow-hidden rounded"
  >
    <div class="w-full h-50 relative">
      <div
        class="absolute px-5 mt-8 top-0 right-0 w-full flex items-center justify-between"
      >
        <button
          class="bg-gray-900 text-white focus:outline-none opacity-75 shadow-inner py-2 px-3 rounded-full"
        >
          <span
            class="z-50"
          ><i class="fa fa-clock" /> {{ drink.timeEstimation }} Min</span>
        </button>
        <button
          class="bg-gray-900 text-white focus:outline-none opacity-75 shadow-inner py-2 px-3 rounded-full"
          @click="drink.liked = !drink.liked"
        >
          <span
            class="z-50"
          ><i class="fa fa-heart" :class="{ 'text-red-600': drink.liked }" /></span>
        </button>
      </div>
      <img class="w-full h-full object-cover" :src="drink.image">
    </div>
    <div class="h-full w-full bg-pink-500 relative">
      <span class="absolute bottom-0 right-0 mb-4 mr-4 text-gray-300">
        <i v-if="drink.categoryId == 2" class="fa fa-cocktail fa-lg" />
        <i v-else-if="drink.categoryId == 1" class="fa fa-utensils fa-lg" />
        <i v-else class="fa fa-ice-cream fa-lg" />
      </span>
      <div class="w-full h-48 bg-white p-5 rounded-br-full shadow">
        <span class="font-semibold text-lg"> {{ drink.name }} </span>
        <div class="flex items-center w-full h-auto space-x-3 mt-4">
          <span><i class="fa fa-star" /> {{ drink.ratings }}</span>
          <span><i class="fa fa-shopping-bag" /> Order From
            {{ drink.orderFrom }}</span>
        </div>
        <div
          class="flex text-xs text-gray-700 items-center w-full h-auto space-x-3 mt-12"
        >
          <span
            v-for="tag in drink.tags"
            :key="tag"
            class="bg-gray-100 border-2 border-gray-200 rounded-full px-2"
          >{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    drink: {
      type: Object,
      required: true
    }
  }
}
</script>
