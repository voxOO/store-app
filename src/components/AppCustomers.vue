<template>
    <div class="container">
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
</template>

<script>
export default {
  data () {
      return {
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
      }
  }
}
</script>

// Svaki kupac sadrži “id”, “firstName”, “lastName”, “email”.
// Takođe, svaki kupac sadrži i listu proizvoda koju je kupio.
