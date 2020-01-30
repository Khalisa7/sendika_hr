import store from "@src/redux/store"
import { addArticle } from "@src/redux/actions/"

store.subscribe(() => console.log('Look ma, Redux!!'));
window.store = store
window.addArticle = addArticle