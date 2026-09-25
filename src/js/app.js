// Pomodoro + Task Manager — список задач, 
// где каждая задача запускается вместе с 
// Pomodoro-таймером
import { registerRoute, navigate, renderRoute} from './router.js';

import { initNavigation } from './navigation.js';

import { homePage } from './pages/homePage.js';
import { projectsPage } from './pages/projectsPage.js';
import { statisticsPage } from './pages/statisticsPage.js';

registerRoute('/', homePage)
registerRoute('/projects', projectsPage)
registerRoute('/statistics', statisticsPage)

initNavigation();

renderRoute();