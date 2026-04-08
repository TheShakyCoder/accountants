<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import EasyMDE from 'easymde';
import 'easymde/dist/easymde.min.css';

const props = defineProps({
    modelValue: { type: String, default: '' },
});

const emit = defineEmits(['update:modelValue']);

const textarea = ref(null);
let editor = null;

onMounted(() => {
    editor = new EasyMDE({
        element: textarea.value,
        initialValue: props.modelValue,
        spellChecker: false,
        autofocus: false,
        status: false,
        toolbar: [
            'bold', 'italic', 'heading', '|',
            'quote', 'unordered-list', 'ordered-list', '|',
            'link', '|',
            'preview', 'side-by-side', 'fullscreen', '|',
            'guide',
        ],
        previewClass: ['editor-preview', 'prose', 'prose-warm', 'max-w-none'],
    });

    editor.codemirror.on('change', () => {
        emit('update:modelValue', editor.value());
    });
});

// Keep editor in sync if parent resets the form
watch(() => props.modelValue, (val) => {
    if (editor && editor.value() !== val) {
        editor.value(val);
    }
});

onBeforeUnmount(() => {
    if (editor) {
        editor.toTextArea();
        editor = null;
    }
});
</script>

<template>
    <textarea ref="textarea"></textarea>
</template>

<style>
/* Integrate EasyMDE into the site design */
.EasyMDEContainer .CodeMirror {
    border: 1px solid #e7e5e4; /* warm-200 */
    border-radius: 0 0 0.75rem 0.75rem;
    border-top: none;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.875rem;
    min-height: 280px;
    color: #1c1917; /* warm-900 */
    background: #fff;
}
.EasyMDEContainer .CodeMirror:focus-within {
    outline: none;
    box-shadow: 0 0 0 2px #4ade80; /* brand-400 */
}
.EasyMDEContainer .editor-toolbar {
    border: 1px solid #e7e5e4;
    border-radius: 0.75rem 0.75rem 0 0;
    background: #fafaf9; /* warm-50 */
    opacity: 1;
}
.EasyMDEContainer .editor-toolbar button {
    color: #78716c; /* warm-500 */
}
.EasyMDEContainer .editor-toolbar button:hover,
.EasyMDEContainer .editor-toolbar button.active {
    background: #f5f5f4; /* warm-100 */
    border-color: #e7e5e4;
    color: #15803d; /* brand-700 */
}
.EasyMDEContainer .editor-toolbar i.separator {
    border-color: #e7e5e4;
}
.EasyMDEContainer .editor-preview {
    background: #fff;
    font-size: 0.875rem;
    color: #44403c;
    line-height: 1.7;
}
</style>
