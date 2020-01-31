<template>
  <div id="new-workout">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Edit workout</h4></li>
    <div class="row">
    <form @submit.prevent="updateWorkout" class="collection-item">
      
      <div class="row">
        <label>Workout name and date: </label>
        <input type="text" v-model="Workout" required>
      </div>
      <div class="row">
        <label>Date</label>
        <div class="input-field">
        <date-picker v-model="date" lang="en" type="date" format="dd/MM/yyyy"></date-picker>
        </div>
      </div>
      <div class="input-group">
      <div class="input-group-prepend">
      </div>
      <label>Exercise</label>
      <input type="text" v-model="Exercise1" class="form-control">
      <label>Sets</label>
      <input type="text" v-model="Sets1" class="form-control">
      <label>Reps</label>
      <input type="text" v-model="Reps1" class="form-control">
      <label>Weight</label>
      <input type="text" v-model="Weight1" class="form-control">
      </div>
      <div class="input-group">
      <div class="input-group-prepend">
      </div>
      <label>Exercise</label>
      <input type="text" v-model="Exercise2" class="form-control">
      <label>Sets</label>
      <input type="text" v-model="Sets2" class="form-control">
      <label>Reps</label>
      <input type="text" v-model="Reps2" class="form-control">
      <label>Weight</label>
      <input type="text" v-model="Weight2" class="form-control">
      </div>
      <div class="input-group">
      <div class="input-group-prepend">
      </div>
      <label>Exercise</label>
      <input type="text" v-model="Exercise3" class="form-control">
      <label>Sets</label>
      <input type="text" v-model="Sets3" class="form-control">
      <label>Reps</label>
      <input type="text" v-model="Reps3" class="form-control">
      <label>Weight</label>
      <input type="text" v-model="Weight3" class="form-control">
      </div>
      <div class="input-group">
      <div class="input-group-prepend">
      </div>
      <label>Exercise</label>
      <input type="text" v-model="Exercise4" class="form-control">
      <label>Sets</label>
      <input type="text" v-model="Sets4" class="form-control">
      <label>Reps</label>
      <input type="text" v-model="Reps4" class="form-control">
      <label>Weight</label>
      <input type="text" v-model="Weight4" class="form-control">
      </div>
      <div class="input-group">
      <div class="input-group-prepend">
      </div>
      <label>Exercise</label>
      <input type="text" v-model="Exercise5" class="form-control">
      <label>Sets</label>
      <input type="text" v-model="Sets5" class="form-control">
      <label>Reps</label>
      <input type="text" v-model="Reps5" class="form-control">
      <label>Weight</label>
      <input type="text" v-model="Weight5" class="form-control">
      </div>
      <div class="input-group">
      <div class="input-group-prepend">
      </div>
      <label>Exercise</label>
      <input type="text" v-model="Exercise6" class="form-control">
      <label>Sets</label>
      <input type="text" v-model="Sets6" class="form-control">
      <label>Reps</label>
      <input type="text" v-model="Reps6" class="form-control">
      <label>Weight</label>
      <input type="text" v-model="Weight6" class="form-control">
      </div>
      <div class="input-group">
      <div class="input-group-prepend">
      </div>
      <label>Exercise</label>
      <input type="text" v-model="Exercise7" class="form-control">
      <label>Sets</label>
      <input type="text" v-model="Sets7" class="form-control">
      <label>Reps</label>
      <input type="text" v-model="Reps7" class="form-control">
      <label>Weight</label>
      <input type="text" v-model="Weight7" class="form-control">
      </div>
      <div class="input-group">
      <div class="input-group-prepend">
      </div>
      <label>Exercise</label>
      <input type="text" v-model="Exercise8" class="form-control">
      <label>Sets</label>
      <input type="text" v-model="Sets8" class="form-control">
      <label>Reps</label>
      <input type="text" v-model="Reps8" class="form-control">
      <label>Weight</label>
      <input type="text" v-model="Weight8" class="form-control">
      </div>
      <button type="submit" class="btn blue">Edit</button>
      <router-link to="/home" class="btn light">Cancel</router-link>
    </form>
  </div>
  </ul>
  </div>
</template>

