<template>
  <div>
    <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
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
        <div class="text-center">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Update Profile
          </h2>
          <p class="mt-4 text-lg leading-6 text-gray-500">
            Kindly fill the blank fields to finish the process
          </p>
        </div>
        <div class="mt-12">
          <form @submit.prevent="submit" action="#" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

            <div>
              <label for="first_name" class="block text-sm font-medium text-gray-700">Name</label>
              <div class="mt-1">
                <input disabled v-model="user.name" :placeholder="name" type="text" name="name" id="name" autocomplete="email" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
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
                <input disabled v-model="user.mobile"  type="number" name="phone_number" id="phone_number" autocomplete="tel" class="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" :placeholder="mobile">
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
              <label for="last_name" class="block text-sm font-medium text-gray-700">Marital Status</label>
              <div class="mt-1">
                <select v-model="user.status" required id="country" name="country" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widow">Widow</option>
                <option value="Widower">Widower</option>
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
                <textarea v-model="user.bio" placeholder="Optional" id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
              </div>
            </div>

            <div class="sm:col-span-2">
              <button @click.prevent="submit" type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Update Profile
              </button>
            </div>

          </form>
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
  name: 'Non-Parent',
  components:{
    Birth,
    Baptism,
    Confirmation
  },
  computed: {
    name() {
      return this.$store.state.name
    },
    mobile() {
      return this.$store.state.mobile
    },
  },
  data(){
    return{
      user:{
        email: '',
        IDNumber: '32392756',
        gender: 'Male',
        status: 'Single',
        birth: '',
        baptism: '',
        confirmation: '',
        bio: '',
        location: ''
      },
      // birthDate: true,
    }
  },
  methods: {
    submit(){
      db.collection("profiles").doc(this.mobile).update({
        email: this.user.email, 
        IdNumber: this.user.IDNumber, 
        gender: this.user.gender, 
        status: this.user.status, 
        birth: this.user.birth,
        baptism: this.user.baptism,
        confirmation: this.user.confirmation,
        bio: this.user.bio,
        location: this.user.location,
        updated: firebase.firestore.FieldValue.serverTimestamp() 
      })
      .then(() =>{
        this.$store.dispatch('updateUser', this.user)
        this.$router.replace('/user-home/non-parent-edit');
      })
      console.log(this.user)
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
