<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount,  defineProps } from "vue";

const props = defineProps<{
  textArray: string[];
  typingSpeed?: number; 
  pauseBetweenTexts?: number; 
  loop?: boolean; 
}>();

const displayedText = ref("");
const showCursor = ref(true);

const defaultTypingSpeed = props.typingSpeed || 100; 
const pauseBetweenTexts = props.pauseBetweenTexts || 2000; 
const loop = props.loop ?? true;

let currentIndex = 0;
let typingInterval: number | null = null;
let cursorInterval: number | null = null;

const typeText = async (text: string) => {
  displayedText.value = "";
  for (const char of text) {
    displayedText.value += char;
    await new Promise((resolve) => setTimeout(resolve, defaultTypingSpeed));
  }
};

const startTyping = async () => {
  while (currentIndex < props.textArray.length) {
    await typeText(props.textArray[currentIndex]);
    await new Promise((resolve) => setTimeout(resolve, pauseBetweenTexts));
    currentIndex++;
    if (loop && currentIndex === props.textArray.length) {
      currentIndex = 0;
    }
  }
};

onMounted(() => {
  startTyping();
  cursorInterval = window.setInterval(() => {
    showCursor.value = !showCursor.value;
  }, 500);
});

onBeforeUnmount(() => {
  if (typingInterval) clearInterval(typingInterval);
  if (cursorInterval) clearInterval(cursorInterval);
});
</script>

<template>
  <div>
    <span ref="textElement" :style="{ whiteSpace: 'pre' }">{{ displayedText }}</span>
    <span v-if="showCursor" class="cursor">|</span>
  </div>
</template>

<style scoped>
.cursor {
  display: inline-block;
  width: 8px;
  height: 1.2em;
  background-color: black;
  vertical-align: text-bottom;
  animation: blink 1s steps(2, start) infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
