import { Tarea } from '@/shared/model/tarea.model';
import { defineComponent } from 'vue';

export default defineComponent({
  compatConfig: { MODE: 3, COMPONENT_V_MODEL: false },
  emits:['cancelT', 'updateT'],
  name: 'TareaEditComponen',
  props: {
    tareaToEdit : {
      type: Tarea,
      default: new Tarea()
  
  },
  readonly : {
    type : Boolean,
    default: function () {
               return false;
              },
   },

},
  setup() {},
  methods: {
   
    clicMaster(){
    this.$emit('updateT');
    this.$emit('cancelT');
    },

    
      isNombreValid(): boolean {
        if (this.tareaToEdit?.nombre?.length) {
          return this.tareaToEdit.nombre.length >= 3 && this.tareaToEdit.nombre.length <= 50;
        }
        return false;
      },
      isDescripcionValid(): boolean {
        if (this.tareaToEdit?.descripcion?.length) {
          return this.tareaToEdit.descripcion.length >= 3 && this.tareaToEdit.descripcion.length <= 100;
        }
        return false;
      },
      isDateValid(): boolean {
        if (this.readonly){ return true; }
        if (this.tareaToEdit?.fechaLimite) {
          const now = new Date();
          const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          const current = new Date(
            this.tareaToEdit.fechaLimite.getFullYear(),
            this.tareaToEdit.fechaLimite.getMonth(),
            this.tareaToEdit.fechaLimite.getDate(),
          );
          return current >= today;
        }
        return false;
      },
      isFormValid(): boolean {
        if(this.isNombreValid() && this.isDescripcionValid() && this.isDateValid()){
          console.log('Forma Valida');
        }else{
          console.log('Forma Invalida');
  
        }
        
        return this.isNombreValid() && this.isDescripcionValid() && this.isDateValid();
      },

  },

});
