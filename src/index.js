const core = require('@actions/core');
const github = require('@actions/github');

(async () => {
	try {
		const repoToken = core.getInput('repo-token', { required: true });
		const daysBeforeLock = parseInt(core.getInput('days-before-lock', { required: true }));

		for (const number of [ 'days-before-lock' ]) {
			if (isNaN(parseInt(core.getInput(number)))) {
				throw new TypeError(`${number} did not parse to a valid integer`);
			}
		}

		const client = new github.GitHub(repoToken);
		const ctx = { owner: github.context.repo.owner, repo: github.context.repo.repo };

		const { data: issues } = await client.issues.listForRepo({
			...ctx,
			state: 'closed',
			page: 1,
			// eslint-disable-next-line camelcase
			per_page: 100
		});

		for (const issue of issues.values()) {
			core.debug(`Issue #${issue.number}: ${issue.title} - last updated ${issue.updated_at}`);

			const timeBeforeLock = 1000 * 60 * 60 * 24 * daysBeforeLock;
			const timeSinceUpdated = new Date().getTime() - new Date(issue.updated_at).getTime();

			if (timeBeforeLock <= timeSinceUpdated) {
				core.debug(`Locking issue #${issue.number} for inactivity after being closed`);

				client.issues.lock({
					...ctx,
					// eslint-disable-next-line camelcase
					issue_number: issue.number
				});

				continue;
			}
		}
	}
	catch (error) {
		core.error(error);
		core.setFailed(error.message);
	}
})();
