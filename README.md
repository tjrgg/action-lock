<h1 align="center">
	action-lock
</h1>

<h3 align="center">
	An action that locks inactive closed issues and pull requests.
</h3>

<p align="center">
	<a href="https://github.com/tjrgg/action-lock/fork">
		<img alt="GitHub Forks" src="https://img.shields.io/github/forks/tjrgg/action-lock?label=Fork&style=social" />
	</a>
	<a href="https://github.com/tjrgg/action-lock">
		<img alt="GitHub Stars" src="https://img.shields.io/github/stars/tjrgg/action-lock?label=Star&style=social" />
	</a>
	<a href="https://github.com/tjrgg/action-lock/subscription">
		<img alt="GitHub Watchers" src="https://img.shields.io/github/watchers/tjrgg/action-lock?label=Watch&style=social" />
	</a>
	<br />
	<img alt="Issues" src="https://img.shields.io/github/issues/tjrgg/action-lock?cacheSeconds=86400" />
	<img alt="Pull Requests" src="https://img.shields.io/github/issues-pr/tjrgg/action-lock?cacheSeconds=86400" />
	<img alt="Size" src="https://img.shields.io/github/repo-size/tjrgg/action-lock?cacheSeconds=86400&label=size" />
	<br />
	<a href="https://twitter.com/tjrgg">
		<img alt="Twitter" src="https://img.shields.io/twitter/follow/tjrgg?style=social" />
	</a>
</p>


## Usage

```yml
name: "Lock"

on:
  schedule:
    - cron: "0 0 * * *"

jobs:
  stale:
    runs-on: ubuntu-latest
    steps:
      - uses: tjrgg/action-lock@master
        with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
          days-before-lock: "60"
```


## Author

👤 **Tyler Richards**

* GitHub: [@tjrgg](https://github.com/tjrgg)
* Twitter: [@tjrgg](https://twitter.com/tjrgg)


## License

Copyright © 2020 Tyler Richards. All rights reserved.

This project is released under the [Apache License, version 2.0](LICENSE.md).
