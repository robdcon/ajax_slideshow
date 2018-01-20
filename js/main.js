var $ = require('jquery-browserify')
var slideshow = require('./slideshow')()

// Bind event handlers to provide the slideshow functionality

$('#next').click(function()
{
	slideshow.next()
})

$('#prev').click(function()
{
	slideshow.prev()
})

// Bind event handlers to set up slideshow

$('#graphic_design').click(function()
{
	var key = this.id
	slideshow.init(key)
})

$('#artwork').click(function()
{
	var key = this.id
	slideshow.init(key)
})

// Fade in slideshow

$('#slideshow-display').click(function()
{
	$('#slideshow').fadeIn(500, function()
	{
		$('#slide-container').fadeIn(500)
	})
})
$('#close').click(function()
{
	$('#slideshow').fadeOut(500, function()
	{
		$('#slide-container').fadeOut(500)
	})
})



















