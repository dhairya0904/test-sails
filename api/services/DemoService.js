let schedule = require("node-schedule");

module.exports = {
  demoCall: () => {
    console.log(schedule.scheduledJobs);
  },

  scheduleJobs: () => {
    console.log("scheduling jobs");
    const ONE_DAY = 1000 * 60 * 60 * 24;
    schedule.scheduleJob("DemoJob", Date.now() + ONE_DAY, () => {
      console.log("Hello world");
    });
    schedule.scheduleJob("DemoJob1", Date.now() + ONE_DAY, () => {
      console.log("Hello world");
    });
    schedule.scheduleJob("DemoJob2", Date.now() + ONE_DAY, () => {
      console.log("Hello world");
    });
    schedule.scheduleJob("DemoJob3", Date.now() + ONE_DAY, () => {
      console.log("Hello world");
    });

    console.log(schedule.scheduledJobs);
  },
};
