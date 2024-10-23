<template>
  <div class="container">
    <b-row>
      <b-col>
        <daic-label :title="t$('task.title')"></daic-label>
      </b-col>
      <b-col>
        <daic-button
          class="float-right"
          :name="$t('entity.action.create')"
          @confirmed="openCreateModalHandler"
          @click="clickHandler"
        ></daic-button>
      </b-col>
    </b-row>
    <b-row>
      <b-table class="text-center" :items="listaTareas" :fields="fields" head-variant="dark" show-empty>
        <template #empty="scope">
          <h4 class="text-center">{{ $t('task.messages.empty-data') }}</h4>
        </template>
        <template #head(nombre)="row">{{ $t('task.nombre') }} </template>
        <template #head(descripcion)="row">{{ $t('task.descripcion') }} </template>
        <template #head(fechaLimite)="row">{{ $t('task.fechaLimite') }} </template>
        <template #head(acciones)="row">{{ $t('task.acciones') }} </template>

        <template #cell(fechaLimite)="row">{{ row.item.fechaLimite.toLocaleDateString() }} </template>
        <template #cell(acciones)="row">
          <b-button variant="primary" class="mr-2" @click="openEditModalHandler(row.item)">{{ $t('entity.action.edit') }}</b-button>
          <b-button variant="danger" @click="openDeleteModalHandler(row.item)">{{ $t('entity.action.delete') }}</b-button>
        </template>
      </b-table>
    </b-row>
  </div>

  <!-- Crear una nueva tarea-->
  <b-modal
    ref="createTareaModal"
    id="createTareaModal"
    :title="$t('task.messages.new')"
    header-bg-variant="primary"
    header-text-variant="white"
  >
    
  <daic-tarea-edit 
    :tareaToEdit="tareaToEdit" 
    @updateT="createTareaHandler()"
    @cancelT="cancelHandler()" >
  </daic-tarea-edit>

    <template #modal-footer>
     
    </template>
    
  </b-modal>

  <!-- Editar una tarea-->
  <b-modal
    ref="editTareaModal"
    id="editTareaModal"
    :title="$t('entity.messages.edit')"
    header-bg-variant="primary"
    header-text-variant="white"
  >
  <daic-tarea-edit
    :tareaToEdit="tareaToEdit" 
    @updateT="updateTareaHandler()"
    @cancelT="cancelHandler()"
    >
</daic-tarea-edit>
<template #modal-footer>
     
    </template>
    

  </b-modal>

  <!-- Eliminar una tarea-->
  <b-modal
    ref="deleteTareaModal"
    id="deleteTareaModal"
    :title="$t('task.messages.delete')"
    header-bg-variant="primary"
    header-text-variant="white"
  >
  <daic-tarea-edit
    :tareaToEdit="tareaToEdit" 
    @updateT="deleteTareaHandler()"
    @cancelT="cancelHandler()"
    :readonly="true"
    >
</daic-tarea-edit>
    <p class="my-4 text-center">{{ $t('task.messages.confirmacion') }}</p>

    <template #modal-footer>
     
    </template>
  </b-modal>
</template>

<script lang="ts" src="./tareas.component.ts"></script>