<script>
  import db from './firebaseInit'
  import DatePicker from 'vuejs-datepicker'
  export default {
    name: 'edit-workout',
    components: {
        DatePicker
    },
    data () {
      return {
        Email: null,
        Workout: null,
          date: null,
          Exercise1: null,
          Sets1: null,
          Reps1: null,
          Weight1: null,
          Exercise2: null,
          Sets2: null,
          Reps2: null,
          Weight2: null,
          Exercise3: null,
          Sets3: null,
          Reps3: null,
          Weight3: null,
          Exercise4: null,
          Sets4: null,
          Reps4: null,
          Weight4: null,
          Exercise5: null,
          Sets5: null,
          Reps5: null,
          Weight5: null,
          Exercise6: null,
          Sets6: null,
          Reps6: null,
          Weight6: null,
          Exercise7: null,
          Sets7: null,
          Reps7: null,
          Weight7: null,
          Exercise8: null,
          Sets8: null,
          Reps8: null,
          Weight8: null
      }
    },
    beforeRouteEnter (to, from, next) {
      db.collection('workouts').where('Workout', '==', to.params.Workout).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next(vm => {
            vm.Email = doc.data().Email,
            vm.Workout = doc.data().Workout,
            vm.date = doc.data().date,
            vm.Exercise1= doc.data().Exercise1,
            vm.Sets1= doc.data().Sets1,
            vm.Reps1= doc.data().Reps1,
            vm.Weight1= doc.data().Weight1,
            vm.Exercise2= doc.data().Exercise2,
            vm.Sets2= doc.data().Sets2,
            vm.Reps2= doc.data().Reps2,
            vm.Weight2= doc.data().Weight2,
            vm.Exercise3= doc.data().Exercise3,
            vm.Sets3= doc.data().Sets3,
            vm.Reps3= doc.data().Reps3,
            vm.Weight3= doc.data().Weight3,
            vm.Exercise4= doc.data().Exercise4,
            vm.Sets4= doc.data().Sets4,
            vm.Reps4= doc.data().Reps4,
            vm.Weight4= doc.data().Weight4,
            vm.Exercise5= doc.data().Exercise5,
            vm.Sets5= doc.data().Sets5,
            vm.Reps5= doc.data().Reps5,
            vm.Weight5= doc.data().Weight5,
            vm.Exercise6= doc.data().Exercise6,
            vm.Sets6= doc.data().Sets6,
            vm.Reps6= doc.data().Reps6,
            vm.Weight6= doc.data().Weight6,
            vm.Exercise7= doc.data().Exercise7,
            vm.Sets7= doc.data().Sets7,
            vm.Reps7= doc.data().Reps7,
            vm.Weight7= doc.data().Weight7,
            vm.Exercise8= doc.data().Exercise8,
            vm.Sets8= doc.data().Sets8,
            vm.Reps8= doc.data().Reps8,
            vm.Weight8= doc.data().Weight8
          })
        })
      })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        db.collection('workouts').where('Workout', '==', this.$route.params.Workout).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.Email = doc.data().Email,
            this.Workout = doc.data().Workout,
            this.date = doc.data().date,
            this.Exercise1= this.Exercise1,
            this.Sets1= this.Sets1,
            this.Reps1= doc.data().Reps1,
            this.Weight1= doc.data().Weight1,
            this.Exercise2= doc.data().Exercise2,
            this.Sets2= doc.data().Sets2,
            this.Reps2= doc.data().Reps2,
            this.Weight2= doc.data().Weight2,
            this.Exercise3= doc.data().Exercise3,
            this.Sets3= doc.data().Sets3,
            this.Reps3= doc.data().Reps3,
            this.Weight3= doc.data().Weight3,
            this.Exercise4= doc.data().Exercise4,
            this.Sets4= doc.data().Sets4,
            this.Reps4= doc.data().Reps4,
            this.Weight4= doc.data().Weight4,
            this.Exercise5= doc.data().Exercise5,
            this.Sets5= doc.data().Sets5,
            this.Reps5= doc.data().Reps5,
            this.Weight5= doc.data().Weight5,
            this.Exercise6= doc.data().Exercise6,
            this.Sets6= doc.data().Sets6,
            this.Reps6= doc.data().Reps6,
            this.Weight6= doc.data().Weight6,
            this.Exercise7= doc.data().Exercise7,
            this.Sets7= doc.data().Sets7,
            this.Reps7= doc.data().Reps7,
            this.Weight7= doc.data().Weight7,
            this.Exercise8= doc.data().Exercise8,
            this.Sets8= doc.data().Sets8,
            this.Reps8= doc.data().Reps8,
            this.Weight8= doc.data().Weight8
          })
        })
      },
      updateWorkout () {
        db.collection('workouts').where('Workout', '==', this.$route.params.Workout).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update({
              Workout: this.Workout,
              date: this.date,
              Exercise1: this.Exercise1,
              Sets1: this.Sets1,
              Reps1: this.Reps1,
              Weight1: this.Weight1,
              Exercise2: this.Exercise2,
              Sets2: this.Sets2,
              Reps2: this.Reps2,
              Weight2: this.Weight2,
              Exercise3: this.Exercise3,
              Sets3: this.Sets3,
              Reps3: this.Reps3,
              Weight3: this.Weight3,
              Exercise4: this.Exercise4,
              Sets4: this.Sets4,
              Reps4: this.Reps4,
              Weight4: this.Weight4,
              Exercise5: this.Exercise5,
              Sets5: this.Sets5,
              Reps5: this.Reps5,
              Weight5: this.Weight5,
              Exercise6: this.Exercise6,
              Sets6: this.Sets6,
              Reps6: this.Reps6,
              Weight6: this.Weight6,
              Exercise7: this.Exercise7,
              Sets7: this.Sets7,
              Reps7: this.Reps7,
              Weight7: this.Weight7,
              Exercise8: this.Exercise8,
              Sets8: this.Sets8,
              Reps8: this.Reps8,
              Weight8: this.Weight8
            })
            .then(() => {
              this.$router.push({ name: 'view-workout', params: { Workout: this.Workout }})
            });
          })
        })
      }
    }
  }
</script>
