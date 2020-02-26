// function for Mock API
const sleep = m => new Promise(r => setTimeout(r, m))
const categories = [
  {
    cTitle: 'Котики',
    cName: 'Котики',
    cSlug: 'cats',
    cMetaDescription: 'Мета описание',
    cDesc: 'Описание',
    cImage: 'https://source.unsplash.com/300x300/?cat,cats'
  },
  {
    cTitle: 'Собачки',
    cName: 'Собачки',
    cSlug: 'dogs',
    cMetaDescription: 'Мета описание',
    cDesc: 'Описание',
    cImage: 'https://source.unsplash.com/300x300/?dog,dogs'
  },
  {
    cTitle: 'Волчки',
    cName: 'Волчки',
    cSlug: 'wolfs',
    cMetaDescription: 'Мета описание',
    cDesc: 'Описание',
    cImage: 'https://source.unsplash.com/300x300/?wolf'
  },
  {
    cTitle: 'Бычки',
    cName: 'Бычки',
    cSlug: 'bulls',
    cMetaDescription: 'Мета описание',
    cDesc: 'Описание',
    cImage: 'https://source.unsplash.com/300x300/?bull'
  }
]

export const state = () => ({
  categoriesList: [],
  currentCategory: {}
})
export const mutations = {
  SET_CATEGORIES_LIST (state, categories) {
    state.categoriesList = categories
  },
  SET_CURRENT_CATEGORY (state, category) {
    state.currentCategory = category
  }
}
export const actions = {
  async getCategoriesList ({ commit }) {
    try {
      await sleep(1000)
      await commit('SET_CATEGORIES_LIST', categories)
    } catch (err) {
      console.log(err)
      throw new Error('Внутреняя ошибка сервера, сообщите администратору')
    }
  },
  async getCurrentCategory ({ commit }, { route }) {
    await sleep(1000)
    const category = categories.find((cat) => cat.cSlug === route.params.CategorySlug)
    await commit('SET_CURRENT_CATEGORY', category)
  }
}
