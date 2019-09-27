/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/**
 * source https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/
 * @typedef Page
 * @property {string} config.page.path
 * @property {string} config.page.matchPath
 */

/**
 * @callback CreatePage
 * @param {Page} page
 * @returns {void}
 */

/**
 * @param {Object} config
 *
 * @param {Page} config.page
 *
 * @param {Object} config.actions
 * @param {CreatePage} config.actions.createPage
 *
 * @returns {Promise<void>}
 */
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;

//   if (page.path.match(/^\/app/)) {
//     page.matchPath = '/app/*';

//     createPage(page);
//   }
// };
