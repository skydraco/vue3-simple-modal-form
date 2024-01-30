
# Simple Modal Form

Simple modal form based on Vue 3 and Vuex 4 for adding custom content

## Installation

Install @ubrand/simple-modal-form-vue3 with npm

```bash
  npm install @ubrand/simple-modal-form-vue3
```
or using yarn
```bash
 yarn add @ubrand/simple-modal-form-vue3
```
    
### Browser
Include the script file, e.g.:
### Module
```js
import { SimpleModal } from '@ubrand/simple-modal-form-vue3';
import '@ubrand/simple-modal-form-vue3/dist/style.css';
import { useStore } from 'vuex'

const store = useStore();
```
## Settings
Import modal form states:
```js
import { createStore } from 'vuex';
import SimpleModalStore from '@ubrand/simple-modal-form-vue3/dist/storage';

const store = createStore({
    modules: {
        ...
        modal: SimpleModalStore
    }
});
```
## Using
Once installed, it can be used in a template as simply as:
```vue
<SimpleModal>
    <div class="my-class">
        Hellow, world!
    </div>
</SimpleModal>
```
```vue
<button @click="store.commit('modal/CALL_MODAL', true)">
    Open modal window
</button>
```