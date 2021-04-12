<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class=" bg-white px-4 py-5 border-b border-gray-200 sm:px-6" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
        <div class="ml-4 mt-4">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Family Members
          </h3>
        </div>
        <div class="ml-4 mt-4 flex-shrink-0">
          <button @click="showModal" type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Add Family
          </button>
        </div>
      </div>

    </div>

    <div>

      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="p-5 grid grid-cols-1 gap-4 sm:grid-cols-2">

        <div v-for="(log, index) in familyMember" :key="index" class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=XiDO1s76Hq&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
          </div>
          <div class="flex-1 min-w-0">
            <a href="#" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true"></span>
              <p class="text-sm font-medium text-gray-900">
                {{  }}
              </p>
              <p class="text-sm text-gray-500 truncate">
                Co-Founder / CEO
              </p>
            </a>
          </div>
        </div>
        <!-- More items... -->
      </div>
    </div>

    <!-- Modal -->
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div v-if="modal" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!--
          Background overlay, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <!--
          Modal panel, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                <!-- Heroicon name: outline/exclamation -->
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
                
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900 mt-2" id="modal-title">
                  Add Member
                </h3>
                <div class="">
                  <!-- Add Family Member Details -->
                  <div>
                    <div class="bg-white overflow-hidden sm:px-6 lg:px-2 lg:py-5 mr-10">
                      <div class="relative max-w-xl mx-auto">
                        <svg class="absolute left-full transform translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                          <defs>
                            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                          </defs>
                          <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                        </svg>
                        <svg class="absolute right-full bottom-0 transform -translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                          <defs>
                            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                          </defs>
                          <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                        </svg>
                        <div class="mt-6">
                          <form @submit.prevent="submit" action="#" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

                            <div>
                              <label for="first_name" class="block text-sm font-medium text-gray-700">Name</label>
                              <div class="mt-1">
                                <input v-model="user.name"  type="text" name="name" id="name" autocomplete="name" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                              </div>
                            </div>

                            <div>
                              <label for="last_name" class="block text-sm font-medium text-gray-700">Mobile</label>
                              <div class="mt-1">
                                <div class="mt-1 relative rounded-md shadow-sm">
                                <div class="absolute inset-y-0 left-0 flex items-center">
                                  <label for="country" class="sr-only">Country</label>
                                  <select disabled id="country" name="country" class="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md">
                                    <option>KE</option>
                                  </select>
                                </div>
                                <input v-model="user.mobile"  type="number" name="phone_number" id="phone_number" autocomplete="tel" class="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                              </div>
                              </div>
                            </div>

                            <div>
                              <label for="first_name" class="block text-sm font-medium text-gray-700">ID Number</label>
                              <div class="mt-1">
                                <input v-model="user.IDNumber" required type="number" name="name" id="name" autocomplete="email" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                              </div>
                            </div>

                            <div>
                              <label for="first_name" class="block text-sm font-medium text-gray-700">Email Address</label>
                              <div class="mt-1">
                                <input v-model="user.email" required type="email" name="email" id="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                              </div>
                            </div>

                            <div>
                              <label for="last_name" class="block text-sm font-medium text-gray-700">Gender</label>
                              <div class="mt-1">
                                <select v-model="user.gender" required id="gender" name="gender" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Either">Either</option>
                              </select>
                              </div>
                            </div>
                            <div>
                              <label for="last_name" class="block text-sm font-medium text-gray-700">Relationship</label>
                              <div class="mt-1">
                                <select v-model="user.relationship" required id="country" name="country" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                                <option value="Father">Father</option>
                                <option value="Mother">Mother</option>
                                <option value="Husband">Husband</option>
                                <option value="Wife">Wife</option>
                                <option value="Son">Son</option>
                                <option value="Daughter">Daughter</option>
                                <option value="Sister">Sister</option>
                                <option value="Brother">Brother</option>
                              </select>
                              </div>
                            </div>

                            <div class="sm:col-span-1">
                              <label for="email" class="block text-sm font-medium text-gray-700">Location</label>
                              <div class="mt-1">
                                <input v-model="user.location" required id="location" name="location" type="text" autocomplete="location" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                              </div>
                            </div>

                            <div class="sm:col-span-1">
                              <label for="email" class="block text-sm font-medium text-gray-700 pb-1">Birth Date</label>
                              <!-- Date Components -->
                              <Birth v-model="user.birth" />
                            </div>

                            <div class="sm:col-span-1">
                              <label for="email" class="block text-sm font-medium text-gray-700 pb-1">Baptism Date</label>
                              <!-- Date Components -->
                              <Baptism v-model="user.baptism" />
                            </div>

                            <div class="sm:col-span-1">
                              <label for="email" class="block text-sm font-medium text-gray-700 pb-1">Confirmation Date</label>
                              <!-- Date Components -->
                              <Confirmation v-model="user.confirmation" />
                            </div>

                            <div class="sm:col-span-2">
                              <label for="message" class="block text-sm font-medium text-gray-700">Member's Bio</label>
                              <div class="mt-1">
                                <textarea @change="consoleData" v-model="user.bio" placeholder="Optional" id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
                              </div>
                            </div>

                          </form>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button @click="submit" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
              Submit
            </button>
            <button @click="closeModal" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

      

  </div>  
</template>

<script>
import Birth from '@/components/Date.vue';
import Baptism from '@/components/DateBaptism.vue';
import Confirmation from '@/components/DateConfirmation.vue';

import firebase from '@/firebase'
import db from '@/db'

export default {
  name: 'Family',
  components:{
    Birth,
    Baptism,
    Confirmation
  },
  data(){
    return{
      modal: false,
      user:{
        name: 'ron',
        mobile: '716202297',
        email: 'ron@gmail.com',
        IDNumber: '32392756',
        gender: 'Male',
        relationship: 'Brother',
        birth: '',
        baptism: '',
        confirmation: '',
        bio: 'Something',
        location: 'Juja',
      },
    }
  },
  computed:{
    familyMember(){
      return this.$store.state.familyMember
    },
    name(){
      return this.$store.state.name
    },
    mobile(){
      return this.$store.state.mobile
    },
    IDNumber(){
      return this.$store.state.IDNumber
    }
  },
  methods: {
    consoleData(){
      console.log(this.user)
    },
    submit(){
      db.collection("families").doc(this.IDNumber).collection("member").set({
        email: this.user.email, 
        IdNumber: this.user.IDNumber, 
        gender: this.user.gender, 
        relationship: this.user.relationship, 
        birth: this.user.birth,
        baptism: this.user.baptism,
        confirmation: this.user.confirmation,
        bio: this.user.bio,
        location: this.user.location,
        userID: this.IDNumber,
        createdBy: this.name, 
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() =>{
        this.$store.dispatch('updateFamily', this.user)
        this.modal = false
      })
      console.log(this.user)
    },
    showModal(){
      this.modal = true
    },
    closeModal(){
      this.modal = false
    }
  }
}
</script>

<style scoped>
input[type="number"]::-webkit-outer-spin-button, 
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
}
</style>
