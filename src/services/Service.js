import Global from "@/Global";
import axios from "axios";

export default class Service {

    getCubos(){
        return new Promise((resolve) =>{
            var request = "api/cubos";
            var url = Global.urlApi + request;
            axios.get(url).then(response=>{
                resolve(response);
            })
            
        })
    }

    getMarcasCubo(marca) {
        return new Promise((resolve) => {
            let request = "api/cubos/cubosmarcas/"+ marca;
            let url = Global.urlApi + request;
            axios.get(url).then(response => {
                resolve(response);
            })

        })
    }

    // getCubosById(id){
    //     return new Promise((resolve)=>{
    //         var request="api/cubos/marcas"+id;
    //         var url=Global.urlApi+request;
    //         axios.get(url).then(response=>{
    //             resolve(response);
    //         })
    //     })
    // }


}

