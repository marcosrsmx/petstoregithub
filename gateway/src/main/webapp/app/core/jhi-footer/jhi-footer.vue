<template>
  
  <div id="footer" class="navbar fixed-bottom navbar-light bg-light">
    <p v-text="t$('footer')"></p>
  </div>
  <p >
    <div class="alert alert-success" v-if="authenticated">
      .<b-button v-b-modal.createCalculatorModal>+/-</b-button>
    </div>
      <!-- Modal calculator-->
  <b-modal
    ref="createCalculatorModal"
    id="createCalculatorModal"
    title="calculator"
    header-bg-variant="primary"
    header-text-variant="white"
  >
  <daic-calculator></daic-calculator>
  <template #modal-footer>
    <!--
      <b-button variant="outline-danger" @click="cancelHandler()"  >{{ $t('entity.action.cancel') }}</b-button>
      <b-button variant="primary" :disabled="!isFormValidCreate()"  @click="updateTareaHandler()" >{{ $t('entity.action.confirm') }}</b-button>
    -->
  </template>
  </b-modal>
  </p>
</template>

<script lang="ts" src="./jhi-footer.component.ts"></script>
