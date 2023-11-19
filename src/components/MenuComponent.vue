<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">

        <img src="../assets/images/home.png" class="img">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
         <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/create">Nuevo</router-link>
        </li> 
         <!-- <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/modificar">Editar</router-link>
        </li>  -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Series
          </a>
          <ul class="dropdown-menu">
            <li >
                <router-link to="/" class="dropdown-item" >
                    Home
                </router-link>
            </li>
            <!-- <li v-for="serie in series" :key="serie">
                <router-link class="dropdown-item" :to="'/detalles/'+ serie.idSerie">
                    {{serie.nombre}}
                </router-link> 
                </li> -->
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: "MenuComponent",
    data(){
        return {

        }
    },

    mounted(){

    },

    methods:{
        
    }
}
</script>


<style>
.img{
    width: 5%;
    height:"auto"
}
</style>