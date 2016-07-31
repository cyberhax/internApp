/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Job from '../api/job/job.model';
import Company from '../api/company/company.model';

// Company.find({}).remove()
//     .then(()=>{
//    Company.create({
//      name: 'ipg',
//      description: 'this is ipg company',
//      website:'google.com',
//      active: true
//    },{
//      name: 'exact',
//      description: 'this is exact company',
//      website:'exact.com',
//      active: true
//    }, {
//        name: 'shell',
//        description: 'this is exact company',
//        website:'exact.com',
//        active: true
//    })
//    .then(()=>{
//       console.log('finsni company create');
//    });
// });

Job.find({}).remove()
  .then(()=>{
    Job.create({
      name: 'programmer',
      description: 'Do some c# stuff',
      salary:1000,
      company:'ipg',
      active: true
    },{
        name: 'tester',
        description: 'Do some node# stuff',
        salary:1000,
        company:'shell',
        active: true
    },{
        name: 'makan',
        description: 'jalan2 cari makan',
        salary:1000,
        company:'lala',
        active: true
    },{
        name: 'animator',
        description: 'unity3d',
        salary:1000,
        company:'studio',
        active: true
    },{
        name: 'sysadmin',
        description: 'linux config',
        salary:101234,
        company:'deloitte',
        active: true
    })
    .then(()=>{
        console.log('FInish job cretae');
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
    },{
        provider: 'local',
        role: 'company',
        name: 'shell',
        email: 'shell@example.com',
        password: 'shell'
    },{
        provider: 'local',
        role: 'company',
        name: 'lala',
        email: 'lala@example.com',
        password: 'lala'
    },{
        provider: 'local',
        role: 'company',
        name: 'studio',
        email: 'studio@example.com',
        password: 'studio'
    },{
        provider: 'local',
        role: 'company',
        name: 'deloitte',
        email: 'deloitte@example.com',
        password: 'deloitte'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });


