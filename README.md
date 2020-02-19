# eslint-plugin-forbidden-package
DO NOT IMPORT THAT WHICH IS... *FORBIDDEN*.

An eslint plugin (really, just a rule) for explicitly yelling when someone imports blacklisted libraries/packages directly. Now when people import `xDate` directly, instead of a wrapped/abstracted library, you can yell at 'em. This is hacky. It's set up to not do anything without settings.

Usage like so: *(pretend you're in an `.eslintrc`)*

```javascript
{
	"plugins": ["forbidden-package"],
	"rules": {
		"forbidden-package/no-forbidden-package":["error", ["moment", "immutable", "xDate", "styled-components"]]
	}
}
```

On the future todo list -- get this ready to warn/error separately.
