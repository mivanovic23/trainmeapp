<template>
  <div id="new-workout" >
    <ul class="collection with-header">
      <li class="collection-header"><h4>New Workout</h4></li>
    <div class="row" >
    <form v-on:submit.prevent="saveWorkout" class="collection-item">
      <div class="row">
        <div class="input-field">
          <input type="text" v-model="Workout" required>
          <label>Workout: </label>
        </div>
      </div>
      <div class="row">
        <label>Date: </label>
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
      <button type="submit" class="btn">Log your workout</button>
      <router-link to="/" class="btn grey">Cancel</router-link>
    </form>
    </div>
    </ul>
  </div>

</template>

<script>
    import db from './firebaseInit'
    import DatePicker from 'vuejs-datepicker'
    import store from '@/store.js'
    export default {
      name: 'new-workout',
      components: {DatePicker},
        data () {
        return {
          store,
          Workout: null,
          date: '',
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
      methods: {
        saveWorkout () {
          db.collection('workouts')
          .add({
            email: store.userEmail,
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
            Weight8: this.Weight8,
          })
          .then(docRef => {
            console.log('Client added: ', docRef.id)
            this.$router.push('/home')
          })
          .catch(error => {
            console.error('Error adding workout: ', error)
          })
        }
      }
    }
</script>