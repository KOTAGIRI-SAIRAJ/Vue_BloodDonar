<template>
  <div id="app">
    <b-jumbotron header="BLOOD DONAR" >
    </b-jumbotron>
    <b-navbar toggleable type="inverse" variant="danger">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-link class="navbar-brand" to="#">
        <span>Home Page</span>
      </b-link>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item><router-link to="/registration" class="nav-link" activeClass="active" exact>Registration</router-link></b-nav-item>
          <b-nav-item><router-link to="/datatable" class="nav-link" activeClass="active" exact>DataTable</router-link></b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
