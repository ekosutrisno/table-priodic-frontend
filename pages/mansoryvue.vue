<template>
  <div class="bg-gray-200 min-h-screen pb-24">
    <div class="container mx-auto">
      <SNGaleryHeader />
      <client-only>
        <div
          v-masonry
          transition-duration="2s"
          horizontal-order="true"
          fit-width="true"
          item-selector=".item"
          class="w-full mx-4"
        >
          <div
            v-for="(item, index) in imgsArr"
            :key="index"
            v-masonry-tile
            class="item p-2 overflow-hidden"
          >
            <div class="w-full h-full group transform hover:scale-105 transition-transform duration-200">
              <img
                class=""
                :src="item.src"
                width="300"
              >
              <div class="w-full h-full opacity-0 transition-opacity duration-300 ease-linear z-50 group-hover:opacity-100 flex flex-col justify-between">
                <div
                  class="absolute px-5 mt-8 top-0 right-0 w-full flex items-center justify-between"
                >
                  <button
                    class="bg-gray-900 text-white focus:outline-none opacity-75 shadow-inner py-1 px-2 rounded-full"
                  >
                    <span
                      class="z-50 text-xs"
                    ><i class="fa fa-clock" />  SN-F{{ index }} </span>
                  </button>
                  <button
                    class="bg-gray-900 text-white focus:outline-none opacity-75 shadow-inner py-1 px-2 rounded-full"
                  >
                    <span
                      class="z-50"
                    ><i class="fa fa-heart" /></span>
                  </button>
                </div>
                <div
                  class="absolute px-5 mb-8 bottom-0 right-0 w-full flex items-center justify-end"
                >
                  <button
                    class="bg-gray-900 text-white focus:outline-none opacity-75 shadow-inner px-2 rounded-full"
                  >
                    <span
                      class="z-50 text-xs"
                    ><i class="fa fa-tags" /> #O5N</span>
                  </button>
                  <button
                    class="bg-gray-900 text-white focus:outline-none opacity-75 shadow-inner py-2 px-3 rounded-full"
                  >
                    <span
                      v-popover:foo
                      class="z-50"
                    ><i class="fa fa-copyright" /> Mnet Countdown</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <popover event="hover" :delay="500" :width="300" name="foo">
          <div class="w-full h-full bg-gray-100 p-2">
            <div class="w-full h-12 flex items-start justify-start">
              <img class="w-16" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Secret_Number_Logo_Black.png">
              <div class="flex flex-col items-start justify-star">
                <span class="font-semibold text-sm text-gray-900">SECRET NUMBER GALERY</span>
                <span class="text-xs -mt-1 text-gray-700">@wowfakta.secretnumber</span>
              </div>
            </div>
          </div>
        </popover>
      </client-only>
    </div>
  </div>
</template>

<script>
import MansoryDataSN from '@/assets/data/MansoryDataSN'
import SNGaleryHeader from '@/components/header/SNGaleryHeader'
export default {
  components: { SNGaleryHeader },
  data () {
    return {
      imgsArr: MansoryDataSN
    }
  }
}
</script>
