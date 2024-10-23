import { defineComponent, ref } from 'vue';

export default defineComponent({
  compatConfig: { MODE: 3, COMPONENT_V_MODEL: false },
  name: 'CalculatorComponent',
  props: {
    
  },
  setup() {
    const result=ref();
    const calculated=false;
    
    return {
        result,
        calculated,
     }
  },
  methods: {
    handleClick(value) {
      if (this.calculated) {
        // If calculation has been done, 
        // start a new expression
        this.result = value;
        this.calculated = false; // Reset flag
      } else {
        this.result += value;
      }
    },
    handleClear() {
      this.result = '';
      this.calculated = false; // Reset flag
    },
    handleClearEntry() {
      if (this.result && this.result.length > 0) {
        this.result = this.result.slice(0, -1);
        if (this.result.length === 0) {
          this.handleClear();
        }
      } else {
        this.handleClear();
      }
    },
    handleOperatorClick(operator) {
      // If the last character is an operator, 
      // replace it with the new operator
      if (/[+*/-]$/.test(this.result)) {
        this.result = this.result.slice(0, -1) + operator;
      } else {
        // Otherwise, add the new operator
        this.result += operator;
      }
      this.calculated = false; // Reset flag
    },
    calculate() {
      try {
        let evaluatedResult = eval(this.result.
            replace(/(^|[^0-9])0+(\d+)/g, '$1$2'));
        if (evaluatedResult === Infinity ||
            evaluatedResult === -Infinity) {
          throw new Error('Divide by zero error');
        }
        this.result = Number.isFinite(evaluatedResult)
                      ? evaluatedResult : 'Error';
        this.calculated = true;
        // Set flag to true after calculation
      } catch (error) {
        if (error.message === 'Divide by zero error') {
          this.result = 'Error: Divide by zero';
        } else {
          this.result = 'Error';
        }
      }
    },
  },
});