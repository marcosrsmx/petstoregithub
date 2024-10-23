import LabelComponent from '@/components/label/label.vue';
import ButtonComponent from '@/components/button/button.vue';
import TareaEditComponent from '@/components/edit-Tarea/edit-Tarea.vue';
import calculatorComponent from '@/components/calculator/calculator.vue';
export function initCustomVue(vue) {
  vue.component('daic-label', LabelComponent);
  vue.component('daic-button', ButtonComponent);
  vue.component('daic-tarea-edit', TareaEditComponent);
  vue.component('daic-calculator',calculatorComponent)
}
