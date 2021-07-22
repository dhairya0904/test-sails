/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

const { schedule } = require("node-schedule");
const DemoService = require("../api/services/DemoService");

module.exports.bootstrap = async function(done) {
  DemoService.scheduleJobs();
  console.log("started");
  return done();
};
