#1: Form label behaviour (hiding on input change)

##Notes
- I've accounted for disabled JS, but haven't tested at all and style
- isn't optimized for it. I don't often account for the case at all.
- works just fine on iOS - haven't tested on Android, but should be fine. Behaviour makes just as much sense on a handheld device.

##Potential issues
- Accessibility, is everything good?
- The keyup reaction isn't instant. If you type something in quickly, there's a momentary overlap. Can't think of a good way to avoid this.
- Having no BG on the input to allow the label to show through means no BG styling... needs to apply to parent, but this is awkward.


#2: Clever single-input submit button

##Notes
- Inspired by the header search on theglobeandmail.com. Theirs appears on hover, end of story, and goes a long way to bring a bit more whitespace to the header.
- Only makes sense for single-field forms - search, email subscription input, etc.
- No JS-less CSS has been written, though as usual the JS does add a class that the current CSS depends on.

##Potential issues
- Form index behaviour isn't perfect. When you tab from the input to the search button, in some browsers the focus shifts weirdly if the text input has no content (though this is certainly an edge case).