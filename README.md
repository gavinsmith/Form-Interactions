#1: Form label behaviour (hiding on input change)
	
##Notes
	I've accounted for disabled JS, but haven't tested at all and style
	isn't optimized for it. I don't often account for the case at all.
	
##Potential issues
	- Accessibility, is everything good?
	- Having no BG on the input to allow the label to show through means no
	BG styling... needs to apply to parent, but this is awkward.