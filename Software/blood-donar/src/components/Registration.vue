<template>
  <div class="registration">
    <div class="container">
      <hr />
      <div class="row card">
        <div class="col-md-12 card-block">
          <h1 class="card-title"> Donar Registration page</h1>
          <hr />
          <form id="myForm" @submit.prevent="donarRegistration()">
            <div class="row">
              <div class="col-md-10">
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label ">First Name</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control " placeholder="First Name" v-model="registered_donar_data.firstName">
                  </div>
                  <label class="col-sm-2 col-form-label ">Last Name</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control " placeholder="Last Name" v-model="registered_donar_data.lastName">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label ">Occupation</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control " placeholder="Occupation" v-model="registered_donar_data.occupation">
                  </div>
                  <label class="col-sm-2 col-form-label ">DOB</label>
                  <div class="col-sm-4">
                    <input type="date" class="form-control " placeholder="DOB" v-model="registered_donar_data.dob">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label ">Blood Group</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control " placeholder="Blood Group" v-model="registered_donar_data.blood_group">
                  </div>
                  <label class="col-sm-2 col-form-label ">City</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control " placeholder="City" v-model="registered_donar_data.city">
                  </div>
                </div>
              </div>
            </div>
            <br>
            <br>
            <h2 class="card-title"> Personal Contact Details</h2>
            <hr />
            <div class="row">
              <div class="col-md-10">
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label ">Email</label>
                  <div class="col-sm-6">
                    <input type="email" class="form-control " placeholder="Email-Id" v-model="registered_donar_data.p_emial">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label ">Contact</label>
                  <div class="col-sm-6">
                    <input type="number" class="form-control " placeholder="Phone Number" v-model="registered_donar_data.p_phone">
                  </div>
                </div>
              </div>
            </div>
            <br><br>
            <h2 class="card-title"> Emergency Contact Details</h2>
            <hr />
            <div class="row">
              <div class="col-md-10">
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label ">Email</label>
                  <div class="col-sm-6">
                    <input type="email" class="form-control " placeholder="Email-Id" v-model="registered_donar_data.e_email">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label ">Contact</label>
                  <div class="col-sm-6">
                    <input type="number" class="form-control " placeholder="Phone Number" v-model="registered_donar_data.e_phone">
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <button type="submit" class="btn btn-success btn-lg" >Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'registration',
    data () {
      return {
        registered_donar_data: {
          Id: '',
          firstName: '',
          lastName: '',
          occupation: '',
          dob: '',
          blood_group: '',
          city: '',
          p_emial: '',
          p_phone: '',
          e_email: '',
          e_phone: '',
          recent_donar: '',
          current_date: '',
          end_date: ''
        }
      }
    },
    methods: {
      donarRegistration: function () {
        this.registered_donar_data.Id = moment().format()
        console.log(this.registered_donar_data)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
