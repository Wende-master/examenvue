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
           Marcas
          </a>
          <ul class="dropdown-menu">
            <li >
                <router-link :to="'/detallescubo/'" class="dropdown-item" >
                    
                </router-link>
            </li>
            <li v-for="marca in marcas" :key="marca">
                <router-link class="dropdown-item" :to="'/detallescubo/'+ marca">
                    {{marca}}
                </router-link> 
                </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import Service from '@/services/Service';
const service = new Service();

export default {
    name: "MenuComponent",
    data(){
        return {
          marcas: [],

        }
    },

   watch: {
    "$route.params.marca"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.loadMarcas();
        
      }
    },
  },

    mounted(){
      this.loadMarcas();
    },

    methods:{
        loadMarcas(){
       var marca = this.$route.params.marca;
       //console.log("MARCA "+marca);
       service.getMarcasCubo(marca).then(result =>{
        this.marcas= result.data;

       })
          // service.getMarcasCubo().then(result =>{
          //   console.log(result.data)
          //   this.marcas= result.data;
          // })
        }
    }
}
</script>


<style>
.img{
    width: 5%;
    height:"auto"
}
</style>