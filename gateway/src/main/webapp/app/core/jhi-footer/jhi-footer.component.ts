import { type ComputedRef, defineComponent, inject, ref  } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'JhiFooter',
  setup() {
    const authenticated = inject<ComputedRef<boolean>>('authenticated');
    return {
      t$: useI18n().t,
      authenticated,
    };
  },
});
