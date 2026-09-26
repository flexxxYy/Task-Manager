import { navigationItems } from "../navigation.js";
import { homeNavBtnComponent, initHomeNavBtn } from "../components/homeComponents/homeNavBtnComponent.js";

export function homePage() {
    return `
        <div class="home-page">
            <div class="home-page__navigation">
                ${
                    navigationItems.slice(1).map((item) => homeNavBtnComponent(item.name, item.path)).join('')
                }
            </div>  
        </div>
    `;
}

export function initHomePage() {
    initHomeNavBtn();
}