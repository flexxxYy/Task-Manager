// Pomodoro + Task Manager — список задач, 
// где каждая задача запускается вместе с 
// Pomodoro-таймером
import { registerRoute, navigate, renderRoute} from './router.js';

import { initNavigation } from './navigation.js';

import { homePage, initHomePage } from './pages/homePage.js';
import { projectsPage, initProjectsPage } from './pages/projectsPage.js';
import { statisticsPage } from './pages/statisticsPage.js';
import { pomodoroPage } from './pages/pomodoroPage.js'

registerRoute(
    '/', 
    homePage,
    initHomePage
)
registerRoute(
    '/projects',
    projectsPage,
    initProjectsPage
);
registerRoute(
    '/statistics', 
    statisticsPage
)
registerRoute(
    '/pomodoro',
    pomodoroPage
)

initNavigation();

renderRoute();