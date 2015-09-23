export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  name: 'welcome',      moduleId: 'app/welcome/welcome.ts',         nav: true, title:'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'app/users/users.ts',             nav: true, title:'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'app/child-router/child-router.ts',nav: true, title:'Child Router' }
    ]);

    ]);

    this.router = router;
  }
}
