<template>
  <div>
    <img src="../assets/images/home.png" alt="" />

  <table class="table table-bordered">
            <thead class="table-dark">
                <tr>
                    <th>idCubo</th>
                    <th>Nombre</th>
                    <th>Modelo</th>
                    <th>Marca</th>
                    <th>Color</th>
                    <th>Imagen</th>
                    <th>Precio</th>
                    <th>Valoración</th>
                    <th>Detalles</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cubo in cubos" :key="cubo">
                    <td>{{cubo.idCubo}}</td>
                    <td>{{cubo.nombre}}</td>
                    <td>{{cubo.modelo}}</td>
                    <td>{{cubo.marca}}</td>
                    <td>{{cubo.color}}</td>
                    <td><img :src="cubo.imagen" width="25%"></td>   
                    <td>{{cubo.precio}}</td>
                    <td>{{cubo.valoracion}}</td>
                    <td>
                        <router-link class="btn btn-primary" :to="'/comentarios/' + cubo.idCubo" routerLinkActive="router-link-active" >Detalles</router-link>
                    </td>
                </tr>
            </tbody>
        </table>

  </div>
</template>

<script>

import Service from '@/services/Service';
const service = new Service();


export default {
  name: "HomeComponent",
  data() {
    return {
      cubos: [],

      
    };
  },
mounted(){
this.loadCubos()
},

methods:{
  loadCubos(){
    service.getCubos().then(result =>{
      console.log(result)
      this.cubos = result.data;
    })
  }
}

};
</script>

<style>
img {
  width: 25%;
  height: "auto";
}
</style>