/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createView('user_info_view', (view) => {
		view.columns(['user_id', 'email', 'followers', 'following']);
		view.as(knex.raw('select users.id, users.email, count(followers_view.followers), count(following_view.following) from users left join followers_view on users.id = followers_view.user_id left join following_view on users.id = following_view.user_id;'))
	})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};