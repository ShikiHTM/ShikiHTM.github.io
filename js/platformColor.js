document.querySelectorAll('.social-link').forEach(button => {
	button.addEventListener("mouseenter", function() {
		let platform = button.getAttribute('datatype')
		let glowColor = '#ffffff'

		switch (platform) {
			case 'facebook':
				glowColor = '#4267B2'
				break
			case 'discord':
				glowColor = '#5865F2'
				break
			case 'github':
				glowColor = '#333'
				break
			case 'kofi':
				glowColor = '#ffdcf4'
				break;
		}

		button.style.boxShadow = `0 0 0 2px ${glowColor}`
	})

	button.addEventListener("mouseleave", function() {
		button.style.boxShadow = `0 0 0 1px #242424`
	})
})

