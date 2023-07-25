import { RouteLocationRaw, NavigationFailure } from '.nuxt/vue-router'

export type ExecuteMethodType = (
  url?: string
) =>
  | false
  | void
  | RouteLocationRaw
  | Promise<false | void | NavigationFailure | void>

export interface IMenuOverlayItems {
  name: string
  icon: string
  method: ExecuteMethodType
  url?: Url
}
