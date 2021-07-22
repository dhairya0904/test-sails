let schedule = require("node-schedule");

let DemoController = {
  demoApi: async function (req, res) {
    console.log(schedule.scheduledJobs);
    DemoService.demoCall();
  },
};

module.exports = DemoController;
