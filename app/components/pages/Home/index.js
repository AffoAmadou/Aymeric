import Page from "classes/Page";

export default class Home extends Page {

    constructor() {
        super({
            id: 'home',
            element: '.home',
            elements: {
                // navigation: document.querySelector('.navigation'),
                title: '.home__title',
                // links: '.home__gallery__link',
                // article_title: '.home__article__title',
                description: '.home__position',
                 wrapper:'.home__wrapper'

            }
        })
    }

    create() {
        super.create()

        // this.elements.links[0].addEventListener('click', _ => console.log('OH YOU CLICKED'))
    }
}