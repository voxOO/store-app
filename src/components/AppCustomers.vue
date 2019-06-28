<template>
    <div class="container">
        <div>
            <form @submit.prevent="addCustomer">
                <div class="form-group">
                    <label for="firstName">First Name:</label>
                    <input type="text" class="form-control" id="firstName" v-model="newCustomer.firstName" required/>
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name:</label>
                    <input type="text" class="form-control" id="lastName" v-model="newCustomer.lastName" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" v-model="newCustomer.email" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" type="submit">Add Customer</button>
                </div>
            </form>
        </div>
        <div>
        <h3>Customer list</h3>
        <table class="table-striped">
            <tr v-for="(customer,index) in customers" :key="index">
                <td>{{ customer.firstName }}</td>
                <td>{{ customer.lastName }}</td>
                <td>{{ customer.email }}</td>
                <td><button v-on:click = "deleteCustomer(index)">Delete Customer</button></td>
            </tr>
        </table>
        </div>
    </div>
</template>

<script>
export default {
  data () {
      return {
          newCustomer: {
              firstName: '',
              lastName: '',
              email: '',
          },
          customers: [
              {id:1,firstName:'Zoran', lastName:'Hajduk', email:'zoran@gmail.com'},
              {id:2,firstName:'Pera', lastName:'Peric', email:'peraperic@gmail.com'},
              {id:3,firstName:'Djoka', lastName:'Djokoc', email:'djoka@gmail.com'},
              {id:4,firstName:'Miroslav', lastName:'Stepanovacki', email:'stepa@gmail.com'},
          ]
      }
  },
  methods: {
      deleteCustomer (index) {
          this.customers.splice(index,1)
      },
      addCustomer () {
          this.customers.push({...this.newCustomer})
          this.newCustomer = {
              firstName: '',
              lastName: '',
              email: '',
          }
      }
  }
}
</script>

// Svaki kupac sadrži “id”, “firstName”, “lastName”, “email”.
// Takođe, svaki kupac sadrži i listu proizvoda koju je kupio.
