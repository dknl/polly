
CSS_C=sassc
CSS_SRC=./sass/main.scss
CSS_OUT=./web/core.css
CSS_FLAGS= -t compact

watch:
	watchman-make -p 'sass/**/*.scss' -t sassy -p 'src/**/*.js' 'Makefile*' -t rollup

publish:
	rollup -c config.build.js
	rollup -c config.build.min.js

sassy:
	$(CSS_C) $(CSS_FLAGS) $? $(CSS_SRC) $(CSS_OUT)

rollup:
	rollup -c config.react.js

transpile:
	babel src -d web/lib --presets react

pack:
	zip -r template.zip dist/
