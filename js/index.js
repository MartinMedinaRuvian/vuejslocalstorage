new Vue({

    el:'#app',

  data:{
  titulo:'Practica 1 CRUD localstorage',
  tareas:[],
  nueva_tarea:'',
  color_fondo_tarea :'',
  color_boton:'',
  precio:0
    },

    methods: {

        agregar(){
         if(this.nueva_tarea.length > 0){
          this.tareas.push({descripcion: this.nueva_tarea, estado:false})
          this.nueva_tarea = '';
          localStorage.setItem('tareas', JSON.stringify(this.tareas));
         }
        },

        editar(index){
          (this.tareas[index].estado) ? this.tareas[index].estado = false : this.tareas[index].estado = true; 
          localStorage.setItem('tareas', JSON.stringify(this.tareas));
        },

        eliminar(index){
          this.tareas.splice(index, 1);
          localStorage.setItem('tareas', JSON.stringify(this.tareas));
        }
        
    },

    created() {
      let datos_local = JSON.parse(localStorage.getItem('tareas'));
      if(datos_local === null){
        this.tareas = [];
      }else{
        this.tareas = datos_local;
      }
    },

})