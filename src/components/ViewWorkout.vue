<template>
  <div id="view-workout">
    <ul class="collection">
     <table class="table table-fixed-header">
  <thead class="blue white-text">
    <tr>
      <th scope="col">Number</th>
      <th scope="col">Exercise</th>
      <th scope="col">Sets</th>
      <th scope="col">Reps</th>
      <th scope="col">Weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><li class="collection-item-fixed">{{Exercise1}}</li></td>
      <td> <li class="collection-item-fixed">{{Sets1}}</li></td>
      <td> <li class="collection-item-fixed">{{Reps1}}</li></td>
	<td><li class="collection-item-fixed">{{Weight1}}</li></td> 
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><li class="collection-item-fixed">{{Exercise2}}</li></td>
      <td> <li class="collection-item-fixed">{{Sets2}}</li></td>
      <td> <li class="collection-item-fixed">{{Reps2}}</li></td>
	<td><li class="collection-item-fixed">{{Weight2}}</li></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td><li class="collection-item-fixed">{{Exercise3}}</li></td>
      <td> <li class="collection-item-fixed">{{Sets3}}</li></td>
      <td> <li class="collection-item-fixed">{{Reps3}}</li></td>
	<td><li class="collection-item-fixed">{{Weight3}}</li></td>
    </tr>
	<tr>
      <th scope="row">4</th>
      <td><li class="collection-item-fixed">{{Exercise4}}</li></td>
      <td> <li class="collection-item-fixed">{{Sets4}}</li></td>
      <td> <li class="collection-item-fixed">{{Reps4}}</li></td>
	<td><li class="collection-item-fixed">{{Weight4}}</li></td>
    </tr>
	<tr>
      <th scope="row">5</th>
      <td><li class="collection-item-fixed">{{Exercise5}}</li></td>
      <td> <li class="collection-item-fixed">{{Sets5}}</li></td>
      <td> <li class="collection-item-fixed">{{Reps5}}</li></td>
	<td><li class="collection-item-fixed">{{Weight5}}</li></td>
    </tr>
	<tr>
      <th scope="row">6</th>
      <td><li class="collection-item-fixed">{{Exercise6}}</li></td>
      <td> <li class="collection-item-fixed">{{Sets6}}</li></td>
      <td> <li class="collection-item-fixed">{{Reps6}}</li></td>
	<td><li class="collection-item-fixed">{{Weight6}}</li></td>
    </tr>
	<tr>
      <th scope="row">7</th>
      <td><li class="collection-item-fixed">{{Exercise7}}</li></td>
      <td> <li class="collection-item-fixed">{{Sets7}}</li></td>
      <td> <li class="collection-item-fixed">{{Reps7}}</li></td>
	<td><li class="collection-item-fixed">{{Weight7}}</li></td>
    </tr>
	<tr>
      <th scope="row">8</th>
      <td><li class="collection-item-fixed">{{Exercise8}}</li></td>
      <td> <li class="collection-item-fixed">{{Sets8}}</li></td>
      <td> <li class="collection-item-fixed">{{Reps8}}</li></td>
	<td><li class="collection-item-fixed">{{Weight8}}</li></td>
    </tr>
  </tbody>
</table>
    </ul>
    <router-link to="/home" class="btn blue">Back</router-link>
    <button @click="deleteWorkout" class="btn light">Delete</button>
    <div class="fixed-action-btn">
      <router-link v-bind:to="{ name: 'edit-workout', params: { Workout: Workout }}" class="btn-floating btn-large blue">
        <i class="fa fa-pencil"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
  import db from './firebaseInit'
  export default {
    name: 'view-workout',
    data () {
      return {
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
      deleteWorkout () {
        if(confirm ('Are you sure?')) {
          db.collection('workouts').where('Workout', '==', this.$route.params.Workout).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.delete();
              this.$router.push('/home')
            })
          })
        }
      }
    }
  }
</script>
