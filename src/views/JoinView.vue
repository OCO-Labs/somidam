<script>
import NavBar from '../components/NavBar.vue'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/main'

export default {
  name: 'JoinView',
  components: {
    NavBar
  },
  data() {
    return {
      name: '',
      gender: '',
      age: '',
      startTell: '',
      endTell: '',
      startEmail: '',
      endEmail: '',
      applicationReasons: [],
      applicationReasonsEtc: '',
      applicationReasonsEtcBtn: true,
      livingStartPlace: '',
      livingEndPlace: '',
      joinStartPlace: '',
      joinEndPlace: '',
      desiredTimed: "",
      desiredTimedEtc: '',
      desiredTimedEtcBtn: true,
      desiredDistrict: [],
      desiredDistrictEtc: '',
      desiredDistrictEtcBtn: true,
      investmentCosts: "",
      inquiryContent: "",
    }
  },
  watch: {
    desiredTimed () {
      this.desiredTimedEtc = ''
      this.desiredTimedEtcBtn = true
    }
  },
  methods: {
    async saveJoin () {
      const docRef = await addDoc(collection(db, 'join'), {
        name: this.name,
        gender: this.gender,
        age: this.age,
        startTell: this.startTell,
        endTell: this.endTell,
        startEmail: this.startEmail,
        endEmail: this.endEmail,
        applicationReasons: this.applicationReasons,
        applicationReasonsEtc: this.applicationReasonsEtc,
        livingStartPlace: this.livingStartPlace,
        livingEndPlace: this.livingEndPlace,
        joinStartPlace: this.joinStartPlace,
        joinEndPlace: this.joinEndPlace,
        desiredTimed: this.desiredTimed,
        desiredTimedEtc: this.desiredTimedEtc,
        desiredDistrict: this.desiredDistrict,
        desiredDistrictEtc: this.desiredDistrictEtc,
        investmentCosts: this.investmentCosts,
        inquiryContent: this.inquiryContent,
        created: new Date().getTime()
      })
      console.log('Document written with ID: ', docRef.id)
      this.$router.push('/')
    },
  }
}
</script>

