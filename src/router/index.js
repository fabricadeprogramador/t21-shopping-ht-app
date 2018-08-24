import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Produtos from '@/components/Produtos'
import Estabelecimentos from '@/components/Estabelecimentos'
import Carrinho from '@/components/Carrinho'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Hello
    },
    {
      path: '/produtos',
      name: 'Produtos',
      component: Produtos
    },
    {
      path: '/estabelecimentos',
      name: 'Estabelecimentos',
      component: Estabelecimentos
    },
    {
      path: '/carrinho',
      name: 'Carrinho',
      component: Carrinho
    }
  ]
})
