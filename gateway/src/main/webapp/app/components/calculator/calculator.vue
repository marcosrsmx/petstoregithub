<template>
  <div id="calculator-app">
     <div class="calculator">
      <input type="text" class="result"
               :value="result" readonly />
      <div class="buttons">
        <button class="number" 
                @click="handleClick('7')">7</button>
        <button class="number"
                @click="handleClick('8')">8</button>
        <button class="number"
                @click="handleClick('9')">9</button>
        <button class="operator"
                @click="handleOperatorClick('/')">/</button>

        <button class="number"
                @click="handleClick('4')">4</button>
        <button class="number" 
                @click="handleClick('5')">5</button>
        <button class="number"
                @click="handleClick('6')">6</button>
        <button class="operator"
                @click="handleOperatorClick('*')">*</button>

        <button class="number"
                @click="handleClick('1')">1</button>
        <button class="number"
                @click="handleClick('2')">2</button>
        <button class="number" 
                @click="handleClick('3')">3</button>
        <button class="operator" 
                @click="handleOperatorClick('-')">-</button>

        <button class="number"
                @click="handleClick('0')">0</button>
        <button class="number"
                @click="handleClick('.')">.</button>
        <button class="number" 
                @click="handleClick('00')">00</button>

        <button class="operator" 
                @click="handleOperatorClick('+')">+</button>

        <button class="clear"
                @click="handleClear">C</button>
        <button class="clear"
                @click="handleClearEntry">CE</button>
        <button class="equal"
                @click="calculate()">=</button>
      </div>
    </div>
</div>
</template>
<script lang="ts" src="./calculator.component.ts"></script>
<style  src="./calculator.css"></style>