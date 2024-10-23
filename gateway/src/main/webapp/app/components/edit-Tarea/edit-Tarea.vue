<template>

<b-card class="border-0">
      <b-form-group
        :label="$t('task.nombre')"
        label-for="nombre-id"
        :state="isNombreValid()"
        :invalid-feedback="$t('task.validate.nombre')"
      >
        <b-form-input
          id="nombre-id"
          :state="isNombreValid()"
          v-model="tareaToEdit.nombre"
          :disabled="readonly"
          :placeholder="$t('task.messages.nombrePlaceholder')"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        :label="$t('task.descripcion')"
        label-for="description-id"
        :state="isDescripcionValid()"
        :invalid-feedback="$t('task.validate.descripcion')"
      >
        <b-form-textarea
          id="description-id"
          :state="isDescripcionValid()"
          :disabled="readonly"
          v-model="tareaToEdit.descripcion"
          :placeholder="$t('task.messages.descripcionPlaceholder')"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group
        :label="$t('task.fechaLimite')"
        label-for="deadline-id"
        :state="isDateValid()"
        :invalid-feedback="$t('task.validate.fechaLimite')"
      >
        <b-form-datepicker
          id="deadline-id"
          :state="isDateValid()"
          :disabled="readonly"
          v-model="tareaToEdit.fechaLimite"
          value-as-date
          locale="es"
        ></b-form-datepicker>
      </b-form-group>

    </b-card>


<section>
  <b-button variant="outline-danger" @click="$emit('cancelT')">{{ $t('entity.action.cancel') }}</b-button>
      <b-button variant="primary" :disabled="!isFormValid()" @click="$emit('updateT')">{{ $t('entity.action.confirm') }}</b-button>

    <!--  <b-button variant="outline-danger" @click="clicMaster()">{{ $t('entity.action.cancel') }}</b-button>
      <b-button variant="primary" :disabled="!isFormValid()" @click="clicMaster()">{{ $t('entity.action.confirm') }}</b-button>
-->
</section>
  
</template>

<script lang="ts" src="./edit-Tarea-component.ts"></script>