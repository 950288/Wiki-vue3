

export const routes = [
	{component: () => import('@/pages/home.vue'), name: 'Home', path: '/vue3/'},
	{component: () => import('@/pages/team.vue'), name: 'Team', path: '/vue3/team'},
	{component: () => import('@/pages/attributions.vue'), name: 'Attributions', path: '/vue3/attributions'},
	{component: () => import('@/pages/contribution.vue'), name: 'Contribution', path: '/vue3/contribution'},
	{component: () => import('@/pages/description.vue'), name: 'Description', path: '/vue3/description'},
	{component: () => import('@/pages/engineering.vue'), name: 'Engineering', path: '/vue3/engineering'},
	{component: () => import('@/pages/experiments.vue'), name: 'Experiments', path: '/vue3/experiments'},
	{component: () => import('@/pages/notebook.vue'), name: 'Notebook', path: '/vue3/notebook'},
	{component: () => import('@/pages/results.vue'), name: 'Results', path: '/vue3/results'},
	{component: () => import('@/pages/safety.vue'), name: 'Safety', path: '/vue3/safety'},
	{component: () => import('@/pages/software.vue'), name: 'Software', path: '/vue3/software'},
	{component: () => import('@/pages/human practices.vue'), name: 'Human Practices', path: '/vue3/human practices'},
	{component: () => import('@/pages/education.vue'), name: 'Education', path: '/vue3/education'},
	{component: () => import('@/pages/model.vue'), name: 'Model', path: '/vue3/model'}
]
export const headings = {'Home': '', 'Team': {'Team': '', 'Attributions': ''}, 'Project': {'Contribution': '', 'Description': '', 'Engineering': '', 'Experiments': '', 'Notebook': '', 'Results': ''}, 'Safety': '', 'Software': '', 'Human Practices': '', 'Awards': {'Education': '', 'Model': ''}}
