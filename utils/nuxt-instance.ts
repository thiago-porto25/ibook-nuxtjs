import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { NuxtCookies } from 'cookie-universal-nuxt'

// eslint-disable-next-line import/no-mutable-exports
let $axios: NuxtAxiosInstance
let $cookies: NuxtCookies

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}

export function initializeCookies(nuxtCookies: NuxtCookies) {
  $cookies = nuxtCookies
}

export { $axios, $cookies }