<template>
  <NavBar />
  <div
    class="w-full h-[50rem] bg-[url('@/assets/startPic.webp')] bg-center bg-cover"
  >
    <div class="flex flex-col items-center justify-center w-full h-[50rem] bg-orange-100 bg-opacity-50">
      <img
        src="../assets/logo.svg"
        alt="Somidam Logo"
        width="150"
        height="150"
      >
      <div class="text-7xl font-black mt-2 text-somidam">
        ????????????
      </div>
      <div class="mt-6 text-somidam text-2xl mx-16">
        <div class="mb-2">
          <div class="font-bold inline">
            ?????? ????????? ?????? ????????? ?????????
          </div>
          ??? ????????? ?????????????????????.
        </div>
        <div>????????? ???????????? ????????? ?????? ????????? ??????????????? ????????????.</div>
      </div>
    </div>
  </div>
  <div class="2xl:mx-64 xl:50 lg:mx-20 sm:mx-10 mx-2 mt-20">
    <div class="flex text-lg mb-3 justify-between">
      <div class="flex">
        <div class="font-bold">
          ?????? ????????? ??????&nbsp;
        </div>
        <div class="text-sm flex items-end">
          * ????????? ?????? ?????? ???????????????.
        </div>
      </div>
      <div class="text-sm flex items-end text-somidam">
        ??? ????????? PC??? ???????????????.
      </div>
    </div>
    <hr class="border-black border-1 mb-6">
    <div class="flex flex-col">
      <div class="flex flex-wrap">
        <div class="flex mr-10">
          <div class="w-28 flex items-center">
            <div class="font-bold">
              ??????&nbsp;
            </div>
            <div>*</div>
          </div>
          <input
            v-model="name"
            type="text"
            class="form-input rounded border-gray-300 bg-gray-100 w-[20.5rem]"
          >
        </div>
        <div class="flex mr-10 md:mt-0 sm:mt-2">
          <div class="w-28 flex items-center">
            <div class="font-bold">
              ??????&nbsp;
            </div>
            <div>*</div>
          </div>
          <select
            v-model="gender"
            placeholder="??????"
            class="form-select rounded border-gray-300 bg-gray-100 w-64"
          >
            <option>??????</option>
            <option>??????</option>
            <option>??????</option>
          </select>
        </div>
        <div class="flex mr-10">
          <div class="w-28 flex items-center">
            <div class="font-bold">
              ??????&nbsp;
            </div>
            <div>*</div>
          </div>
          <select
            v-model="age"
            class="form-select rounded border-gray-300 bg-gray-100 w-64"
          >
            <option>??????</option>
            <option
              v-for="i in 100"
              :key="i"
            >
              {{ i }}
            </option>
          </select>
        </div>
      </div>
      <div class="flex flex-wrap mt-8">
        <div class="flex mr-10">
          <div class="w-28 flex items-center">
            <div class="font-bold">
              ????????????&nbsp;
            </div>
            <div>*</div>
          </div>
          <select
            v-model="startTell"
            class="form-select rounded border-gray-300 bg-gray-100 w-28 mr-2"
          >
            <option>??????</option>
            <option>010</option>
            <option>012</option>
          </select>
          <input
            v-model="endTell"
            type="text"
            class="form-input rounded border-gray-300 bg-gray-100 w-[13rem]"
          >
        </div>
        <div class="flex mr-10 md:mt-0 sm:mt-2">
          <div class="w-28 flex items-center">
            <div class="font-bold">
              ?????????&nbsp;
            </div>
            <div>*</div>
          </div>
          <input
            v-model="startEmail"
            type="text"
            class="form-input rounded border-gray-300 bg-gray-100 w-[16rem]"
          >
          <div class="mx-2 flex items-center">
            @
          </div>
          <select
            v-model="endEmail"
            class="form-select rounded border-gray-300 bg-gray-100 w-40 mr-2"
          >
            <option>??????</option>
            <option>naver.com</option>
            <option>gmail.com</option>
            <option>daum.net</option>
            <option>kakao.com</option>
            <option>outlook.com</option>
            <option>icloud.com</option>
          </select>
        </div>
      </div>
      <hr class="border-black border-1 my-6">
      <div class="flex mr-10">
        <div class="w-28 flex items-center">
          <div class="font-bold">
            ????????????&nbsp;
          </div>
          <div>*</div>
        </div>
        <div class="flex flex-col">
          <div class="flex">
            <div>
              <input
                v-model="applicationReasons"
                class="form-checkbox mr-1"
                type="checkbox"
                value="????????????"
              >
              <label
                for="????????????"
                class="mr-4"
              >????????????</label>
              <input
                v-model="applicationReasons"
                class="form-checkbox mr-1"
                type="checkbox"
                value="???????????????"
              >
              <label
                for="???????????????"
                class="mr-4"
              >???????????????</label>
              <input
                v-model="applicationReasons"
                class="form-checkbox mr-1"
                type="checkbox"
                value="?????????"
              >
              <label
                for="?????????"
                class="mr-4"
              >?????????</label>
              <input
                v-model="applicationReasons"
                class="form-checkbox mr-1"
                type="checkbox"
                value="?????????"
              >
              <label
                for="?????????"
                class="mr-4"
              >?????????</label>
              <input
                v-model="applicationReasons"
                class="form-checkbox mr-1"
                type="checkbox"
                value="?????????"
              >
              <label
                for="?????????"
                class="mr-4"
              >?????????</label>
              <input
                v-model="applicationReasons"
                class="form-checkbox mr-1"
                type="checkbox"
                value="?????????"
              >
              <label
                for="?????????"
                class="mr-4"
              >?????????</label>
              <input
                v-model="applicationReasons"
                class="form-checkbox mr-1"
                type="checkbox"
                value="????????????"
              >
              <label
                for="????????????"
                class="mr-4"
              >????????????</label>
              <input
                v-model="applicationReasons"
                class="form-checkbox mr-1"
                type="checkbox"
                value="????????????"
              >
              <label
                for="????????????"
                class="mr-4"
              >????????????</label>
              <input
                v-model="applicationReasons"
                class="form-checkbox mr-1"
                type="checkbox"
                value="?????? ?????????"
              >
              <label
                for="?????? ?????????"
              >?????? ?????????</label>
            </div>
          </div>
          <div class="mt-4">
            <input
              v-model="applicationReasons"
              class="form-checkbox mr-1"
              type="checkbox"
              value="??????(?????? ??????)"
              @change="applicationReasonsEtcBtn = !applicationReasonsEtcBtn; applicationReasonsEtc = ''"
            >
            <label
              for="??????(?????? ??????)"
              class="mr-2"
            >??????(?????? ??????)</label>
            <input
              v-model="applicationReasonsEtc"
              :disabled="applicationReasonsEtcBtn"
              type="text"
              class="form-input rounded disabled:bg-gray-200 border-gray-300 bg-gray-100 w-[20rem]"
            >
          </div>
        </div>
      </div>
      <div class="flex mr-10 my-8">
        <div class="w-28 flex items-center">
          <div class="font-bold">
            ????????????&nbsp;
          </div>
        </div>
        <input
          v-model="livingStartPlace"
          type="text"
          placeholder="???/???"
          class="form-input rounded border-gray-300 bg-gray-100 w-[10rem] mr-2"
        >
        <input
          v-model="livingEndPlace"
          type="text"
          placeholder="???/???"
          class="form-input rounded border-gray-300 bg-gray-100 w-[13rem]"
        >
      </div>
      <div class="flex mr-10 mb-10">
        <div class="w-28 flex items-center">
          <div class="font-bold">
            ????????????&nbsp;
          </div>
          <div>*</div>
        </div>
        <input
          v-model="joinStartPlace"
          type="text"
          placeholder="???/???"
          class="form-input rounded border-gray-300 bg-gray-100 w-[10rem] mr-2"
        >
        <input
          v-model="joinEndPlace"
          type="name"
          placeholder="???/???"
          class="form-input rounded border-gray-300 bg-gray-100 w-[13rem]"
        >
      </div>
      <div class="flex mr-10 mb-10">
        <div class="w-28 flex items-center">
          <div class="font-bold">
            ????????????&nbsp;
          </div>
          <div>*</div>
        </div>
        <input
          v-model="desiredTimed"
          class="mr-1 self-center"
          type="radio"
          value="??????"
        >
        <label
          for="??????"
          class="mr-4 self-center"
        >??????</label>
        <input
          v-model="desiredTimed"
          class="mr-1 self-center"
          type="radio"
          value="3?????? ???"
        >
        <label
          for="3?????? ???"
          class="mr-4 self-center"
        >3?????? ???</label>
        <input
          v-model="desiredTimed"
          class="mr-1 self-center"
          type="radio"
          value="6?????? ???"
        >
        <label
          for="6?????? ???"
          class="mr-4 self-center"
        >6?????? ???</label>
        <input
          v-model="desiredTimed"
          class="mr-1 self-center"
          type="radio"
          value="??????(?????? ??????)"
          @change="desiredTimedEtcBtn = !desiredTimedEtcBtn"
        >
        <label
          for="??????(?????? ??????)"
          class="mr-4 self-center"
        >??????(?????? ??????)</label>
        <input
          v-model="desiredTimedEtc"
          :disabled="desiredTimedEtcBtn"
          type="text"
          class="form-input rounded disabled:bg-gray-200 border-gray-300 bg-gray-100 w-[20rem]"
        >
      </div>
      <div class="flex mr-10 mb-10">
        <div class="w-28 flex items-center">
          <div class="font-bold">
            ????????????&nbsp;
          </div>
          <div>*</div>
        </div>
        <div>
          <input
            v-model="desiredDistrict"
            class="form-checkbox mr-1"
            type="checkbox"
            value="??????"
          >
          <label
            for="??????"
            class="mr-4"
          >??????</label>
          <input
            v-model="desiredDistrict"
            class="form-checkbox mr-1"
            type="checkbox"
            value="?????????"
          >
          <label
            for="?????????"
            class="mr-4"
          >?????????</label>
          <input
            v-model="desiredDistrict"
            class="form-checkbox mr-1"
            type="checkbox"
            value="??????(???????????????, ????????? ???)"
          >
          <label
            for="??????(???????????????, ????????? ???)"
            class="mr-4"
          >??????(???????????????, ????????? ???)</label>
          <input
            v-model="desiredDistrict"
            class="form-checkbox mr-1"
            type="checkbox"
            value="??????/?????????"
          >
          <label
            for="??????/?????????"
            class="mr-4"
          >??????/?????????</label>
          <input
            v-model="desiredDistrict"
            class="form-checkbox mr-1"
            type="checkbox"
            value="??????"
          >
          <label
            for="??????"
            class="mr-4"
          >??????</label>
          <input
            v-model="desiredDistrict"
            class="form-checkbox mr-1"
            type="checkbox"
            value="??????(?????? ??????)"
            @change="desiredDistrictEtcBtn = !desiredDistrictEtcBtn; desiredDistrictEtc = ''"
          >
          <label
            for="??????(?????? ??????)"
            class="mr-2"
          >??????(?????? ??????)</label>
          <input
            v-model="desiredDistrictEtc"
            type="text"
            :disabled="desiredDistrictEtcBtn"
            class="form-input rounded disabled:bg-gray-200 border-gray-300 bg-gray-100 w-[20rem]"
          >
        </div>
      </div>
      <div class="flex mr-10 mb-10">
        <div class="w-28 flex items-center">
          <div class="font-bold">
            ????????????&nbsp;
          </div>
          <div>*</div>
        </div>
        <input
          v-model="investmentCosts"
          class="mr-1 self-center"
          type="radio"
          value="1.5??? ??????"
        >
        <label
          for="1.5??? ??????"
          class="mr-4 self-center"
        >1.5??? ??????</label>
        <input
          v-model="investmentCosts"
          class="mr-1 self-center"
          type="radio"
          value="2.0??? ??????"
        >
        <label
          for="2.0??? ??????"
          class="mr-4 self-center"
        >2.0??? ??????</label>
        <input
          v-model="investmentCosts"
          class="mr-1 self-center"
          type="radio"
          value="2.5??? ??????"
        >
        <label
          for="2.5??? ??????"
          class="mr-4 self-center"
        >2.5??? ??????</label>
        <input
          v-model="investmentCosts"
          class="mr-1 self-center"
          type="radio"
          value="3.0??? ??????"
        >
        <label
          for="3.0??? ??????"
          class="mr-4 self-center"
        >3.0??? ??????</label>
        <input
          v-model="investmentCosts"
          class="mr-1 self-center"
          type="radio"
          value="3.0??? ??????"
        >
        <label
          for="3.0??? ??????"
          class="mr-4 self-center"
        >3.0??? ??????</label>
      </div>
      <hr class="border-black border-1 mb-6">
      <div class="flex flex-col">
        <div class="flex">
          <div class="font-bold">
            ????????????&nbsp;
          </div>
          <div>*</div>
        </div>
        <textarea
          v-model="inquiryContent"
          class="h-64 bg-gray-100 border-gray-300 mb-8 mt-2"
          placeholder="????????? ????????? ?????????."
        />
      </div>
      <!-- ???????????????????????? -->
    </div>
    <div class="flex justify-center mt-10 mb-16">
      <!-- ?????? ??? ????????? ????????? ?????? ??? ???????????? -->
      <!-- ?????? ?????? ??? ?????? ??? ?????? X -->
      <button
        to="/"
        type="button"
        class="flex justify-center items-center text-white bg-somidam border-2 border-somidam focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-full px-6 w-32"
        @click="saveJoin"
      >
        ????????????
      </button>
    </div>
  </div>
</template>