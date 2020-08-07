const path = require('path');
const fs = require('fs');

exports.onPostBuild = function () {
  fs.renameSync(path.join(__dirname, 'public'), path.join(__dirname, 'functions', 'dist'));
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const scheduleResult = await graphql(`
    query {
      allContentfulSchedule {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (scheduleResult.errors) {
    reporter.panicOnBuild(`GraphQL のクエリでエラーが発生しました`);
    return;
  }

  scheduleResult.data.allContentfulSchedule.edges.forEach(({ node }) => {
    createPage({
      path: `/schedule/${node.slug}/`,
      component: path.resolve(__dirname, `src/templates/schedule-template.js`),
      context: {
        id: node.id,
      },
    });
  });
};
