<template>
  <div class="editor-wrapper border border-color-3 p-4 rounded-lg">
    <div class="buttons mb-4" v-if="editor">
      <span class="editor-btn" @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }">
        <strong>b</strong>
      </span>
      <span class="editor-btn" @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }">
        <em>i</em>
      </span>
      <span class="editor-btn" @click="editor.chain().focus().clearNodes().run()">clear</span>
      <span class="editor-btn" @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'is-active': editor.isActive('paragraph') }">
        p
      </span>
      <span class="editor-btn" @click="setLink(editor)" :class="{ 'is-active': editor.isActive('link') }">
        link
      </span>
      <span class="editor-btn" @click="editor.chain().focus().unsetLink().run()" :disabled="!editor.isActive('link')">
        deleteLink
      </span>
      <span class="editor-btn" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
        h1
      </span>
      <span class="editor-btn" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
        h2
      </span>
      <span class="editor-btn" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
        h3
      </span>
      <span class="editor-btn" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
        h4
      </span>
      <span class="editor-btn" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
        h5
      </span>
      <span class="editor-btn" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
        h6
      </span>
      <span class="editor-btn" @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }">
        ul
      </span>
      <span class="editor-btn" @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }">
        ol
      </span>
      <span class="editor-btn" @click="editor.chain().focus().undo().run()">undo</span>
      <span class="editor-btn" @click="editor.chain().focus().redo().run()">redo</span>
    </div>
    <editor-content
      class="bg-color-4 border border-color-3 text-color-3 text-sm rounded-lg focus:ring-color-3 focus:border-color-3 block w-full p-2.5 dark:bg-color-4 dark:border-color-3 dark:placeholder-color-3 dark:text-white dark:focus:ring-color-3 dark:focus:border-color-3"
      :value="modelValue" :editor="editor" @keyup="$emit('update:modelValue', data)" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import { setLink } from '../../helpers/setLink';

const data = ref('');
const props = defineProps({ modelValue: String });
const emit = defineEmits(['update:modelValue']);
const editor = useEditor({
  content: data.value,
  extensions: [StarterKit, Link],
  onUpdate: ({ editor }) => {
    data.value = editor.getHTML();
  },
  onCreate ({ editor }) {
    setTimeout(() => {
      data.value = props.modelValue;
      editor.commands.setContent(data.value);
    }, 300);
  }
});
</script>

<style lang="scss">
.editor-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;

  .editor-btn {
    min-width: 40px;
    cursor: pointer;
    padding: 5px;
    display: inline-block;
    border: 1px solid rgba(#0d0d0d, 0.1);
    text-align: center;
  }
}

.ProseMirror {
  border: 1px solid rgba(#0d0d0d, 0.1);
  padding: 15px;
  min-height: 250px;
  border-radius: 15px;

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 2rem 0;
  }
}

.ProseMirror-focused {
  border: 2px solid rgba(#0d0d0d, 0.1);
}
</style>