angular.module('happyApp', [])
    /* Diary (i.e. web log ... or blog for short)*/
    .component('blog', {
        template: `
            <aside>
                <h4>Mr. Happy's Lil' Diary:</h4>
                <ul>
                    <li ng-repeat="item in $ctrl.list"><time datetime="">{{item.date.toLocaleDateString()}}</time> - {{item.description}}</li>
                </ul>		
            </aside>`,
        controller: function blogController(){
            this.list = [{
                date: '1995-12-10',
                description: 'The Happy Page undergoes a major facelift for the Christmas season. New features are improved links, improved search indexes, an easy-to-use BBS form (to replace the old Email format), and other neato stuff.'
            },
            {
                date: '1995-11-11',
                description: 'Updated the Happy Page pictures and pages'
            },
            {
                date: '1995-11-07',
                description: 'Added the Happy Page Poetry Corner!'
            },
            {
                date: '1995-11-06',
                description: 'The Happy Page went online at 6:05 PST!'
            }];
            /* Format date into a real Date */
            for (item of this.list) {
                item.date = new Date(item.date);
            }            
        }
    })
    /* Main Menu */
    .component('mainMenu', {
        template: `
            <nav>
                <dl>
                    <dt ng-repeat-start="item in $ctrl.list">
                        <img ng-src="images/{{item.icon}}.gif">
                            <span>{{ item.title }}</span>
                        <img ng-src="images/{{item.icon}}.gif">
                    </dt>
                    <dd ng-repeat-end="item in $ctrl.list">{{ item.description }}</dd>
                </dl>
            </nav>`,
        controller: function mainMenuController() {
            this.list = [{
                    icon: 'email',
                    title: 'E-Mail to Mr. Happy',
                    description: 'Drop Mr. Happy a line or two.'
                },
                {
                    icon: 'bullet',
                    title: 'Poetry Corner',
                    description: "Read various selected poems from Mr. Happy's archives."
                },
                {
                    icon: 'chat',
                    title: 'Who Is Mr. Happy?',
                    description: 'Find out about the real life of Mr. Happy.'
                },
                {
                    icon: 'wwg',
                    title: 'The j Page',
                    description: 'The J Page. Coming 12-15-95.'
                },
                {
                    icon: 'html',
                    title: 'The Happy Page Chat Board',
                    description: 'Chat with other visitors of The Happy Page.'
                },
                {
                    icon: 'scroll',
                    title: "Sven's World",
                    description: 'Visit Norvay with Sven Svensen, the janitor.'
                },
                {
                    icon: 'jpage',
                    title: "The Who/What Game",
                    description: 'Play the only decent game on the Internet.'
                },
                {
                    icon: 'flag',
                    title: 'Links To Other Web Sites',
                    description: "Links to Mr. Happy's favorite places on the Internet."
                },
                {
                    icon: 'link',
                    title: 'The Web Kitchen',
                    description: 'Grab the stuff you need to cook up your own web page.'
                },
                {
                    icon: 'search',
                    title: 'Search Engines',
                    description: 'Find anything you want on the Internet.'
                }
            ];
        }
    });