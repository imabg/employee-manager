<template>
    <div id="newEmployee">
        <h3>New Employee</h3>
        <div class="row">
            <form @submit.prevent = "saveEmployee" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="employee_id" required>
                        <label>Employee ID</label>
                    </div>
                </div>
                 <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="name" required>
                        <label>Employee Name</label>
                    </div>
                </div>
                 <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="dept" required>
                        <label>Employee Department</label>
                    </div>
                </div>
                 <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="position" required>
                        <label>Employee Position</label>
                    </div>
                </div>
                <button class="btn" type="submit" style="margin: 5px;">Submit</button>
                <router-link to="/" class="btn grey">Cancel</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'

export default {
    name: 'newEmployee',
    data() {
        return {
            employee_id: null,
            name: null,
            dept: null,
            position: null
        }
    },
    methods: {
        saveEmployee() {
            db.collection('employees').add({
               employee_id: this.employee_id,
               name: this.name,
               dept: this.dept,
               position: this.position 
            }) .then(decRef => {
                this.$router.push('/')
            })
        }
    }
}
</script>

