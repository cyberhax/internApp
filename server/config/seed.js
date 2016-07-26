/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Job from '../api/job/job.model';
import Company from '../api/company/company.model';

Company.find({}).remove()
    .then(()=>{
   Company.create({
     name: 'ipg',
     description: 'this is ipg company',
     website:'google.com',
     active: true  
   },{
     name: 'exact',
     description: 'this is exact company',
     website:'exact.com',
     active: true  
   })
   .then(()=>{
      console.log('finsni company create'); 
   });
});

Job.find({}).remove()
  .then(()=>{
    Job.create({
      name: 'programmer',
      description: 'Do some c# stuff',
      salary:1000,
      company:'ipg',
      active: Boolean  
    })
    .then(()=>{
        console.log('FInish job cretae');
    });
    
});


Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    },{
      provider: 'local',
      role: 'company',
      name: 'ipg',
      email: 'company@example.com',
      password: 'company'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });


