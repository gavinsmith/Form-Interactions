#1: Form label behaviour (hiding on input change)

	##Notes
	*I've accounted for disabled JS, but haven't tested at all and style
	*isn't optimized for it. I don't often account for the case at all.
	*works just fine on iOS - haven't tested on Android, but should be fine. Behaviour makes just as much sense on a handheld device.

	##Potential issues
	*Accessibility, is everything good?
	*The keyup reaction isn't instant. If you type something in quickly, there's a momentary overlap. Can't think of a good way to avoid this.
	*Having no BG on the input to allow the label to show through means no BG styling... needs to apply to parent, but this is awkward.