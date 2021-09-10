import { Module, VuexModule } from 'vuex-module-decorators'

@Module
export default class Books extends VuexModule {
  books = ['livro 1', 'livro 2']
}
