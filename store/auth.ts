import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios, $cookies } from '@/utils/nuxt-instance'

interface UserInfo {
  email: string
  password: string
}

@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {
  private token = ''
  private error = ''

  public get $token() {
    return this.token
  }

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Action
  public async index(name: string) {
    const token = await $cookies.get(name)
    this.context.commit('SET_TOKEN', token)
  }

  @Action
  public async validate({ email, password }: UserInfo) {
    const token = await $axios.post('/login')
    console.log(token)

    //$cookies.set('accessKey', token)
  }
}
