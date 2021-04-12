<template>
 
<div class="min-h-screen bg-white flex">
  <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <img class="h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
          Register as member
        </h2>
        <p class="mt-2 text-sm text-gray-600 max-w">
          Or
          <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500">
            Already Registered?
          </a>
        </p>
      </div>

      <div class="mt-8">
        <div>

          <div class="mt-6 relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">
                Glad you are joining us
              </span>
            </div>
          </div>
        </div>

        <div class="mt-6">
          <form action="#" method="POST" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div class="mt-1">
                <input v-model="user.name" id="name" name="name" type="name" autocomplete="name" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
            </div>

             <div class="flex sm:flex-cols-2 sm:gap-1 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">

               <label for="country" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Mobile
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
               <input v-model="user.mobile" type="number" name="mobile" id="mobile" class="border border-gray-300 py-2 block focus:ring-indigo-500 focus:border-indigo-500 w-3/4 shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
              </div>

              <label for="country" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                A Parent ? 
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <select v-model="user.parent" id="parent" name="parent" autocomplete="parent" class="py-2 max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-half shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>

            </div>

            <div class="space-y-1">
              <label for="password" class="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div class="mt-1">
                <input v-model="user.password" @keyup.enter="submit" id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
            </div>

            <div>
              <button @click.prevent="submit" type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="hidden lg:block relative w-0 flex-1">
    <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixqx=XiDO1s76Hq&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="">
  </div>
</div>


</template>

<script>
import firebase from '@/firebase'
import db from '@/db'

export default {
  name: 'Login',
  data(){
   return{
    user:{
      name: 'Michael Saiba',
      mobile: '0716202298',
      parent: '',
      password: 'password'
    }     
   }  
  },
  methods: {
    submit() {
        db.collection("profiles").doc(this.user.mobile).set({mobile: this.user.mobile, name: this.user.name, parent: this.user.parent, password: this.user.password, created: firebase.firestore.FieldValue.serverTimestamp() })
        this.$store.dispatch('registerUser', this.user)
        if(this.user.parent == 0){
          this.$router.replace('/user-home/non-parent');
        }else{
          this.$router.replace('/user-home/parent');
        }
        
    },    
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
