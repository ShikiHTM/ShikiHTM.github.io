window.addEventListener('load', function() {
	Array.from(document.querySelectorAll('button[shiki-datatype-link]').forEach(btn => {
		btn.onclick = () => window.location.href = btn.getAttribute('shiki-datatype-link')
	}))
})
